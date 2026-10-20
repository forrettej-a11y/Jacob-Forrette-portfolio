/**
 * Server-only helpers that check whether media, documents and CAD models
 * actually exist in /public. Pages are statically generated, so the check
 * runs at build time — add a file, redeploy, and the placeholder becomes
 * the real image / an enabled download automatically.
 */
import fs from "node:fs";
import path from "node:path";
import type {
  DocumentItem,
  MediaItem,
  ModelAsset,
  ResolvedDocument,
  ResolvedMedia,
  ResolvedModel,
} from "./types";

const PUBLIC_DIR = path.join(process.cwd(), "public");

function isRemote(src: string) {
  return /^https?:\/\//i.test(src);
}

function localPath(src: string) {
  return path.join(PUBLIC_DIR, decodeURIComponent(src.replace(/^\//, "")));
}

export function fileExists(src?: string): boolean {
  if (!src) return false;
  if (isRemote(src)) return true;
  try {
    return fs.statSync(localPath(src)).isFile();
  } catch {
    return false;
  }
}

function sizeLabel(src: string): string | undefined {
  if (isRemote(src)) return undefined;
  try {
    const bytes = fs.statSync(localPath(src)).size;
    if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  } catch {
    return undefined;
  }
}

export function resolveMedia(item: MediaItem): ResolvedMedia;
export function resolveMedia(item: MediaItem | undefined): ResolvedMedia | undefined;
export function resolveMedia(item: MediaItem | undefined): ResolvedMedia | undefined {
  if (!item) return undefined;
  const available = fileExists(item.src);
  const poster = item.poster && fileExists(item.poster) ? item.poster : undefined;
  return { ...item, poster, available };
}

export function resolveMediaList(items: MediaItem[] = []): ResolvedMedia[] {
  return items.map((m) => resolveMedia(m));
}

export function resolveDocuments(docs: DocumentItem[] = []): ResolvedDocument[] {
  return docs.map((d) => {
    const available = fileExists(d.file);
    return { ...d, available, sizeLabel: available && d.file ? sizeLabel(d.file) : undefined };
  });
}

export function resolveModels(models: ModelAsset[] = []): ResolvedModel[] {
  return models.map((m) => ({
    ...m,
    available: !!m.src && /\.(glb|gltf)$/i.test(m.src) && fileExists(m.src),
  }));
}
