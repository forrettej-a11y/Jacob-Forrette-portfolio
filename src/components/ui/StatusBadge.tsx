import type { ProjectStatus } from "@/lib/types";
import { STATUS_LABEL, cn } from "@/lib/utils";

const STYLES: Record<ProjectStatus, { dot: string; text: string; ring: string }> = {
  completed: { dot: "bg-status-completed", text: "text-status-completed", ring: "border-status-completed/30" },
  "in-progress": { dot: "bg-status-progress status-pulse", text: "text-status-progress", ring: "border-status-progress/35" },
  research: { dot: "bg-status-research", text: "text-status-research", ring: "border-status-research/30" },
  planned: { dot: "bg-transparent border border-status-planned", text: "text-status-planned", ring: "border-status-planned/30 border-dashed" },
};

export function StatusBadge({
  status,
  className,
  size = "sm",
}: {
  status?: ProjectStatus;
  className?: string;
  size?: "sm" | "md";
}) {
  if (!status) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-dashed border-steel-600 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-400",
          className,
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full border border-steel-500" aria-hidden />
        Status to be confirmed
      </span>
    );
  }
  const s = STYLES[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-ink-950/60 font-mono uppercase tracking-[0.12em] backdrop-blur",
        size === "sm" ? "px-2.5 py-1 text-[0.68rem]" : "px-3 py-1.5 text-xs",
        s.ring,
        s.text,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden />
      {STATUS_LABEL[status]}
    </span>
  );
}
