import { ConvexHttpClient } from "convex/browser";

const url = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!url) {
  throw new Error(
    "NEXT_PUBLIC_CONVEX_URL is not set. The website depends on mutav-app's Convex deployment for waitlist signups. Set this in .env.local (and in the Vercel project's env vars).",
  );
}

// Server-side HTTP client. Used from Server Actions only; client components
// don't need a Convex provider for this website yet (no live subscriptions).
export const convexClient = new ConvexHttpClient(url);
