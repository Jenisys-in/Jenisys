import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = { title: "Page not found — Jenisys", robots: { index: false } };

export default function NotFound() {
  return (
    <>
    <section className="j-night relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
      <div className="j-wrap flex min-h-[70vh] flex-col items-start justify-center py-24">
        <p className="j-eyebrow mb-6">Error 404</p>
        <h1 className="font-display text-[clamp(96px,18vw,220px)] font-bold leading-none tracking-[-0.06em] bg-gradient-to-r from-navy via-volt to-signal bg-clip-text text-transparent">
          404
        </h1>
        <p className="j-lead mt-6">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="j-btn j-btn-primary">
            <span className="j-arrow" aria-hidden="true">←</span> Back to Home
          </Link>
          <Link href="/case-study" className="j-btn j-btn-secondary">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
