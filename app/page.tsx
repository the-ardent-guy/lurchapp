import Link from "next/link";

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav-bar">
      <span className="lurch-logo text-cream" style={{ fontSize: "1.6rem" }}>Lurch</span>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/reads" className="fine-print text-gray-lurch" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>READS</Link>
        <Link href="/shop" className="fine-print" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--acid)" }}>MERCH</Link>
        <Link href="/truth" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.72rem" }}>Get Early Access</Link>
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
        padding: "clamp(6rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem)",
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
          background: "radial-gradient(ellipse, rgba(123,29,42,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", marginBottom: "2rem", lineHeight: 1 }}>
        <span
          aria-hidden
          className="lurch-logo anim-1"
          style={{
            fontSize: "clamp(5rem, 22vw, 18rem)",
            color: "var(--oxblood)",
            position: "absolute", top: "8px", left: "8px",
            userSelect: "none", lineHeight: 1, pointerEvents: "none",
          }}
        >Lurch</span>
        <h1 className="lurch-logo text-cream anim-1" style={{ fontSize: "clamp(5rem, 22vw, 18rem)", position: "relative", lineHeight: 1 }}>
          Lurch
        </h1>
      </div>

      <p
        className="lurch-logo anim-2"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
          color: "var(--cream)",
          maxWidth: "660px",
          lineHeight: 1.15,
          marginBottom: "2rem",
        }}
      >
        We match you based on your trauma.
      </p>

      <div className="anim-2" style={{ width: "100%", maxWidth: "520px", marginBottom: "3rem" }}>
        <div style={{ borderTop: "1px solid rgba(242,237,227,0.08)", marginBottom: "1rem" }} />
        <p className="fine-print" style={{ color: "rgba(242,237,227,0.35)", fontSize: "0.6rem", letterSpacing: "0.18em" }}>
          26,000 early downloads&nbsp;
          <span style={{ color: "var(--oxblood)" }}>·</span>
          &nbsp;0 marriages&nbsp;
          <span style={{ color: "var(--oxblood)" }}>·</span>
          &nbsp;∞ therapy bills pending
        </p>
        <div style={{ borderBottom: "1px solid rgba(242,237,227,0.08)", marginTop: "1rem" }} />
      </div>

      <div className="anim-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "1.25rem" }}>
        <Link href="/truth" className="btn-primary">Get Early Access</Link>
        <Link href="#features" className="btn-outline">See The Features</Link>
      </div>

      <p className="fine-print anim-3" style={{ fontSize: "0.55rem", color: "rgba(242,237,227,0.3)", letterSpacing: "0.2em", marginBottom: "1rem" }}>
        EST. 2025&nbsp;·&nbsp;VOL. I&nbsp;·&nbsp;INDIA EDITION
      </p>

      <p className="fine-print anim-4" style={{ fontSize: "0.58rem", color: "rgba(242,237,227,0.2)", letterSpacing: "0.1em" }}>
        coming when it's ready — not when it's fundable
      </p>

      <div aria-hidden style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <span className="fine-print" style={{ fontSize: "0.6rem" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gray), transparent)" }} />
        </div>
      </div>
    </section>
  );
}

// ─── SHOCK CARDS ─────────────────────────────────────────────────────────────

