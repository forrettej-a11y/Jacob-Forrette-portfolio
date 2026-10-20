import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { castInSteelTimeline } from "@/data/cast-in-steel";
import { experience } from "@/data/experience";
import { research, researchMilestones } from "@/data/research";
import { interests, site, education } from "@/data/site";
import { toCardData } from "@/lib/content";
import { SITE_URL } from "@/lib/utils";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Timeline } from "@/components/timeline/Timeline";

export default function HomePage() {
  const cards = featuredProjects.map((p) => toCardData(p));
  const [lead, ...rest] = cards;
  const employer = experience[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: SITE_URL,
    alumniOf: { "@type": "CollegeOrUniversity", name: "Wentworth Institute of Technology" },
    knowsAbout: interests.map((i) => i.title),
    ...(site.contact.linkedin ? { sameAs: [site.contact.linkedin] } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      {/* ---------------------------------------------------- FEATURED PROJECTS */}
      <Section
        id="projects"
        code="01"
        eyebrow="Featured Engineering Projects"
        title={
          <>
            Design, build, test, <span className="text-steel-500">repeat.</span>
          </>
        }
        intro="Six bodies of work across metal casting, robotics, industrial machinery, automation and reliability — each documented as an engineering case study."
        action={
          <ButtonLink href="/projects" variant="secondary">
            All projects <ArrowRight size={16} />
          </ButtonLink>
        }
      >
        <div className="grid gap-5 [&>*]:min-w-0">
          <Reveal>
            <ProjectCard project={lead} index={1} feature />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 [&>*]:min-w-0">
            {rest.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} index={i + 2} />
              </Reveal>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
            {rest.slice(2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} index={i + 4} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- CAST IN STEEL */}
      <Section
        code="02"
        eyebrow="Cast in Steel · SFSA"
        title="Four years in the foundry."
        intro="Each competition year is its own design-to-test project — a Halligan bar, a George Washington sword, a horseman's axe and a flanged mace. The timeline traces the progression from team member in 2024 to team leader from 2025 on."
        className="border-t hairline bg-ink-950/40"
        action={
          <ButtonLink href="/cast-in-steel" variant="secondary">
            Open the collection <ArrowRight size={16} />
          </ButtonLink>
        }
      >
        <Reveal>
          <Timeline entries={castInSteelTimeline} label="Cast in Steel years" variant="large" />
        </Reveal>
      </Section>

      {/* ---------------------------------------------------- EXPERIENCE + RESEARCH */}
      <Section code="03" eyebrow="Industry & Research" title="On the floor and in the lab.">
        <div className="grid gap-5 lg:grid-cols-2 [&>*]:min-w-0">
          <Reveal className="panel flex flex-col p-6 sm:p-8">
            <p className="eyebrow">Professional experience</p>
            <h3 className="mt-3 text-2xl font-semibold">{employer.company}</h3>
            <p className="text-sm text-steel-500">{employer.location}</p>
            <ol className="mt-6 space-y-0 border-l hairline">
              {[...employer.roles].reverse().map((r, i) => (
                <li key={r.id} className="relative pb-5 pl-6 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rotate-45 border border-volt-400 bg-ink-900" aria-hidden />
                  <span className="font-mono text-[0.65rem] tracking-[0.14em] text-volt-400">STAGE {i + 1}</span>
                  <p className="mt-0.5 font-medium text-steel-100">{r.title}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 leading-relaxed text-steel-400">{employer.description}</p>
            <Link href="/experience" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-volt-300 hover:text-volt-200">
              Career timeline <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="panel relative flex flex-col overflow-hidden p-6 sm:p-8">
            <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow">Graduate research</p>
                <StatusBadge status="research" />
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{research.shortTitle}</h3>
              <p className="text-sm text-steel-500">{research.degree}</p>
              <blockquote className="mt-6 border-l-2 border-volt-500 pl-4 text-lg leading-snug text-steel-200">{research.question}</blockquote>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {researchMilestones.slice(0, 8).map((m) => (
                  <span
                    key={m.id}
                    title={m.title}
                    className={`h-1.5 flex-1 rounded-full ${m.status === "completed" ? "bg-status-completed" : m.status === "in-progress" ? "bg-volt-500" : "bg-steel-600/50"}`}
                  />
                ))}
              </div>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel-500">Methodology progress · results pending</p>
              <Link href="/research" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-volt-300 hover:text-volt-200">
                Research overview <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------- CAPABILITIES */}
      <Section
        code="04"
        eyebrow="Engineering Focus"
        title="Where I do my best work."
        className="border-t hairline"
        action={
          <ButtonLink href="/skills" variant="secondary">
            Technical skills <ArrowRight size={16} />
          </ButtonLink>
        }
      >
        <ul className="grid border-l border-t hairline sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((it, i) => (
            <Reveal as="li" key={it.code} delay={i * 0.04} className="group relative border-b border-r hairline p-6 transition-colors hover:bg-white/[0.02]">
              <span className="font-mono text-[0.65rem] tracking-[0.18em] text-volt-400">{it.code}</span>
              <p className="mt-6 text-lg font-medium leading-snug text-steel-100">{it.title}</p>
              <span className="absolute right-5 top-5 h-2 w-2 border-r border-t border-steel-600 transition-colors group-hover:border-volt-400" aria-hidden />
            </Reveal>
          ))}
          <Reveal as="li" className="border-b border-r hairline bg-volt-500/[0.06] p-6">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-volt-300">EDU</span>
            <p className="mt-6 text-lg font-medium leading-snug text-steel-100">Wentworth Institute of Technology</p>
            <p className="mt-1 text-sm text-steel-400">
              B.S. {education[1].gpa} · M.S. {education[0].gpa} GPA
            </p>
          </Reveal>
        </ul>
      </Section>

      {/* ---------------------------------------------------- CONTACT CTA */}
      <section className="relative overflow-hidden border-t hairline py-24 sm:py-32">
        <div className="blueprint-grid fade-mask-radial pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow">§ 05 — Contact</p>
            <h2 className="steel-text mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Let&rsquo;s build something that runs.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-steel-400">
              Open to conversations about engineering roles in automation, robotics, advanced manufacturing and equipment engineering.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">
                Get in touch <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                View resume
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
