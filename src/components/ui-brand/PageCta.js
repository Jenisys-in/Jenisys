import Link from "next/link";

// Closing call-to-action band shared by inner pages. Copy is passed in by each page.
export default function PageCta({ eyebrow, title, text, label = "Start a conversation", href = "/contact" }) {
  return (
    <section className="j-night relative isolate overflow-hidden border-t border-line py-24 md:py-28">
      <div
        aria-hidden="true"
        className="absolute -z-10 left-1/2 top-full h-[560px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(20,226,249,.2), rgba(27,42,160,.35) 50%, transparent)" }}
      />
      <div className="j-wrap max-w-3xl">
        {eyebrow && <p className="j-eyebrow mb-4">{eyebrow}</p>}
        <h2 className="j-h2">{title}</h2>
        {text && <p className="j-lead mt-5">{text}</p>}
        <Link href={href} className="j-btn j-btn-primary mt-9">
          {label} <span className="j-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
