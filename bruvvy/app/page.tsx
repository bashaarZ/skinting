// SkinTing Homepage — Variation 1: Hero search, everything below
// Matches wireframe layout, colors, and typography exactly.

interface Product {
  brand: string;
  name: string;
  category: string;
  price: string;
  rating: string;
  tag: string;
}

interface Editorial {
  title: string;
  count: string;
  tag: string;
  emoji: string;
}

const trendingProducts: Product[] = [
  { brand: "CeraVe", name: "Moisturizing Cream", category: "moisturizer", price: "$18", rating: "4.8", tag: "hydrating" },
  { brand: "Laneige", name: "Cream Skin Toner", category: "toner", price: "$34", rating: "4.7", tag: "barrier" },
  { brand: "La Roche-Posay", name: "Cicaplast Baume B5", category: "balm", price: "$22", rating: "4.9", tag: "soothing" },
  { brand: "The Ordinary", name: "Natural Moisturizing Factors", category: "moisturizer", price: "$8", rating: "4.5", tag: "lightweight" },
  { brand: "Tatcha", name: "The Dewy Skin Cream", category: "moisturizer", price: "$72", rating: "4.6", tag: "dewy glow" },
];

const bestInClassProducts: Product[] = [
  { brand: "Drunk Elephant", name: "Protini Polypeptide Cream", category: "moisturizer", price: "$68", rating: "4.7", tag: "peptides" },
  { brand: "Paula's Choice", name: "Barrier Repair Moisturizer", category: "moisturizer", price: "$45", rating: "4.8", tag: "ceramides" },
  { brand: "SkinCeuticals", name: "Triple Lipid Restore", category: "treatment", price: "$130", rating: "4.9", tag: "anti-aging" },
  { brand: "First Aid Beauty", name: "Ultra Repair Cream", category: "moisturizer", price: "$36", rating: "4.8", tag: "sensitive" },
  { brand: "Kiehl's", name: "Ultra Facial Cream", category: "moisturizer", price: "$32", rating: "4.6", tag: "24hr hydration" },
];

const editorials: Editorial[] = [
  { title: "Barrier season is here", count: "12 products", tag: "editorial", emoji: "🛡️" },
  { title: "Dupes I actually rate", count: "9 products", tag: "roundup", emoji: "💡" },
  { title: "Cycle-safe actives", count: "7 products", tag: "science", emoji: "🔬" },
];

// ── Primitives ──────────────────────────────────────────────

function Bead() {
  return (
    <span
      style={{
        width: 13,
        height: 13,
        borderRadius: "50%",
        border: "2px solid #1a1a1a",
        background: "#e06a33",
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}

type PillVariant = "default" | "active" | "soft";

function Pill({
  children,
  variant = "default",
  style,
}: {
  children: React.ReactNode;
  variant?: PillVariant;
  style?: React.CSSProperties;
}) {
  const bg: Record<PillVariant, string> = {
    default: "#f6f2ea",
    active: "#e06a33",
    soft: "#ede8dc",
  };
  return (
    <span
      style={{
        display: "inline-block",
        border: "1.5px solid #1a1a1a",
        borderRadius: 20,
        padding: "2px 10px",
        fontSize: 13,
        background: bg[variant],
        whiteSpace: "nowrap",
        fontFamily: "var(--font-kalam), Kalam, cursive",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-caveat), Caveat, cursive",
        fontSize: 26,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: "20px 0 10px",
      }}
    >
      {children}
      <span style={{ flex: 1, borderTop: "1.5px dashed #1a1a1a", display: "block" }} />
    </div>
  );
}

function ProductPlaceholder() {
  return (
    <div
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0,0,0,.07) 0 1px, transparent 1px 8px)",
        minHeight: 130,
        border: "1.5px dashed #1a1a1a",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#9a9590",
        fontFamily: "var(--font-kalam), Kalam, cursive",
        fontSize: 11,
        padding: 6,
        textAlign: "center",
      }}
    >
      product image
    </div>
  );
}

function ProductCard({ product, badge }: { product: Product; badge?: string }) {
  return (
    <div
      style={{
        border: "1.8px solid #1a1a1a",
        borderRadius: "12px 10px 14px 9px / 9px 14px 10px 12px",
        padding: 9,
        background: "#f6f2ea",
      }}
    >
      <ProductPlaceholder />
      <div
        style={{
          fontFamily: "var(--font-caveat), Caveat, cursive",
          fontSize: 17,
          marginTop: 6,
          lineHeight: 1.2,
        }}
      >
        {product.brand} · {product.name}
      </div>
      <div style={{ fontSize: 12, color: "#5a5550", marginTop: 2 }}>
        {product.category} · {product.price}
      </div>
      <div style={{ display: "flex", gap: 4, marginTop: 5, flexWrap: "wrap" }}>
        <Pill variant="soft">★ {product.rating}</Pill>
        <Pill variant="soft">{product.tag}</Pill>
        {badge && (
          <Pill variant="active" style={{ fontSize: 11 }}>
            {badge}
          </Pill>
        )}
      </div>
    </div>
  );
}

