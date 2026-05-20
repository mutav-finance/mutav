"use server";

// Waitlist Server Action — stub for the first commit.
// Real backend (Resend + Vercel KV) wired in a follow-up PR.
// Returns a discriminated union so the client can match on `code` for fix-004.

export type Audience = "imobiliaria" | "investidor";

export type WaitlistResult =
  | { ok: true }
  | {
      ok: false;
      code: "INVALID" | "DUPLICATE" | "RATE_LIMITED" | "SERVER_ERROR";
    };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  // Honeypot — bots fill hidden fields, humans don't
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { ok: true }; // silently drop
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const audience = String(formData.get("audience") ?? "");

  if (!EMAIL_RE.test(email)) {
    return { ok: false, code: "INVALID" };
  }
  if (audience !== "imobiliaria" && audience !== "investidor") {
    return { ok: false, code: "INVALID" };
  }

  // TODO: persist to Resend audience + Vercel KV — see brief/install-manifest.md
  // For the first commit this is a stub that always succeeds for valid input.
  // To exercise the error branches in dev, set MUTAV_WAITLIST_FORCE to one of:
  // "duplicate" | "rate-limit" | "server-error".
  const force = process.env.MUTAV_WAITLIST_FORCE;
  if (force === "duplicate") return { ok: false, code: "DUPLICATE" };
  if (force === "rate-limit") return { ok: false, code: "RATE_LIMITED" };
  if (force === "server-error") return { ok: false, code: "SERVER_ERROR" };

  // Log for dev visibility — remove or replace when wiring real backend.
  if (process.env.NODE_ENV !== "production") {
    console.info("[waitlist:stub]", { email, audience });
  }

  return { ok: true };
}
