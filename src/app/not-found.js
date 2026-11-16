import Link from "next/link";
import Footer from "@/components/Footer";
import { LineStraight } from "@/components/ui-brand/Line";

export default function NotFound() {
  return (
    <div className="j-night">
      <section className="j-wrap flex min-h-[70vh] flex-col items-start justify-center py-24">
        <p className="j-eyebrow mb-6">Error 404</p>
        <h1 className="j-display text-ink">This page doesn’t exist.</h1>
        <LineStraight className="mt-8 max-w-md" />
        <p className="j-lead mt-6">It may have moved. Try the work, or get in touch.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="j-btn j-btn-primary"><span className="j-arrow" aria-hidden="true">←</span> Back to home</Link>
          <Link href="/case-study" className="j-btn j-btn-secondary">See our work</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
