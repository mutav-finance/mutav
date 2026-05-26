import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en"],
  defaultLocale: "pt-BR",
  // pt-BR is canonical at `/`; en lives at `/en`. Investor copy is currently
  // en-only; pt-BR.json is a copy of en.json pending translation.
  localePrefix: "as-needed",
});
