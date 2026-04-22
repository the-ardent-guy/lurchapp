import Link from "next/link";

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav-bar">
      <span className="lurch-logo text-cream" style={{ fontSize: "1.6rem" }}>
        Lurch
      </span>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/reads" className="fine-print text-gray-lurch" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>
          READS
        </Link>
        <Link href="/events" className="fine-print text-gray-lurch" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", marginRight: "0.5rem" }}>
          EVENTS
        </Link>
        <Link href="/truth" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.72rem" }}>
          Get Early Access
        </Link>
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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(80vw, 700px)",
          height: "min(80vw, 700px)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(123,29,42,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <p className="fine-print anim-fade" style={{ marginBottom: "2.5rem", color: "var(--gray)" }}>
        NOW IN PRIVATE BETA &nbsp;·&nbsp; 1.2M ON THE WAITLIST
      </p>

      <h1
        className="lurch-logo text-cream anim-1"
        style={{ fontSize: "clamp(5rem, 22vw, 18rem)", marginBottom: "1.5rem" }}
      >
        Lurch
      </h1>

      <p
        className="anim-2"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
          color: "var(--cream)",
          maxWidth: "600px",
          lineHeight: 1.3,
          marginBottom: "0.75rem",
        }}
      >
        Find the one. Or the next one. Or the one after that.
      </p>

      <p
        className="fine-print anim-2"
        style={{ marginBottom: "3rem", maxWidth: "420px", lineHeight: 1.7 }}
      >
        Finally, love — optimised. Real connection. Algorithmically guaranteed.
      </p>

      <div className="anim-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "4rem" }}>
        <Link href="/truth" className="btn-primary">
          Get Early Access
        </Link>
        <Link href="#how-it-works" className="btn-outline">
          See How It Works
        </Link>
      </div>

      <div className="anim-4" style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "3rem" }}>
        {["App Store", "Google Play"].map((store) => (
          <div
            key={store}
            style={{
              border: "1px solid var(--border-dark)",
              padding: "0.6rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              cursor: "default",
            }}
          >
            <span style={{ fontSize: "1.4rem", opacity: 0.6 }}>{store === "App Store" ? "⌘" : "▶"}</span>
            <div>
              <p className="fine-print" style={{ fontSize: "0.55rem", color: "var(--gray)", marginBottom: "0.1rem" }}>
                DOWNLOAD ON THE
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.8rem", color: "var(--cream)" }}>
                {store}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        aria-hidden
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <span className="fine-print" style={{ fontSize: "0.6rem" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gray), transparent)" }} />
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Build Your Profile",
      copy: "Reduce your entire personhood to six photographs and a fun fact. Pick the ones where you look approachable but not desperate. There's a difference, apparently.",
    },
    {
      num: "02",
      title: "Swipe",
      copy: "Pass judgment on a stranger in 0.3 seconds. Trust the instinct. You've been doing this for years. It's fine. Everything is fine.",
    },
    {
      num: "03",
      title: "Connect",
      copy: "Match. Message. Meet, eventually, if the talking stage survives long enough. Repeat until you find love or lose the will to try. Whichever comes first.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-cream section">
      <div className="container-lurch">
        <p className="section-label" style={{ color: "var(--oxblood)" }}>PROCESS</p>
        <h2
          className="headline"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "var(--black)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            maxWidth: "500px",
          }}
        >
          How It Works
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "2.5rem 2rem",
                borderTop: "1px solid var(--border-light)",
                borderRight: i < steps.length - 1 ? "1px solid var(--border-light)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  color: "var(--oxblood)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  opacity: 0.25,
                }}
              >
                {step.num}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "var(--black)",
                  marginBottom: "0.75rem",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A4540" }}>
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      tag: "MATCHING",
      name: "Smart Matching™",
      copy: "We reduce 7 billion humans to a compatibility score so you don't have to feel bad about swiping left on someone's entire existence.",
    },
    {
      tag: "CONVERSATION",
      name: "Ice Breaker AI",
      copy: "Never think of something genuine to say again. Our AI generates the perfect opener. Connection, automated.",
    },
    {
      tag: "ASSESSMENT",
      name: "Vibe Check Score",
      copy: "Because red flags are just green flags you haven't rationalised yet. We help you rationalise faster.",
    },
    {
      tag: "CLOSURE",
      name: "Ghost Detector™",
      copy: "Notifies you 3–5 business days after someone loses interest. Closure as a service. You're welcome.",
    },
  ];

  return (
    <section className="bg-black-soft section">
      <div className="container-lurch">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(2.5rem, 5vw, 4rem)", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="section-label">PRODUCT</p>
            <h2 className="headline text-cream" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Features
            </h2>
          </div>
          <p
            className="headline-italic"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "var(--gray)", maxWidth: "280px", textAlign: "right" }}
          >
            "Designed for connection.<br />Optimised for volume."
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "var(--border-dark)" }}>
          {features.map((f) => (
            <div key={f.name} className="feature-card" style={{ background: "var(--black-soft)" }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>{f.tag}</p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "var(--cream)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                {f.name}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--gray)" }}>
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── THE SCIENCE ─────────────────────────────────────────────────────────────

function Science() {
  const stats = [
    {
      number: "140",
      unit: "profiles / day",
      copy: "The average user swipes on 140 profiles a day. They go on dates with 0.78 of them. The slot machines in Vegas have better odds.",
    },
    {
      number: "3s",
      unit: "to decide",
      copy: "It takes 3 seconds to form a first impression. Your brain on a match notification releases dopamine at the same rate as a slot machine payout.",
    },
    {
      number: "26%",
      unit: "more lonely",
      copy: "Heavy app users report 26% higher loneliness scores than non-users. The product designed to cure loneliness is worsening it. Per the data.",
    },
  ];

  return (
    <section className="bg-oxblood section">
      <div className="container-lurch">
        <p className="section-label" style={{ color: "rgba(242,237,227,0.5)" }}>RESEARCH</p>
        <h2
          className="headline text-cream"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          The Science
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem 4rem" }}>
          {stats.map((s) => (
            <div key={s.number}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
                <span className="stat-number">{s.number}</span>
                <span className="fine-print" style={{ color: "rgba(242,237,227,0.5)", fontSize: "0.7rem" }}>
                  {s.unit}
                </span>
              </div>
              <div style={{ width: "2rem", height: "1px", background: "var(--acid)", marginBottom: "1rem", opacity: 0.7 }} />
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(242,237,227,0.75)" }}>
                {s.copy}
              </p>
            </div>
          ))}
        </div>

        <blockquote
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            borderTop: "1px solid rgba(242,237,227,0.15)",
            paddingTop: "2.5rem",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
            color: "var(--cream)",
            lineHeight: 1.4,
            maxWidth: "700px",
          }}
        >
          "More choice does not produce better decisions. It produces paralysis, regret, and a vague sense
          that someone better is out there."
          <footer
            className="fine-print"
            style={{ marginTop: "1rem", fontSize: "0.7rem", fontStyle: "normal", color: "rgba(242,237,227,0.5)" }}
          >
            — Barry Schwartz, <em>The Paradox of Choice</em>, 2004. Still true.
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

function Testimonials() {
  const quotes = [
    { text: "I've been on 47 dates. I am so tired.", name: "Priya", age: 29, city: "Bengaluru" },
    { text: "We matched, talked for 3 weeks, met once, and now neither of us knows what to say.", name: "Arjun", age: 31, city: "Mumbai" },
    { text: "The app knows me better than my therapist. My therapist is concerned.", name: "Dev", age: 34, city: "Delhi" },
    { text: "I optimised everything. My profile is perfect. I am miserable.", name: "Ananya", age: 27, city: "Hyderabad" },
  ];

  return (
    <section className="bg-cream section">
      <div className="container-lurch">
        <p className="section-label" style={{ color: "var(--oxblood)" }}>SOCIAL PROOF</p>
        <h2
          className="headline"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--black)", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          They Said It.<br />Not Us.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          {quotes.map((q) => (
            <div key={q.name} className="testimonial">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  color: "var(--black)",
                  lineHeight: 1.5,
                  marginBottom: "1.25rem",
                }}
              >
                "{q.text}"
              </p>
              <p className="fine-print" style={{ color: "#6B5F57" }}>
                — {q.name}, {q.age} · {q.city}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "var(--cream-dark)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "0.3rem" }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "var(--oxblood)", fontSize: "1rem" }}>★</span>
            ))}
          </div>
          <p style={{ fontSize: "0.88rem", color: "#4A4540", flex: 1 }}>
            <strong>4.8 stars</strong> · 142,000 reviews ·{" "}
            <span className="fine-print" style={{ color: "#9A8F85" }}>
              "would not recommend to people I care about"
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── LOVEGPT™ ────────────────────────────────────────────────────────────────

