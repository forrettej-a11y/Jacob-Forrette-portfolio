import type { Metadata } from "next";
import { research, researchDocuments, researchMilestones } from "@/data/research";
import { resolveDocuments, resolveMedia } from "@/lib/assets";
import { pad2 } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpecTable } from "@/components/ui/SpecTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Timeline } from "@/components/timeline/Timeline";
import { DiagramView } from "@/components/diagrams/DiagramView";
import { DocumentList } from "@/components/projects/DocumentList";
import { Check } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Master's Thesis — Simulating Flexible Automation in HMLV Manufacturing",
  description:
    "Case-study-informed discrete-event simulation of flexible automation in high-mix, low-volume manufacturing, using D.W. Clark as the reference environment. M.S. Mechanical Engineering thesis at Wentworth Institute of Technology — in progress.",
};

export default function ResearchPage() {
  const docs = resolveDocuments(researchDocuments);
  const r = research;

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/research", label: "Research" }]}
        eyebrow={
          <>
            <StatusBadge status="research" size="md" />
            <span>Graduate Research · Discrete-Event Simulation · Manufacturing Systems</span>
          </>
        }
        title={r.shortTitle}
        intro={r.title}
        aside={
          <SpecTable
            title="Thesis data"
            specs={[
              { label: "Degree", value: r.degree },
              { label: "Institution", value: r.institution },
              { label: "Completion", value: r.expected },
              { label: "Stage", value: r.stage },
              { label: "Method", value: r.method },
              { label: "Reference site", value: r.referenceEnvironment },
              { label: "Results", note: "Pending — no findings published yet" },
            ]}
          />
        }
      />

      <div className="container-x pt-10">
        <Reveal>
          <MediaFrame
            media={resolveMedia({ kind: "diagram", caption: "Illustration — baseline vs. flexible-automation material flow", src: "/images/research/cover.jpg" })}
            aspect="aspect-[16/10]"
            priority
            sizes="100vw"
            showCaption
          />
        </Reveal>
      </div>

      {/* 01 Purpose */}
      <Section code="01" eyebrow="Purpose & methodology" title="Simulation now, grounded in a real plant.">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Reveal className="prose-eng">
            {r.purpose.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="panel p-6 sm:p-8">
            <p className="eyebrow text-volt-300">Why simulation</p>
            <ul className="mt-4 space-y-3 text-steel-300">
              {[
                "Evaluate automation options before they're installed and commissioned",
                "Compare configurations under identical, matched conditions",
                "Repeat experiments with documented, reproducible inputs",
                "Stay on the academic timeline without waiting on plant projects",
              ].map((t) => (
                <li key={t} className="flex gap-3 leading-6">
                  <Check size={16} className="mt-1 shrink-0 text-volt-400" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 02 Research question */}
      <section className="relative overflow-hidden border-y hairline bg-ink-950/40 py-20 sm:py-24">
        <div className="blueprint-grid fade-mask-radial pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="text-volt-400">§ 02</span>
              <span className="h-px w-8 bg-steel-600" aria-hidden />
              <span>Research question</span>
            </p>
            <blockquote className="max-w-4xl border-l-2 border-volt-500 pl-6 text-2xl font-medium leading-snug text-steel-50 sm:text-3xl">
              {r.question}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 03 Case study & boundaries */}
      <Section
        code="03"
        eyebrow="Case study & study boundaries"
        title="D.W. Clark as the reference environment."
        intro={r.boundary.summary[0]}
      >
        <Reveal>
          <DiagramView
            diagram={{
              title: "Candidate model boundary — casting-to-finished-part flow",
              type: "flow",
              nodes: r.boundary.flow,
              caption: "Representative segment only. The final boundary will be set with the advisor based on available information.",
            }}
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <p className="leading-relaxed text-steel-300">{r.boundary.summary[1]}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {r.boundary.focus.map((f) => (
                <li key={f} className="rounded-[3px] border border-volt-400/25 bg-volt-500/[0.06] px-3 py-1.5 text-sm text-steel-200">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="rounded-[4px] border border-dashed border-steel-600/70 p-5">
            <p className="eyebrow mb-2 text-steel-300">Data distinction</p>
            <p className="text-sm leading-6 text-steel-400">{r.boundary.dataNote}</p>
          </Reveal>
        </div>
      </Section>

      {/* 04 Objectives */}
      <Section code="04" eyebrow="Research objectives" title="What the study sets out to do." className="border-t hairline bg-ink-950/40">
        <ol className="grid gap-px overflow-hidden rounded-[4px] border hairline bg-[var(--line)] md:grid-cols-2 lg:grid-cols-6">
          {r.objectives.map((o, i) => (
            <Reveal
              as="li"
              key={o}
              delay={i * 0.04}
              className={`bg-ink-900 p-6 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === r.objectives.length - 1 && r.objectives.length % 2 === 1 ? "md:col-span-2" : ""}`}
            >
              <span className="font-mono text-xs tracking-[0.16em] text-volt-400">OBJ {pad2(i + 1)}</span>
              <p className="mt-3 leading-relaxed text-steel-200">{o}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 05 Scenarios */}
      <Section
        code="05"
        eyebrow="Simulation scenarios"
        title="Four levels of automation, matched conditions."
        intro="Each scenario runs against the same jobs, routings and resource constraints, so differences come from the automation strategy — not the inputs."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {r.scenarios.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 0.06} className="panel relative flex flex-col overflow-hidden p-6">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-volt-500" style={{ opacity: 0.25 + i * 0.25 }} aria-hidden />
              <span className="font-mono text-3xl font-semibold tracking-tight text-volt-300">{s.id}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel-400">{s.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 overflow-x-auto rounded-[4px] border hairline">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="sr-only">Scenario comparison matrix — all values pending</caption>
            <thead>
              <tr className="bg-white/[0.03]">
                <th scope="col" className="border-b hairline px-4 py-3 font-mono text-[0.7rem] font-normal uppercase tracking-[0.12em] text-steel-400">
                  Measured outcome
                </th>
                {r.scenarios.map((s) => (
                  <th key={s.id} scope="col" className="border-b border-l hairline px-4 py-3 font-mono text-[0.7rem] font-normal uppercase tracking-[0.12em] text-steel-200">
                    {s.id} · {s.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {r.metrics.map((m) => (
                <tr key={m.name} className="border-b hairline last:border-b-0">
                  <th scope="row" className="px-4 py-3 font-medium text-steel-100">
                    {m.name}
                  </th>
                  {r.scenarios.map((s) => (
                    <td key={s.id} className="hatch border-l hairline px-4 py-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel-500">Pending</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* 06 Method */}
      <Section
        code="06"
        eyebrow="Proposed research method"
        title="From model inputs to sensitivity analysis."
        className="border-t hairline bg-ink-950/40"
      >
        <Reveal>
          <DiagramView diagram={{ title: "Research method", type: "flow", nodes: r.methodology }} />
        </Reveal>
        <Reveal className="mt-8 flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-2">Tools & practices</span>
          {r.tools.map((t) => (
            <span key={t} className="rounded-[3px] border border-volt-400/25 bg-volt-500/[0.06] px-3 py-1.5 text-sm text-steel-200">
              {t}
            </span>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow mb-5">Measured outcomes</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {r.metrics.map((m, i) => (
                <Reveal as="li" key={m.name} delay={(i % 2) * 0.04} className="panel flex flex-col p-5">
                  <p className="font-semibold text-steel-50">{m.name}</p>
                  <p className="mt-2 flex-1 text-sm leading-6 text-steel-400">{m.definition}</p>
                  <code className="mt-4 block rounded-[3px] border border-volt-400/20 bg-ink-950 px-3 py-2 font-mono text-xs text-volt-200">{m.formula}</code>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Experimental factors</p>
            <ul className="space-y-3">
              {r.factors.map((f, i) => (
                <Reveal as="li" key={f.name} delay={i * 0.04} className="flex gap-4 rounded-[4px] border hairline p-4">
                  <span className="font-mono text-xs tracking-[0.14em] text-volt-400">F{i + 1}</span>
                  <span>
                    <span className="block font-medium text-steel-100">{f.name}</span>
                    <span className="mt-0.5 block text-sm text-steel-400">{f.detail}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-steel-500">
              Varied across plausible ranges to test whether conclusions about automation hold up.
            </p>
          </div>
        </div>
      </Section>

      {/* 07 Limitations */}
      <Section code="07" eyebrow="Interpretation & limitations" title="What the results will — and won't — claim.">
        <Reveal className="rounded-[4px] border border-amber-300/30 bg-amber-300/[0.04] p-6 sm:p-8">
          <ul className="space-y-3">
            {r.limitations.map((l) => (
              <li key={l} className="flex gap-3 leading-relaxed text-steel-200">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-amber-300/80" aria-hidden />
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 08 Deliverables */}
      <Section code="08" eyebrow="Expected deliverables" title="What the thesis will produce." className="border-t hairline bg-ink-950/40">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {r.deliverables.map((d, i) => (
            <Reveal as="li" key={d} delay={(i % 3) * 0.04} className="flex gap-3 rounded-[4px] border hairline bg-ink-900 p-4">
              <span className="font-mono text-xs leading-6 tracking-[0.14em] text-volt-400">{pad2(i + 1)}</span>
              <span className="leading-6 text-steel-200">{d}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-8 rounded-[4px] border border-volt-400/30 bg-volt-500/[0.06] p-5">
          <p className="eyebrow mb-2 text-volt-300">Next step</p>
          <p className="leading-relaxed text-steel-200">{r.nextStep}</p>
        </Reveal>
      </Section>

      {/* Milestones */}
      <Section code="09" eyebrow="Research milestones" title="Where the work stands.">
        <Reveal>
          <Timeline entries={researchMilestones} label="Thesis research milestones" />
        </Reveal>
      </Section>

      {/* References */}
      <Section code="10" eyebrow="Key references" title="Foundations from the literature." className="border-t hairline">
        <ol className="space-y-3">
          {r.references.map((ref, i) => (
            <li key={ref.url} className="flex gap-4 text-sm leading-6 text-steel-300">
              <span className="font-mono text-xs text-volt-400">[{i + 1}]</span>
              <span>
                {ref.text}{" "}
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-volt-300 underline-offset-4 hover:underline">
                  DOI
                </a>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Documents */}
      <Section code="11" eyebrow="Documents" title="Thesis documents." className="border-t hairline bg-ink-950/40">
        <DocumentList documents={docs} />
      </Section>
    </>
  );
}
