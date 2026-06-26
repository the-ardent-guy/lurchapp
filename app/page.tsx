import Link from "next/link";

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="nav-bar">
      <span className="lurch-logo text-cream" style={{ fontSize: "1.6rem" }}>Lurch</span>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/reads" className="fine-print text-gray-lurch" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>
          READS
        </Link>
        <Link href="/shop" className="fine-print" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--acid)" }}>
          MERCH
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

      <div style={{ position: "relative", marginBottom: "1rem", lineHeight: 1 }}>
        <span
          aria-hidden
          className="lurch-logo anim-1"
          style={{
            fontSize: "clamp(5rem, 22vw, 18rem)",
            color: "var(--oxblood)",
            position: "absolute",
            top: "8px",
            left: "8px",
            userSelect: "none",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          Lurch
        </span>
        <h1
          className="lurch-logo text-cream anim-1"
          style={{ fontSize: "clamp(5rem, 22vw, 18rem)", position: "relative", lineHeight: 1 }}
        >
          Lurch
        </h1>
      </div>

      <p
        className="lurch-logo anim-2"
        style={{
          fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)",
          color: "var(--cream)",
          maxWidth: "700px",
          lineHeight: 1.15,
          marginBottom: "1.5rem",
          transform: "rotate(-2deg)",
          display: "inline-block",
        }}
      >
        We match you based on your trauma.
      </p>

      <p className="fine-print anim-2" style={{ marginBottom: "3rem", maxWidth: "420px", lineHeight: 1.7 }}>
        Finally, love — optimised. Real connection. Algorithmically guaranteed.
      </p>

      <div className="anim-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "4rem" }}>
        <Link href="/truth" className="btn-primary">Get Early Access</Link>
        <Link href="#how-it-works" className="btn-outline">See How It Works</Link>
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
              <p className="fine-print" style={{ fontSize: "0.55rem", color: "var(--gray)", marginBottom: "0.1rem" }}>DOWNLOAD ON THE</p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.8rem", color: "var(--cream)" }}>{store}</p>
            </div>
          </div>
        ))}
      </div>

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
    <section className="bg-cream" style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <div className="container-lurch">
        <div className="shock-cards-grid">
          {/* Card 1 — Caste Filter (larger weight) */}
          <div
            style={{
              background: "var(--black)",
              padding: "clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: "340px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "var(--acid)",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
              }}
            >
              FEATURE
            </p>
            <h3
              className="headline text-cream"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1rem", lineHeight: 1.1 }}
            >
              Caste Filter
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "340px" }}>
              Pre-filtered for family comfort. You said you were progressive. The filter says otherwise.
            </p>
          </div>

          {/* Card 2 — Vibe Check */}
          <div
            style={{
              background: "var(--cream-dark)",
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: "340px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "var(--oxblood)",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
              }}
            >
              FEATURE
            </p>
            <h3
              className="headline"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--black)", marginBottom: "1rem", lineHeight: 1.1 }}
            >
              Vibe Check Score™
            </h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#4A4540" }}>
              You've dated the same person four times. Different name. Same damage. We've named it. We've matched you with a fifth.
            </p>
          </div>

          {/* Card 3 — Ghost Detector */}
          <div
            style={{
              background: "var(--oxblood)",
              padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: "340px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(242,237,227,0.5)",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
              }}
            >
              FEATURE
            </p>
            <h3
              className="headline text-cream"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: "1rem", lineHeight: 1.1 }}
            >
              Ghost Detector™
            </h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "rgba(242,237,227,0.75)" }}>
              Notifies you 3–5 business days after someone loses interest. Closure, as a service. You're welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── UI IMAGE SLOT ────────────────────────────────────────────────────────────

