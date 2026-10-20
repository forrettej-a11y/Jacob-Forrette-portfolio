import type { Metadata } from "next";
import Link from "next/link";
import { castInSteelOverview, castInSteelTimeline, castInSteelYears, castingWorkflow } from "@/data/cast-in-steel";
import { resolveMedia } from "@/lib/assets";
import { pad2 } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpecTable } from "@/components/ui/SpecTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Timeline } from "@/components/timeline/Timeline";
import { DiagramView } from "@/components/diagrams/DiagramView";
import { MediaFrame } from "@/components/media/MediaFrame";

export const metadata: Metadata = {
  title: "Cast in Steel — Four-Year Collection",
  description:
    "Four years of SFSA Cast in Steel competition projects — steel casting design, molding, heat treatment, testing and manufacturing at Wentworth Institute of Technology.",
};

export default function CastInSteelPage() {
  const o = castInSteelOverview;
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/cast-in-steel", label: "Cast in Steel" }]}
        eyebrow={
          <>
            <span className="text-volt-300">Collection</span>
            <span>Metal Casting · Mechanical Design · Manufacturing Engineering</span>
          </>
        }
        title={
          <>
            Cast in Steel
            <span className="mt-2 block text-2xl font-medium tracking-tight text-steel-400 sm:text-3xl lg:text-4xl">{o.subtitle}</span>
          </>
        }
        intro={
          <div className="space-y-4">
            {o.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        }
        aside={
          <SpecTable
            title="Collection data"
            specs={[
              { label: "Organization", value: o.organization },
              { label: "Institution", value: o.institution },
              { label: "Foundry partner", value: o.foundryPartner },
              { label: "Competition years", value: "Four" },
              { label: "Leadership", value: "Team Leader — 2025, 2026, 2027" },
            ]}
          />
        }
      />

      <Section code="01" eyebrow="Interactive timeline" title="Engineering development, year by year." intro="Select a year to see the project and open its full engineering write-up.">
        <Reveal>
          <Timeline entries={castInSteelTimeline} label="Cast in Steel competition years" variant="large" />
        </Reveal>
      </Section>

      <Section code="02" eyebrow="Competition projects" title="The four castings." className="border-t hairline bg-ink-950/40">
        <ol className="grid gap-5 md:grid-cols-2 [&>*]:min-w-0">
          {castInSteelYears.map((y, i) => {
            const cover = resolveMedia(y.cover);
            const yearSpec = y.specs?.find((s) => s.label === "Competition year")?.value;
            return (
              <Reveal as="li" key={y.slug} delay={(i % 2) * 0.06}>
                <Link
                  href={`/cast-in-steel/${y.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[4px] border hairline bg-ink-850/60 transition-all duration-500 hover:-translate-y-1 hover:border-volt-400/40"
                >
                  <div className="relative">
                    {cover && <MediaFrame media={cover} aspect="aspect-[16/9]" className="rounded-none border-0 border-b" />}
                    <StatusBadge status={y.status} className="absolute right-3 top-3" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs tracking-[0.16em] text-volt-300">YEAR {pad2(i + 1)} OF 4</p>
                    <p className="mt-1 font-mono text-4xl font-semibold tracking-tight text-steel-50">{yearSpec ?? "—"}</p>
                    <h3 className="mt-2 text-xl font-semibold">{y.shortTitle}</h3>
                    <p className="mt-3 line-clamp-3 leading-relaxed text-steel-400">{y.summary}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-volt-300">
                      {y.contribution?.role ? `${y.contribution.role} · ` : ""}View project
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section
        code="03"
        eyebrow="Process"
        title="From CAD to cast steel."
        intro="Every competition year runs through the same core workflow. What changes is the geometry, the molding approach and the problems each part presents."
      >
        <Reveal>
          <DiagramView diagram={castingWorkflow} />
        </Reveal>
      </Section>
    </>
  );
}