function LoveGPT() {
  return (
    <section className="bg-black-lurch section">
      <div className="container-lurch">
        <div
          style={{
            border: "1px solid var(--border-dark)",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "var(--acid)",
              color: "var(--black)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              padding: "0.4rem 0.75rem",
            }}
          >
            NEW
          </div>

          <p className="section-label">AI-POWERED INTIMACY</p>

          <h2
            className="headline text-cream"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", marginBottom: "1.5rem" }}
          >
            LoveGPT™
          </h2>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "var(--cream)",
              maxWidth: "640px",
              lineHeight: 1.5,
              marginBottom: "2rem",
            }}
          >
            "Our AI reads your messages, predicts emotional availability, and suggests the perfect response
            so you never have to be vulnerable again."
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {[
              ["99.7%", "reduction in awkward silences"],
              ["0%", "increase in actual intimacy"],
              ["∞", "plausible deniability"],
            ].map(([num, label]) => (
              <div key={num} style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "1rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "var(--acid)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {num}
                </p>
                <p className="fine-print">{label}</p>
              </div>
            ))}
          </div>

          <p className="fine-print" style={{ color: "var(--gray)", maxWidth: "480px", lineHeight: 1.8 }}>
            LoveGPT™ is trained on 4.7 billion messages. It knows what works.
            It knows what you want to hear. These are different things. We chose the first one.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── CTA BREAK ───────────────────────────────────────────────────────────────

