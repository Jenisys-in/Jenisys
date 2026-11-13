import Link from "next/link";
import Footer from "../Footer";
import CalendarButton from "../home/CalendarButton";

// NOTE: stats and testimonials below are carried over unchanged from the previous page.
// They are listed in the growth plan's "Credibility clean-up" for the owner to confirm or remove.
const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "15+", label: "Industries Served" },
  { number: "24/7", label: "Support Available" },
];

const chips = ["Innovation First", "Client Success", "Quality Driven"];

const milestones = [
  { year: "2020", title: "Founded", description: "Jenisys was born with a mission to transform businesses through technology." },
  { year: "2021", title: "First Major Client", description: "We delivered our first enterprise-level solution, setting a new standard for excellence." },
  { year: "2022", title: "Team Expansion", description: "Grew our expert team to over 15 professionals, expanding our capabilities across key domains." },
  { year: "2023", title: "Global Reach", description: "Extended our services, successfully delivering projects to clients across three continents." },
  { year: "2024", title: "Innovation Hub", description: "Established a dedicated innovation lab to push the boundaries of AI and emerging technologies." },
];

const coreValues = [
  { title: "Customer Centric Approach", description: "We don't just build solutions; we build relationships. Your business needs and goals are always our top priority" },
  { title: "Unmatched Expertise", description: "Our team consists of seasoned experts with deep industry experience, ensuring your project is in the hands of the best." },
  { title: "Continuous Innovation", description: "We are committed to pushing boundaries and leveraging cutting-edge technology to give you a true competitive edge." },
  { title: "Value Driven Services", description: "We focus on delivering tangible results and impactful benefits, ensuring our work always enhances your business outcomes." },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "Flutter", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "Design", category: "UI/UX" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CTO", company: "TechCorp", content: "Jenisys transformed our entire digital infrastructure. Their expertise and dedication are unmatched." },
  { name: "Michael Chen", role: "Founder", company: "StartupX", content: "Working with Jenisys was a game-changer. They delivered beyond our expectations and within timeline." },
  { name: "Emma Davis", role: "VP Digital", company: "Enterprise Inc", content: "The level of innovation and technical excellence Jenisys brings is remarkable. Highly recommended!" },
];

export default function AboutUs() {
  return (
    <div className="j-night">
      <section className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="absolute inset-0 -z-10 j-grid-bg" />
        <div className="j-wrap pt-16 pb-20 md:pt-24 md:pb-24">
          <p className="j-eyebrow mb-5">Where Partnership Meets Performance</p>
          <h1 className="j-h1">About Jenisys</h1>
          <p className="j-lead mt-7">
            We&apos;re not just a tech company; we&apos;re your partner in growth. At Jenisys, we build custom software and digital solutions designed to help businesses like yours thrive. We believe that the right technology, built with care and expertise, can be the ultimate advantage.
          </p>
          <a href="#our-journey" className="j-btn j-btn-secondary mt-10">
            Discover How We Partner with You <span className="j-arrow">→</span>
          </a>
        </div>
        <dl className="j-wrap grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-8 ${i > 0 ? "md:border-l" : ""} ${i % 2 ? "border-l" : ""} border-line md:pl-8 ${i % 2 ? "pl-6" : ""}`}>
              <dd className="font-display text-5xl font-bold tracking-[-0.04em] text-ink tabular-nums">{s.number}</dd>
              <dt className="mt-2 text-sm text-ink-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20 md:py-28">
        <div className="j-wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="j-h2">Who We Are</h2>
            <div className="mt-6 flex flex-col gap-5 text-[17px] leading-relaxed text-ink-muted max-w-[62ch]">
              <p>
                At Jenisys, we&apos;re a team of passionate developers, designers, and strategists. We founded this company on a simple belief: that every business deserves access to world-class technology without the impersonal experience of a giant corporation.
              </p>
              <p>Our journey has been about building strong relationships and delivering innovative solutions that create real, lasting value for our clients.</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li key={c} className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4">
            <div className="j-panel j-light-edge p-7">
              <h3 className="j-eyebrow mb-3">Our Mission</h3>
              <p className="font-display text-xl leading-snug text-ink">To empower businesses with innovative technology solutions that drive sustainable growth and competitive advantage.</p>
            </div>
            <div className="rounded-3xl border border-line p-7">
              <h3 className="j-eyebrow mb-3">Our Vision</h3>
              <p className="font-display text-xl leading-snug text-ink">To be the global leader in transformative digital solutions that shape the future of business.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="our-journey" className="scroll-mt-24 bg-deep border-y border-line py-20 md:py-28">
        <div className="j-wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h2 className="j-h2">Our Journey</h2>
            <p className="j-lead mt-5">From humble beginnings to industry leadership, here&apos;s how we&apos;ve grown and evolved.</p>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden="true" className="absolute left-[39px] top-2 bottom-2 w-px bg-gradient-to-b from-navy via-volt to-signal" />
            {milestones.map((m) => (
              <li key={m.year} className="relative grid grid-cols-[80px_1fr] gap-6 pb-12 last:pb-0">
                <span className="relative z-10 self-start rounded-full border border-line bg-deep px-3 py-1 text-center font-mono text-sm text-signal">{m.year}</span>
                <div>
                  <h3 className="j-h3">{m.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-ink-muted">{m.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="j-wrap">
          <h2 className="j-h2">Our Core Values</h2>
          <p className="j-lead mt-5">The principles that guide every decision we make and every solution we deliver.</p>
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v) => (
              <li key={v.title} className="bg-void p-7 transition-colors duration-200 hover:bg-deep">
                <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="j-wrap grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <h2 className="j-h2">Our Technology Stack</h2>
            <p className="j-lead mt-5">We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.</p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
            {techStack.map((t) => (
              <li key={t.name} className="bg-void px-5 py-6">
                <p className="font-display text-lg font-semibold text-ink">{t.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">{t.category}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-deep border-y border-line py-20 md:py-28">
        <div className="j-wrap">
          <h2 className="j-h2">What Our Clients Say</h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name} className="flex flex-col rounded-3xl border border-line p-7">
                <blockquote className="text-[17px] leading-relaxed text-ink">&ldquo;{t.content}&rdquo;</blockquote>
                <p className="mt-auto pt-6 font-mono text-[13px] text-ink-muted">
                  <span className="text-ink">{t.name}</span> · {t.role}, {t.company}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 md:py-28">
        <div
          aria-hidden="true"
          className="absolute -z-10 left-1/2 top-full h-[560px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
          style={{ background: "radial-gradient(closest-side, rgba(20,226,249,.2), rgba(27,42,160,.35) 50%, transparent)" }}
        />
        <div className="j-wrap max-w-3xl">
          <h2 className="j-h2">Ready to Transform Your Business?</h2>
          <p className="j-lead mt-5">Let&apos;s discuss how we can help you achieve your digital transformation goals and drive your business forward.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="j-btn j-btn-primary">
              Start Your Project <span className="j-arrow">→</span>
            </Link>
            <CalendarButton className="j-btn j-btn-secondary">Schedule a Consultation</CalendarButton>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
