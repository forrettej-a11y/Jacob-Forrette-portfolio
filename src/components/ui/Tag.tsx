import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[3px] border hairline bg-white/[0.02] px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-steel-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
