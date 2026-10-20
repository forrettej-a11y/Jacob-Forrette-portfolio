"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ResolvedModel } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Cube, Expand, Grid, Reset, Rotate, Close } from "@/components/ui/Icons";
import type { ViewPreset } from "./ModelCanvas";

const ModelCanvas = dynamic(() => import("./ModelCanvas"), {
  ssr: false,
  loading: () => <ViewerMessage>Initializing viewer…</ViewerMessage>,
});

function ViewerMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-full w-full place-items-center">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-steel-500">{children}</span>
    </div>
  );
}

const PRESETS: { id: ViewPreset; label: string }[] = [
  { id: "iso", label: "ISO" },
  { id: "front", label: "Front" },
  { id: "right", label: "Right" },
  { id: "top", label: "Top" },
];

/**
 * Interactive CAD viewer: rotate, zoom, pan, standard views, reset, wireframe and fullscreen.
 * Loads only when scrolled into view to keep pages fast.
 */
export function ModelViewer({ model }: { model: ResolvedModel }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [preset, setPreset] = useState<ViewPreset>("iso");
  const [nonce, setNonce] = useState(0);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [pseudoFull, setPseudoFull] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!pseudoFull) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPseudoFull(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [pseudoFull]);

  const setView = (p: ViewPreset) => {
    setPreset(p);
    setNonce((n) => n + 1);
  };

  const toggleFullscreen = useCallback(async () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (el.requestFullscreen) {
      try {
        await el.requestFullscreen();
      } catch {
        setPseudoFull((v) => !v);
      }
    } else {
      setPseudoFull((v) => !v); // iOS Safari fallback
    }
  }, []);

  const isFull = fullscreen || pseudoFull;
  const demo = !model.available;

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative overflow-hidden border hairline bg-ink-950",
        isFull ? "h-full w-full" : "aspect-[4/3] rounded-[4px] sm:aspect-[16/9]",
        pseudoFull && "fixed inset-0 z-[100] aspect-auto rounded-none",
      )}
      role="group"
      aria-label={`3D model viewer: ${model.title}${demo ? " (demonstration geometry)" : ""}`}
    >
      {inView ? (
        <ModelCanvas src={model.available ? model.src : undefined} preset={preset} nonce={nonce} wireframe={wireframe} autoRotate={autoRotate} />
      ) : (
        <ViewerMessage>3D viewer</ViewerMessage>
      )}

      {/* Header overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-3 sm:p-4">
        <div className="flex items-center gap-2 rounded-[3px] border hairline bg-ink-950/80 px-2.5 py-1.5 backdrop-blur">
          <Cube size={14} className="text-volt-400" />
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-200">{model.title}</span>
        </div>
        {demo && (
          <span className="rounded-[3px] border border-amber-300/40 bg-amber-300/10 px-2.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-amber-200 backdrop-blur">
            Demonstration geometry — not project CAD
          </span>
        )}
      </div>

      {/* Toolbar */}
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4">
        <div className="flex overflow-hidden rounded-[3px] border hairline bg-ink-950/85 backdrop-blur" role="group" aria-label="Standard views">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setView(p.id)}
              aria-pressed={preset === p.id}
              className={cn(
                "px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors",
                preset === p.id ? "bg-volt-500/20 text-volt-200" : "text-steel-400 hover:text-steel-100",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5">
          <ToolButton label="Reset camera" onClick={() => setView("iso")}>
            <Reset size={16} />
          </ToolButton>
          <ToolButton label="Toggle auto-rotate" pressed={autoRotate} onClick={() => setAutoRotate((v) => !v)}>
            <Rotate size={16} />
          </ToolButton>
          <ToolButton label="Toggle wireframe" pressed={wireframe} onClick={() => setWireframe((v) => !v)}>
            <Grid size={16} />
          </ToolButton>
          <ToolButton label={isFull ? "Exit fullscreen" : "View fullscreen"} onClick={toggleFullscreen}>
            {isFull ? <Close size={16} /> : <Expand size={16} />}
          </ToolButton>
        </div>
      </div>
    </div>
  );
}

function ToolButton({
  children,
  label,
  onClick,
  pressed,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={pressed}
      className={cn(
        "grid h-8 w-8 place-items-center rounded-[3px] border hairline bg-ink-950/85 backdrop-blur transition-colors",
        pressed ? "border-volt-400/60 text-volt-200" : "text-steel-300 hover:text-white",
      )}
    >
      {children}
    </button>
  );
}