function EditorialCard({ item }: { item: Editorial }) {
  return (
    <div
      style={{
        border: "1.8px solid #1a1a1a",
        borderRadius: "12px 10px 14px 9px / 9px 14px 10px 12px",
        overflow: "hidden",
        background: "#f6f2ea",
      }}
    >
      <div
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,.07) 0 1px, transparent 1px 8px)",
          minHeight: 160,
          borderBottom: "1.5px solid #1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#9a9590",
          fontFamily: "var(--font-kalam), Kalam, cursive",
          fontSize: 14,
          padding: 16,
          gap: 8,
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 36 }}>{item.emoji}</span>
        <span>{item.title} — cover</span>
      </div>
      <div style={{ padding: "10px 14px" }}>
        <div
          style={{
            fontFamily: "var(--font-caveat), Caveat, cursive",
            fontSize: 22,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          &ldquo;{item.title}&rdquo;
        </div>
        <div style={{ fontSize: 14, color: "#5a5550", marginTop: 2 }}>
          {item.count} · {item.tag}
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-kalam), Kalam, cursive",
        color: "#1a1a1a",
      }}
    >
      {/* ── Navigation ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          padding: "10px 24px 12px",
          borderBottom: "1.5px dashed #1a1a1a",
          marginBottom: 14,
          fontFamily: "var(--font-caveat), Caveat, cursive",
          fontSize: 21,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
          <Bead />
          SkinTing
        </div>
        <a
          href="#"
          style={{
            color: "#1a1a1a",
            textDecoration: "none",
            borderBottom: "2.5px solid #e06a33",
            paddingBottom: 2,
          }}
        >
          Home
        </a>
        <a href="#" style={{ color: "#1a1a1a", textDecoration: "none" }}>
          Community
        </a>
        <a href="#" style={{ color: "#1a1a1a", textDecoration: "none" }}>
          Track
        </a>
        <a href="#" style={{ color: "#1a1a1a", textDecoration: "none" }}>
          Trends
        </a>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          <Pill variant="soft">🔔 3</Pill>
          <Pill variant="soft">+ log</Pill>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "1.5px solid #1a1a1a",
              background: "#f5c9a0",
              flexShrink: 0,
            }}
          />
        </div>
      </nav>

      {/* ── Main ── */}
      <main style={{ padding: "0 24px 56px", maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Hero ── */}
        <section style={{ textAlign: "center", padding: "24px 0 20px" }}>
          <div
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              fontSize: 18,
              color: "#5a5550",
            }}
          >
            good morning — your barrier is looking good today ☀️
          </div>
          <h1
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              fontSize: "clamp(36px, 6vw, 58px)",
              lineHeight: 1,
              margin: "6px 0 16px",
            }}
          >
            what are you looking for?
          </h1>

          {/* Search bar */}
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              border: "2px solid #1a1a1a",
              borderRadius: 30,
              padding: "11px 18px",
              background: "#f6f2ea",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 15,
              color: "#5a5550",
              boxShadow: "4px 4px 0 #1a1a1a",
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 18 18"
              fill="none"
              style={{ flexShrink: 0 }}
              aria-hidden="true"
            >
              <circle cx="7.5" cy="7.5" r="5.5" stroke="#1a1a1a" strokeWidth="2" />
              <line
                x1="11.7"
                y1="11.7"
                x2="16.5"
                y2="16.5"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ flex: 1, textAlign: "left" }}>
              try &ldquo;moisturizer for oily skin&rdquo; or &ldquo;my skin is flaring up&rdquo;&hellip;
            </span>
            <Pill variant="active">↵ ask</Pill>
          </div>

          {/* Feature pills */}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 6,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Pill variant="soft">⚡ realtime filter</Pill>
            <Pill variant="soft">✨ AI search</Pill>
            <Pill variant="soft">🎯 matches my skin</Pill>
          </div>
        </section>

        {/* ── Trending in moisturizers ── */}
        <SectionTitle>Trending in moisturizers</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 8,
          }}
        >
          {trendingProducts.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        {/* ── Best in class ── */}
        <SectionTitle>Best in class</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 8,
          }}
        >
          {bestInClassProducts.map((p) => (
            <ProductCard key={p.name} product={p} badge="top 1%" />
          ))}
        </div>

        {/* ── Editorial picks ── */}
        <SectionTitle>Editorial picks</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          {editorials.map((e) => (
            <EditorialCard key={e.title} item={e} />
          ))}
        </div>
      </main>
    </div>
  );
}
