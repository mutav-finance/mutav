"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import {
  joinWaitlist,
  type Audience,
  type WaitlistResult,
} from "@/app/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ErrorCode = Extract<WaitlistResult, { ok: false }>["code"];

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <div className="mt-6 flex flex-col">
      <Button
        type="submit"
        disabled={pending}
        aria-disabled={pending}
        variant="investidor"
        size="lg"
        className="w-full sm:w-auto"
      >
        {label}
      </Button>
      {pending && (
        <p className="mt-2 font-mono text-xs text-text-2" aria-hidden>
          {pendingLabel}
        </p>
      )}
    </div>
  );
}

async function action(
  _prev: WaitlistResult | null,
  formData: FormData,
): Promise<WaitlistResult> {
  return await joinWaitlist(formData);
}

export function WaitlistForm({ audience }: { audience: Audience }) {
  const t = useTranslations("waitlist");
  const [state, formAction, isPending] = useActionState<
    WaitlistResult | null,
    FormData
  >(action, null);

  if (state?.ok) {
    return (
      <p
        role="status"
        aria-live="polite"
        className="font-mono text-base-sm leading-relaxed text-text"
      >
        {t(`success.${audience}`)}
      </p>
    );
  }

  const errorCode: ErrorCode | null =
    state && !state.ok ? state.code : null;
  const errorMessage = errorCode
    ? t(`error.${errorCode}.${audience}`)
    : null;

  return (
    <form
      action={formAction}
      aria-busy={isPending}
      className="max-w-md"
      noValidate
    >
      <input type="hidden" name="audience" value={audience} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <Label htmlFor={`email-${audience}`} className="mb-2 block">
        {t("emailLabel")}
      </Label>
      <Input
        id={`email-${audience}`}
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder={t("emailPlaceholder")}
        aria-invalid={errorCode === "INVALID" ? true : undefined}
        aria-describedby={errorMessage ? `error-${audience}` : undefined}
      />

      {errorMessage && (
        <p
          id={`error-${audience}`}
          role="alert"
          className="mt-3 font-mono text-xs text-error"
        >
          {errorMessage}
        </p>
      )}

      <SubmitButton
        label={t(`buttonLabel.${audience}`)}
        pendingLabel={t("submitting")}
      />
    </form>
  );
}
