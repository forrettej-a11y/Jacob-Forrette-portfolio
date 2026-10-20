import Image from "next/image";
import { site, education } from "@/data/site";
import { fileExists } from "@/lib/assets";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Download } from "@/components/ui/Icons";
import { HeroDrawing } from "./HeroDrawing";

export function Hero() {
  const hasPhoto = fileExists(site.heroImage);
  const hasResume = fileExists(site.resumePdf);

  const facts = [
    { k: "B.S.", v: "Electromechanical Engineering", s: education[1].date },
    { k: "M.S.", v: "Mechanical Engineering", s: education[0].date },
    { k: "Industry", v: "D.W. Clark", s: "Taunton, MA" },
    { k: "Cast in Steel", v: "Four competition years", s: "SFSA" },
  ];

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b hairline">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        {hasPhoto ? (
          <>
            <Image src={site.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/30" />
          </>
        ) : (
          <>
            <div className="blueprint-grid fade-mask-radial absolute inset-0" />
            <HeroDrawing />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink-900 via-ink-900/75 to-transparent lg:w-[62%]" />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-900 to-transparent" />
        <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-volt-500/10 blur-[140px]" />
      </div>

      <div className="container-x flex flex-1 flex-col justify-center pb-16 pt-32 sm:pt-36">
        <Reveal y={10}>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-volt-400" aria-hidden />
            <span className="text-volt-300">{site.title}</span>
            <span className="hidden text-steel-600 sm:inline">/</span>
            <span className="hidden sm:inline">{site.subtitle}</span>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-4xl text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[5.75rem]">
            <span className="steel-text block">{site.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-steel-100 sm:text-2xl">{site.headline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-400 sm:text-lg">{site.intro}</p>
        </Reveal>

        <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/projects">
            View engineering projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          {hasResume ? (
            <ButtonLink href={site.resumePdf} variant="secondary" download>
              <Download size={16} /> Resume
            </ButtonLink>
          ) : (
            <ButtonLink href="/resume" variant="secondary">
              Resume
            </ButtonLink>
          )}
        </Reveal>
      </div>

      {/* Fact strip */}
      <div className="relative border-t hairline bg-ink-950/60 backdrop-blur">
        <dl className="container-x grid grid-cols-2 gap-x-6 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.k} delay={0.3 + i * 0.05} className="relative py-5 pl-4">
              <span className="absolute left-0 top-6 h-8 w-px bg-volt-400/40" aria-hidden />
              <dt className="eyebrow text-[0.62rem] text-volt-300">{f.k}</dt>
              <dd className="mt-1.5 text-sm font-medium text-steel-100 sm:text-[0.95rem]">{f.v}</dd>
              <dd className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-steel-500">{f.s}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
