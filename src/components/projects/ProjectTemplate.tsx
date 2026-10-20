/**
 * REUSABLE PROJECT PAGE TEMPLATE
 * Every project and every Cast in Steel year renders through this component.
 * Sections appear only when the project data provides them.
 */
import Link from "next/link";
import type { ContentSection, Project } from "@/lib/types";
import { resolveDocuments, resolveMedia, resolveMediaList, resolveModels } from "@/lib/assets";
import { pad2 } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SpecTable } from "@/components/ui/SpecTable";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Gallery } from "@/components/media/Gallery";
import { ModelShowcase } from "@/components/viewer/ModelShowcase";
import { Timeline } from "@/components/timeline/Timeline";
import { DiagramView } from "@/components/diagrams/DiagramView";
import { ContributionPanel } from "./ContributionPanel";
import { DocumentList } from "./DocumentList";
import { TableOfContents } from "./TableOfContents";

interface NavLink {
  href: string;
  label: string;
}

export function ProjectTemplate({
  project,
  crumbs,
  prev,
  next,
  intro,
}: {
  project: Project;
  crumbs: NavLink[];
  prev?: NavLink;
  next?: NavLink;
  /** Optional extra content rendered before the sections. */
  intro?: React.ReactNode;
}) {
  const cover = resolveMedia(project.cover);
  const gallery = resolveMediaList(project.gallery);
  const models = resolveModels(project.models);
  const documents = resolveDocuments(project.documents);

  const toc: { id: string; title: string }[] = [];
  if (project.contribution) toc.push({ id: "contribution", title: "My contribution" });
  project.sections.forEach((s) => toc.push({ id: s.id, title: s.title }));
  if (project.caseStudies?.length) toc.push({ id: "case-studies", title: "Initiatives" });
  if (project.timeline) toc.push({ id: "timeline", title: project.timeline.title });
  if (models.length) toc.push({ id: "cad", title: "3D CAD viewer" });
  if (gallery.length) toc.push({ id: "gallery", title: "Gallery" });
  if (documents.length) toc.push({ id: "documents", title: "Documents" });
  if (project.updates?.length) toc.push({ id: "updates", title: "Project updates" });

  return (
    <article>
      <PageHeader
        crumbs={crumbs}
        eyebrow={
          <>
            <StatusBadge status={project.status} size="md" />
            <span>{project.categories.join(" · ")}</span>
          </>
        }
        title={project.title}
        intro={project.tagline}
        aside={project.specs && <SpecTable specs={project.specs} title="Project data" />}
      >
        {project.highlights && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-[3px] border border-volt-400/25 bg-volt-500/[0.06] px-3 py-1.5 text-sm text-steel-200">
                {h}
              </li>
            ))}
          </ul>
        )}
      </PageHeader>

      {cover && (
        <div className="container-x -mt-px pt-10">
          <Reveal>
            <MediaFrame media={cover} aspect="aspect-[16/9] lg:aspect-[21/9]" priority sizes="100vw" />
          </Reveal>
        </div>
      )}

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <aside className="hidden lg:block">{toc.length > 2 && <TableOfContents items={toc} />}</aside>

        <div className="min-w-0 space-y-20 sm:space-y-24">
          {intro}

          {project.contribution && (
            <Block id="contribution" index={1} title="My contribution vs. team scope">
              <ContributionPanel contribution={project.contribution} />
            </Block>
          )}

          {project.sections.map((s, i) => (
            <SectionBlock key={s.id} section={s} index={i + (project.contribution ? 2 : 1)} />
          ))}

          {project.caseStudies && project.caseStudies.length > 0 && (
            <Block id="case-studies" title="Initiatives" subtitle="Each initiative is labeled with its own status — completed work, work in progress, and future concepts are kept distinct.">
              <div className="space-y-6">
                {project.caseStudies.map((cs, i) => (
                  <Reveal key={cs.id} as="article" className="panel overflow-hidden" id={cs.id}>
                    <div className="flex flex-col gap-4 border-b hairline p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                      <div className="max-w-2xl">
                        <p className="font-mono text-xs tracking-[0.14em] text-volt-400">CASE {pad2(i + 1)}</p>
                        <h3 className="mt-2 text-2xl font-semibold">{cs.title}</h3>
                        <p className="mt-3 leading-relaxed text-steel-300">{cs.summary}</p>
                        {cs.bullets && (
                          <ul className="mt-4 flex flex-wrap gap-1.5">
                            {cs.bullets.map((b) => (
                              <li key={b} className="rounded-[3px] border hairline px-2 py-1 text-xs text-steel-300">
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <StatusBadge status={cs.status} className="shrink-0" />
                    </div>
                    <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                      {cs.details && <SpecTable specs={cs.details} title="Engineering record" />}
                      {cs.media && (
                        <div className="grid grid-cols-2 gap-3">
                          {resolveMediaList(cs.media).map((m, j) => (
                            <MediaFrame key={m.caption} media={m} index={pad2(j + 1)} className={cs.media!.length === 1 ? "col-span-2" : ""} />
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Block>
          )}

          {project.timeline && (
            <Block id="timeline" title={project.timeline.title}>
              <Timeline entries={project.timeline.entries} label={`${project.title} timeline`} />
            </Block>
          )}

          {models.length > 0 && (
            <Block id="cad" title="3D CAD viewer" subtitle="Rotate, zoom and inspect the model from standard engineering views.">
              <ModelShowcase models={models} />
            </Block>
          )}

          {gallery.length > 0 && (
            <Block id="gallery" title="Gallery" subtitle="CAD, drawings, fabrication and finished-product media. Select any uploaded image to open the full-screen viewer.">
              <Gallery items={gallery} />
            </Block>
          )}

          {documents.length > 0 && (
            <Block id="documents" title="Technical documents" subtitle="Downloads are enabled as documents are published.">
              <DocumentList documents={documents} />
            </Block>
          )}

          {project.updates && project.updates.length > 0 && (
            <Block id="updates" title="Project updates">
              <ol className="space-y-4 border-l hairline pl-6">
                {project.updates.map((u) => (
                  <li key={u.date + u.text} className="relative">
                    <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rotate-45 border border-volt-400 bg-ink-900" aria-hidden />
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-volt-300">{u.date}</p>
                    <p className="mt-1 text-steel-300">{u.text}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {project.disclaimer && (
            <aside className="rounded-[4px] border border-amber-300/30 bg-amber-300/[0.05] p-5 text-sm leading-6 text-amber-100/90" role="note">
              <span className="eyebrow mb-2 block text-amber-200">Scope & limitations</span>
              {project.disclaimer}
            </aside>
          )}

          {(prev || next) && (
            <nav aria-label="More projects" className="grid gap-3 border-t hairline pt-10 sm:grid-cols-2">
              {prev ? (
                <Link href={prev.href} className="group panel flex items-center gap-4 p-5 hover:border-volt-400/40">
                  <ArrowLeft className="text-steel-500 transition-transform group-hover:-translate-x-1 group-hover:text-volt-300" />
                  <span>
                    <span className="eyebrow block">Previous</span>
                    <span className="mt-1 block font-medium text-steel-100">{prev.label}</span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={next.href} className="group panel flex items-center justify-end gap-4 p-5 text-right hover:border-volt-400/40">
                  <span>
                    <span className="eyebrow block">Next</span>
                    <span className="mt-1 block font-medium text-steel-100">{next.label}</span>
                  </span>
                  <ArrowRight className="text-steel-500 transition-transform group-hover:translate-x-1 group-hover:text-volt-300" />
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}

function Block({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index?: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28">
      <Reveal>
        <div className="mb-6 flex items-baseline gap-4 border-b hairline pb-4">
          {index !== undefined && <span className="font-mono text-xs tracking-[0.14em] text-volt-400">{pad2(index)}</span>}
          <h2 id={`${id}-h`} className="text-2xl font-semibold sm:text-[1.75rem]">
            {title}
          </h2>
        </div>
        {subtitle && <p className="-mt-2 mb-6 max-w-2xl text-sm leading-6 text-steel-400">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}

function SectionBlock({ section, index }: { section: ContentSection; index: number }) {
  const media = resolveMediaList(section.media);
  return (
    <Block id={section.id} index={index} title={section.title}>
      <div className="space-y-6">
        {section.body && (
          <Reveal className="prose-eng max-w-3xl">
            {section.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Reveal>
        )}
        {section.bullets && (
          <ul className="grid max-w-3xl gap-2 sm:grid-cols-2">
            {section.bullets.map((b) => (
              <li key={b} className="flex gap-3 rounded-[3px] border hairline bg-white/[0.015] px-3.5 py-2.5 text-[0.92rem] leading-6 text-steel-200">
                <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-volt-400" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        )}
        {section.specs && <SpecTable specs={section.specs} className="max-w-3xl" />}
        {section.diagram && <DiagramView diagram={section.diagram} />}
        {media.length > 0 && (
          <div className={media.length === 1 ? "max-w-3xl" : "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"}>
            {media.map((m, i) => (
              <MediaFrame key={m.caption} media={m} index={pad2(i + 1)} showCaption={m.available} aspect={media.length === 1 ? "aspect-[16/9]" : "aspect-[4/3]"} />
            ))}
          </div>
        )}
        {section.pending && <PendingNote className="max-w-3xl">{section.pending}</PendingNote>}
      </div>
    </Block>
  );
}
