import type { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import { PageHeader } from "@/components/ui/PageHeader";
import { SkillExplorer } from "@/components/skills/SkillExplorer";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Technical capabilities of Jacob Forrette — CAD and design, manufacturing, automation and controls, testing and reliability.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/skills", label: "Skills" }]}
        eyebrow={<span className="text-volt-300">Technical capabilities</span>}
        title="Skills"
        intro="Grouped by discipline and linked to the projects where they were used — evidence instead of self-rated percentages."
      />
      <div className="container-x py-14 sm:py-20">
        <SkillExplorer categories={skillCategories} />
      </div>
    </>
  );
}
