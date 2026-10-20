import { ButtonLink } from "@/components/ui/Button";
import { ArrowLeft } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-4 pt-24">
      <div className="blueprint-grid fade-mask-radial pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-volt-400">ERR 404 · PART NOT FOUND</p>
        <h1 className="steel-text mt-6 text-5xl font-semibold sm:text-7xl">Out of tolerance.</h1>
        <p className="mx-auto mt-6 max-w-md text-steel-400">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-10">
          <ButtonLink href="/">
            <ArrowLeft size={16} /> Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
