"use server";

import { headers } from "next/headers";
import { anyApi } from "convex/server";
import { convexClient } from "@/lib/convex";

/**
 * Waitlist Server Action — bridges the form's `useFormState` API to the
 * Convex `waitlist:join` mutation on the mutav-app backend.
 *
 * The mutation handles dedup, validation, and the Resend audience sync;
 * this action just collects request context (IP, UA, referer) and maps
 * the Convex Result shape to a client-friendly discriminated union.
 *
 * Dev FORCE hooks (`MUTAV_WAITLIST_FORCE`) bypass the network call so the
 * client error-state UI can be exercised without polluting the dev backend.
 */

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
    return { ok: true };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const audience = String(formData.get("audience") ?? "");

  // Cheap client-friendly validation; Convex re-validates server-side.
  if (!EMAIL_RE.test(email)) {
    return { ok: false, code: "INVALID" };
  }
  if (audience !== "imobiliaria" && audience !== "investidor") {
    return { ok: false, code: "INVALID" };
  }

  // Dev hooks — exercise client error UI without backend calls.
  const force = process.env.MUTAV_WAITLIST_FORCE;
  if (force === "duplicate") return { ok: false, code: "DUPLICATE" };
  if (force === "rate-limit") return { ok: false, code: "RATE_LIMITED" };
  if (force === "server-error") return { ok: false, code: "SERVER_ERROR" };

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    undefined;
  const ua = headersList.get("user-agent") ?? undefined;
  const referer = headersList.get("referer") ?? undefined;

  // Untyped reference because the website doesn't ship the mutav-app
  // codegen. The function path matches `convex/waitlist/useCases.ts → join`.
  const joinMutation = anyApi.waitlist.useCases.join;

  type ConvexResult =
    | { success: true; data: { waitlistId: string; alreadyOnList: boolean }; message: string }
    | {
        success: false;
        error: { code: "INVALID_EMAIL" | "DUPLICATE" | "SERVER_ERROR" };
        message: string;
      };

  try {
    const result = (await convexClient.mutation(joinMutation, {
      email,
      audience,
      ip,
      ua,
      referer,
    })) as ConvexResult;

    if (result.success) {
      return { ok: true };
    }
    if (result.error.code === "INVALID_EMAIL") {
      return { ok: false, code: "INVALID" };
    }
    if (result.error.code === "DUPLICATE") {
      return { ok: false, code: "DUPLICATE" };
    }
    return { ok: false, code: "SERVER_ERROR" };
  } catch (e) {
    console.error("[waitlist] Convex mutation failed:", e);
    return { ok: false, code: "SERVER_ERROR" };
  }
}
