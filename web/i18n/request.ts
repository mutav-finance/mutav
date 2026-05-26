import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Load every messages/{locale}/*.json file as a namespace.
// Filename (without extension) becomes the namespace key.
// Files starting with `_` are ignored (e.g. _translation-status.json).
function loadMessages(locale: string): Record<string, unknown> {
  const dir = join(process.cwd(), "messages", locale);
  const merged: Record<string, unknown> = {};
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".json") || file.startsWith("_")) continue;
    const namespace = file.slice(0, -".json".length);
    merged[namespace] = JSON.parse(readFileSync(join(dir, file), "utf-8"));
  }
  return merged;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: loadMessages(locale),
  };
});
