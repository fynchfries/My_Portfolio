const nav = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const stack = [
  "C++",
  "C#",
  ".NET",
  "WinForms",
  "Git",
  "VS Code",
];

const experience = [
  {
    term: "2026",
    title: "Independent Study — Data Structures & Algorithms",
    detail:
      "Self-directed practice using a custom test-question generator to drill arrays, rotation, and search problems ahead of coursework.",
  },
  {
    term: "2026",
    title: "Course Project — Payroll Calculator",
    detail:
      "Built a full WinForms payroll app from spec: overtime rules, bracket-based tax logic, and defensive input handling.",
  },
  {
    term: "2025 – 2026",
    title: "Coursework — C++ Fundamentals",
    detail:
      "Arrays, pass-by-reference vs. pass-by-value, pointer decay, and sorting — favoring hands-on debugging over theory alone.",
  },
  {
    term: "2025",
    title: "Presentation — Philippine History",
    detail:
      "Co-presented “Meaning and Relevance of History,” researching and designing an eleven-slide deck with a co-presenter.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-sm font-semibold"
          >
            Theo Ermino
          </a>

          <nav className="hidden gap-6 text-sm text-text-soft sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-amber"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-3xl px-6 pb-16 pt-16 sm:pt-24"
      >
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-soft">
            <span className="glow-dot h-1.5 w-1.5 rounded-full bg-amber" />
            Currently studying: Data Structures &amp; Algorithms
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl">
            Theo Ermino
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-soft">
            Computer science student. I build small, working things in C++ and
            C# while I learn — and I&apos;m most interested in the moment a bug
            finally makes sense.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="#about"
              className="rounded-md bg-amber px-4 py-2 font-medium text-bg transition hover:opacity-90"
            >
              About me
            </a>

            <a
              href="#contact"
              className="rounded-md border border-border px-4 py-2 text-text transition hover:border-amber hover:text-amber"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex gap-5 font-mono text-xs uppercase tracking-wide text-text-muted">
            <a
              href="https://github.com/yourhandle"
              className="transition hover:text-amber"
            >
              github ↗
            </a>

            <a
              href="https://linkedin.com/in/yourhandle"
              className="transition hover:text-amber"
            >
              linkedin ↗
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-14">
        <SectionHeading number="01" title="about" />

        <p className="max-w-xl text-base leading-relaxed text-text-soft">
          I&apos;m a computer science student who learns best by breaking
          things and reading the stack trace. Most of my time goes into
          coursework in C++ and C#, but I keep a running list of side
          exercises to practice outside of class deadlines. I care more about
          writing code I can explain line by line than code that just happens
          to work.
        </p>
      </section>

      {/* Stack */}
      <section id="stack" className="mx-auto max-w-3xl px-6 py-14">
        <SectionHeading number="02" title="stack" />

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-text-soft"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-3xl px-6 py-14">
        <SectionHeading number="03" title="experience" />

        <div>
          {experience.map((item, i) => (
            <div
              key={item.title}
              className={`grid gap-1 py-5 sm:grid-cols-[110px_1fr] sm:gap-6 ${
                i !== experience.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <p className="font-mono text-xs text-amber">{item.term}</p>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-medium">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-text-soft">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-14">
        <SectionHeading number="04" title="contact" />

        <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <p className="max-w-lg text-base leading-relaxed text-text-soft">
            Open to internships, small freelance builds, and anyone who wants
            to talk about data structures at 2am.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href="mailto:you@example.com"
              className="rounded-md bg-amber px-4 py-2 text-bg transition hover:opacity-90"
            >
              you@example.com
            </a>

            <a
              href="https://github.com/yourhandle"
              className="rounded-md border border-border px-4 py-2 text-text transition hover:border-amber hover:text-amber"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourhandle"
              className="rounded-md border border-border px-4 py-2 text-text transition hover:border-amber hover:text-amber"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <p className="mx-auto max-w-3xl font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Theo Ermino — built with Next.js
        </p>
      </footer>
    </div>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-sm text-amber">{number}</span>

      <span className="h-px flex-1 bg-border" />

      <h2 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-widest text-text-soft">
        {title}
      </h2>
    </div>
  );
}