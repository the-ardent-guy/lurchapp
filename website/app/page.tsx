import Link from "next/link";

const APP_URL = "https://lurch-app.vercel.app";

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      className="nav-bar"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(13,13,11,0.9)",
        borderBottom: "1px solid rgba(242,237,227,0.06)",
      }}
    >
      <span className="lurch-logo text-cream" style={{ fontSize: "1.6rem" }}>Lurch</span>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/reads" className="fine-print text-gray-lurch" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>READS</Link>
        <Link href="/shop" className="fine-print" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--acid)" }}>MERCH</Link>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: "0.6rem 1.5rem", fontSize: "0.72rem" }}
        >
          Try the App →
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="bg-black-lurch"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "clamp(6.5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 5vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(80vw, 700px)", height: "min(80vw, 700px)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(123,29,42,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* LURCH stamp */}
      <div className="anim-1" style={{ position: "relative", maxWidth: "100%", marginBottom: "clamp(1rem, 3vw, 2.5rem)", lineHeight: 1 }}>
        <span
          aria-hidden
          className="lurch-logo"
          style={{
            fontSize: "clamp(3.5rem, 19vw, 13rem)",
            color: "var(--oxblood)",
            position: "absolute", top: "8px", left: "8px",
            userSelect: "none", lineHeight: 1, pointerEvents: "none",
          }}
        >Lurch</span>
        <h1 className="lurch-logo text-cream" style={{ fontSize: "clamp(3.5rem, 19vw, 13rem)", position: "relative", lineHeight: 1 }}>
          Lurch
        </h1>
      </div>

      {/* Two-line headline */}
      <div className="anim-2" style={{ marginBottom: "clamp(1.25rem, 3vw, 2rem)" }}>
        <p className="headline text-cream" style={{ fontSize: "clamp(1.9rem, 5vw, 4.25rem)", lineHeight: 1.05 }}>
          We match you
        </p>
        <p className="headline" style={{ fontSize: "clamp(1.9rem, 5vw, 4.25rem)", lineHeight: 1.05, color: "#E94057" }}>
          based on your trauma.
        </p>
      </div>

      {/* Subline */}
      <p
        className="anim-2 headline-italic"
        style={{
          fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
          color: "var(--gray)",
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
        }}
      >
        A dating app, finally honest.
      </p>

      {/* CTA */}
      <div className="anim-3">
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: "1rem 2.5rem", fontSize: "0.85rem" }}
        >
          Try the App →
        </a>
      </div>

      {/* Bottom ticker */}
      <div
        className="anim-4"
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem 1.5rem",
          alignItems: "center",
        }}
      >
        {(["26K downloads", "0 marriages", "∞ therapy bills"] as const).map((s, i) => (
          <span key={i} className="fine-print" style={{ color: "rgba(242,237,227,0.18)", fontSize: "0.58rem", letterSpacing: "0.2em" }}>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── YOU ON A CARD ────────────────────────────────────────────────────────────

function YouOnACard() {
  const prompts = [
    {
      q: "The way to my heart is",
      a: "through my therapist, apparently.",
    },
    {
      q: "I'm looking for",
      a: "something I cannot name but will definitely ruin.",
    },
    {
      q: "A shower thought I recently had",
      a: "why do I keep dating the same person in different bodies.",
    },
  ];

  return (
    <section
      className="bg-black-soft"
      style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      <div className="container-lurch">
        <div className="you-on-a-card-grid">

          {/* Left — editorial copy */}
          <div>
            <p className="fine-print" style={{ color: "var(--acid)", letterSpacing: "0.2em", marginBottom: "2rem" }}>
              WHAT THEY DID TO YOU
            </p>

            <h2 className="headline text-cream" style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 1,
              marginBottom: "2.5rem",
            }}>
              You are<br />now a card.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--gray)" }}>
                A photo. An age. A job title. Three prompts to explain your entire existence to a stranger on their toilet.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--gray)" }}>
                You set a radius. You picked preferences. You agreed to terms and conditions you didn&apos;t read.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--gray)" }}>
                You are swiped left more than you will ever know.
              </p>
            </div>

            <p className="headline" style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              color: "var(--acid)",
              lineHeight: 1,
            }}>
              Go touch<br />some grass.
            </p>
          </div>

          {/* Right — mock dating profile */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              background: "#1A1714",
              borderRadius: "20px",
              padding: "1.5rem",
              maxWidth: "320px",
              width: "100%",
              border: "1px solid var(--border-dark)",
            }}>
              {/* Mock photo */}
              <div style={{
                height: "200px",
                background: "linear-gradient(150deg, #7B1D2A 0%, #0D0D0B 100%)",
                borderRadius: "12px",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "flex-end",
                padding: "1rem",
                position: "relative",
                overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: "1.5rem", right: "1.5rem",
                  width: "64px", height: "64px", borderRadius: "50%",
                  background: "rgba(242,237,227,0.05)",
                }} />
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.2rem", color: "var(--cream)", lineHeight: 1.1 }}>
                    Priya, 27
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "rgba(242,237,227,0.5)" }}>
                    Mumbai · UX Designer
                  </p>
                </div>
              </div>

              {/* Three prompts */}
              {prompts.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem",
                    background: "#252520",
                    borderRadius: "10px",
                    marginBottom: i < 2 ? "0.75rem" : 0,
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                    color: "var(--gray)", letterSpacing: "0.1em",
                    textTransform: "uppercase", marginBottom: "0.4rem",
                  }}>
                    {p.q}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-display)", fontStyle: "italic",
                    fontSize: "0.9rem", color: "var(--cream)", lineHeight: 1.45,
                  }}>
                    {p.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────────────

function Features() {
  const items = [
    {
      num: "01",
      name: "Wound\nMatching™",
      copy: "We don't match on interests. We match on what left a mark. Your attachment history is the algorithm.",
      imgLeft: true,
    },
    {
      num: "02",
      name: "Ghost\nProbability",
      copy: "Every profile has a score. Priya's is 87%. You know this going in. You'll swipe right anyway.",
      imgLeft: false,
    },
    {
      num: "03",
      name: "Ex on\nRecord",
      copy: "Your last match's ex left a review. It's blurred. ₹299 to read it. You already know what it says.",
      imgLeft: true,
    },
  ];

  return (
    <section className="bg-cream" style={{ padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <div className="container-lurch">
        <p className="section-label" style={{ color: "var(--black)", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          WHAT LURCH ACTUALLY IS
        </p>

        {items.map((item, i) => (
          <div key={item.num}>
            <div
              className="feature-row"
              style={{ flexDirection: item.imgLeft ? "row" : "row-reverse" }}
            >
              {/* Image — swap this div for an <img> when you have photos */}
              <div style={{
                flex: "0 0 42%",
                aspectRatio: "3/4",
                background: "var(--black-soft)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "flex-end",
                padding: "1.5rem",
              }}>
                <p className="fine-print" style={{ color: "rgba(242,237,227,0.1)", letterSpacing: "0.2em", fontSize: "0.55rem" }}>
                  — photo —
                </p>
              </div>

              {/* Text */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(1rem, 3vw, 2rem) 0" }}>
                <p className="fine-print" style={{ color: "#9A8F85", letterSpacing: "0.2em", marginBottom: "1.25rem" }}>
                  {item.num}
                </p>
                <h3
                  className="headline"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: "var(--black)",
                    lineHeight: 1,
                    marginBottom: "1.75rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.name}
                </h3>
                <div style={{ width: "2.5rem", height: "1px", background: "var(--oxblood)", marginBottom: "1.5rem", opacity: 0.5 }} />
                <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4A4540", maxWidth: "380px" }}>
                  {item.copy}
                </p>
              </div>
            </div>

            {i < items.length - 1 && (
              <div style={{ height: "1px", background: "var(--border-light)", margin: "clamp(3rem, 6vw, 5rem) 0" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

function Testimonials() {
  const quotes = [
    {
      text: "I matched with my ex-girlfriend's cousin. We both recognised each other immediately. We both swiped right anyway. It's been seven months.",
      city: "Mumbai · 29",
      source: "self-reported · verified by mutual",
    },
    {
      text: "My mother found my Bumble profile. She sent it to my maasi. My maasi sent it to someone in Coimbatore. He texted me directly. My mother considers this a success.",
      city: "Madurai · 31",
      source: "shaadi.com crossover event · outcome: pending",
    },
    {
      text: "My therapist asked how many apps I was on. I said two. She knew I was lying. She let it go. The next session she said she'd looked up my profile. It was a different kind of session.",
      city: "Delhi · 27",
      source: "dropped out of therapy · came back · dropped out again",
    },
    {
      text: "I have excellent taste in people I will never be compatible with. The algorithm learned this about me before I did. It kept matching me anyway. That's the product.",
      city: "Hyderabad · 26",
      source: "3 years on Hinge · referred to us by his own loneliness",
    },
  ];

  return (
    <section style={{ background: "var(--black)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <div className="container-lurch">
        <p className="section-label" style={{ color: "rgba(242,237,227,0.3)", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          REAL PEOPLE, REAL DAMAGE
        </p>

        {quotes.map((q, i) => (
          <div key={i}>
            <div style={{ paddingBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                color: "var(--cream)",
                lineHeight: 1.35,
                marginBottom: "1.75rem",
                maxWidth: "900px",
              }}>
                &ldquo;{q.text}&rdquo;
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "flex-end" }}>
                <p className="fine-print" style={{ fontSize: "0.65rem", color: "var(--gray)", letterSpacing: "0.12em", marginBottom: "0.25rem" }}>
                  {q.city}
                </p>
                <p className="fine-print" style={{ fontSize: "0.58rem", color: "var(--oxblood-mid)", letterSpacing: "0.1em" }}>
                  {q.source}
                </p>
              </div>
            </div>
            {i < quotes.length - 1 && (
              <div style={{ height: "1px", background: "var(--border-dark)", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── ATTACHMENT ENGINE ───────────────────────────────────────────────────────

function AttachmentEngine() {
  const profiles = [
    { pairing: "Anxious × Avoidant", copy: "You pursue. They withdraw. You'll both call it chemistry.", dark: false },
    { pairing: "Avoidant × Avoidant", copy: "Stable. Cool. Dead inside.", dark: false },
    { pairing: "Anxious × Anxious", copy: "Intensity. Codependency. Couples therapy by month three.", dark: false },
    { pairing: "Secure × Anyone", copy: "Not available. They're not here. They met someone through their actual life.", dark: true },
  ];

  return (
    <section className="bg-cream section">
      <div className="container-lurch">
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)", maxWidth: "680px" }}>
          <h2 className="headline" style={{ fontSize: "clamp(1.75rem, 3.6vw, 3rem)", color: "var(--black)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            You&apos;ve been on three apps.<br />
            You have a type.<br />
            <em>The outcome is always the same.</em>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#4A4540", marginBottom: "0.5rem" }}>
            Lurch doesn&apos;t fix that. We just name it.
          </p>
          <p className="fine-print" style={{ fontSize: "0.72rem", lineHeight: 1.6, color: "#9A8F85" }}>
            There are four attachment styles. You have one. You don&apos;t get to choose.
          </p>
        </div>

        <div className="attachment-grid">
          {profiles.map((p) => (
            <div
              key={p.pairing}
              style={{
                background: p.dark ? "var(--black)" : "var(--cream)",
                padding: "2.5rem 2rem",
              }}
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                color: p.dark ? "var(--cream)" : "var(--black)",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}>
                {p.pairing}
              </p>
              <div style={{
                borderTop: `1px solid ${p.dark ? "rgba(242,237,227,0.15)" : "var(--oxblood)"}`,
                marginBottom: "1.25rem",
                opacity: p.dark ? 1 : 0.4,
              }} />
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: p.dark ? "rgba(242,237,227,0.6)" : "#4A4540" }}>
                {p.copy}
              </p>
              {p.dark && (
                <p className="fine-print" style={{ marginTop: "1rem", fontSize: "0.65rem", color: "var(--acid)" }}>
                  If you&apos;re reading this, you already know.
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="fine-print" style={{ marginTop: "2rem", color: "#9A8F85" }}>
          Attachment profiles developed in partnership with no licensed therapists whatsoever.
        </p>
      </div>
    </section>
  );
}

// ─── TRY BETA ────────────────────────────────────────────────────────────────

function TryBeta() {
  return (
    <section
      className="bg-black-lurch"
      style={{
        padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 5rem)",
        textAlign: "center",
        borderTop: "1px solid var(--border-dark)",
      }}
    >
      <div className="container-lurch">
        <p className="fine-print" style={{ color: "var(--gray)", letterSpacing: "0.2em", marginBottom: "2rem" }}>
          OPEN BETA
        </p>
        <h2
          className="headline text-cream"
          style={{ fontSize: "clamp(4rem, 14vw, 11rem)", lineHeight: 0.95, marginBottom: "2.5rem" }}
        >
          Try it.
        </h2>
        <p style={{
          fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)",
          color: "var(--gray)",
          lineHeight: 1.7,
          maxWidth: "460px",
          margin: "0 auto 3rem",
        }}>
          Open beta. No data collected. No algorithm running.<br />
          Just disappointment, finally honest about itself.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-acid"
        >
          Open the App →
        </a>
        <p className="fine-print" style={{ marginTop: "2.5rem", color: "rgba(242,237,227,0.15)", fontSize: "0.58rem", letterSpacing: "0.2em" }}>
          EST. 2025 · INDIA EDITION · WORKS BEST WITH UNRESOLVED FEELINGS
        </p>
      </div>
    </section>
  );
}

// ─── THE SCIENCE ─────────────────────────────────────────────────────────────

function Science() {
  const stats = [
    {
      number: "26K+",
      unit: "participants",
      copy: "Across 23 peer-reviewed studies, dating app users showed significantly worse outcomes for depression, anxiety, and loneliness than non-users.",
      url: "https://doi.org/10.1016/j.chb.2025.108879",
      label: "Sharabi et al., 2026 — Computers in Human Behavior",
    },
    {
      number: "19%",
      unit: "ghosted annually",
      copy: "19.3% of online daters report being ghosted in the past year. 23.2% admit to doing the ghosting. Nobody downloaded the app to become this.",
      url: "https://www.redalyc.org/journal/2710/271066946001/html/",
      label: "Navarro et al., 2020 — Escritos de Psicología",
    },
    {
      number: "↓",
      unit: "self-worth",
      copy: "Tinder users reported significantly lower self-esteem than non-users. The platform monetising your loneliness is also monetising your insecurity.",
      url: "https://doi.org/10.1016/j.bodyim.2017.02.006",
      label: "Strubel & Petrie, 2017 — Body Image, Elsevier",
    },
  ];

  return (
    <section className="bg-oxblood section">
      <div className="container-lurch">
        <p className="section-label" style={{ color: "rgba(242,237,227,0.45)", textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          THE PEER-REVIEWED CASE AGAINST THIS
        </p>
        <div className="science-grid">
          {stats.map((s, i) => (
            <div
              key={s.number}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "clamp(2rem, 4vw, 4rem) clamp(2rem, 4vw, 3.5rem)",
                borderRight: i < stats.length - 1 ? "1px solid rgba(242,237,227,0.12)" : "none",
              }}
            >
              <span className="stat-number" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1.05 }}>{s.number}</span>
              <p className="fine-print" style={{ color: "var(--acid)", fontSize: "0.65rem", letterSpacing: "0.2em", marginTop: "0.5rem", marginBottom: "0.75rem" }}>
                {s.unit}
              </p>
              <div style={{ width: "3rem", height: "1px", background: "var(--acid)", marginBottom: "1.25rem", opacity: 0.5 }} />
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(242,237,227,0.7)", marginBottom: "auto", flexGrow: 1 }}>
                {s.copy}
              </p>
              <div style={{ marginTop: "2rem" }}>
                <p className="fine-print" style={{ fontSize: "0.58rem", color: "rgba(242,237,227,0.35)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                  {s.label}
                </p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "var(--acid)",
                    opacity: 0.65,
                    letterSpacing: "0.15em",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  SOURCE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--border-dark)", padding: "2rem clamp(1.5rem, 5vw, 5rem)" }}>
      <div className="container-lurch" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span className="lurch-logo text-cream" style={{ fontSize: "1.2rem" }}>Lurch</span>
        <p className="fine-print" style={{ color: "#4A4540" }}>© 2025 · Made with something between irony and sincerity</p>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {([["Reads", "/reads"], ["Shop", "/shop"]] as const).map(([label, href]) => (
            <Link key={label} href={href} className="fine-print" style={{ color: "#4A4540", textDecoration: "none" }}>{label}</Link>
          ))}
          <p className="fine-print" style={{ color: "#252520", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
            No data collected.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <YouOnACard />
        <Features />
        <Testimonials />
        <AttachmentEngine />
        <TryBeta />
        <Science />
      </main>
      <Footer />
    </>
  );
}
