import { cn } from "@/lib/utils";
import { Clock } from "./Icons";

/** A clearly-marked "content pending" block — used instead of inventing details. */
export function PendingNote({ children, className, label = "Documentation pending" }: { children: React.ReactNode; className?: string; label?: string }) {
  return (
    <div className={cn("flex gap-3 rounded-[4px] border border-dashed border-steel-600/70 bg-white/[0.015] px-4 py-3.5", className)}>
      <Clock size={16} className="mt-0.5 shrink-0 text-steel-500" />
      <div className="text-sm leading-6">
        <span className="eyebrow mr-2 text-steel-400">{label}</span>
        <span className="text-steel-400">{children}</span>
      </div>
    </div>
  );
}