function UIImageSlot() {
  return (
    <section className="bg-black-lurch" style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <div className="container-lurch">
        <div
          style={{
            width: "100%",
            minHeight: "480px",
            background: "var(--black-soft)",
            border: "1px solid var(--border-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            className="fine-print"
            style={{ color: "#2A2A26", fontSize: "0.65rem", letterSpacing: "0.2em" }}
          >
            APP UI SCREENSHOT / MOCKUP GOES HERE
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── ATTACHMENT ENGINE ───────────────────────────────────────────────────────

function AttachmentEngine() {
  const profiles = [
    {
      pairing: "Anxious × Avoidant",
      copy: "You pursue. They withdraw. You'll both call it chemistry.",
    },
    {
      pairing: "Avoidant × Avoidant",
      copy: "Stable. Cool. Dead inside.",
    },
    {
      pairing: "Anxious × Anxious",
      copy: "Intensity. Codependency. Couples therapy by month three.",
    },
    {
      pairing: "Secure × Anyone",
      copy: "Not available. They're not here. They met someone through their actual life.",
    },
  ];

  return (
    <section className="bg-cream section">
      <div className="container-lurch">
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)", maxWidth: "620px" }}>
          <h2 className="headline" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--black)", lineHeight: 1.15 }}>
            Most apps match you on what you like.<br />
            We match you on <em>why you love the way you do.</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1px", background: "var(--border-light)" }}>
          {profiles.map((p, i) => (
            <div
              key={p.pairing}
              style={{
                background: i === 3 ? "var(--cream-dark)" : "var(--cream)",
                padding: "2.5rem 2rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.15rem", color: "var(--black)", marginBottom: "1rem", lineHeight: 1.2 }}>
                {p.pairing}
              </p>
              <div style={{ width: "1.5rem", height: "1px", background: i === 3 ? "var(--border-light)" : "var(--oxblood)", marginBottom: "1rem", opacity: 0.5 }} />
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: i === 3 ? "#9A8F85" : "#4A4540" }}>
                {p.copy}
              </p>
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

// ─── THE SCIENCE ─────────────────────────────────────────────────────────────

function Science() {
  const stats = [
    {
      number: "26%",
      unit: "lonelier",
      copy: "Heavy dating app users score 26% higher on validated loneliness scales. The product built to cure loneliness is measurably worsening it.",
    },
    {
      number: "0.78",
      unit: "dates / month",
      copy: "140 profiles judged per day. 35 matches. 0.78 dates. The conversion rate of a spam newsletter. With more emotional consequences.",
    },
    {
      number: "78%",
      unit: "ghosted",
      copy: "78% of users report being ghosted. 65% admit to ghosting someone. Nobody signed up to become this.",
    },
    {
      number: "37%",
      unit: "lower self-worth",
      copy: "Tinder users reported 37% lower self-esteem than non-users. The app monetising your loneliness is also monetising your insecurity.",
    },
  ];

  return (
    <section className="bg-oxblood section">
      <div className="container-lurch">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(2rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem)" }}>
          {stats.map((s) => (
            <div key={s.number}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span className="stat-number">{s.number}</span>
                <span className="fine-print" style={{ color: "rgba(242,237,227,0.4)", fontSize: "0.7rem" }}>{s.unit}</span>
              </div>
              <div style={{ width: "2rem", height: "1px", background: "var(--acid)", marginBottom: "1rem", opacity: 0.6 }} />
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(242,237,227,0.7)" }}>{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MERCH IMAGE SLOT ─────────────────────────────────────────────────────────

function MerchImageSlot() {
  return (
    <section className="bg-black-lurch" style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <div className="container-lurch">
        <div
          style={{
            width: "100%",
            minHeight: "400px",
            background: "var(--black-soft)",
            border: "1px solid var(--border-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            className="fine-print"
            style={{ color: "#2A2A26", fontSize: "0.65rem", letterSpacing: "0.2em" }}
          >
            LIFESTYLE / MERCH IMAGES GO HERE
          </p>
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
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ textAlign: "center", marginBottom: "3rem" }}>THE FINE PRINT</p>
          <h2 className="headline text-cream" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "2rem" }}>
            The honest version
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "var(--gray)", marginBottom: "2.5rem" }}>
            Intimacy is not found. It is built — slowly, with someone imperfect, in a context where you
            both show up repeatedly, in a body that is physically present, doing something that matters.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "var(--gray)", marginBottom: "2.5rem" }}>
            The apps were never designed to give you that. They were designed to keep you swiping.
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "var(--cream)", marginBottom: "3.5rem" }}>
            You don't need another app.
            You might need a Tuesday evening with strangers and a reason to leave the house.
          </p>
          <div style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "2rem" }}>
            <p className="fine-print" style={{ lineHeight: 2, color: "#4A4540" }}>
              LURCH is a satirical project. No data collected. No algorithm running. No AI optimising your love life.{" "}
              <Link href="/shop" style={{ color: "var(--gray)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                We do have t-shirts though.
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
        <p className="fine-print" style={{ color: "#4A4540" }}>© {new Date().getFullYear()} &nbsp;·&nbsp; Made with something between irony and sincerity</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[["Reads", "/reads"], ["Truth", "/truth"], ["Shop", "/shop"]].map(([label, href]) => (
            <Link key={label} href={href} className="fine-print" style={{ color: "#4A4540", textDecoration: "none" }}>{label}</Link>
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
        <ShockCards />
        <UIImageSlot />
        <AttachmentEngine />
        <Science />
        <MerchImageSlot />
        <HonestVersion />
      </main>
      <Footer />
    </>
  );
}
