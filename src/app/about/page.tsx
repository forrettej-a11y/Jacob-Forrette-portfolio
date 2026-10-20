import type { Metadata } from "next";
import Image from "next/image";
import { activities, biography, education, interests, site } from "@/data/site";
import { fileExists, resolveMedia } from "@/lib/assets";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ButtonLink } from "@/components/ui/Button";
import { MediaFrame } from "@/components/media/MediaFrame";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — electromechanical engineer and mechanical engineering graduate student at Wentworth Institute of Technology.`,
};

const PORTRAIT = "/images/portrait.jpg";

const principles = [
  { t: "Understand the whole system", d: "Mechanical, electrical and control problems rarely stay in their own lane. I try to understand how the pieces interact before deciding where the fault is." },
  { t: "Design for how it will be made", d: "Casting, machining, fabrication and printing each impose their own rules. Good geometry respects the process that has to produce it." },
  { t: "Prove it on hardware", d: "Analysis guides the work; testing settles it. I'd rather measure than assume." },
  { t: "Leave a record", d: "Procedures, drawings and maintenance history make the next fix faster. Documentation is part of the job, not an afterthought." },
];

export default function AboutPage() {
  const hasPortrait = fileExists(PORTRAIT);
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/about", label: "About" }]}
        eyebrow={<span className="text-volt-300">{site.title} · {site.subtitle}</span>}
        title="About"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            {hasPortrait ? (
              <div className="corner-marks relative aspect-[4/5] overflow-hidden rounded-[2px] border hairline">
                <Image src={PORTRAIT} alt={`Portrait of ${site.name}`} fill sizes="(min-width: 1024px) 22rem, 100vw" className="object-cover" />
              </div>
            ) : (
              <MediaFrame media={resolveMedia({ kind: "photo", caption: "Portrait", src: PORTRAIT })} aspect="aspect-[4/5]" />
            )}
            <dl className="mt-6 divide-y divide-[var(--line)] border-y hairline text-sm">
              {[
                ["Discipline", "Electromechanical / Mechanical"],
                ["Industry", "D.W. Clark — Taunton, MA"],
                ["University", "Wentworth Institute of Technology"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3">
                  <dt className="eyebrow text-[0.65rem]">{k}</dt>
                  <dd className="text-right text-steel-200">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow mb-6 text-volt-300">§ Biography</p>
            <div className="space-y-6 text-lg leading-relaxed text-steel-200 sm:text-xl sm:leading-relaxed">
              {biography.map((p, i) => (
                <p key={i} className={i === 0 ? "text-steel-50" : ""}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/projects">
                See the work <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                Resume
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section code="01" eyebrow="Approach" title="How I work." className="border-t hairline bg-ink-950/40">
        <ol className="grid gap-px overflow-hidden rounded-[4px] border hairline bg-[var(--line)] md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 0.05} className="bg-ink-900 p-6 sm:p-8">
              <span className="font-mono text-xs tracking-[0.16em] text-volt-400">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 leading-relaxed text-steel-400">{p.d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section code="02" eyebrow="Education" title="Wentworth Institute of Technology">
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <Reveal key={e.degree} className="panel p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <p className="eyebrow">{e.location}</p>
                <StatusBadge status={e.status} />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{e.degree}</h3>
              <p className="mt-1 text-steel-400">
                {e.date} · GPA {e.gpa}
              </p>
              {e.note && <p className="mt-4 border-t hairline pt-4 text-sm text-steel-400">{e.note}</p>}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section code="03" eyebrow="Involvement" title="Beyond coursework." className="border-t hairline bg-ink-950/40">
        <ul className="grid gap-px overflow-hidden rounded-[4px] border hairline bg-[var(--line)] md:grid-cols-3">
          {activities.map((a) => (
            <li key={a.org} className="bg-ink-900 p-6">
              <p className="font-semibold text-steel-100">{a.org}</p>
              <p className="mt-1 text-sm text-steel-400">{a.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section code="04" eyebrow="Engineering interests" title="What I want to keep working on." className="border-t hairline">
        <ul className="flex flex-wrap gap-2">
          {interests.map((it) => (
            <li key={it.code} className="flex items-center gap-3 rounded-[3px] border hairline px-4 py-2.5">
              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-volt-400">{it.code}</span>
              <span className="text-steel-200">{it.title}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
