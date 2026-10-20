import type { ProjectStatus, MediaKind, DocumentKind } from "./types";

/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  research: "Research",
  planned: "Planned",
};

export const MEDIA_KIND_LABEL: Record<MediaKind, string> = {
  photo: "Photo",
  cad: "CAD",
  drawing: "Drawing",
  fabrication: "Fabrication",
  final: "Final Product",
  schematic: "Schematic",
  diagram: "Diagram",
  screenshot: "Screenshot",
  video: "Video",
};

export const DOC_KIND_LABEL: Record<DocumentKind, string> = {
  report: "Engineering Report",
  drawing: "Technical Drawing",
  manufacturing: "Manufacturing Documentation",
  paper: "Research Paper",
  thesis: "Thesis",
  presentation: "Presentation",
  resume: "Resume",
};

export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** Canonical site URL: explicit env var → Vercel production domain → localhost. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
