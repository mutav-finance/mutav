import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match every path except: api routes, Next internals, and static asset extensions
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
