import Link from "next/link";
import { navigation, site } from "@/data/site";
import { GitHub, LinkedIn, Mail } from "@/components/ui/Icons";

/** Footer styled as a drawing title block. */
export function Footer() {
  const year = new Date().getFullYear();
  const { email, linkedin, github } = site.contact;

  return (
    <footer className="relative mt-10 border-t hairline bg-ink-950">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-semibold text-steel-50">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-steel-400">
              {site.title} · {site.subtitle}. Design, manufacturing, automation and the systems that keep equipment running.
            </p>
            <div className="mt-6 flex gap-2">
              {email && (
                <a href={`mailto:${email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-[3px] border hairline text-steel-300 hover:border-volt-400/50 hover:text-white">
                  <Mail />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-[3px] border hairline text-steel-300 hover:border-volt-400/50 hover:text-white">
                  <LinkedIn />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-[3px] border hairline text-steel-300 hover:border-volt-400/50 hover:text-white">
                  <GitHub />
                </a>
              )}
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Index</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {[{ href: "/", label: "Home" }, ...navigation, { href: "/contact", label: "Contact" }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-steel-300 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-4">Education</p>
            <p className="text-sm leading-6 text-steel-300">
              Wentworth Institute of Technology
              <br />
              <span className="text-steel-500">B.S. Electromechanical Eng. · M.S. Mechanical Eng.</span>
            </p>
          </div>
        </div>

        {/* Title block */}
        <div className="mt-14 grid grid-cols-2 border hairline font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel-500 sm:grid-cols-4">
          {[
            ["Drawn by", site.name],
            ["Discipline", "Electromechanical / Mechanical"],
            ["Document", "Engineering Portfolio"],
            ["Rev", `© ${year}`],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-r hairline px-3 py-2.5 last:border-r-0 sm:border-b-0">
              <span className="block text-steel-600">{k}</span>
              <span className="mt-1 block text-steel-300">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
