import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { castInSteelYears, getCastYear } from "@/data/cast-in-steel";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return castInSteelYears.map((y) => ({ slug: y.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const y = getCastYear(slug);
  if (!y) return {};
  return {
    title: `${y.title} · Cast in Steel`,
    description: y.summary,
    openGraph: { title: `${y.title} · Cast in Steel`, description: y.summary },
  };
}

export default async function CastYearPage({ params }: { params: Params }) {
  const { slug } = await params;
  const y = getCastYear(slug);
  if (!y) notFound();

  const i = castInSteelYears.indexOf(y);
  const prev = castInSteelYears[i - 1];
  const next = castInSteelYears[i + 1];

  return (
    <ProjectTemplate
      project={y}
      crumbs={[
        { href: "/cast-in-steel", label: "Cast in Steel" },
        { href: `/cast-in-steel/${y.slug}`, label: y.shortTitle ?? y.title },
      ]}
      prev={prev && { href: `/cast-in-steel/${prev.slug}`, label: prev.title }}
      next={next && { href: `/cast-in-steel/${next.slug}`, label: next.title }}
    />
  );
}
