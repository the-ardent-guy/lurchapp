import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <nav className="nav-bar">
      <Link href="/" className="lurch-logo text-cream" style={{ fontSize: "1.6rem", textDecoration: "none" }}>Lurch</Link>
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

const products = [
  {
    id: "romantically-freelancing-black",
    name: "Romantically Freelancing",
    subtitle: "Available for select projects.",
    colorway: "Washed Black",
    image: "/tee-washed-black.png",
    price: "₹699",
    tag: "EDITION 001",
  },
  {
    id: "serial-monogamist-natural",
    name: "Serial Monogamist",
    subtitle: "in a situationship economy.",
    colorway: "Natural Bone",
    image: "/tee-natural-bone.png",
    price: "₹699",
    tag: "EDITION 001",
  },
];

function TeeCard({ product }: { product: typeof products[0] }) {
  return (
    <div
      style={{
        border: "1px solid var(--border-dark)",
        background: "var(--black-soft)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Product image */}
      <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", flexShrink: 0 }}>
        <Image
          src={product.image}
          alt={`${product.name} Tee — ${product.colorway}`}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "var(--acid)",
            color: "var(--black)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.55rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            padding: "0.25rem 0.6rem",
          }}
        >
          {product.tag}
        </div>
      </div>

      {/* Product info */}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div>
          <p className="fine-print" style={{ color: "var(--gray)", marginBottom: "0.4rem" }}>
            {product.colorway.toUpperCase()}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
              color: "var(--cream)",
              lineHeight: 1.1,
            }}
          >
            {product.name}
          </h2>
          <p className="fine-print" style={{ marginTop: "0.4rem", fontStyle: "italic", color: "#4A4540" }}>
            {product.subtitle}
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            ["FIT", "Boxy / Oversized"],
            ["GSM", "280"],
            ["GENDER", "Unisex"],
          ].map(([label, val]) => (
            <div key={label}>
              <p className="fine-print" style={{ fontSize: "0.55rem", color: "var(--gray)", marginBottom: "0.15rem" }}>{label}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--cream)", fontWeight: 600 }}>{val}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border-dark)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "1.75rem",
              color: "var(--cream)",
              letterSpacing: "-0.03em",
            }}
          >
            {product.price}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--gray)", fontWeight: 400, letterSpacing: "0.1em", marginLeft: "0.4rem" }}>
              /-
            </span>
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.65rem 1.25rem", fontSize: "0.72rem" }}
          >
            DM TO BUY
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="bg-black-lurch" style={{ minHeight: "100dvh" }}>

        {/* Header */}
        <section
          style={{
            padding: "clamp(8rem, 14vw, 12rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 5rem)",
            borderBottom: "1px solid var(--border-dark)",
          }}
        >
          <div className="container-lurch">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
              <div>
                <p className="section-label">LURCH MERCH</p>
                <h1
                  className="headline text-cream"
                  style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", lineHeight: 0.88 }}
                >
                  Wear the<br />
                  <span style={{ color: "var(--oxblood-mid)" }}>bit.</span>
                </h1>
              </div>
              <div style={{ maxWidth: "340px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    color: "var(--gray)",
                    lineHeight: 1.5,
                    marginBottom: "1rem",
                  }}
                >
                  "We were going to focus on the app. Then someone asked for t-shirts and honestly, same."
                </p>
                <p className="fine-print" style={{ lineHeight: 1.8 }}>
                  Drop 001. Two colourways. One existential statement. Buy via Instagram because we haven't figured out payments yet — much like how you haven't figured out love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section style={{ padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)" }}>
          <div className="container-lurch">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                gap: "1px",
                background: "var(--border-dark)",
              }}
            >
              {products.map((p) => (
                <TeeCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* How to buy */}
        <section
          style={{
            padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
            borderTop: "1px solid var(--border-dark)",
          }}
        >
          <div className="container-lurch">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(2rem, 5vw, 4rem)",
                alignItems: "start",
              }}
            >
              <div>
                <p className="section-label">HOW TO BUY</p>
                <h2
                  className="headline text-cream"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1.5rem" }}
                >
                  It's a DM.<br />
                  <span style={{ color: "var(--gray)" }}>Not a checkout flow.</span>
                </h2>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--gray)", maxWidth: "400px", marginBottom: "2rem" }}>
                  We sell through Instagram. It keeps things human. Or at least, as human as a stranger sliding into your DMs with a UPI ID can be.
                </p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-acid"
                  style={{ fontSize: "0.95rem" }}
                >
                  Open Instagram →
                </a>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  ["01", "Find us on Instagram", "DM 'MERCH' and the colourway you want. We'll confirm availability. First come, first served, like most things in life."],
                  ["02", "Pay via UPI", "We'll send a UPI ID. You pay. We pack. No subscription required. No algorithm involved. Refreshing, we know."],
                  ["03", "Wait patiently", "Shipping in 3–5 working days. Not because we're slow — we're just not emotionally available for rushed timelines right now."],
                ].map(([num, title, desc], i, arr) => (
                  <div
                    key={num}
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      padding: "1.5rem 0",
                      borderTop: "1px solid var(--border-dark)",
                      borderBottom: i === arr.length - 1 ? "1px solid var(--border-dark)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: "1.5rem",
                        color: "var(--oxblood-mid)",
                        opacity: 0.4,
                        lineHeight: 1,
                        flexShrink: 0,
                        paddingTop: "0.1rem",
                        width: "2rem",
                      }}
                    >
                      {num}
                    </span>
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9rem", color: "var(--cream)", marginBottom: "0.4rem" }}>
                        {title}
                      </p>
                      <p className="fine-print" style={{ lineHeight: 1.7, fontSize: "0.72rem" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specs strip */}
        <section
          style={{
            borderTop: "1px solid var(--border-dark)",
            padding: "2rem clamp(1.5rem, 5vw, 5rem)",
            background: "var(--black-soft)",
          }}
        >
          <div className="container-lurch">
            <div
              style={{
                display: "flex",
                gap: "clamp(1.5rem, 5vw, 4rem)",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className="fine-print" style={{ letterSpacing: "0.2em" }}>PRODUCT SPECS</p>
              {[
                ["280 GSM", "Heavy cotton. It'll outlast your talking stage."],
                ["Boxy Fit", "Oversized, structured. Hides commitment issues."],
                ["Unisex", "We don't discriminate. Unlike your caste filter."],
                ["Pre-shrunk", "Can't say the same for expectations."],
              ].map(([label, sub]) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.85rem", color: "var(--cream)" }}>{label}</p>
                  <p className="fine-print" style={{ fontSize: "0.6rem", color: "#4A4540" }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "var(--black)", borderTop: "1px solid var(--border-dark)", padding: "2rem clamp(1.5rem, 5vw, 5rem)" }}>
          <div className="container-lurch" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/" className="lurch-logo text-cream" style={{ fontSize: "1.2rem", textDecoration: "none" }}>Lurch</Link>
            <p className="fine-print" style={{ color: "#4A4540" }}>© {new Date().getFullYear()} &nbsp;·&nbsp; Made with something between irony and sincerity</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[["Reads", "/reads"], ["Truth", "/truth"], ["Shop", "/shop"]].map(([label, href]) => (
                <Link key={label} href={href} className="fine-print" style={{ color: "#4A4540", textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
