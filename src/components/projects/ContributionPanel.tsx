import type { Contribution } from "@/lib/types";
import { Check } from "@/components/ui/Icons";
import { PendingNote } from "@/components/ui/PendingNote";

/** Two-column panel that keeps personal contribution separate from team accomplishments. */
export function ContributionPanel({ contribution }: { contribution: Contribution }) {
  const { role, personal, team, teamMembers, note } = contribution;
  const hasTeam = (team && team.length > 0) || (teamMembers && teamMembers.length > 0);

  return (
    <div className="grid overflow-hidden rounded-[4px] border hairline md:grid-cols-2">
      <div className="relative bg-gradient-to-br from-volt-500/[0.08] to-transparent p-6 sm:p-8">
        <div className="absolute inset-y-0 left-0 w-[3px] bg-volt-500" aria-hidden />
        <p className="eyebrow text-volt-300">My contribution</p>
        {role && <p className="mt-3 text-xl font-semibold text-steel-50">{role}</p>}
        {personal.length > 0 ? (
          <ul className="mt-5 space-y-2.5">
            {personal.map((p) => (
              <li key={p} className="flex gap-3 text-[0.95rem] leading-6 text-steel-200">
                <Check size={16} className="mt-1 shrink-0 text-volt-400" />
                {p}
              </li>
            ))}
          </ul>
        ) : (
          <PendingNote className="mt-5" label="To be added">
            Individual responsibilities for this project.
          </PendingNote>
        )}
      </div>

      <div className="border-t hairline bg-white/[0.015] p-6 sm:p-8 md:border-l md:border-t-0">
        <p className="eyebrow">Team scope</p>
        {team && team.length > 0 ? (
          <ul className="mt-5 grid gap-2">
            {team.map((t) => (
              <li key={t} className="flex gap-3 text-[0.95rem] leading-6 text-steel-300">
                <span className="mt-2.5 h-px w-3 shrink-0 bg-steel-500" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        ) : (
          !hasTeam && <p className="mt-5 text-sm text-steel-500">Individual work.</p>
        )}
        {teamMembers && teamMembers.length > 0 && (
          <div className="mt-6 border-t hairline pt-5">
            <p className="eyebrow mb-3">Team members</p>
            <ul className="flex flex-wrap gap-2">
              {teamMembers.map((m) => (
                <li key={m.name} className="rounded-[3px] border hairline px-2.5 py-1 text-sm text-steel-200">
                  {m.name}
                  {m.role && <span className="ml-1.5 text-steel-500">· {m.role}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {note && <p className="mt-6 border-t hairline pt-4 text-xs leading-5 text-steel-500">{note}</p>}
      </div>
    </div>
  );
}
