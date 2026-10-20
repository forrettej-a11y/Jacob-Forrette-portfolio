import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";
import { education } from "@/data/site";
import { toCardData } from "@/lib/content";
import { pad2 } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CareerTimeline } from "@/components/home/CareerTimeline";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Professional engineering experience at D.W. Clark in Taunton, Massachusetts — CNC equipment, manufacturing operations, industrial automation, maintenance and process improvement.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/experience", label: "Experience" }]}
        eyebrow={<span className="text-volt-300">Professional engineering experience</span>}
        title="Experience"
        intro="Industrial engineering experience built on the production floor — progressing from co-op to production and operations engineering to full-time industrial engineering."
      />

      {experience.map((emp) => {
        const related = emp.relatedProjects.map(getProject).filter((p): p is NonNullable<typeof p> => !!p);
        return (
          <div key={emp.company}>
            <Section code="01" eyebrow={emp.location} title={emp.company}>
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                <Reveal>
                  <p className="text-lg leading-relaxed text-steel-300">{emp.description}</p>
                  <p className="eyebrow mb-5 mt-10">Career progression</p>
                  <CareerTimeline roles={emp.roles} />
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="eyebrow mb-5">Areas of work</p>
                  <ul className="grid gap-px overflow-hidden rounded-[4px] border hairline bg-[var(--line)] sm:grid-cols-2">
                    {emp.areas.map((a, i) => (
                      <li key={a.title} className="bg-ink-900 p-5">
                        <span className="font-mono text-[0.62rem] tracking-[0.16em] text-volt-400">{pad2(i + 1)}</span>
                        <p className="mt-2 font-semibold text-steel-100">{a.title}</p>
                        <p className="mt-1 text-sm leading-6 text-steel-400">{a.detail}</p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </Section>

            {related.length > 0 && (
              <Section code="02" eyebrow="Related work" title={`Engineering projects at ${emp.company}`} className="border-t hairline bg-ink-950/40">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
                  {related.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 0.06}>
                      <ProjectCard project={toCardData(p)} index={i + 1} />
                    </Reveal>
                  ))}
                </div>
              </Section>
            )}
          </div>
        );
      })}

      <Section code="03" eyebrow="Education" title="Wentworth Institute of Technology">
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06} className="panel p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow">{e.location}</p>
                <StatusBadge status={e.status} />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{e.degree}</h3>
              <p className="mt-1 text-steel-400">{e.date}</p>
              <dl className="mt-6 flex gap-8 border-t hairline pt-5">
                <div>
                  <dt className="eyebrow text-[0.62rem]">GPA</dt>
                  <dd className="mt-1 font-mono text-xl text-steel-50">{e.gpa}</dd>
                </div>
              </dl>
              {e.note && <p className="mt-4 text-sm text-steel-400">{e.note}</p>}
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
