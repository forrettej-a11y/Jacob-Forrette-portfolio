import type { Metadata } from "next";
import Link from "next/link";
import { activities, awards, education, site } from "@/data/site";
import { experience } from "@/data/experience";
import { featuredProjects, projectHref } from "@/data/projects";
import { certifications, skillCategories } from "@/data/skills";
import { fileExists } from "@/lib/assets";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink, DisabledButton } from "@/components/ui/Button";
import { Download } from "@/components/ui/Icons";
import { PrintButton } from "@/components/contact/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — ${site.title}.`,
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 border-b hairline pb-3 font-mono text-xs font-normal uppercase tracking-[0.18em] text-volt-300">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  const hasPdf = fileExists(site.resumePdf);
  const { email, linkedin, github } = site.contact;

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/resume", label: "Resume" }]}
        eyebrow={<span className="text-volt-300">Curriculum vitae</span>}
        title="Resume"
        intro="A one-page overview of education, experience, projects and skills."
      >
        <div className="no-print mt-8 flex flex-wrap gap-3">
          {hasPdf ? (
            <ButtonLink href={site.resumePdf} download>
              <Download size={16} /> Download PDF
            </ButtonLink>
          ) : (
            <DisabledButton title="Add the PDF at /public/documents/Jacob-Forrette-Resume.pdf">
              <Download size={16} /> PDF coming soon
            </DisabledButton>
          )}
          <PrintButton />
        </div>
      </PageHeader>

      <div className="container-x py-14 sm:py-20">
        <article className="panel mx-auto max-w-4xl p-6 sm:p-12">
          <header className="flex flex-col gap-4 border-b hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold sm:text-4xl">{site.name}</h1>
              <p className="mt-1 text-steel-300">
                {site.title} · {site.subtitle}
              </p>
            </div>
            <ul className="space-y-1 text-sm text-steel-400 sm:text-right">
              <li>{email ? <a href={`mailto:${email}`} className="hover:text-white">{email}</a> : <span className="text-steel-600">Email — to be added</span>}</li>
              <li>{linkedin ? <a href={linkedin} className="hover:text-white">LinkedIn</a> : <span className="text-steel-600">LinkedIn — to be added</span>}</li>
              {github && (
                <li>
                  <a href={github} className="hover:text-white">
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </header>

          <section className="mt-10">
            <Heading>Education</Heading>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree} className="grid gap-1 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-semibold text-steel-50">{e.degree}</p>
                    <p className="text-sm text-steel-400">
                      {e.school}, {e.location}
                    </p>
                    {e.note && <p className="mt-1 text-sm text-steel-500">{e.note}</p>}
                  </div>
                  <div className="text-sm sm:text-right">
                    <p className="text-steel-300">{e.date}</p>
                    <p className="font-mono text-xs text-steel-500">GPA {e.gpa}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <Heading>Experience</Heading>
            {experience.map((emp) => (
              <div key={emp.company}>
                <p className="font-semibold text-steel-50">
                  {emp.company} <span className="font-normal text-steel-500">— {emp.location}</span>
                </p>
                <ul className="mt-3 space-y-1.5 border-l hairline pl-4">
                  {emp.roles.map((r) => (
                    <li key={r.id} className="flex flex-wrap justify-between gap-x-4 text-sm">
                      <span className="text-steel-200">{r.title}</span>
                      <span className="font-mono text-xs text-steel-500">{r.dates ?? "Dates to be added"}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 grid gap-1.5 text-sm text-steel-300 sm:grid-cols-2">
                  {emp.areas.map((a) => (
                    <li key={a.title} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-volt-400" aria-hidden />
                      {a.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mt-10">
            <Heading>Selected projects</Heading>
            <ul className="space-y-4">
              {featuredProjects.map((p) => (
                <li key={p.slug}>
                  <Link href={projectHref(p)} className="font-semibold text-steel-50 hover:text-volt-200">
                    {p.title}
                  </Link>
                  <p className="mt-0.5 text-sm leading-6 text-steel-400">{p.summary}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <Heading>Technical skills</Heading>
            <dl className="space-y-3 text-sm">
              {skillCategories.map((c) => (
                <div key={c.id} className="grid gap-1 sm:grid-cols-[11rem_1fr]">
                  <dt className="font-medium text-steel-200">{c.title}</dt>
                  <dd className="text-steel-400">{c.skills.map((s) => (s.note ? `${s.name} (${s.note.toLowerCase()})` : s.name)).join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <Heading>Certifications & awards</Heading>
              <ul className="space-y-1.5 text-sm text-steel-300">
                {[...certifications, ...awards].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-volt-400" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Heading>Activities</Heading>
              <ul className="space-y-2 text-sm">
                {activities.map((a) => (
                  <li key={a.org}>
                    <span className="text-steel-100">{a.org}</span>
                    <span className="block text-steel-500">{a.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
