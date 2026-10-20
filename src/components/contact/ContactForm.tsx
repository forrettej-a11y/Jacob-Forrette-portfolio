"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT_LIMITS, CONTACT_TOPICS, type ContactErrors, validateContact } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "@/components/ui/Icons";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", organization: "", topic: "", message: "", website: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<State>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const update = (k: keyof typeof values, v: string) => {
    const next = { ...values, [k]: v };
    setValues(next);
    if (touched[k]) setErrors(validateContact(next));
  };

  const blur = (k: string) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validateContact(values));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    setTouched({ name: true, email: true, organization: true, topic: true, message: true });
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setState("sending");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: ContactErrors };
      if (res.ok && data.ok) {
        setState("sent");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerMsg(data.message ?? "Something went wrong. Please try again.");
      setState("error");
    } catch {
      setServerMsg("Network error — please check your connection and try again.");
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="panel flex flex-col items-start p-8" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-status-completed/50 text-status-completed">
          <Check size={22} />
        </span>
        <h2 className="mt-5 text-2xl font-semibold">Message sent</h2>
        <p className="mt-2 text-steel-400">Thanks for reaching out — I&rsquo;ll get back to you as soon as I can.</p>
      </motion.div>
    );
  }

  const fieldErr = (k: keyof ContactErrors) => (touched[k] ? errors[k] : undefined);

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="panel space-y-5 p-6 sm:p-8" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={fieldErr("name")}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={CONTACT_LIMITS.name}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={!!fieldErr("name")}
            aria-describedby={fieldErr("name") ? "name-error" : undefined}
            className={inputCls(!!fieldErr("name"))}
          />
        </Field>
        <Field id="email" label="Email" required error={fieldErr("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={CONTACT_LIMITS.email}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={!!fieldErr("email")}
            aria-describedby={fieldErr("email") ? "email-error" : undefined}
            className={inputCls(!!fieldErr("email"))}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="organization" label="Organization" hint="Optional" error={fieldErr("organization")}>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            maxLength={CONTACT_LIMITS.organization}
            value={values.organization}
            onChange={(e) => update("organization", e.target.value)}
            onBlur={() => blur("organization")}
            className={inputCls(!!fieldErr("organization"))}
          />
        </Field>
        <Field id="topic" label="Topic" required error={fieldErr("topic")}>
          <select
            id="topic"
            name="topic"
            value={values.topic}
            onChange={(e) => update("topic", e.target.value)}
            onBlur={() => blur("topic")}
            aria-invalid={!!fieldErr("topic")}
            aria-describedby={fieldErr("topic") ? "topic-error" : undefined}
            className={cn(inputCls(!!fieldErr("topic")), "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%2387909b' stroke-width='1.5'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select a topic…
            </option>
            {CONTACT_TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" required error={fieldErr("message")} counter={`${values.message.trim().length} / ${CONTACT_LIMITS.message.max}`}>
        <textarea
          id="message"
          name="message"
          rows={7}
          maxLength={CONTACT_LIMITS.message.max}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={!!fieldErr("message")}
          aria-describedby={fieldErr("message") ? "message-error" : undefined}
          className={cn(inputCls(!!fieldErr("message")), "resize-y")}
        />
      </Field>

      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
      </div>

      <AnimatePresence>
        {state === "error" && serverMsg && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="rounded-[3px] border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          >
            {serverMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-xs leading-5 text-steel-500">
          Your details are used only to reply to your message.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-volt-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgb(78_164_255/0.5),0_8px_30px_-8px_rgb(31_135_255/0.6)] transition-colors hover:bg-volt-400 disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send message"}
          {state !== "sending" && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
        </button>
      </div>
    </form>
  );
}

function inputCls(invalid: boolean) {
  return cn(
    "w-full rounded-[3px] border bg-ink-950/70 px-4 py-3 text-[0.95rem] text-steel-50 placeholder:text-steel-600 transition-colors focus:outline-none focus:ring-2",
    invalid ? "border-red-400/60 focus:ring-red-400/40" : "border-[var(--line-strong)] focus:border-volt-400 focus:ring-volt-500/30",
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  counter,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  counter?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel-300">
          {label}
          {required && <span className="ml-1 text-volt-400" aria-hidden>*</span>}
          {required && <span className="sr-only"> (required)</span>}
        </label>
        {hint && <span className="text-xs text-steel-500">{hint}</span>}
        {counter && <span className="font-mono text-[0.65rem] text-steel-600">{counter}</span>}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
