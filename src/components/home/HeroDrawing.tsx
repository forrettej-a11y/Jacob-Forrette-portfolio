"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

/**
 * Animated technical drawing used as the hero backdrop when no hero photo is supplied.
 * A generic flanged shaft in section view with centerlines, hatching and dimensions —
 * decorative only, not a drawing of any specific project part.
 */
const draw = (delay: number, duration = 1.6) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] as const }, opacity: { delay, duration: 0.2 } },
});

export function HeroDrawing() {
  const ref = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={ref}
      className="absolute inset-0"
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onPointerLeave={() => setCursor(null)}
      aria-hidden
    >
      <svg viewBox="0 0 800 560" className="absolute right-[-35%] top-[42%] w-[150%] max-w-none -translate-y-1/2 text-volt-400 opacity-20 sm:right-[-20%] sm:w-[110%] sm:opacity-30 lg:right-[-1%] lg:top-1/2 lg:w-[56%] lg:opacity-75" fill="none">
        <defs>
          <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" />
          </pattern>
        </defs>

        {/* Centerline */}
        <motion.path d="M60 280 H760" stroke="currentColor" strokeOpacity="0.45" strokeDasharray="22 6 4 6" {...draw(0.1, 1.2)} />

        {/* Section outline — upper half */}
        <motion.path
          d="M120 280 V230 H210 V150 H260 V120 H470 V150 H520 V200 H690 V280"
          stroke="currentColor"
          strokeWidth="1.6"
          {...draw(0.35)}
        />
        {/* lower half */}
        <motion.path
          d="M120 280 V330 H210 V410 H260 V440 H470 V410 H520 V360 H690 V280"
          stroke="currentColor"
          strokeWidth="1.6"
          {...draw(0.45)}
        />
        {/* Bore */}
        <motion.path d="M260 250 H520 M260 310 H520" stroke="currentColor" strokeOpacity="0.7" {...draw(0.9, 1)} />

        {/* Hatched section faces */}
        <motion.path
          d="M260 120 H470 V150 H520 V250 H260 Z"
          fill="url(#hatch)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
        <motion.path
          d="M260 440 H470 V410 H520 V310 H260 Z"
          fill="url(#hatch)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        />

        {/* Bolt-circle holes in flange */}
        {[180, 380].map((y, i) => (
          <motion.circle key={y} cx="235" cy={y} r="9" stroke="currentColor" strokeOpacity="0.8" {...draw(1.2 + i * 0.1, 0.8)} />
        ))}

        {/* Dimension: overall length */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 0.8 }} stroke="currentColor" strokeOpacity="0.55">
          <path d="M120 470 V500 M690 470 V500 M120 492 H690" />
          <path d="M120 492 l10 -4 v8 Z M690 492 l-10 -4 v8 Z" fill="currentColor" />
        </motion.g>
        <motion.text x="405" y="485" textAnchor="middle" className="fill-current font-mono" fontSize="12" fillOpacity="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>
          L — REF
        </motion.text>

        {/* Dimension: flange diameter */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 0.8 }} stroke="currentColor" strokeOpacity="0.55">
          <path d="M470 120 H560 M470 440 H560 M548 120 V440" />
          <path d="M548 120 l-4 10 h8 Z M548 440 l-4 -10 h8 Z" fill="currentColor" />
        </motion.g>
        <motion.text x="562" y="284" className="fill-current font-mono" fontSize="12" fillOpacity="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>
          Ø D
        </motion.text>

        {/* Section callout */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
          <circle cx="720" cy="120" r="18" stroke="currentColor" strokeOpacity="0.6" />
          <text x="720" y="125" textAnchor="middle" className="fill-current font-mono" fontSize="13" fillOpacity="0.85">
            A
          </text>
          <text x="690" y="160" className="fill-current font-mono" fontSize="10" fillOpacity="0.5">
            SECTION A–A
          </text>
        </motion.g>
      </svg>

      {cursor && (
        <div className="pointer-events-none absolute hidden lg:block" style={{ left: cursor.x, top: cursor.y }}>
          <span className="absolute -left-3 top-0 h-px w-6 bg-volt-400/60" />
          <span className="absolute -top-3 left-0 h-6 w-px bg-volt-400/60" />
          <span className="absolute left-3 top-3 whitespace-nowrap font-mono text-[0.6rem] tracking-[0.1em] text-volt-300/80">
            X {(cursor.x / 10).toFixed(2)} &nbsp;Y {(cursor.y / 10).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}
