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

      <p className="fine-print anim-fade" style={{ marginBottom: "2.5rem", color: "var(--gray)" }}>
        NOW IN PRIVATE BETA &nbsp;·&nbsp; 1.2M ON THE WAITLIST
      </p>

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

      {/* The dating app line */}
      <p
        className="anim-1"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gray)",
          marginBottom: "2rem",
        }}
      >
        The dating app the world needs.
      </p>

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
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "var(--black)", marginBottom: "clamp(3rem, 6vw, 5rem)", maxWidth: "500px" }}
        >
          How It Works
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "2.5rem 2rem",
                borderTop: "1px solid var(--border-light)",
                borderRight: i < steps.length - 1 ? "1px solid var(--border-light)" : "none",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(3.5rem, 8vw, 6rem)", color: "var(--oxblood)", lineHeight: 1, marginBottom: "1rem", opacity: 0.25 }}>
                {step.num}
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--black)", marginBottom: "0.75rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A4540" }}>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────────────────────────────

const C = "var(--oxblood-mid)";

const featureIcons = {
  // Signpost: two arrow signs on a post, pointing opposite directions
  MATCHING: (
    <svg width="44" height="52" viewBox="0 0 44 52" fill="none" aria-hidden="true">
      <line x1="22" y1="50" x2="22" y2="2" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 4 L36 4 L43 12 L36 20 L22 20" stroke={C} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M22 28 L8 28 L1 36 L8 44 L22 44" stroke={C} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  // Notice board: pinned board with "HI" drawn in strokes
  CONVERSATION: (
    <svg width="48" height="52" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="40" height="36" rx="2" stroke={C} strokeWidth="1.5"/>
      <circle cx="28" cy="9" r="3.5" stroke={C} strokeWidth="1.5"/>
      <line x1="28" y1="12.5" x2="28" y2="14" stroke={C} strokeWidth="1.5"/>
      {/* H */}
      <line x1="16" y1="24" x2="16" y2="38" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="24" x2="24" y2="38" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="31" x2="24" y2="31" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      {/* I */}
      <line x1="33" y1="24" x2="33" y2="38" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="30" y1="24" x2="36" y2="24" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="30" y1="38" x2="36" y2="38" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Formal stamp/seal in corner */}
      <rect x="38" y="38" width="6" height="5" rx="1" stroke={C} strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),
  // Gauge sign: framed meter with needle pointing below average
  ASSESSMENT: (
    <svg width="48" height="52" viewBox="0 0 56 52" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="48" height="40" rx="2" stroke={C} strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" stroke={C} strokeWidth="1"/>
      <circle cx="44" cy="12" r="1.5" stroke={C} strokeWidth="1"/>
      {/* Gauge arc */}
      <path d="M14 38 A 14 14 0 0 1 42 38" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Tick marks */}
      <line x1="14" y1="38" x2="14" y2="33" stroke={C} strokeWidth="1" strokeLinecap="round"/>
      <line x1="28" y1="24" x2="28" y2="29" stroke={C} strokeWidth="1" strokeLinecap="round"/>
      <line x1="42" y1="38" x2="42" y2="33" stroke={C} strokeWidth="1" strokeLinecap="round"/>
      {/* Needle below centre — pointing left-ish, 38% */}
      <line x1="28" y1="38" x2="20" y2="28" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="38" r="2" stroke={C} strokeWidth="1.5"/>
    </svg>
  ),
  // Missing-person placard: board with head silhouette + blank dashed date
  CLOSURE: (
    <svg width="40" height="52" viewBox="0 0 46 56" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="40" height="50" rx="2" stroke={C} strokeWidth="1.5"/>
      {/* Hanging nails */}
      <line x1="14" y1="2" x2="14" y2="4" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="32" y1="2" x2="32" y2="4" stroke={C} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Head outline */}
      <circle cx="23" cy="22" r="9" stroke={C} strokeWidth="1.3"/>
      {/* Shoulders */}
      <path d="M8 40 Q8 32 23 32 Q38 32 38 40" stroke={C} strokeWidth="1.3" strokeLinecap="round"/>
      {/* Blank date line — dashed */}
      <line x1="9" y1="47" x2="37" y2="47" stroke={C} strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2"/>
    </svg>
  ),
};

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
      copy: "Never think of something genuine to say or use your boring brain again. Our AI generates the perfect opener. Statistically, neither will they.",
    },
    {
      tag: "ASSESSMENT",
      name: "Vibe Check Score",
      copy: "You've dated three people with the exact same red flags and called it a type. We've named it. We've matched you with a fourth.",
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
            <h2 className="headline text-cream" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>Features</h2>
          </div>
          <p className="headline-italic" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "var(--gray)", maxWidth: "280px", textAlign: "right" }}>
            "Designed for connection.<br />Optimised for volume."
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "var(--border-dark)" }}>
          {features.map((f) => (
            <div key={f.name} className="feature-card" style={{ background: "var(--black-soft)" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                {featureIcons[f.tag as keyof typeof featureIcons]}
              </div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>{f.tag}</p>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--cream)", marginBottom: "1rem", lineHeight: 1.2 }}>
                {f.name}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--gray)" }}>{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APP MOCKUP ──────────────────────────────────────────────────────────────

function AppMockup() {
  return (
    <section className="bg-black-lurch section" style={{ overflow: "hidden" }}>
      <div className="container-lurch">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "center" }}>

          {/* Copy */}
          <div>
            <p className="section-label">THE EXPERIENCE</p>
            <h2 className="headline text-cream" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.5rem" }}>
              Love,<br />
              <span style={{ color: "var(--oxblood-mid)" }}>designed.</span>
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--gray)", marginBottom: "2rem", maxWidth: "360px" }}>
              Every detail engineered for the moment before you realise it isn't working.
              Intuitive. Beautiful. Precisely as satisfying as a slot machine paying out at 2am.
              We also factor in the height preferences you'll publicly deny, the salary range you'll never admit to, and the caste filter you think nobody noticed you turned on.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["Profile Cards", "Swipeable. Dismissible. Human-adjacent."],
                ["Smart Queue™", "Surfaces the profiles most likely to haunt you."],
                ["Mood Matching", "Detects when you're most vulnerable. Sends notifications."],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--acid)", marginTop: "0.55rem", flexShrink: 0 }} />
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--gray)" }}>
                    <strong style={{ color: "var(--cream)", fontWeight: 600 }}>{title}</strong> — {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "300px",
                height: "620px",
                borderRadius: "42px",
                border: "2px solid #2A2A26",
                background: "#0F0F0D",
                position: "relative",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px #1A1A18, inset 0 0 0 1px #252520",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Notch */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100px", height: "28px", background: "#0F0F0D", borderRadius: "0 0 16px 16px", zIndex: 10 }} />

              {/* Status bar */}
              <div style={{ padding: "12px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--cream)", fontWeight: 600 }}>9:41</span>
                <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                  {[3, 4, 5, 6].map(h => <div key={h} style={{ width: "3px", height: `${h}px`, background: "var(--cream)", borderRadius: "1px", opacity: 0.8 }} />)}
                  <div style={{ width: "14px", height: "7px", border: "1px solid rgba(242,237,227,0.5)", borderRadius: "2px", marginLeft: "3px", position: "relative" }}>
                    <div style={{ position: "absolute", top: "1px", left: "1px", right: "3px", bottom: "1px", background: "var(--cream)", borderRadius: "1px" }} />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div style={{ padding: "10px 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="lurch-logo text-cream" style={{ fontSize: "1.3rem" }}>Lurch</span>
                <div style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gray)", fontSize: "16px" }}>⚙</span>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--oxblood)" }} />
                </div>
              </div>

              {/* Profile card */}
              <div
                style={{
                  margin: "0 12px",
                  height: "380px",
                  borderRadius: "18px",
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(160deg, #2A1F1F 0%, #1A1215 40%, #0D0D0B 100%)",
                }}
              >
                {/* Placeholder image area */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(123,29,42,0.3) 0%, rgba(13,13,11,0.8) 60%)" }} />

                {/* Placeholder silhouette */}
                <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(242,237,227,0.07)", margin: "0 auto 8px" }} />
                  <div style={{ width: "80px", height: "100px", borderRadius: "50px 50px 0 0", background: "rgba(242,237,227,0.05)", margin: "0 auto" }} />
                </div>

                {/* Profile info overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px",
                    background: "linear-gradient(to top, rgba(13,13,11,0.95) 0%, transparent 100%)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--cream)" }}>Meera</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(242,237,227,0.7)" }}>28</span>
                    <span style={{ marginLeft: "auto" }}>
                      <span style={{ background: "var(--acid)", color: "var(--black)", fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, padding: "2px 6px", letterSpacing: "0.1em" }}>94% MATCH</span>
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(242,237,227,0.55)", marginBottom: "8px" }}>
                    Bengaluru · 3km away
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {["Anxious attachment", "Overthinks", "Overshares"].map(tag => (
                      <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "8px", letterSpacing: "0.08em", padding: "2px 8px", border: "1px solid rgba(242,237,227,0.15)", color: "rgba(242,237,227,0.5)", borderRadius: "0" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px 20px" }}>
                {[
                  { label: "✕", size: "44px", bg: "transparent", border: "1px solid #2A2A26", color: "var(--gray)" },
                  { label: "★", size: "36px", bg: "transparent", border: "1px solid #2A2A26", color: "var(--acid)" },
                  { label: "♥", size: "52px", bg: "var(--oxblood)", border: "none", color: "var(--cream)" },
                ].map((btn) => (
                  <div
                    key={btn.label}
                    style={{
                      width: btn.size,
                      height: btn.size,
                      borderRadius: "50%",
                      background: btn.bg,
                      border: btn.border,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: btn.color,
                      fontSize: btn.size === "52px" ? "18px" : "14px",
                      cursor: "default",
                    }}
                  >
                    {btn.label}
                  </div>
                ))}
              </div>

              {/* Bottom nav */}
              <div style={{ display: "flex", justifyContent: "space-around", padding: "6px 20px 16px", borderTop: "1px solid #1A1A18" }}>
                {["◉", "♥", "💬", "👤"].map((icon, i) => (
                  <span key={i} style={{ fontSize: "16px", opacity: i === 0 ? 1 : 0.3, filter: i === 0 ? "none" : "grayscale(1)" }}>
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

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
      score: "94% compatible",
      copy: "You pursue. They withdraw. You interpret distance as depth. They interpret your need as pressure. You'll both call it chemistry. It is, technically.",
    },
    {
      pairing: "Avoidant × Avoidant",
      score: "Stable. Cool. Dead inside.",
      copy: "Mutual distance. Shared independence. Neither of you will say how you really feel. Expected relationship length: 2.3 years, or until one of you accidentally catches feelings.",
    },
    {
      pairing: "Anxious × Anxious",
      score: "Extremely online",
      copy: "Intensity. Codependency. You'll read each other's read receipts like scripture. Couples therapy by month three. Both of you will grow. Separately.",
    },
    {
      pairing: "Secure × Anyone",
      score: "Not available",
      copy: "People with secure attachment styles are underrepresented on dating apps. They're not here. They met someone through their actual life. We're working on sourcing them.",
    },
  ];

  return (
    <section className="bg-cream section">
      <div className="container-lurch">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "clamp(2.5rem, 5vw, 4rem)", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "600px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <p className="section-label" style={{ color: "var(--oxblood)", marginBottom: 0 }}>NEW FEATURE</p>
              <span style={{ background: "var(--acid)", color: "var(--black)", fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.5rem" }}>
                BETA
              </span>
            </div>
            <h2 className="headline" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "var(--black)", marginBottom: "1rem" }}>
              Attachment<br />Engine™
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4A4540", maxWidth: "500px" }}>
              Most apps match you on what you like. We match you on <em>why you love the way you do.</em>
              {" "}Our proprietary system analyses your communication patterns, response times, and
              conversational history to identify your core attachment style — then finds someone
              whose emotional architecture fits yours.
            </p>
          </div>
          <div style={{ paddingTop: "0.5rem" }}>
            <p className="fine-print" style={{ color: "#9A8F85", maxWidth: "260px", lineHeight: 1.8 }}>
              Attachment profiles generated using our 20-question assessment, developed in
              partnership with no licensed therapists whatsoever.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1px", background: "var(--border-light)" }}>
          {profiles.map((p, i) => (
            <div
              key={p.pairing}
              style={{
                background: i === 3 ? "var(--cream-dark)" : "var(--cream)",
                padding: "2rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.1rem", color: "var(--black)", marginBottom: "0.4rem", lineHeight: 1.2 }}>
                {p.pairing}
              </p>
              <p
                className="fine-print"
                style={{
                  color: i === 3 ? "#9A8F85" : "var(--oxblood)",
                  marginBottom: "1rem",
                  fontWeight: i === 3 ? 400 : 700,
                }}
              >
                {p.score}
              </p>
              <div style={{ width: "1.5rem", height: "1px", background: i === 3 ? "var(--border-light)" : "var(--oxblood)", marginBottom: "1rem", opacity: 0.5 }} />
              <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: i === 3 ? "#9A8F85" : "#4A4540" }}>
                {p.copy}
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
      number: "26%",
      unit: "lonelier",
      copy: "Heavy dating app users score 26% higher on validated loneliness scales than non-users. The product built to cure loneliness is measurably worsening it.",
    },
    {
      number: "37%",
      unit: "lower self-worth",
      copy: "Tinder users reported 37% lower self-esteem and significantly higher body dissatisfaction than non-users. (Body Image journal, 2016.) The app monetising your loneliness is also monetising your insecurity.",
    },
    {
      number: "78%",
      unit: "ghosted",
      copy: "78% of users report being ghosted. 65% admit to ghosting someone. The cruelty is distributed equally. Nobody signed up to become this. You know which one kept you up at night.",
    },
    {
      number: "0.78",
      unit: "dates / month",
      copy: "140 profiles judged per day. 35 matches per month. 0.78 dates. The conversion rate of a spam newsletter. With more emotional consequences.",
    },
    {
      number: "4×",
      unit: "more depressed",
      copy: "Women who use dating apps are up to 4× more likely to report depression symptoms tied to their romantic life than those who meet people offline. Men report significantly higher anxiety.",
    },
    {
      number: "10hrs",
      unit: "jury deliberates",
      copy: "A court jury deliberates an average of 10 hours before deciding someone's fate. You spend 0.3 seconds. We made a product out of that impulse and called it dating.",
    },
  ];

  return (
    <section className="bg-oxblood section">
      <div className="container-lurch">
        <p className="section-label" style={{ color: "rgba(242,237,227,0.5)" }}>RESEARCH</p>
        <h2 className="headline text-cream" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", marginBottom: "0.75rem" }}>
          The Science
        </h2>
        <p style={{ fontSize: "0.9rem", color: "rgba(242,237,227,0.5)", marginBottom: "clamp(3rem, 6vw, 5rem)", maxWidth: "460px", lineHeight: 1.7 }}>
          Peer-reviewed. Publicly available. Largely ignored by the industry.
        </p>

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

        <blockquote
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            borderTop: "1px solid rgba(242,237,227,0.12)",
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
          "We've built an industry worth $9 billion on the premise that the right algorithm
          can find you love. The data suggests it's better at finding you a subscription."
          <footer className="fine-print" style={{ marginTop: "1rem", fontSize: "0.7rem", fontStyle: "normal", color: "rgba(242,237,227,0.4)" }}>
            — Synthesised from Hari, Perel, Gottman & a decade of matching you with strangers
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
    { text: "She said she wasn't ready for a relationship. She got married eight months later. Arranged.", name: "Dev", age: 33, city: "Delhi" },
    { text: "I optimised everything. My profile is perfect. I am miserable.", name: "Ananya", age: 27, city: "Hyderabad" },
  ];

  return (
    <section className="bg-cream section">
      <div className="container-lurch">
        <p className="section-label" style={{ color: "var(--oxblood)" }}>SOCIAL PROOF</p>
        <h2 className="headline" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--black)", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          They Said It.<br />Not Us.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          {quotes.map((q) => (
            <div key={q.name} className="testimonial">
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--black)", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                "{q.text}"
              </p>
              <p className="fine-print" style={{ color: "#6B5F57" }}>
                — {q.name}, {q.age} · {q.city}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--cream-dark)", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            {[...Array(5)].map((_, i) => <span key={i} style={{ color: "var(--oxblood)", fontSize: "1rem" }}>★</span>)}
          </div>
          <p style={{ fontSize: "0.88rem", color: "#4A4540", flex: 1 }}>
            <strong>4.8 stars</strong> · 142,000 reviews ·{" "}
            <span className="fine-print" style={{ color: "#9A8F85" }}>"would not recommend to people I care about"</span>
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
        <div style={{ border: "1px solid var(--border-dark)", padding: "clamp(2.5rem, 5vw, 4rem)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, background: "var(--acid)", color: "var(--black)", fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.4rem 0.75rem" }}>
            NEW
          </div>

          <p className="section-label">AI-POWERED INTIMACY</p>
          <h2 className="headline text-cream" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", marginBottom: "1.5rem" }}>
            LoveGPT™
          </h2>

          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "var(--cream)", maxWidth: "640px", lineHeight: 1.5, marginBottom: "2rem" }}>
            "Our AI reads your messages, predicts emotional availability, and suggests the perfect
            response so you never have to be vulnerable again. Because the last time you were, look what happened."
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {[["99.7%", "reduction in awkward silences"], ["0%", "increase in actual intimacy"], ["∞", "plausible deniability"]].map(([num, label]) => (
              <div key={num} style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "1rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "2rem", color: "var(--acid)", lineHeight: 1, marginBottom: "0.4rem" }}>{num}</p>
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
        <h2 className="headline" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", color: "var(--black)", marginBottom: "1.5rem" }}>
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

// ─── THE FINE PRINT ──────────────────────────────────────────────────────────

function FinePrint() {
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
            Those are not the same thing, and somewhere, you already know it.
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "var(--cream)", marginBottom: "3.5rem" }}>
            You don't need another app.
            You might need a Tuesday evening with strangers and clay.
          </p>
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
        <HowItWorks />
        <Features />
        <AppMockup />
        <AttachmentEngine />
        <Science />
        <Testimonials />
        <LoveGPT />
        <CTABreak />
        <FinePrint />
      </main>
      <Footer />
    </>
  );
}
