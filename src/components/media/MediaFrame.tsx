import Image from "next/image";
import type { ResolvedMedia } from "@/lib/types";
import { MEDIA_KIND_LABEL, cn } from "@/lib/utils";
import { Play } from "@/components/ui/Icons";

/**
 * Displays an image/video if the file exists, otherwise a drafting-style placeholder
 * frame labelled with what belongs there. Never shows stock or invented imagery.
 */
export function MediaFrame({
  media,
  className,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  showCaption = false,
  index,
}: {
  media: ResolvedMedia;
  className?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
  index?: string;
}) {
  const label = MEDIA_KIND_LABEL[media.kind];

  if (media.available && media.src) {
    return (
      <figure className={cn("group/media relative overflow-hidden rounded-[4px] border hairline bg-ink-850", aspect, className)}>
        {media.kind === "video" ? (
          <>
            {media.poster ? (
              <Image src={media.poster} alt={media.alt ?? media.caption} fill sizes={sizes} className="object-cover" />
            ) : (
              <video src={media.src} muted playsInline preload="metadata" className="h-full w-full object-cover" aria-label={media.alt ?? media.caption} />
            )}
            <span className="absolute inset-0 grid place-items-center bg-ink-950/30">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-ink-950/60 text-white backdrop-blur transition-transform group-hover/media:scale-110">
                <Play size={22} />
              </span>
            </span>
          </>
        ) : (
          <Image
            src={media.src}
            alt={media.alt ?? media.caption}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-700 ease-[var(--ease-drafting)] group-hover/media:scale-[1.03]"
          />
        )}
        {showCaption && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent px-4 pb-3 pt-10 text-sm text-steel-100">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={cn("corner-marks relative overflow-hidden rounded-[2px] border border-[var(--line)] bg-ink-850", aspect, className)}
      aria-label={`${label} placeholder: ${media.caption}`}
    >
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="hatch absolute inset-0" aria-hidden />
      {/* center crosshair */}
      <svg className="absolute inset-0 h-full w-full text-volt-400/25" aria-hidden preserveAspectRatio="none">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeDasharray="6 6" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeDasharray="6 6" />
      </svg>
      <div className="relative flex h-full flex-col justify-between p-4">
        <div className="flex items-start justify-between gap-2">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-volt-300/80">{label}</span>
          {index && <span className="font-mono text-[0.62rem] tracking-[0.16em] text-steel-500">{index}</span>}
        </div>
        <figcaption>
          <span className="block text-sm font-medium text-steel-200">{media.caption}</span>
          <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-steel-500">
            {media.kind === "video" ? "Video pending upload" : "Image pending upload"}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
