/** Shared contact-form validation (used by both the browser form and the API route). */

export const CONTACT_LIMITS = {
  name: 100,
  email: 200,
  organization: 150,
  message: { min: 20, max: 5000 },
};

export const CONTACT_TOPICS = ["Employment opportunity", "Project collaboration", "Technical question", "Other"] as const;

export interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  topic: string;
  message: string;
  /** Honeypot — must be empty. */
  website?: string;
  /** Timestamp (ms) when the form was rendered — submissions under 3 s are rejected as bots. */
  startedAt?: number;
}

export type ContactErrors = Partial<Record<"name" | "email" | "organization" | "topic" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(p: Partial<ContactPayload>): ContactErrors {
  const e: ContactErrors = {};
  const name = (p.name ?? "").trim();
  const email = (p.email ?? "").trim();
  const message = (p.message ?? "").trim();

  if (!name) e.name = "Please enter your name.";
  else if (name.length > CONTACT_LIMITS.name) e.name = "Name is too long.";

  if (!email) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email) || email.length > CONTACT_LIMITS.email) e.email = "Please enter a valid email address.";

  if ((p.organization ?? "").length > CONTACT_LIMITS.organization) e.organization = "Organization name is too long.";

  if (!p.topic || !(CONTACT_TOPICS as readonly string[]).includes(p.topic)) e.topic = "Please choose a topic.";

  if (message.length < CONTACT_LIMITS.message.min) e.message = `Please write at least ${CONTACT_LIMITS.message.min} characters.`;
  else if (message.length > CONTACT_LIMITS.message.max) e.message = `Please keep your message under ${CONTACT_LIMITS.message.max} characters.`;

  return e;
}
