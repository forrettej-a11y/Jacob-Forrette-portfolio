import type { Metadata } from "next";
import { research, researchDocuments, researchMilestones } from "@/data/research";
import { resolveDocuments } from "@/lib/assets";
import { pad2 } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpecTable } from "@/components/ui/SpecTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Timeline } from "@/components/timeline/Timeline";
import { DiagramView } from "@/components/diagrams/DiagramView";
import { DocumentList } from "@/components/projects/DocumentList";

export const metadata: Metadata = {
  title: "Master's Thesis — Flexible Automation in HMLV Manufacturing",
  description:
    "Graduate research at Wentworth Institute of Technology on how flexible automation affects production, quality and inter-operation downtime in high-mix, low-volume manufacturing. Research in progress.",
};

export default function ResearchPage() {
  const docs = resolveDocuments(researchDocuments);

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/research", label: "Research" }]}
        eyebrow={
          <>
            <StatusBadge status="research" size="md" />
            <span>Graduate Research · Industrial Automation · Manufacturing Engineering</span>
          </>
        }
        title={research.shortTitle}
        intro={research.question}
        aside={
          <SpecTable
            title="Thesis data"
            specs={[
              { label: "Working title", value: research.title },
              { label: "Degree", value: research.degree },
              { label: "Institution", value: research.institution },
              { label: "Completion", value: research.expected },
              { label: "Status", value: "Research in progress" },
              { label: "Results", note: "Pending validation — no findings published yet" },
            ]}
          />
        }
      />

      {/* Abstract + problem */}
      <Section code="01" eyebrow="Abstract" title="Why automation is harder when every job is different.">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Reveal className="prose-eng">
            {research.abstract.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="panel p-6 sm:p-8">
            <p className="eyebrow text-volt-300">Problem statement</p>
            <div className="mt-4 space-y-4 leading-relaxed text-steel-300">
              {research.problem.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Objectives + areas */}
      <Section code="02" eyebrow="Research objectives" title="What this work sets out to answer." className="border-t hairline bg-ink-950/40">
        <ol className="grid gap-px overflow-hidden rounded-[4px] border hairline bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {research.objectives.map((o, i) => (
            <Reveal as="li" key={o} delay={i * 0.04} className="bg-ink-900 p-6">
              <span className="font-mono text-xs tracking-[0.16em] text-volt-400">OBJ {pad2(i + 1)}</span>
              <p className="mt-3 leading-relaxed text-steel-200">{o}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <p className="eyebrow mb-4">Research areas</p>
          <ul className="flex flex-wrap gap-2">
            {research.areas.map((a) => (
              <li key={a} className="rounded-[3px] border hairline px-3 py-1.5 text-sm text-steel-300">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Methodology */}
      <Section
        code="03"
        eyebrow="Proposed methodology"
        title="Research workflow."
        intro="A two-semester plan from scoping through validation, using real production data from D.W. Clark and Siemens / Altair simulation to compare baseline and automated scenarios."
      >
        <Reveal>
          <DiagramView diagram={{ title: "Research workflow", type: "flow", nodes: research.methodology }} />
        </Reveal>
      </Section>

      {/* Case studies */}
      <Section
        code="04"
        eyebrow="Case studies"
        title="Three automation opportunities."
        intro="The study evaluates flexible automation in three real HMLV operations, each compared against the manual or semi-automated process it would replace."
        className="border-t hairline"
      >
        <ol className="grid gap-5 lg:grid-cols-3">
          {research.caseStudies.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.06} className="panel flex flex-col p-6">
              <span className="font-mono text-xs tracking-[0.16em] text-volt-400">CASE {pad2(i + 1)}</span>
              <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel-400">{c.context}</p>
              <p className="eyebrow mb-2 mt-5 text-[0.62rem]">Compared on</p>
              <ul className="flex flex-wrap gap-1.5">
                {c.metrics.map((m) => (
                  <li key={m} className="rounded-[3px] border hairline px-2 py-1 text-xs text-steel-300">
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8 flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-2">Data & tools</span>
          {research.tools.map((t) => (
            <span key={t} className="rounded-[3px] border border-volt-400/25 bg-volt-500/[0.06] px-3 py-1.5 text-sm text-steel-200">
              {t}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* Technical diagram: comparison framework */}
      <Section
        code="05"
        eyebrow="Analysis framework"
        title="Comparing operating modes."
        intro="The core comparison the study is designed around. Every cell remains pending until data has been collected and validated."
        className="border-t hairline"
      >
        <Reveal className="overflow-x-auto rounded-[4px] border hairline">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="sr-only">Comparison of manual, semi-automated and automated operations — all values pending</caption>
            <thead>
              <tr className="bg-white/[0.03]">
                <th scope="col" className="border-b hairline px-4 py-3 font-mono text-[0.7rem] font-normal uppercase tracking-[0.12em] text-steel-400">
                  Metric
                </th>
                {research.comparison.modes.map((m) => (
                  <th key={m} scope="col" className="border-b border-l hairline px-4 py-3 font-mono text-[0.7rem] font-normal uppercase tracking-[0.12em] text-steel-200">
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {research.comparison.metrics.map((metric) => (
                <tr key={metric} className="border-b hairline last:border-b-0">
                  <th scope="row" className="px-4 py-3 font-medium text-steel-100">
                    {metric}
                  </th>
                  {research.comparison.modes.map((m) => (
                    <td key={m} className="hatch border-l hairline px-4 py-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel-500">Pending data</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* Metrics */}
      <Section
        code="06"
        eyebrow="Manufacturing metrics"
        title="How performance will be measured."
        intro="Standard manufacturing measures the data collection is structured around. Definitions only — no values are reported here."
        className="border-t hairline bg-ink-950/40"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {research.metrics.map((m, i) => (
            <Reveal as="li" key={m.name} delay={(i % 3) * 0.04} className="panel flex flex-col p-5">
              <p className="font-semibold text-steel-50">{m.name}</p>
              <p className="mt-2 flex-1 text-sm leading-6 text-steel-400">{m.definition}</p>
              <code className="mt-4 block rounded-[3px] border border-volt-400/20 bg-ink-950 px-3 py-2 font-mono text-xs text-volt-200">{m.formula}</code>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Milestones */}
      <Section code="07" eyebrow="Research milestones" title="Where the work stands.">
        <Reveal>
          <Timeline entries={researchMilestones} label="Thesis research milestones" />
        </Reveal>
      </Section>

      {/* Future results */}
      <Section
        code="08"
        eyebrow="Results"
        title="Findings — pending validation."
        intro="This section will be populated only once results have been collected, analyzed and validated. No findings are implied by the questions below."
        className="border-t hairline"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {research.results.map((r, i) => (
            <Reveal as="li" key={r.title} delay={(i % 2) * 0.06} className="relative overflow-hidden rounded-[4px] border border-dashed border-steel-600/70 p-6">
              <div className="hatch pointer-events-none absolute inset-0 opacity-60" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow text-steel-300">{r.title}</p>
                  <span className="rounded-full border border-dashed border-steel-500 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-steel-400">
                    Pending validation
                  </span>
                </div>
                <p className="mt-4 text-lg leading-snug text-steel-200">{r.question}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* References */}
      <Section code="09" eyebrow="Key references" title="Foundations from the literature.">
        <ol className="space-y-3">
          {research.references.map((r, i) => (
            <li key={r.url} className="flex gap-4 text-sm leading-6 text-steel-300">
              <span className="font-mono text-xs text-volt-400">[{i + 1}]</span>
              <span>
                {r.text}{" "}
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-volt-300 underline-offset-4 hover:underline">
                  DOI
                </a>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Documents */}
      <Section code="10" eyebrow="Publications & documents" title="Thesis and papers." className="border-t hairline bg-ink-950/40">
        <DocumentList documents={docs} />
      </Section>
    </>
  );
}
