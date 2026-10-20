import type { Project } from "./types";
import { resolveMedia } from "./assets";
import type { ProjectCardData } from "@/components/projects/ProjectCard";

export function toCardData(p: Project, hrefOverride?: string): ProjectCardData & { disciplines: Project["disciplines"] } {
  return {
    slug: p.slug,
    href: hrefOverride ?? p.href ?? `/projects/${p.slug}`,
    title: p.title,
    summary: p.summary,
    categories: p.categories,
    status: p.status,
    organization: p.organization,
    institution: p.institution,
    highlights: p.highlights,
    cover: resolveMedia(p.cover),
    disciplines: p.disciplines,
  };
}
