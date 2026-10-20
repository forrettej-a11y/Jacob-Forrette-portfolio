import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getProject, projects, projectHref } from "@/data/projects";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";

type Params = Promise<{ slug: string }>;

/** Projects with their own dedicated page (`href`) redirect there instead. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  if (project.href) redirect(project.href);

  // Prev / next follow homepage order, skipping collection pages.
  const ordered = projects.filter((p) => !p.href);
  const i = ordered.indexOf(project);
  const prev = ordered[i - 1];
  const next = ordered[i + 1];

  return (
    <ProjectTemplate
      project={project}
      crumbs={[
        { href: "/projects", label: "Projects" },
        { href: `/projects/${project.slug}`, label: project.shortTitle ?? project.title },
      ]}
      prev={prev && { href: projectHref(prev), label: prev.shortTitle ?? prev.title }}
      next={next && { href: projectHref(next), label: next.shortTitle ?? next.title }}
    />
  );
}