function CTABreak() {
  return (
    <section className="bg-cream section" style={{ textAlign: "center" }}>
      <div className="container-lurch" style={{ maxWidth: "640px" }}>
        <p className="section-label" style={{ color: "var(--oxblood)", textAlign: "center" }}>YOU'VE MADE IT THIS FAR</p>

        <h2
          className="headline"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", color: "var(--black)", marginBottom: "1.5rem" }}
        >
          Find Your<br />
          <span style={{ color: "var(--oxblood)" }}>Person</span>
        </h2>

        <p className="fine-print" style={{ color: "#6B5F57", marginBottom: "2.5rem", lineHeight: 1.8 }}>
          The average Lurch user has been looking for 4 years, 2 months, and 11 days.
          But you're different. You have better taste. That's why you're here.
        </p>

        <Link href="/truth" className="btn-acid" style={{ fontSize: "1rem" }}>
          Find My Person →
        </Link>

        <p className="fine-print" style={{ marginTop: "1.5rem", color: "#9A8F85" }}>
          No credit card required. Emotional investment mandatory.
        </p>
      </div>
    </section>
  );
}

// ─── LURCH OUT ───────────────────────────────────────────────────────────────

function LurchOut() {
  const events = [
    { type: "POTTERY", title: "Hands & Clay", date: "Sat, May 10", city: "Bengaluru" },
    { type: "SUPPER CLUB", title: "The Long Table", date: "Fri, May 16", city: "Mumbai" },
    { type: "LITERARY SALON", title: "What We Talk About", date: "Sun, May 25", city: "Delhi" },
  ];

  return (
    <section className="bg-black-soft section">
      <div className="container-lurch">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
          <div>
            <p className="section-label">IRL EXPERIENCES</p>
            <h2
              className="headline text-cream"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.5rem" }}
            >
              Lurch<br />Out
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray)", marginBottom: "2rem", maxWidth: "360px" }}>
              No algorithm. No profile. No AI wingman.
              Just you, a room full of people, and something worth doing.
            </p>
            <Link href="/events" className="btn-outline">
              See All Events
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {events.map((e, i) => (
              <div
                key={e.title}
                style={{
                  padding: "1.5rem 0",
                  borderTop: "1px solid var(--border-dark)",
                  borderBottom: i === events.length - 1 ? "1px solid var(--border-dark)" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div>
                  <p className="section-label" style={{ marginBottom: "0.3rem" }}>{e.type}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--cream)" }}>
                    {e.title}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p className="fine-print" style={{ color: "var(--gray)", lineHeight: 1.6 }}>
                    {e.date}<br />{e.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── THE FINE PRINT ──────────────────────────────────────────────────────────

function FinePrint() {
  return (
    <section className="bg-black-lurch section">
      <div className="container-lurch">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ textAlign: "center", marginBottom: "3rem" }}>THE FINE PRINT</p>

          <h2
            className="headline text-cream"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "2rem" }}
          >
            The honest version
          </h2>

          <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "var(--gray)", marginBottom: "2.5rem" }}>
            Intimacy is not found. It is built — slowly, with someone imperfect, in a context where you
            both show up repeatedly, in a body that is physically present, doing something that matters.
          </p>

          <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "var(--gray)", marginBottom: "2.5rem" }}>
            The apps were never designed to give you that. They were designed to keep you swiping.
            Those are not the same thing, and somewhere, you already know it.
          </p>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              color: "var(--cream)",
              marginBottom: "3.5rem",
            }}
          >
            You don't need another app.
            You might need a Tuesday evening with strangers and clay.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/truth" className="btn-primary">
              I'm Curious
            </Link>
            <Link href="/reads" className="btn-outline">
              Read the Research
            </Link>
          </div>

          <div style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "2rem" }}>
            <p className="fine-print" style={{ lineHeight: 2, color: "#4A4540" }}>
              LURCH is a satirical project. No user data is collected. No algorithm is running.
              No AI is optimising your love life. By continuing you agree that love is a construct,
              loneliness is an epidemic, and you probably need a hobby.{" "}
              <Link href="/shop" style={{ color: "var(--gray)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Also we have t-shirts.
              </Link>
            </p>
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
        <p className="fine-print" style={{ color: "#4A4540" }}>
          © {new Date().getFullYear()} &nbsp;·&nbsp; Made with something between irony and sincerity
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[["Reads", "/reads"], ["Events", "/events"], ["Truth", "/truth"]].map(([label, href]) => (
            <Link key={label} href={href} className="fine-print" style={{ color: "#4A4540", textDecoration: "none" }}>
              {label}
            </Link>
          ))}
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
        <HowItWorks />
        <Features />
        <Science />
        <Testimonials />
        <LoveGPT />
        <CTABreak />
        <LurchOut />
        <FinePrint />
      </main>
      <Footer />
    </>
  );
}
