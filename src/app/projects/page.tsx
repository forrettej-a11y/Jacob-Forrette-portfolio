import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { toCardData } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { STATUS_LABEL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description:
    "Engineering projects by Jacob Forrette — metal casting, robotics, CNC equipment commissioning, industrial automation, reliability engineering and graduate research.",
};

export default function ProjectsPage() {
  const ordered = [...projects].sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
  const cards = ordered.map((p) => toCardData(p));
  const counts = ordered.reduce<Record<string, number>>((acc, p) => {
    acc[p.status] = (acc[p.status] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/projects", label: "Projects" }]}
        eyebrow={<span className="text-volt-300">Featured engineering projects</span>}
        title="Projects"
        intro="Major engineering work across competition, capstone, graduate research and industry. Each page separates my individual contribution from team scope, and labels anything not yet complete."
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border hairline bg-[var(--line)]">
            {Object.entries(counts).map(([status, n]) => (
              <div key={status} className="bg-ink-900 p-4">
                <dt className="eyebrow text-[0.62rem]">{STATUS_LABEL[status as keyof typeof STATUS_LABEL]}</dt>
                <dd className="mt-1 font-mono text-3xl font-semibold text-steel-50">{n}</dd>
              </div>
            ))}
          </dl>
        }
      />
      <div className="container-x py-14 sm:py-20">
        <ProjectGrid projects={cards} />
      </div>
    </>
  );
}
