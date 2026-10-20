import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about engineering roles, collaboration or technical questions.`,
};

export default function ContactPage() {
  const { email, linkedin, github } = site.contact;
  const channels = [
    { label: "Email", value: email, href: email ? `mailto:${email}` : "", icon: Mail },
    { label: "LinkedIn", value: linkedin ? linkedin.replace(/^https?:\/\/(www\.)?/, "") : "", href: linkedin, icon: LinkedIn },
    ...(github ? [{ label: "GitHub", value: github.replace(/^https?:\/\/(www\.)?/, ""), href: github, icon: GitHub }] : []),
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/contact", label: "Contact" }]}
        eyebrow={<span className="text-volt-300">Contact</span>}
        title="Let's talk engineering."
        intro="Questions about a project, an engineering role or a collaboration — send a message and I'll get back to you."
      />
      <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-5">Direct channels</p>
          <ul className="space-y-3">
            {channels.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[3px] border hairline text-steel-300">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow block text-[0.62rem]">{c.label}</span>
                    <span className={c.value ? "block truncate text-steel-100" : "block text-steel-600"}>{c.value || "Not yet published"}</span>
                  </span>
                  {c.value && <ArrowUpRight size={16} className="text-steel-500" />}
                </>
              );
              return (
                <li key={c.label}>
                  {c.value && c.href ? (
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 rounded-[4px] border hairline p-4 transition-colors hover:border-volt-400/50"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-[4px] border border-dashed border-[var(--line)] p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-10 border-t hairline pt-6 text-sm leading-6 text-steel-400">
            <p className="eyebrow mb-2">Interested in</p>
            Industrial automation and robotics, advanced manufacturing, CNC and equipment engineering, metal casting and additive manufacturing, and manufacturing reliability.
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </>
  );
}
