"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Discipline, ProjectStatus } from "@/lib/types";
import { STATUS_LABEL, cn } from "@/lib/utils";
import { ProjectCard, type ProjectCardData } from "./ProjectCard";

type FilterableProject = ProjectCardData & { disciplines: Discipline[] };

/** Projects page grid with working discipline + status filters. */
export function ProjectGrid({ projects }: { projects: FilterableProject[] }) {
  const disciplines = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.disciplines))).sort(),
    [projects],
  );
  const statuses = useMemo(() => Array.from(new Set(projects.map((p) => p.status))), [projects]);

  const [discipline, setDiscipline] = useState<Discipline | "all">("all");
  const [status, setStatus] = useState<ProjectStatus | "all">("all");

  const filtered = projects.filter(
    (p) => (discipline === "all" || p.disciplines.includes(discipline)) && (status === "all" || p.status === status),
  );

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 border-y hairline py-5">
        <FilterRow label="Discipline">
          <Chip active={discipline === "all"} onClick={() => setDiscipline("all")}>
            All
          </Chip>
          {disciplines.map((d) => (
            <Chip key={d} active={discipline === d} onClick={() => setDiscipline(d)}>
              {d}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow label="Status">
          <Chip active={status === "all"} onClick={() => setStatus("all")}>
            All
          </Chip>
          {statuses.map((s) => (
            <Chip key={s} active={status === s} onClick={() => setStatus(s)}>
              {STATUS_LABEL[s]}
            </Chip>
          ))}
        </FilterRow>
      </div>

      <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-steel-500" aria-live="polite">
        Showing {filtered.length} of {projects.length} projects
      </p>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} index={projects.indexOf(p) + 1} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-steel-400">
          No projects match these filters.{" "}
          <button
            className="text-volt-300 underline-offset-4 hover:underline"
            onClick={() => {
              setDiscipline("all");
              setStatus("all");
            }}
          >
            Clear filters
          </button>
        </p>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
      <span className="eyebrow w-24 shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={`Filter by ${label.toLowerCase()}`}>
        {children}
      </div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-[3px] border px-3 py-1.5 text-[0.8rem] transition-colors",
        active ? "border-volt-400/60 bg-volt-500/15 text-volt-100" : "hairline text-steel-400 hover:border-steel-500 hover:text-steel-100",
      )}
    >
      {children}
    </button>
  );
}