function ShockCards() {
  return (
    <section style={{ background: "var(--border-light)" }}>
      <div className="shock-cards-grid">

        {/* Card 1 — Caste Filter (screenshot card) */}
        <div style={{
          background: "var(--black)",
          padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: "540px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span className="fine-print" style={{ color: "var(--acid)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>01 — 03</span>
            <span className="fine-print" style={{ color: "rgba(242,237,227,0.4)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>FEATURE</span>
          </div>
          <div>
            <p className="fine-print" style={{ color: "var(--acid)", fontSize: "0.65rem", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
              ENABLED BY DEFAULT
            </p>
            <h3
              className="headline text-cream"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", lineHeight: 0.88, marginBottom: "1.5rem" }}
            >
              Caste<br />Filter
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "340px" }}>
              Pre-filtered for family comfort. You said you were progressive. The filter says otherwise.
            </p>
          </div>
        </div>

        {/* Card 2 — Vibe Check */}
        <div style={{
          background: "var(--cream-dark)",
          padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: "540px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span className="fine-print" style={{ color: "var(--oxblood)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>02 — 03</span>
            <span className="fine-print" style={{ color: "rgba(74,69,64,0.5)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>FEATURE</span>
          </div>
          <div>
            <h3 className="headline" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--black)", marginBottom: "1rem", lineHeight: 1.05 }}>
              Vibe Check Score™
            </h3>
            <div style={{ borderTop: "1px solid var(--border-light)", margin: "1rem 0" }} />
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#4A4540" }}>
              You've dated the same person four times. Different name. Same damage. We've named it. We've matched you with a fifth.
            </p>
          </div>
        </div>

        {/* Card 3 — Ghost Detector */}
        <div style={{
          background: "var(--oxblood)",
          padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: "540px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span className="fine-print" style={{ color: "rgba(242,237,227,0.65)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>03 — 03</span>
            <span className="fine-print" style={{ color: "rgba(242,237,227,0.4)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>FEATURE</span>
          </div>
          <div>
            <h3 className="headline text-cream" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "1rem", lineHeight: 1.05 }}>
              Ghost Detector™
            </h3>
            <div style={{ borderTop: "1px solid rgba(242,237,227,0.2)", margin: "1rem 0" }} />
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "rgba(242,237,227,0.75)" }}>
              Notifies you 3–5 business days after someone loses interest. Closure, as a service. You're welcome.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── APP MOCKUP ──────────────────────────────────────────────────────────────

// ─── AI SHADE ────────────────────────────────────────────────────────────────

function AIShade() {
  return (
    <section style={{ background: "var(--acid)", padding: "clamp(5rem, 9vw, 8rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <div className="container-lurch">
        <p className="fine-print" style={{ color: "rgba(13,13,11,0.4)", fontSize: "0.65rem", letterSpacing: "0.2em", marginBottom: "2.5rem" }}>
          A NOTE ON TECHNOLOGY
        </p>

        <h2 className="headline" style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", color: "var(--black)", lineHeight: 0.9, marginBottom: "2.5rem", maxWidth: "700px" }}>
          What if you had an MCP?
        </h2>

        <div style={{ maxWidth: "680px", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.9, color: "rgba(13,13,11,0.78)", marginBottom: "1.75rem" }}>
            If you were a language model, here's what your context window would look like:
            847 unread messages from people you're no longer seeing. 12 years of attachment
            patterns, poorly documented. Your mother's match parameters (caste, height, income
            band — she's done the tokenisation). Three ex-partners saved under different names.
            One good photo from 2019 you keep deploying.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.9, color: "rgba(13,13,11,0.78)" }}>
            Every other app is building an MCP for your love life. Tools that pipe your
            loneliness into their infrastructure. They call it personalisation. They mean
            retention.
          </p>
        </div>

        <div style={{ borderTop: "1.5px solid rgba(13,13,11,0.2)", paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
          <p
            className="lurch-logo"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 3rem)",
              color: "var(--black)",
              lineHeight: 1.15,
              maxWidth: "760px",
              transform: "rotate(-1.5deg)",
              display: "inline-block",
            }}
          >
            Our AI will make sure you don't have to do anything — because you're dead, anyways.
          </p>
        </div>
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
    <section className="bg-cream" style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)" }}>
      <div className="container-lurch">
        <p className="section-label" style={{ color: "var(--black)", letterSpacing: "0.2em", textAlign: "center", marginBottom: "3rem" }}>
          REAL PEOPLE, REAL DAMAGE
        </p>
        <div className="testimonials-grid">
          {quotes.map((q, i) => (
            <div
              key={i}
              style={{
                background: "var(--black)",
                padding: "clamp(2.5rem, 4vw, 3.5rem)",
                display: "flex", flexDirection: "column",
              }}
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                color: "var(--cream)",
                lineHeight: 1.45,
                marginBottom: "2rem",
                flexGrow: 1,
              }}>
                {q.text}
              </p>
              <div style={{ height: "1px", background: "var(--border-dark)", marginBottom: "1.5rem" }} />
              <p className="fine-print" style={{ fontSize: "0.65rem", color: "var(--gray)", letterSpacing: "0.12em", marginBottom: "0.35rem" }}>
                {q.city}
              </p>
              <p className="fine-print" style={{ fontSize: "0.6rem", color: "var(--oxblood-mid)", letterSpacing: "0.1em" }}>
                {q.source}
              </p>
            </div>
          ))}
        </div>
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
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)", maxWidth: "640px" }}>
          <h2 className="headline" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--black)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Most apps match you on what you like.<br />
            We match you on <em>why you love the way you do.</em>
          </h2>
          <p className="fine-print" style={{ fontSize: "0.72rem", lineHeight: 1.6, color: "#9A8F85" }}>
            There are four attachment styles. You have one. You don't get to choose.
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
                  If you're reading this, you already know.
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

// ─── CURATED EXPERIENCES ─────────────────────────────────────────────────────

function CuratedExperiences() {
  return (
    <section className="bg-cream section">
      <div className="container-lurch">
        <div style={{ maxWidth: "680px" }}>
          <p className="section-label" style={{ color: "var(--black)" }}>WHAT LURCH ACTUALLY DOES</p>
          <h2 className="headline" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "var(--black)", lineHeight: 0.92, marginBottom: "2rem" }}>
            You don't need<br />a better algorithm.
          </h2>
          <p className="headline-italic" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "var(--oxblood)", marginBottom: "2rem", lineHeight: 1.25 }}>
            You need a better<br />Tuesday evening.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4A4540", marginBottom: "1.5rem" }}>
            Lurch curates real-world experiences designed to surface your actual self —
            not the profile version. Not a blind date. Situations where your eros and play
            come out without you having to announce them.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4A4540", marginBottom: "3rem" }}>
            We're building this now. Events go live in Mumbai and Bengaluru first.
            If you want in before anyone else, you know what to do.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/events" className="btn-primary" style={{ display: "inline-block" }}>
              See The Events
            </Link>
            <Link href="/truth" className="btn-outline" style={{
              display: "inline-block",
              color: "var(--black)",
              borderColor: "var(--black)",
            }}>
              Join the Waitlist
            </Link>
          </div>
        </div>
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
      copy: "Across 23 peer-reviewed studies and 26,068 participants, dating app users showed significantly worse outcomes for depression, anxiety, and loneliness than non-users.",
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
              <span className="stat-number" style={{ fontSize: "clamp(4rem, 10vw, 8rem)", lineHeight: 1 }}>{s.number}</span>
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

// ─── THE HONEST VERSION ───────────────────────────────────────────────────────

function HonestVersion() {
  return (
    <section className="bg-black-lurch section">
      <div className="container-lurch">
        <div className="honest-grid">

          {/* LEFT — vertical rule + label */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div style={{ width: "2px", background: "var(--oxblood)", opacity: 0.4, flexShrink: 0, alignSelf: "stretch" }} />
            <p
              className="section-label"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                letterSpacing: "0.2em",
                marginBottom: 0,
                whiteSpace: "nowrap",
                alignSelf: "center",
              }}
            >
              THE FINE PRINT
            </p>
          </div>

          {/* RIGHT — copy */}
          <div>
            <h2 className="headline text-cream" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 0.92, marginBottom: "2.5rem" }}>
              The honest version.
            </h2>
            <p className="fine-print" style={{ fontSize: "0.78rem", lineHeight: 1.9, color: "var(--gray)", marginBottom: "2rem" }}>
              Intimacy is not found. It is built — slowly, with someone imperfect, in a context where you both
              show up repeatedly, in a body that is physically present, doing something that matters.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--gray)", marginBottom: "2.5rem" }}>
              The apps were never designed to give you that. They were designed to keep you swiping.
            </p>
            <div style={{ borderTop: "1px solid rgba(242,237,227,0.08)", margin: "2rem 0" }} />
            <p className="headline-italic text-cream" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginBottom: "3rem", lineHeight: 1.3 }}>
              You don't need another app.<br />
              You might need a Tuesday evening<br />
              with strangers and a reason to leave the house.
            </p>
            <div style={{ borderLeft: "2px solid var(--border-dark)", paddingLeft: "1.5rem" }}>
              <p className="fine-print" style={{ fontSize: "0.65rem", lineHeight: 1.9, color: "#4A4540" }}>
                LURCH is a satirical project. No data collected. No algorithm running. No AI optimising your love life.{" "}
                <Link href="/shop" style={{ color: "var(--gray)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  We do have t-shirts though.
                </Link>
              </p>
            </div>
          </div>

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
        <p className="fine-print" style={{ color: "#4A4540" }}>© {new Date().getFullYear()} &nbsp;·&nbsp; Made with something between irony and sincerity</p>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {[["Reads", "/reads"], ["Truth", "/truth"], ["Shop", "/shop"]].map(([label, href]) => (
            <Link key={label} href={href} className="fine-print" style={{ color: "#4A4540", textDecoration: "none" }}>{label}</Link>
          ))}
          <Link href="/dating-bible" className="fine-print" style={{ color: "#4A4540", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            Dating Bible
            <span style={{ background: "var(--border-dark)", color: "#4A4540", fontFamily: "var(--font-mono)", fontSize: "0.5rem", padding: "0.1rem 0.4rem", letterSpacing: "0.1em" }}>
              SOON
            </span>
          </Link>
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
        <ShockCards />
        <AIShade />
        <Testimonials />
        <AttachmentEngine />
        <CuratedExperiences />
        <Science />
        <HonestVersion />
      </main>
      <Footer />
    </>
  );
}
