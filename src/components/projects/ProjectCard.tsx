import Link from "next/link";
import type { ProjectStatus, ResolvedMedia } from "@/lib/types";
import { cn, pad2 } from "@/lib/utils";
import { MediaFrame } from "@/components/media/MediaFrame";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowUpRight } from "@/components/ui/Icons";

export interface ProjectCardData {
  slug: string;
  href: string;
  title: string;
  summary: string;
  categories: string[];
  status: ProjectStatus;
  organization?: string;
  institution?: string;
  highlights?: string[];
  cover?: ResolvedMedia;
}

export function ProjectCard({
  project,
  index,
  feature = false,
}: {
  project: ProjectCardData;
  index: number;
  feature?: boolean;
}) {
  const org = project.organization ?? project.institution;
  return (
    <Link
      href={project.href}
      className={cn(
        "group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[4px] border hairline bg-ink-850/60 transition-all duration-500 ease-[var(--ease-drafting)] hover:-translate-y-1 hover:border-volt-400/40 hover:shadow-[0_24px_60px_-30px_rgb(31_135_255/0.45)]",
        feature && "lg:grid lg:grid-cols-[1.25fr_1fr]",
      )}
    >
      <div className="relative">
        {project.cover ? (
          <MediaFrame
            media={project.cover}
            aspect={feature ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[26rem]" : "aspect-[16/10]"}
            className="rounded-none border-0 border-b lg:border-b-0"
            sizes={feature ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          />
        ) : (
          <div className="aspect-[16/10] bg-ink-800" />
        )}
        <span className="pointer-events-none absolute bottom-3 left-4 font-mono text-5xl font-semibold leading-none tracking-tighter text-white/[0.07] sm:text-6xl" aria-hidden>
          {pad2(index)}
        </span>
        <StatusBadge status={project.status} className="absolute right-3 top-3" />
      </div>

      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", feature && "lg:p-10")}>
        <p className="eyebrow flex flex-wrap gap-x-2 text-[0.65rem]">
          <span className="text-volt-400">{pad2(index)}</span>
          <span aria-hidden>/</span>
          <span className="truncate">{project.categories.slice(0, 2).join(" · ")}</span>
        </p>
        <h3 className={cn("mt-3 font-semibold leading-tight text-steel-50", feature ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl")}>
          {project.title}
        </h3>
        {org && <p className="mt-2 text-sm text-steel-500">{org}</p>}
        <p className={cn("mt-4 leading-relaxed text-steel-300", feature ? "text-base lg:text-lg" : "line-clamp-3 text-[0.95rem]")}>
          {project.summary}
        </p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.highlights.slice(0, feature ? 4 : 3).map((h) => (
              <li key={h} className="rounded-[3px] border hairline px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-steel-400">
                {h}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-volt-300">
          {feature ? "Explore the collection" : "View project"}
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
