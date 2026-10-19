import { Fragment } from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { FaqAccordion, type FaqItem } from "./faq-accordion";

export const metadata: Metadata = {
  title: "Best Red Light Therapy Mats for Pain Relief (2026)",
  description:
    "We compare the best red light therapy mats for pain relief, recovery, coverage, light output, value, warranties, and ease of use in 2026.",
};

const APOLLO_URL =
  "https://www.getyourapollo.com/products/apollothera-red-light-mat?variant=52233395470655";

/** The four policy/benefit bullets inside the card. */
const bullets: string[] = [
  "90-day money-back guarantee",
  "146 mW/cm² stated irradiance",
  "1-year warranty",
  "Free shipping",
];

/**
 * Official photograph from the standard Recovery Mat's own product gallery.
 * This is the compact 36.2″ × 15.7″ Recovery Mat — never the much larger
 * 74.8″ × 31.5″ Full Body Mat. The two mats' specifications are never mixed.
 */
const productImage = {
  src: "/apollothera-recovery-mat.png",
  alt: "The illuminated ApolloThera Recovery Mat",
  width: 1254,
  height: 1254,
};

/**
 * Rendered wherever a rating is withheld. The overall ratings below are
 * approved editorial figures; the per-category breakdown in Section 6 stays
 * pending until one transparent scoring method has been applied to all five
 * mats, so no category score is back-filled to justify the ranking.
 */
const PENDING_MARK = "—";

/** The #1 pick's overall rating and grade — approved editorial figures. */
const topScore: string | null = "9.6";
const topGrade: string | null = "A+";

/** Small award mark on the #1 badge. */
function MedalIcon() {
  return (
    <svg
      className={styles.rankMedal}
      viewBox="0 0 16 16"
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M5.1.5 3.3 3.8 1.4.9.3 6.2l2.6.5A5.3 5.3 0 0 1 5.1.5Zm5.8 0a5.3 5.3 0 0 1 2.3 6.2l2.6-.5L14.6.9l-1.9 2.9L10.9.5Z"
      />
      <circle cx="8" cy="10" r="5.3" fill="currentColor" />
      <path
        fill="#e9b949"
        d="m8 7 .85 1.72 1.9.28-1.37 1.34.32 1.89L8 11.34l-1.7.89.32-1.89L5.25 9l1.9-.28L8 7Z"
      />
    </svg>
  );
}

const navItems: { label: string; href: string; active?: boolean }[] = [
  { label: "Pain Relief", href: "/best-red-light-therapy-mats", active: true },
  { label: "Red Light Mats", href: "/" },
  { label: "How We Review", href: "#method" },
  { label: "Our Editors", href: "#editors" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

const crumbs: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Reviews", href: "/" },
  { label: "Pain Relief", href: "/best-red-light-therapy-mats" },
  { label: "Red Light Mats", href: "/best-red-light-therapy-mats" },
];

function CalendarIcon() {
  return (
    <svg className={styles.bylineIcon} viewBox="0 0 16 16" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M5 .8v1.4h6V.8h1.6v1.4H14c.6 0 1 .5 1 1V14c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V3.2c0-.5.4-1 1-1h1.4V.8H5Zm8.4 5H2.6v7.6h10.8V5.8Z"
      />
    </svg>
  );
}

function TrustIcon() {
  return (
    <svg className={styles.bylineIcon} viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M12 1.5 3.6 4.7v6.1c0 5.2 3.5 9.9 8.4 11.7 4.9-1.8 8.4-6.5 8.4-11.7V4.7L12 1.5Zm-1.2 15.1-4-4 1.7-1.7 2.3 2.3 5-5 1.7 1.7-6.7 6.7Z"
      />
    </svg>
  );
}

const RECOVERY_URL = "https://www.getyourapollo.com/products/apollo-recovery-mat";

type Column = {
  rank: string;
  name: string;
  top?: boolean;
  thumb: { src: string; alt: string } | { brand: string };
  /** null while the revised scoring framework is pending approval. */
  score: string | null;
  grade: string | null;
  price: string;
  extras: string;
  size: string;
  wavelengths: string;
  output: string;
  leds: string;
  session: string;
  coverage: string;
  returnWindow: string;
  returnUsed: string;
  warranty: string;
  shipping: string;
  /** href is null for brands we no longer link out to. */
  site: { label: string; href: string | null };
};

/** Section 5 — approved figures only; nothing recalculated or inferred. */
const columns: Column[] = [
  {
    rank: "#1 Our pick",
    name: "ApolloThera Recovery",
    top: true,
    thumb: {
      src: "/apollothera-recovery-mat.png",
      alt: "ApolloThera Recovery Mat",
    },
    score: "9.6",
    grade: "A+",
    price: "$199.99 (reg. $399.99)",
    extras:
      "Personalized Recovery Protocol + Recovery Cream + Priority Shipping",
    size: "36.2″ × 15.7″; 32.2″ × 10.5″ light-emitting area",
    wavelengths: "660nm + 850nm",
    output: "146 mW/cm² (stated, third-party tested at 0″)",
    leds: "380 triple-chip LED modules; 1,140 light chips",
    session: "10–20 min",
    coverage: "Neck to hip lying down; reposition for targeted areas",
    returnWindow: "90 days from delivery",
    returnUsed: "Yes — 90-day money-back guarantee",
    warranty: "1 year",
    shipping: "Free shipping; Priority Shipping included",
    site: { label: "getyourapollo.com", href: RECOVERY_URL },
  },
  {
    rank: "#2",
    name: "ApolloThera Full Body",
    thumb: {
      src: "/apollothera-full-body-mat.png",
      alt: "ApolloThera Full Body Red Light Mat",
    },
    score: "9.2",
    grade: "A",
    price: "$649.99 (reg. $1,299.99)",
    extras:
      "Personalized Recovery Protocol + Recovery Cream + Priority Shipping",
    size: "74.8″ × 31.5″",
    wavelengths: "660nm + 850nm",
    output: "150 mW/cm²",
    leds: "1,420 three-in-one LED chips",
    session: "20 min",
    coverage: "Full body; neck to ankles",
    returnWindow: "90 days from delivery",
    returnUsed: "Yes — 90-day money-back guarantee",
    warranty: "1 year",
    shipping: "Free shipping; Priority Shipping included",
    site: { label: "getyourapollo.com", href: APOLLO_URL },
  },
  {
    rank: "#3",
    name: "EMBRA",
    thumb: {
      src: "/embra-mat.png",
      alt: "EMBRA Full Body Red Light Therapy Mat",
    },
    score: "8.5",
    grade: "B+",
    price: "$699 (reg. $1,199)",
    extras: "Free relief belt",
    size: "71″ × 31.5″",
    wavelengths: "660nm + 850nm",
    output: "Not clearly stated",
    leds: "1,410 LEDs",
    session: "20 min auto-off",
    coverage: "Neck to calves",
    returnWindow: "60 nights from delivery",
    returnUsed: "Yes — no fee",
    warranty: "2 years",
    shipping: "Free US shipping",
    site: { label: "embrabody.com", href: null },
  },
  {
    rank: "#4",
    name: "MEGELIN",
    thumb: {
      src: "/megelin-mat.png",
      alt: "MEGELIN Red & Infrared Light Therapy Mat",
    },
    score: "8.1",
    grade: "B",
    price: "$739",
    extras: "Mat only listed",
    size: "71″ × 32″",
    wavelengths: "660nm + 850nm",
    output: "120 mW/cm²",
    leds: "3,840 LEDs",
    session: "5 levels, 3 modes",
    coverage: "Full body mat",
    returnWindow: "60 days from purchase",
    returnUsed: "Yes — 20% restocking fee",
    warranty: "1 year",
    shipping: "Free over $98; 5–10 days",
    site: { label: "megelin.com", href: null },
  },
  {
    rank: "#5",
    name: "NUVIO",
    thumb: {
      src: "/nuvio-mat.png",
      alt: "NUVIO Red Light Therapy Mat",
    },
    score: "7.8",
    grade: "B-",
    price: "$499.99",
    extras: "No",
    size: "71″ × 32″",
    wavelengths: "660nm + 850nm",
    output: "120 mW/cm²",
    leds: "3,840 LEDs",
    session: "5 levels, modes, timer",
    coverage: "Full body mat",
    returnWindow: "30 days from delivery",
    returnUsed: "No — unused only",
    warranty: "1 year",
    shipping: "Free shipping",
    site: { label: "nuviorecovery.com", href: null },
  },
];

/** The factual rows, below the score row, in order. */
const tableRows: { label: string; get: (c: Column) => string }[] = [
  { label: "Price", get: (c) => c.price },
  { label: "Current extras included", get: (c) => c.extras },
  { label: "Size", get: (c) => c.size },
  { label: "Wavelengths", get: (c) => c.wavelengths },
  { label: "Stated output", get: (c) => c.output },
  { label: "LED system", get: (c) => c.leds },
  { label: "Typical session", get: (c) => c.session },
  { label: "Coverage", get: (c) => c.coverage },
  { label: "Return window", get: (c) => c.returnWindow },
  { label: "Return it used?", get: (c) => c.returnUsed },
  { label: "Warranty", get: (c) => c.warranty },
  { label: "Shipping", get: (c) => c.shipping },
];

/* ---------------------------------------------------------------------------
   Section 6 — detailed review #1, ApolloThera Recovery Mat™, as a single
   compact editorial card. Standard Recovery Mat figures only.
   --------------------------------------------------------------------------- */

/** The card's overall rating, drawn in the score ring. */
const RC_SCORE = 9.6;

/**
 * Supplied provisional category scores. They are editorial figures, not a
 * validated calculation of the 9.6 overall, and stay provisional until one
 * defensible methodology is approved for all five products.
 */
const rcScores: { label: string; score: number }[] = [
  { label: "Coverage & Size", score: 8.5 },
  { label: "Light Output", score: 9.8 },
  { label: "Ease of Use", score: 9.8 },
  { label: "Returns & Warranty", score: 9.6 },
  { label: "Value", score: 10.0 },
];

/** Small terracotta outline marks on the six specification tiles. */
type TileIcon =
  | "ruler"
  | "grid"
  | "zap"
  | "shield"
  | "wave"
  | "truck"
  | "clock"
  | "award"
  | "sliders";

function TileMark({ name }: { name: TileIcon }) {
  const paths: Record<TileIcon, React.ReactNode> = {
    ruler: (
      <>
        <rect x="2.5" y="8" width="19" height="8" rx="1.6" />
        <path d="M7 8v3M11 8v3M15 8v3M19 8v3" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
      </>
    ),
    zap: <path d="M13 2 4 13.5h6.5L10 22l9-11.5h-6.5L13 2Z" />,
    shield: (
      <>
        <path d="M12 2.5 4.5 5.3v5.6c0 4.7 3.1 8.9 7.5 10.4 4.4-1.5 7.5-5.7 7.5-10.4V5.3L12 2.5Z" />
        <path d="m8.9 11.8 2.2 2.2 4-4.2" />
      </>
    ),
    wave: <path d="M2 12h3.2l3-7.5 4.2 15 3-7.5H22" />,
    truck: (
      <>
        <path d="M2.8 6h10.6v9.4H2.8z" />
        <path d="M13.4 9.4h3.9l3 3v3h-6.9z" />
        <circle cx="7" cy="17.8" r="1.7" />
        <circle cx="17.4" cy="17.8" r="1.7" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6.8v5.4l3.4 2" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="9" r="5.4" />
        <path d="m8.7 13.5-1.4 7.1 4.7-2.6 4.7 2.6-1.4-7.1" />
      </>
    ),
    sliders: (
      <>
        <path d="M5 21v-6.4M5 10.4V3M12 21v-8.6M12 8.2V3M19 21v-4.4M19 12.4V3" />
        <path d="M2.6 14.6h4.8M9.6 8.2h4.8M16.6 16.6h4.8" />
      </>
    ),
  };

  return (
    <svg
      className={styles.rcTileIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

/** The six specification tiles — approved Recovery Mat figures only. */
const rcTiles: { icon: TileIcon; main: string; sub: string }[] = [
  { icon: "ruler", main: "36.2″ × 15.7″", sub: "Neck-to-hip mat" },
  {
    icon: "grid",
    main: "380 Triple-Chip LEDs",
    sub: "1,140 individual light chips",
  },
  { icon: "zap", main: "146 mW/cm²", sub: "Stated output at 0″ distance" },
  {
    icon: "shield",
    main: "90-Day Guarantee",
    sub: "Subject to published terms",
  },
  { icon: "wave", main: "660nm + 850nm", sub: "Red + near-infrared light" },
  { icon: "truck", main: "Free Shipping", sub: "1-year warranty included" },
];

const rcLiked: { lead: string; rest: string }[] = [
  { lead: "Lowest price in this comparison.", rest: "Just $199.99." },
  { lead: "Strong stated light output.", rest: "146 mW/cm² at 0″." },
  { lead: "Simple daily use.", rest: "Lie down for 10–20 minutes." },
  { lead: "Recovery bundle included.", rest: "Free Cream + Protocol." },
];

const rcDisliked: { lead: string; rest: string }[] = [
  {
    lead: "Online only:",
    rest: "not available in physical retail stores.",
  },
  {
    lead: "Limited availability:",
    rest:
      "already sold out twice this year—check availability while the 50% OFF bundle is available.",
  },
];

const rcChooseIf =
  "You want affordable red light therapy for your back, hips, and joints without spending $500+ on a full-body mat.";

const rcSkipIf =
  "You need full-body coverage in one position or prefer a larger mat without repositioning.";

/* ---------------------------------------------------------------------------
   Section 7 — detailed review #2, ApolloThera Full Body Red Light Mat™, on the
   same editorial card as review #1. The only colour-hierarchy difference is
   the navy badge and the muted grade chip. Full Body figures only — the two
   ApolloThera mats' specifications are never mixed.
   --------------------------------------------------------------------------- */

/** The card's overall rating, drawn in the score ring. */
const FB_SCORE = 9.2;

/**
 * Supplied provisional category scores: design inputs awaiting confirmation,
 * not a weighted calculation behind the 9.2 overall.
 */
const fbScores: { label: string; score: number }[] = [
  { label: "Coverage & Size", score: 10.0 },
  { label: "Light Output", score: 9.8 },
  { label: "Ease of Use", score: 9.4 },
  { label: "Returns & Warranty", score: 8.8 },
  { label: "Value", score: 8.0 },
];

/** The six specification tiles — approved Full Body figures only. */
const fbTiles: { icon: TileIcon; main: string; sub: string }[] = [
  { icon: "ruler", main: "74.8″ × 31.5″", sub: "Full-body coverage" },
  {
    icon: "grid",
    main: "1,420 Three-in-One LEDs",
    sub: "Three-in-one LED modules",
  },
  { icon: "zap", main: "150 mW/cm²", sub: "Manufacturer-stated irradiance" },
  {
    icon: "shield",
    main: "90-Day Guarantee",
    sub: "Subject to published terms",
  },
  { icon: "wave", main: "660nm + 850nm", sub: "Red + near-infrared light" },
  { icon: "truck", main: "Free Shipping", sub: "1-year warranty included" },
];

const fbLiked: { lead: string; rest: string }[] = [
  { lead: "Full-body coverage.", rest: "74.8″ × 31.5″ treatment surface." },
  { lead: "Strong stated output.", rest: "150 mW/cm² irradiance." },
  { lead: "Simple daily routine.", rest: "Lie down for 20 minutes." },
  { lead: "Recovery extras included.", rest: "Free Cream + Protocol." },
];

const fbDisliked: { lead: string | null; rest: string }[] = [
  { lead: null, rest: "Higher upfront price: $649.99." },
  {
    lead: "Online only:",
    rest: "not available in physical retail stores.",
  },
  {
    lead: "Limited availability:",
    rest:
      "already sold out twice this year—check availability while the 50% OFF bundle is available.",
  },
];

const fbChooseIf =
  "You want full-body red light coverage in one session without having to reposition a smaller mat.";

const fbSkipIf =
  "You mainly want back or joint coverage and prefer the $199.99 ApolloThera Recovery Mat.";

/* ---------------------------------------------------------------------------
   Section 8 — detailed review #3, EMBRA Full Body Red Light Therapy Mat, on
   the same editorial card as reviews #1 and #2. Mat Kit figures only — never
   the Bag Premium's.
   --------------------------------------------------------------------------- */

/** The card's overall rating, drawn in the score ring. */
const EM_SCORE = 8.5;

/**
 * Proposed editorial scores, not verified experimental ratings. These five
 * average to the 8.5 overall under equal weighting, but the weighting itself
 * is not an approved methodology.
 */
const emScores: { label: string; score: number }[] = [
  { label: "Coverage & Size", score: 9.2 },
  { label: "Light Output", score: 7.0 },
  { label: "Ease of Use", score: 9.0 },
  { label: "Returns & Warranty", score: 9.7 },
  { label: "Value", score: 7.6 },
];

/** The six specification tiles — published EMBRA Mat Kit figures only. */
const emTiles: { icon: TileIcon; main: string; sub: string }[] = [
  { icon: "ruler", main: "71″ × 31.5″", sub: "Neck-to-calves coverage" },
  { icon: "grid", main: "1,410 LEDs", sub: "660nm + 850nm light" },
  {
    icon: "zap",
    main: "Free Relief Belt",
    sub: "120 LEDs; included with Mat Kit",
  },
  { icon: "clock", main: "60-Night Trial", sub: "Used returns accepted" },
  {
    icon: "award",
    main: "2-Year Warranty",
    sub: "Replacement part ships first",
  },
  {
    icon: "truck",
    main: "Free US Shipping",
    sub: "7–10 business days stated",
  },
];

const emLiked: { lead: string; rest: string }[] = [
  { lead: "Large coverage.", rest: "71″ × 31.5″ neck-to-calves mat." },
  {
    lead: "Free Relief Belt.",
    rest: "Extra targeted coverage for the back or knees.",
  },
  {
    lead: "Generous return policy.",
    rest: "60 nights, including used returns and prepaid shipping.",
  },
  {
    lead: "Longer warranty.",
    rest:
      "Two years, with replacement parts shipped first for approved claims.",
  },
];

const emDisliked: { lead: string; rest: string }[] = [
  { lead: "Higher price.", rest: "$699 versus $199.99 for our #1 pick." },
  {
    lead: "Output comparison is limited.",
    rest:
      "No clearly published irradiance figure on the reviewed product page.",
  },
  { lead: "Slower shipping.", rest: "Listed US delivery is 7–10 business days." },
  {
    lead: "Returns require the accessories.",
    rest: "Free gifts and included components must be sent back.",
  },
];

const emChooseIf =
  "You want a full-body mat with an additional relief belt, a longer warranty, and a return policy that allows real at-home use.";

const emSkipIf =
  "You want an affordable compact mat, prioritize a lower upfront price, or need a shorter shipping window.";

/* ---------------------------------------------------------------------------
   Section 9 — detailed review #4, MEGELIN Red & Infrared Light Therapy Mat,
   on the same editorial card as reviews #1–#3. Standard LED Mat variant only
   — never the LED Bag, whose LED count and specifications differ.
   --------------------------------------------------------------------------- */

/** The card's overall rating, drawn in the score ring. */
const MG_SCORE = 8.1;

/**
 * Proposed editorial assessments, not independently measured performance
 * scores. They average to the 8.1 overall under equal weighting, which is not
 * yet a methodology approved across all five mats.
 */
const mgScores: { label: string; score: number }[] = [
  { label: "Coverage & Size", score: 9.5 },
  { label: "Light Output", score: 8.0 },
  { label: "Ease of Use", score: 8.5 },
  { label: "Returns & Warranty", score: 7.5 },
  { label: "Value", score: 7.0 },
];

/** The six specification tiles — published standard LED Mat figures only. */
const mgTiles: { icon: TileIcon; main: string; sub: string }[] = [
  { icon: "ruler", main: "71″ × 32″", sub: "Full-body treatment surface" },
  { icon: "grid", main: "3,840 LEDs", sub: "Published LED Mat specification" },
  { icon: "zap", main: "120 mW/cm²", sub: "Stated irradiance at 0″" },
  {
    icon: "clock",
    main: "60-Day Guarantee",
    sub: "Subject to return conditions",
  },
  { icon: "wave", main: "660nm + 850nm", sub: "Red + near-infrared light" },
  {
    icon: "award",
    main: "1-Year Warranty",
    sub: "HSA/FSA eligibility advertised",
  },
];

const mgLiked: { lead: string; rest: string }[] = [
  {
    lead: "High published LED count.",
    rest: "3,840 LEDs in the standard mat.",
  },
  { lead: "Generous coverage.", rest: "71″ × 32″ full-body surface." },
  {
    lead: "Dual wavelengths.",
    rest: "660nm red + 850nm near-infrared light.",
  },
  {
    lead: "HSA/FSA eligibility.",
    rest: "Advertised on the official product page.",
  },
];

const mgDisliked: { lead: string; rest: string }[] = [
  { lead: "Higher price.", rest: "$739 versus $199.99 for our #1 pick." },
  {
    lead: "Lower stated irradiance.",
    rest:
      "120 versus ApolloThera's 146 mW/cm², although measurement methods may differ.",
  },
  {
    lead: "Return conditions require attention.",
    rest: "Review eligibility and any applicable fees before ordering.",
  },
  {
    lead: "Large format.",
    rest: "Less convenient to transport than compact mats.",
  },
];

const mgChooseIf =
  "You want a large full-body LED mat, prioritize a high published LED count, and have a larger budget.";

const mgSkipIf =
  "You mainly want targeted back or joint coverage and prefer a compact mat at a substantially lower price.";

/* ---------------------------------------------------------------------------
   Section 10 — detailed review #5, NUVIO Red Light Therapy Mat, on the same
   editorial card as reviews #1–#4. Standard Mat figures only — never the Red
   Light Therapy Bag, whose 7,560-LED count belongs to a different product.
   --------------------------------------------------------------------------- */

/** The card's overall rating, drawn in the score ring. */
const NV_SCORE = 7.8;

/**
 * Proposed editorial assessments. They average to the 7.8 overall under equal
 * weighting, but still require one consistent published methodology across all
 * five products before they are presented as finalized evaluations.
 */
const nvScores: { label: string; score: number }[] = [
  { label: "Coverage & Size", score: 9.0 },
  { label: "Light Output", score: 7.8 },
  { label: "Ease of Use", score: 8.6 },
  { label: "Returns & Warranty", score: 6.2 },
  { label: "Value", score: 7.4 },
];

/** The six specification tiles — published standard Mat figures only. */
const nvTiles: { icon: TileIcon; main: string; sub: string }[] = [
  { icon: "ruler", main: "71″ × 32″", sub: "Full-body treatment area" },
  { icon: "grid", main: "3,840 LEDs", sub: "Published LED Mat specification" },
  { icon: "zap", main: "120 mW/cm²", sub: "Stated irradiance at 0″" },
  {
    icon: "sliders",
    main: "5 Intensity Levels",
    sub: "Adjustable light settings",
  },
  { icon: "wave", main: "660nm + 850nm", sub: "Red + near-infrared light" },
  {
    icon: "award",
    main: "1-Year Warranty",
    sub: "Replacement-based coverage",
  },
];

const nvLiked: { lead: string; rest: string }[] = [
  { lead: "Affordable full-body option.", rest: "$499.99 listed price." },
  { lead: "Large coverage area.", rest: "71″ × 32″ mat." },
  {
    lead: "Adjustable settings.",
    rest: "Five intensity levels and timer.",
  },
  { lead: "Dual wavelengths.", rest: "660nm red + 850nm near-infrared." },
];

const nvDisliked: { lead: string; rest: string }[] = [
  {
    lead: "Costs $300 more than our #1 pick.",
    rest: "Despite its lower full-body price.",
  },
  {
    lead: "Lower stated irradiance.",
    rest:
      "120 versus ApolloThera Recovery's 146 mW/cm²; test conditions may differ.",
  },
  {
    lead: "Refund terms need clarification.",
    rest: "The brand emphasizes replacement-based warranty support.",
  },
  { lead: "Larger to store.", rest: "Less compact than targeted mats." },
];

const nvChooseIf =
  "You want a large full-body red light mat with adjustable settings at a lower price than several premium alternatives.";

const nvSkipIf =
  "You primarily need back or targeted-joint coverage, prefer a smaller mat, or prioritize a clearly documented satisfaction-return policy.";

/* ---------------------------------------------------------------------------
   Section 11 — How we score. A proposed framework: the ratings shown in the
   five reviews are editorial assessments, and this section does not claim they
   were produced by the formula below.
   --------------------------------------------------------------------------- */

const msWeights: { label: string; weight: string }[] = [
  { label: "Coverage & Size", weight: "20%" },
  { label: "Light Output", weight: "20%" },
  { label: "Ease of Use", weight: "20%" },
  { label: "Returns & Warranty", weight: "20%" },
  { label: "Value", weight: "20%" },
];

const msCriteria: { n: string; title: string; text: string }[] = [
  {
    n: "01",
    title: "Coverage & Size (20%)",
    text:
      "Evaluates the physical treatment area, ability to cover multiple body regions, and suitability for the intended use. Larger mats generally score higher for simultaneous coverage, while compact mats may remain better suited to targeted routines.",
  },
  {
    n: "02",
    title: "Light Output (20%)",
    text:
      "Considers published wavelengths, stated irradiance, and LED configuration. Because brands may use different measurement methods, published irradiance figures are not treated as direct proof of superior therapeutic results.",
  },
  {
    n: "03",
    title: "Ease of Use (20%)",
    text:
      "Evaluates setup, session convenience, flexibility, controls, portability, and the practical effort required for regular use.",
  },
  {
    n: "04",
    title: "Returns & Warranty (20%)",
    text:
      "Considers the published return window, eligibility of used products, return shipping costs, restocking fees, and warranty terms.",
  },
  {
    n: "05",
    title: "Value (20%)",
    text:
      "Considers the current selling price in relation to treatment coverage, specifications, included accessories, buyer protection, and intended use.",
  },
];

/** The worked example: the one card whose breakdown already matches the sum. */
const msExample: { label: string; score: string }[] = [
  { label: "Coverage", score: "10.0" },
  { label: "Light Output", score: "9.8" },
  { label: "Ease of Use", score: "9.4" },
  { label: "Returns & Warranty", score: "8.8" },
  { label: "Value", score: "8.0" },
];

const msGrades: { range: string; grade: string }[] = [
  { range: "9.5–10.0", grade: "A+" },
  { range: "9.0–9.4", grade: "A" },
  { range: "8.5–8.9", grade: "B+" },
  { range: "8.0–8.4", grade: "B" },
  { range: "7.5–7.9", grade: "B-" },
  { range: "7.0–7.4", grade: "C+" },
  { range: "Below 7.0", grade: "C or lower" },
];


/* ---------------------------------------------------------------------------
   Section 13 — How to choose a red light therapy mat. Educational only: no
   products, scores, CTAs, or clinical claims.
   --------------------------------------------------------------------------- */

const buyingTips: { n: string; title: string; text: string }[] = [
  {
    n: "01",
    title: "Choose the right coverage area",
    text:
      "Full-body mats offer a larger treatment surface, but that doesn't automatically make them the best choice for everyone. If you mainly want to use red light on your back, hips, or individual joints, a smaller flexible mat may be more practical and significantly less expensive. Check the actual dimensions rather than relying on product names alone.",
  },
  {
    n: "02",
    title: "Look for clearly stated wavelengths",
    text:
      "Red light therapy mats commonly combine visible red light around 660nm with near-infrared light around 850nm. These wavelengths are widely studied in photobiomodulation research, but the benefits of a specific device depend on more than wavelength alone. Look for clearly published specifications and realistic usage instructions.",
  },
  {
    n: "03",
    title: "Understand light output — not just LED count",
    text:
      "More LEDs do not automatically mean a more effective mat. Irradiance, usually expressed in mW/cm², describes the light power delivered per unit area under specified measurement conditions. When comparing brands, check whether testing distance and measurement methods are disclosed. Claims measured under different conditions may not be directly comparable.",
  },
  {
    n: "04",
    title: "Choose a mat you'll actually use",
    text:
      "A device is only practical if it fits your routine. Consider whether you can comfortably lie on it, how easily it can be positioned or stored, how the controller works, and how long a typical session lasts. Compact mats are easier to move between locations, while full-body mats can reduce the need to reposition.",
  },
  {
    n: "05",
    title: "Read the return policy before buying",
    text:
      "Pay attention to when the return window begins, whether used products are eligible, who pays return shipping, and whether restocking fees apply. Also distinguish between a satisfaction-based money-back guarantee and a warranty that covers manufacturing defects. A longer advertised period does not necessarily mean fewer return conditions.",
  },
  {
    n: "06",
    title: "Compare the complete offer, not just the price",
    text:
      "Compare the purchase price with the mat's size, stated specifications, included accessories, warranty, and return conditions. A higher-priced full-body mat may justify its cost for someone who wants extensive coverage, while a compact mat may offer better value for buyers focused on a smaller area. Choose according to your actual needs rather than the largest specification number.",
  },
];

const buyingChecklist: string[] = [
  "Does the mat cover the areas you want to target?",
  "Are the wavelengths and light-output claims clearly stated?",
  "Is the mat practical for your space and daily routine?",
  "Can you understand the return and warranty conditions?",
  "Are shipping costs and included accessories clear?",
  "Does the price make sense for the coverage you actually need?",
];

/* ---------------------------------------------------------------------------
   Section 14 — repeated #1 recommendation. The standard $199.99 Recovery Mat
   only; never the $649.99 Full Body Mat.
   --------------------------------------------------------------------------- */

const foBullets: { lead: string; rest: string }[] = [
  {
    lead: "Neck-to-hip coverage",
    rest: "with a flexible 36.2″ × 15.7″ mat",
  },
  {
    lead: "660nm + 850nm light",
    rest: "with 146 mW/cm² stated irradiance",
  },
  { lead: "Simple 10–20 minute sessions", rest: "while lying down" },
];

const foBonuses: { name: string; value: string }[] = [
  { name: "FREE Personalized Recovery Protocol", value: "listed $150 value" },
  { name: "FREE ApolloThera Recovery Cream", value: "listed $39.99 value" },
  { name: "FREE Priority Shipping", value: "listed $9.95 value" },
];

const foTrust: string[] = [
  "90-Day Money-Back Guarantee",
  "1-Year Warranty",
  "Free Shipping",
];

/* ---------------------------------------------------------------------------
   Section 15 — Frequently asked questions. Factual answers only: no promised
   outcomes, no universal safety assurance, no claim that the published scores
   are mathematically verified while the scoring audit is open.
   --------------------------------------------------------------------------- */

const faqs: FaqItem[] = [
  {
    question: "Can red light therapy mats help with back and joint pain?",
    answer:
      "Red and near-infrared light therapy has been studied for certain types of musculoskeletal discomfort, including some joint and muscle conditions. However, results vary depending on the condition, light dose, treatment schedule, and device. A home-use mat may be a useful addition to a recovery routine, but it should not be considered a guaranteed treatment or replacement for medical care.",
  },
  {
    question: "Is a full-body mat better than a smaller recovery mat?",
    answer:
      "Not necessarily. Full-body mats provide a larger treatment area and can reduce the need to reposition the device. Smaller mats are generally easier to store, transport, and use for specific regions such as the back or hips. Our #1 pick, the ApolloThera Recovery Mat, costs $199.99 and is designed for neck-to-hip coverage, while larger full-body options in this comparison start at a higher price.",
  },
  {
    question:
      "What's the difference between 660nm red light and 850nm near-infrared light?",
    answer:
      "660nm is visible red light, while 850nm is near-infrared light that is largely invisible to the human eye. These wavelengths interact differently with tissue and are commonly used in photobiomodulation devices. The actual effects depend on the device's delivered dose and treatment conditions, not simply the wavelengths printed on the product listing.",
  },
  {
    question: "Does a higher LED count mean better results?",
    answer:
      "No. LED count describes the number of emitters or light chips, but manufacturers may count them differently. A larger number does not automatically mean more light reaches the treatment area or that the device delivers better clinical results. Consider coverage, measured output, treatment distance, and overall usability alongside LED count.",
  },
  {
    question: "How long should I use a red light therapy mat?",
    answer:
      "Follow the manufacturer's instructions for your specific device. The standard ApolloThera Recovery Mat recommends 10–20 minute sessions, while its Full Body Mat describes a 20-minute session. Recommended duration can differ between products, and using a device for longer than instructed does not necessarily improve results.",
  },
  {
    question: "Are red light therapy mats safe for everyone?",
    answer:
      "Red and near-infrared light devices are generally intended for non-invasive use when operated as directed, but they may not be suitable for every person. People with photosensitive conditions, those taking photosensitizing medications, and anyone with significant medical concerns should seek professional guidance before use. Follow the device's instructions, including any eye-protection guidance and contraindications.",
  },
  {
    question:
      "Why does the ApolloThera Recovery Mat rank #1 when larger mats cost more?",
    answer: (
      <>
        Our overall recommendation considers more than treatment size.{" "}
        <a className={styles.fqLink} href={RECOVERY_URL}>
          ApolloThera Recovery Mat
        </a>
        &rsquo;s standard model combines a $199.99 listed price, 36.2-inch
        length, 660nm/850nm wavelengths, 146 mW/cm² stated irradiance, a 90-day
        money-back guarantee, and included recovery extras. Larger mats offer
        wider coverage, but the standard ApolloThera model is our preferred
        value option for buyers primarily focused on targeted everyday use.
      </>
    ),
  },
  {
    question: "What should I check before relying on a money-back guarantee?",
    answer:
      "Check when the return period starts, whether you may use the product before requesting a return, what documentation is required, and who pays return shipping. ApolloThera advertises a 90-day money-back guarantee, subject to its published conditions. Other brands may have shorter windows, restocking fees, or different requirements. Always review the current official policy before purchasing.",
  },
];

/* ---------------------------------------------------------------------------
   Section 16 — author, editorial standards, sources, disclosures, footer.
   --------------------------------------------------------------------------- */

const editorialPrinciples: { lead: string; rest: string }[] = [
  {
    lead: "Source-based research:",
    rest:
      "We reference brand-published information and relevant scientific literature.",
  },
  {
    lead: "Consistent comparisons:",
    rest: "We aim to evaluate products using the same published criteria.",
  },
  {
    lead: "Clear limitations:",
    rest:
      "We do not claim hands-on testing or independent laboratory verification where none has been conducted.",
  },
];

const articleInfo: { label: string; value: string }[] = [
  { label: "Article", value: "Best Red Light Therapy Mats for Pain Relief" },
  { label: "Last updated", value: "October 2026" },
  {
    label: "Research approach",
    value:
      "Published product specifications, pricing, manufacturer policies, and external scientific references.",
  },
];

const productSources: { name: string; href: string | null }[] = [
  {
    name: "ApolloThera — Recovery Mat",
    href: RECOVERY_URL,
  },
  {
    name: "ApolloThera — Full Body Red Light Mat",
    href: APOLLO_URL,
  },
  {
    name: "EMBRA — Full Body Red Light Therapy Mat",
    href: null,
  },
  {
    name: "MEGELIN — Red & Infrared Light Therapy Mat",
    href: null,
  },
  {
    name: "NUVIO — Red Light Therapy Mat",
    href: null,
  },
];

/**
 * Background literature on photobiomodulation for musculoskeletal pain. Each
 * entry's title, first author, journal, and year were checked against the
 * Europe PMC record for its PMID. None of these studies tested any mat
 * reviewed on this page.
 */
const researchSources: { citation: string; href: string }[] = [
  {
    citation:
      "Stausholm MB et al. Efficacy of low-level laser therapy on pain and disability in knee osteoarthritis: systematic review and meta-analysis of randomised placebo-controlled trials. BMJ Open, 2019.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31662383/",
  },
  {
    citation:
      "Malik S et al. Effect of low-level laser therapy plus exercise therapy on pain, range of motion, muscle strength, and function in knee osteoarthritis — a systematic review and meta-analysis. Somatosensory & Motor Research, 2023.",
    href: "https://pubmed.ncbi.nlm.nih.gov/36576096/",
  },
  {
    citation:
      "Zhang Y et al. Current advances of photobiomodulation therapy in treating knee osteoarthritis. Frontiers in Cell and Developmental Biology, 2023.",
    href: "https://pubmed.ncbi.nlm.nih.gov/38033853/",
  },
];

/** Only destinations that exist in this app; "About" has no route, so it is
    rendered as plain text rather than a broken link. */
const footerLinks: { label: string; href: string | null }[] = [
  { label: "About", href: null },
  { label: "How We Review", href: "#method" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-service" },
  { label: "Contact", href: "/contact-us" },
];

/** Section 3 — the four verification figures. */
const stats: { value: string; label: string; small?: boolean }[] = [
  { value: "5", label: "mats compared" },
  { value: "15", label: "data points each" },
  { value: "23", label: "brand pages reviewed" },
  { value: "Oct 2026", label: "sources last checked", small: true },
];

type Pick = {
  rank: number;
  category: string;
  name: string;
  /** null while the revised scoring framework is pending approval. */
  score: string | null;
  price: string;
  /** A supplied photograph, or the brand name as a stand-in tile. */
  thumb: { src: string; alt: string } | { brand: string };
  action: { kind: "cta"; label: string; href: string } | { kind: "link"; href: string };
};

/** Section 4 — approved ranking, ratings, and prices; not recalculated. */
const picks: Pick[] = [
  {
    rank: 1,
    category: "Best overall",
    name: "ApolloThera Recovery Mat™",
    score: "9.6",
    price: "$199.99",
    thumb: {
      src: "/apollothera-recovery-mat.png",
      alt: "ApolloThera Recovery Mat",
    },
    action: { kind: "cta", label: "See price", href: RECOVERY_URL },
  },
  {
    rank: 2,
    category: "Best full-body coverage",
    name: "ApolloThera Full Body Red Light Mat™",
    score: "9.2",
    price: "$649.99",
    thumb: {
      src: "/apollothera-full-body-mat.png",
      alt: "ApolloThera Full Body Red Light Mat",
    },
    action: { kind: "cta", label: "See price", href: APOLLO_URL },
  },
  {
    rank: 3,
    category: "Best premium alternative",
    name: "EMBRA Red Light Therapy Mat Kit",
    score: "8.5",
    price: "$699",
    thumb: {
      src: "/embra-mat.png",
      alt: "EMBRA Full Body Red Light Therapy Mat",
    },
    action: { kind: "link", href: "#embra" },
  },
  {
    rank: 4,
    category: "Most LEDs",
    name: "MEGELIN Red & Infrared Light Therapy Mat",
    score: "8.1",
    price: "$739",
    thumb: {
      src: "/megelin-mat.png",
      alt: "MEGELIN Red & Infrared Light Therapy Mat",
    },
    action: { kind: "link", href: "#megelin" },
  },
  {
    rank: 5,
    category: "Best budget full-body mat",
    name: "NUVIO Red Light Therapy Mat",
    score: "7.8",
    price: "$499.99",
    thumb: {
      src: "/nuvio-mat.png",
      alt: "NUVIO Red Light Therapy Mat",
    },
    action: { kind: "link", href: "#nuvio" },
  },
];

/** Shield-and-check mark on the Why trust us heading. */
function ShieldIcon() {
  return (
    <svg
      className={styles.trustIcon}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 1.5 3.6 4.7v6.1c0 5.2 3.5 9.9 8.4 11.7 4.9-1.8 8.4-6.5 8.4-11.7V4.7L12 1.5Zm-1.2 15.1-4-4 1.7-1.7 2.3 2.3 5-5 1.7 1.7-6.7 6.7Z"
      />
    </svg>
  );
}

/**
 * /best-red-light-therapy-mats
 *
 * Publication header, article hero, and the #1 Best Overall recommendation
 * card. The remaining sections — the rest of the ranking, comparison table,
 * methodology, FAQ — are not built yet and belong below, inside <main>.
 */
export default function Page() {
  return (
    <div className={styles.page}>
      {/* THIN INFORMATION BAR */}
      <div className={styles.topBar}>
        <div className={styles.shell}>
          <div className={styles.topBarInner}>
            <p>Independent Reviews &amp; Buying Guides for Red Light Therapy</p>
            <p className={styles.topBarRight}>Updated October 2026</p>
          </div>
        </div>
      </div>

      {/* PUBLICATION HEADER */}
      <header>
        <div className={styles.shell}>
          <div className={styles.masthead}>
            <div className={styles.mastheadInner}>
              <img
                className={styles.mark}
                src="/brr-logo.png"
                alt="Best Red Light Review"
                width={46}
                height={46}
              />
              <div>
                <p className={styles.brandName}>Best Red Light Review</p>
                <p className={styles.tagline}>
                  Independent Reviews &amp; Buying Guides for Red Light Therapy
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Sections">
          <div className={styles.shell}>
            <div className={styles.navInner}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={`${styles.navLink} ${
                    item.active ? styles.navLinkActive : ""
                  }`}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* ARTICLE OPENING */}
        <article>
          <div className={styles.shell}>
            <div className={styles.articleTop}>
              <p className={styles.utility}>
                <a href="#method">How we rank</a>
                <span aria-hidden className={styles.utilityDivider}>
                  |
                </span>
                <a href="#how-we-make-money">Advertiser disclosure</a>
              </p>

              <nav className={styles.crumbs} aria-label="Breadcrumb">
                {crumbs.map((crumb, index) => (
                  <Fragment key={crumb.label}>
                    {index > 0 ? (
                      <span aria-hidden className={styles.crumbSep}>
                        ›
                      </span>
                    ) : null}
                    <a href={crumb.href}>{crumb.label}</a>
                  </Fragment>
                ))}
              </nav>

              <p className={styles.disclosureLine}>
                We may earn a commission when you buy through our links.{" "}
                <a href="#how-we-make-money">How we make money</a>
              </p>

              <h1 className={styles.headline}>
                The 5 Best Red Light Therapy Mats for Pain Relief &amp;
                Recovery (2026)
              </h1>

              {/* Five-product comparison visual */}
              <div className={styles.compare}>
                <img
                  className={styles.compareGraphic}
                  src="/top-5-comparison.png"
                  alt="The five ranked mats side by side: #1 ApolloThera Mat circled in red, #2 ApolloThera Full Body Mat, #3 Embra, #4 Megelin, #5 Nuvio"
                  width={1774}
                  height={887}
                />
                <p className={styles.caption}>
                  Our top 5, side by side (graphic, not to scale). Product
                  images: brands.
                </p>
              </div>

              <p className={styles.lead}>
                We compared 5 red light therapy mats using each brand&rsquo;s
                published specifications, pricing, policies, and coverage to
                identify the strongest options for pain relief and recovery.
              </p>

              {/* Author and reviewer */}
              <div className={styles.byline}>
                <div className={styles.bylineUnit}>
                  <img
                    className={styles.bylineAvatar}
                    src="/reviewer-richard-ellison.png"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <p className={styles.bylineLabel}>Written by</p>
                    <p className={styles.bylineName}>Richard Ellison</p>
                  </div>
                </div>

                <div className={styles.bylineUnit}>
                  <img
                    className={`${styles.bylineAvatar} ${styles.bylineMark}`}
                    src="/brr-logo.png"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <p className={styles.bylineLabel}>Reviewed by</p>
                    <p className={styles.bylineName}>
                      Best Red Light Review Editorial Team
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.bylineMeta}>
                <p className={styles.bylineMetaItem}>
                  <CalendarIcon />
                  Updated October 2026
                </p>
                <p className={styles.bylineMetaItem}>
                  <TrustIcon />
                  <a className={styles.trustLink} href="#trust">
                    Why trust us
                  </a>
                </p>
              </div>

              <hr className={styles.heroDivider} />
            </div>
          </div>
        </article>

        {/* SECTION 2 — #1 BEST OVERALL */}
        <section className={styles.pick} aria-labelledby="pick-one">
          <div className={styles.container}>
            <div className={styles.card}>
              {/* Dark navy top bar */}
              <div className={styles.cardBar}>
                <span className={styles.rankBadge}>
                  <MedalIcon />
                  #1 Best Overall
                </span>
                <p className={styles.barNote}>
                  Best for everyday back &amp; joint recovery
                </p>
              </div>

              {/* Source order is the mobile order; on desktop the image takes
                  the left column and the information the right. */}
              <div className={styles.cardBody}>
                <figure className={styles.figure}>
                  <img
                    className={styles.photo}
                    src={productImage.src}
                    alt={productImage.alt}
                    width={productImage.width}
                    height={productImage.height}
                  />
                </figure>

                <div className={styles.content}>
                  <h2 id="pick-one" className={styles.pickName}>
                    ApolloThera
                    <br />
                    Recovery Mat™
                  </h2>

                  <div className={styles.scoreBox}>
                    <div className={styles.scoreUnit}>
                      <div className={styles.ring}>
                        <svg
                          className={styles.ringSvg}
                          viewBox="0 0 100 100"
                          aria-hidden
                          focusable="false"
                        >
                          <circle className={styles.ringTrack} cx="50" cy="50" r="44" />
                          <circle className={styles.ringFill} cx="50" cy="50" r="44" />
                        </svg>
                        <p className={styles.ringValue}>
                          <span className={styles.ringValueInner}>
                            <span className={styles.ringNum}>
                              {topScore ?? PENDING_MARK}
                            </span>
                            {topScore ? (
                              <span className={styles.ringOut}>/10</span>
                            ) : null}
                          </span>
                        </p>
                      </div>
                      <p className={styles.scoreCaption}>
                        {topScore ? "Total score" : "Score pending"}
                      </p>
                    </div>
                    <div className={styles.gradeUnit}>
                      <p className={styles.gradeValue}>
                        {topGrade ?? PENDING_MARK}
                      </p>
                      <p className={styles.gradeCaption}>
                        {topGrade ? "Overall grade" : "Grade pending"}
                      </p>
                    </div>
                  </div>

                  <p className={styles.summary}>
                    Neck-to-hip coverage on your own bed or sofa. Strong stated
                    light output, a simple 10&ndash;20 minute routine, and a
                    significantly lower price than many full-body alternatives.
                  </p>

                  <p className={styles.priceLine}>
                    <span className={styles.priceNow}>$199.99</span>
                    <s className={styles.priceWas}>$399.99</s>
                    <span className={styles.saveBadge}>Save $200</span>
                  </p>

                  <p className={styles.bonus}>
                    Plus a free Recovery Cream + Personalized Recovery Protocol
                  </p>

                  <ul className={styles.bullets}>
                    {bullets.map((item) => (
                      <li key={item}>
                        <span aria-hidden className={styles.check}>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a className={styles.pickCta} href={RECOVERY_URL}>
                    Check Availability at ApolloThera →
                  </a>

                  <p className={styles.pickNote}>
                    Price on getyourapollo.com, checked October 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY TRUST US */}
        <section className={styles.trust} aria-labelledby="why-trust-us">
          <div className={styles.container}>
            <div className={styles.trustCard}>
              <div className={styles.trustHead}>
                <ShieldIcon />
                <h2 id="why-trust-us" className={styles.trustTitle}>
                  Why trust us
                </h2>
              </div>

              <div className={styles.stats}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <p
                      className={`${styles.statNumber} ${
                        stat.small ? styles.statNumberSmall : ""
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className={styles.trustBody}>
                We reviewed each mat using published product specifications,
                pricing, warranties, return policies, and brand-provided
                information. Scores follow the{" "}
                <a href="#method">same comparison criteria</a> for every
                product, and we list drawbacks for every mat — including our #1
                pick.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — OUR PICKS AT A GLANCE */}
        <section className={styles.glance} aria-labelledby="picks-at-a-glance">
          <div className={styles.container}>
            <h2 id="picks-at-a-glance" className={styles.glanceHeading}>
              Our picks at a glance
            </h2>

            <div className={styles.rankCard}>
              {picks.map((pick) => {
                const top = pick.rank === 1;
                return (
                  <div
                    key={pick.rank}
                    className={`${styles.row} ${top ? styles.rowTop : ""}`}
                  >
                    <div className={styles.thumb}>
                      {"src" in pick.thumb ? (
                        <img
                          className={styles.thumbImage}
                          src={pick.thumb.src}
                          alt={pick.thumb.alt}
                        />
                      ) : (
                        <span className={styles.thumbBrand}>
                          {pick.thumb.brand}
                        </span>
                      )}
                      <span
                        className={`${styles.thumbRank} ${
                          top ? styles.thumbRankTop : ""
                        }`}
                      >
                        {pick.rank}
                      </span>
                    </div>

                    <div className={styles.rowBody}>
                      <p className={styles.rowCategory}>{pick.category}</p>
                      <p className={styles.rowName}>{pick.name}</p>
                      <p className={styles.rowFigures}>
                        <span
                          className={`${styles.rowScore} ${
                            top ? styles.rowScoreTop : ""
                          }`}
                        >
                          {pick.score ?? PENDING_MARK}
                          {pick.score ? (
                            <span className={styles.rowScoreOut}>/10</span>
                          ) : null}
                        </span>
                        <span className={styles.rowPrice}>{pick.price}</span>
                      </p>
                    </div>

                    <div className={styles.rowAction}>
                      {pick.action.kind === "cta" ? (
                        <a className={styles.rowCta} href={pick.action.href}>
                          {pick.action.label}
                        </a>
                      ) : (
                        <a className={styles.rowLink} href={pick.action.href}>
                          Review ↓
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 — ALL 5 MATS, SIDE BY SIDE */}
        <section className={styles.sideBySide} aria-labelledby="side-by-side">
          <div className={styles.shell}>
            <h2 id="side-by-side" className={styles.sideBySideHeading}>
              All 5 mats, side by side
            </h2>

            <div className={styles.tableCard}>
              <div className={styles.tableScroll}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <td className={styles.labelCell} />
                      {columns.map((col) => (
                        <th
                          key={col.name}
                          scope="col"
                          className={`${styles.headCell} ${
                            col.top ? styles.headCellTop : ""
                          } ${col.top ? styles.colTop : ""}`}
                        >
                          <span className={styles.cellThumb}>
                            {"src" in col.thumb ? (
                              <img
                                className={styles.cellThumbImg}
                                src={col.thumb.src}
                                alt={col.thumb.alt}
                              />
                            ) : (
                              <span className={styles.cellBrand}>
                                {col.thumb.brand}
                              </span>
                            )}
                          </span>
                          <span
                            className={`${styles.cellRank} ${
                              col.top ? styles.cellRankTop : ""
                            }`}
                            style={{ display: "block" }}
                          >
                            {col.rank}
                          </span>
                          <span
                            className={styles.cellName}
                            style={{ display: "block" }}
                          >
                            {col.name}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row" className={styles.labelCell}>
                        BRR Score &amp; grade
                      </th>
                      {columns.map((col) => (
                        <td
                          key={col.name}
                          className={`${styles.scoreCell} ${
                            col.top ? styles.colTop : ""
                          }`}
                        >
                          <span className={styles.scoreValue}>
                            {col.score ?? PENDING_MARK}
                            {col.score ? (
                              <span className={styles.scoreOut}>/10</span>
                            ) : null}
                          </span>
                          <span
                            className={`${styles.gradeBadge} ${
                              col.top ? styles.gradeBadgeTop : ""
                            }`}
                          >
                            {col.grade ?? PENDING_MARK}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {tableRows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className={styles.labelCell}>
                          {row.label}
                        </th>
                        {columns.map((col) => (
                          <td
                            key={col.name}
                            className={col.top ? styles.colTop : ""}
                          >
                            {row.get(col)}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr>
                      <th scope="row" className={styles.labelCell}>
                        Official page
                      </th>
                      {columns.map((col) => (
                        <td
                          key={col.name}
                          className={col.top ? styles.colTop : ""}
                        >
                          {col.site.href ? (
                            <a className={styles.cellLink} href={col.site.href}>
                              {col.site.label}
                            </a>
                          ) : (
                            col.site.label
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className={styles.tableNote}>
              Source: official brand websites, checked October 2026. Published
              product specs, pricing, policies, and shipping details may change
              over time.
            </p>
          </div>
        </section>

        {/* SECTION 6 — DETAILED REVIEW #1 */}
        <section
          id="apollo-recovery-mat"
          className={styles.review}
          aria-labelledby="apollo-recovery-mat-name"
        >
          <div className={styles.rcCard}>
            <p className={styles.rcBadge}>
              <MedalIcon />
              #1 Best Overall
            </p>

            <h2 id="apollo-recovery-mat-name" className={styles.rcTitle}>
              ApolloThera Recovery Mat™
            </h2>

            <p className={styles.rcSub}>
              The $199.99 recovery mat that makes daily red light therapy
              practical — without paying full-body mat prices.
            </p>

            <figure className={styles.rcFigure}>
              <img
                className={styles.rcImg}
                src="/apollothera-recovery-mat.png"
                alt="The ApolloThera Recovery Mat, its red LED surface illuminated"
                width={1254}
                height={1254}
              />
            </figure>
            <p className={styles.rcCredit}>Product image: ApolloThera</p>

            {/* Scoring panel */}
            <div className={styles.rcScore}>
              <div className={styles.rcScoreGrid}>
                <div className={styles.rcRing}>
                  <svg
                    className={styles.rcRingSvg}
                    viewBox="0 0 100 100"
                    aria-hidden
                    focusable="false"
                  >
                    <circle
                      className={styles.rcRingTrack}
                      cx="50"
                      cy="50"
                      r="45.5"
                    />
                    <circle
                      className={styles.rcRingFill}
                      cx="50"
                      cy="50"
                      r="45.5"
                      strokeDasharray={`${(RC_SCORE / 10) * 285.88} 285.88`}
                    />
                  </svg>
                  <span className={styles.rcRingVal}>
                    <span className={styles.rcRingNum}>{RC_SCORE}</span>
                    <span className={styles.rcRingOut}>of 10</span>
                  </span>
                </div>

                <ul className={styles.rcBars}>
                  {rcScores.map((category) => (
                    <li key={category.label} className={styles.rcBarRow}>
                      <span className={styles.rcBarHead}>
                        <span className={styles.rcBarLabel}>
                          {category.label}
                        </span>
                        <span className={styles.rcBarVal}>
                          {category.score.toFixed(1)}
                        </span>
                      </span>
                      <span className={styles.rcBarTrack}>
                        <span
                          className={styles.rcBarFill}
                          style={{ width: `${category.score * 10}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcScoreFoot}>
                <span className={styles.rcGrade}>Grade A+</span>
                <span className={styles.rcMethod}>
                  <a className={styles.rcMethodLink} href="#method">
                    How we score
                  </a>
                  <span className={styles.rcMethodNote}>
                    Editorial scoring methodology
                  </span>
                </span>
              </div>
            </div>

            {/* Six specification tiles */}
            <div className={styles.rcTiles}>
              {rcTiles.map((tile) => (
                <div key={tile.main} className={styles.rcTile}>
                  <TileMark name={tile.icon} />
                  <span className={styles.rcTileText}>
                    <span className={styles.rcTileMain}>{tile.main}</span>
                    <span className={styles.rcTileSub}>{tile.sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Pros and cons */}
            <div className={styles.rcPair}>
              <div className={styles.rcPros}>
                <p className={styles.rcBoxTitle}>What we liked</p>
                <ul className={styles.rcList}>
                  {rcLiked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkYes}>
                        ✓
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcCons}>
                <p className={styles.rcBoxTitle}>What we didn&rsquo;t like</p>
                <ul className={styles.rcList}>
                  {rcDisliked.map((item) => (
                    <li key={item.rest}>
                      <span aria-hidden className={styles.rcMarkNo}>
                        ✕
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Editorial verdict */}
            <p className={styles.rcVerdict}>
              <strong className={styles.rcVerdictLead}>Why #1?</strong>{" "}
              Full-body mats in this comparison cost $499&ndash;$739, but not
              everyone needs a mat covering their entire body at once.
              ApolloThera offers practical neck-to-hip coverage, 146 mW/cm²
              stated output, and a 90-day guarantee for just $199.99. The
              included Personalized Recovery Protocol is a genuine plus:
              instead of guessing at session length, placement, and how often
              to use the mat, you are guided through a structured routine from
              the first session onward. For buyers focused on everyday back,
              hip, or joint recovery, it offers a compelling balance of
              functionality and price.
            </p>

            {/* Choose it if / Skip it if */}
            <div className={styles.rcFit}>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelYes}>Choose it if</p>
                <p className={styles.rcFitBody}>{rcChooseIf}</p>
              </div>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelNo}>Skip it if</p>
                <p className={styles.rcFitBody}>{rcSkipIf}</p>
              </div>
            </div>

            <a className={styles.rcCta} href={RECOVERY_URL}>
              <span className={styles.rcCtaMain}>
                Check Price &amp; Availability →
              </span>
              <span className={styles.rcCtaSub}>
                $199.99 · 90-Day Guarantee · Free Shipping
              </span>
            </a>
          </div>
        </section>

        {/* SECTION 7 — DETAILED REVIEW #2 */}
        <section
          id="apollo-full-body"
          className={styles.review}
          aria-labelledby="apollo-full-body-name"
        >
          <div className={styles.rcCard}>
            <p className={`${styles.rcBadge} ${styles.rcBadgeAlt}`}>
              <MedalIcon />
              #2 Best Full-Body Coverage
            </p>

            <h2 id="apollo-full-body-name" className={styles.rcTitle}>
              ApolloThera Full Body Red Light Mat™
            </h2>

            <p className={styles.rcSub}>
              The larger ApolloThera mat for head-to-toe coverage in a single
              session — designed for those who prefer convenience over compact
              size.
            </p>

            <figure className={styles.rcFigure}>
              <img
                className={styles.rcImg}
                src="/apollothera-full-body-mat.png"
                alt="The illuminated ApolloThera Full Body Red Light Mat"
                width={1254}
                height={1254}
              />
            </figure>
            <p className={styles.rcCredit}>Product image: ApolloThera</p>

            {/* Scoring panel */}
            <div className={styles.rcScore}>
              <div className={styles.rcScoreGrid}>
                <div className={styles.rcRing}>
                  <svg
                    className={styles.rcRingSvg}
                    viewBox="0 0 100 100"
                    aria-hidden
                    focusable="false"
                  >
                    <circle
                      className={styles.rcRingTrack}
                      cx="50"
                      cy="50"
                      r="45.5"
                    />
                    <circle
                      className={styles.rcRingFill}
                      cx="50"
                      cy="50"
                      r="45.5"
                      strokeDasharray={`${(FB_SCORE / 10) * 285.88} 285.88`}
                    />
                  </svg>
                  <span className={styles.rcRingVal}>
                    <span className={styles.rcRingNum}>{FB_SCORE}</span>
                    <span className={styles.rcRingOut}>of 10</span>
                  </span>
                </div>

                <ul className={styles.rcBars}>
                  {fbScores.map((category) => (
                    <li key={category.label} className={styles.rcBarRow}>
                      <span className={styles.rcBarHead}>
                        <span className={styles.rcBarLabel}>
                          {category.label}
                        </span>
                        <span className={styles.rcBarVal}>
                          {category.score.toFixed(1)}
                        </span>
                      </span>
                      <span className={styles.rcBarTrack}>
                        <span
                          className={styles.rcBarFill}
                          style={{ width: `${category.score * 10}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcScoreFoot}>
                <span className={`${styles.rcGrade} ${styles.rcGradeAlt}`}>
                  Grade A
                </span>
                <span className={styles.rcMethod}>
                  <a className={styles.rcMethodLink} href="#method">
                    How we score
                  </a>
                  <span className={styles.rcMethodNote}>
                    Editorial scoring methodology
                  </span>
                </span>
              </div>
            </div>

            {/* Six specification tiles */}
            <div className={styles.rcTiles}>
              {fbTiles.map((tile) => (
                <div key={tile.main} className={styles.rcTile}>
                  <TileMark name={tile.icon} />
                  <span className={styles.rcTileText}>
                    <span className={styles.rcTileMain}>{tile.main}</span>
                    <span className={styles.rcTileSub}>{tile.sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Pros and cons */}
            <div className={styles.rcPair}>
              <div className={styles.rcPros}>
                <p className={styles.rcBoxTitle}>What we liked</p>
                <ul className={styles.rcList}>
                  {fbLiked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkYes}>
                        ✓
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcCons}>
                <p className={styles.rcBoxTitle}>What we didn&rsquo;t like</p>
                <ul className={styles.rcList}>
                  {fbDisliked.map((item) => (
                    <li key={item.rest}>
                      <span aria-hidden className={styles.rcMarkNo}>
                        ✕
                      </span>
                      <span>
                        {item.lead ? <strong>{item.lead}</strong> : null}
                        {item.lead ? " " : null}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Editorial verdict */}
            <p className={styles.rcVerdict}>
              <strong className={styles.rcVerdictLead}>Why #2?</strong>{" "}
              ApolloThera&rsquo;s Full Body Mat offers something our #1 pick
              cannot: head-to-toe coverage in a single position. Its 74.8&Prime;
              × 31.5&Prime; treatment surface and 150 mW/cm² stated output make
              it a strong option for people who prefer full-body sessions. At
              $649.99, however, it costs $450 more than the standard Recovery
              Mat — making it better suited to buyers who prioritize coverage
              over affordability.
            </p>

            {/* Choose it if / Skip it if */}
            <div className={styles.rcFit}>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelYes}>Choose it if</p>
                <p className={styles.rcFitBody}>{fbChooseIf}</p>
              </div>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelNo}>Skip it if</p>
                <p className={styles.rcFitBody}>{fbSkipIf}</p>
              </div>
            </div>

            <a className={styles.rcCta} href={APOLLO_URL}>
              <span className={styles.rcCtaMain}>
                Check Price &amp; Availability →
              </span>
              <span className={styles.rcCtaSub}>
                $649.99 · 90-Day Guarantee · Free Shipping
              </span>
            </a>
          </div>
        </section>

        {/* SECTION 8 — DETAILED REVIEW #3 */}
        <section
          id="embra"
          className={styles.review}
          aria-labelledby="embra-name"
        >
          <div className={styles.rcCard}>
            <p className={`${styles.rcBadge} ${styles.rcBadgeAlt}`}>
              <MedalIcon />
              #3 Best Premium Alternative
            </p>

            <h2 id="embra-name" className={styles.rcTitle}>
              EMBRA Full Body Red Light Therapy Mat
            </h2>

            <p className={styles.rcSub}>
              The premium full-body mat with a free relief belt, a 60-night
              trial, and a two-year warranty.
            </p>

            <figure className={styles.rcFigure}>
              <img
                className={styles.rcImg}
                src="/embra-mat.png"
                alt="The EMBRA Full Body Red Light Therapy Mat with its controller, LED surface illuminated"
                width={948}
                height={1660}
              />
            </figure>
            <p className={styles.rcCredit}>Product image: EMBRA</p>

            {/* Scoring panel */}
            <div className={styles.rcScore}>
              <div className={styles.rcScoreGrid}>
                <div className={styles.rcRing}>
                  <svg
                    className={styles.rcRingSvg}
                    viewBox="0 0 100 100"
                    aria-hidden
                    focusable="false"
                  >
                    <circle
                      className={styles.rcRingTrack}
                      cx="50"
                      cy="50"
                      r="45.5"
                    />
                    <circle
                      className={styles.rcRingFill}
                      cx="50"
                      cy="50"
                      r="45.5"
                      strokeDasharray={`${(EM_SCORE / 10) * 285.88} 285.88`}
                    />
                  </svg>
                  <span className={styles.rcRingVal}>
                    <span className={styles.rcRingNum}>{EM_SCORE}</span>
                    <span className={styles.rcRingOut}>of 10</span>
                  </span>
                </div>

                <ul className={styles.rcBars}>
                  {emScores.map((category) => (
                    <li key={category.label} className={styles.rcBarRow}>
                      <span className={styles.rcBarHead}>
                        <span className={styles.rcBarLabel}>
                          {category.label}
                        </span>
                        <span className={styles.rcBarVal}>
                          {category.score.toFixed(1)}
                        </span>
                      </span>
                      <span className={styles.rcBarTrack}>
                        <span
                          className={styles.rcBarFill}
                          style={{ width: `${category.score * 10}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcScoreFoot}>
                <span className={`${styles.rcGrade} ${styles.rcGradeAlt}`}>
                  Grade B+
                </span>
                <span className={styles.rcMethod}>
                  <a className={styles.rcMethodLink} href="#method">
                    How we score
                  </a>
                  <span className={styles.rcMethodNote}>
                    Editorial scoring methodology
                  </span>
                </span>
              </div>
            </div>

            {/* Six specification tiles */}
            <div className={styles.rcTiles}>
              {emTiles.map((tile) => (
                <div key={tile.main} className={styles.rcTile}>
                  <TileMark name={tile.icon} />
                  <span className={styles.rcTileText}>
                    <span className={styles.rcTileMain}>{tile.main}</span>
                    <span className={styles.rcTileSub}>{tile.sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Pros and cons */}
            <div className={styles.rcPair}>
              <div className={styles.rcPros}>
                <p className={styles.rcBoxTitle}>What we liked</p>
                <ul className={styles.rcList}>
                  {emLiked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkYes}>
                        ✓
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcCons}>
                <p className={styles.rcBoxTitle}>What we didn&rsquo;t like</p>
                <ul className={styles.rcList}>
                  {emDisliked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkNo}>
                        ✕
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Editorial verdict */}
            <p className={styles.rcVerdict}>
              <strong className={styles.rcVerdictLead}>Why #3?</strong> EMBRA
              offers a compelling premium package: a large 71-inch mat, a free
              targeted Relief Belt, a 60-night trial that accepts used returns,
              and a two-year warranty. Its buyer protections are particularly
              attractive, but at $699, it costs $499 more than our #1
              ApolloThera Recovery Mat. For shoppers who want broad coverage
              and extra accessories, EMBRA is worth considering. For those who
              mainly need an affordable everyday back or joint recovery
              routine, our top pick offers a lower entry price.
            </p>

            {/* Choose it if / Skip it if */}
            <div className={styles.rcFit}>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelYes}>Choose it if</p>
                <p className={styles.rcFitBody}>{emChooseIf}</p>
              </div>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelNo}>Skip it if</p>
                <p className={styles.rcFitBody}>{emSkipIf}</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 9 — DETAILED REVIEW #4 */}
        <section
          id="megelin"
          className={styles.review}
          aria-labelledby="megelin-name"
        >
          <div className={styles.rcCard}>
            <p className={`${styles.rcBadge} ${styles.rcBadgeAlt}`}>
              <MedalIcon />
              #4 Most LEDs
            </p>

            <h2 id="megelin-name" className={styles.rcTitle}>
              MEGELIN Red &amp; Infrared Light Therapy Mat
            </h2>

            <p className={styles.rcSub}>
              The full-body mat with 3,840 LEDs, adjustable light settings, and
              a higher price than our top pick.
            </p>

            <figure className={styles.rcFigure}>
              <img
                className={styles.rcImg}
                src="/megelin-mat.png"
                alt="The MEGELIN Red & Infrared Light Therapy Mat, its LED surface illuminated"
                width={700}
                height={660}
              />
            </figure>
            <p className={styles.rcCredit}>Product image: MEGELIN</p>

            {/* Scoring panel */}
            <div className={styles.rcScore}>
              <div className={styles.rcScoreGrid}>
                <div className={styles.rcRing}>
                  <svg
                    className={styles.rcRingSvg}
                    viewBox="0 0 100 100"
                    aria-hidden
                    focusable="false"
                  >
                    <circle
                      className={styles.rcRingTrack}
                      cx="50"
                      cy="50"
                      r="45.5"
                    />
                    <circle
                      className={styles.rcRingFill}
                      cx="50"
                      cy="50"
                      r="45.5"
                      strokeDasharray={`${(MG_SCORE / 10) * 285.88} 285.88`}
                    />
                  </svg>
                  <span className={styles.rcRingVal}>
                    <span className={styles.rcRingNum}>{MG_SCORE}</span>
                    <span className={styles.rcRingOut}>of 10</span>
                  </span>
                </div>

                <ul className={styles.rcBars}>
                  {mgScores.map((category) => (
                    <li key={category.label} className={styles.rcBarRow}>
                      <span className={styles.rcBarHead}>
                        <span className={styles.rcBarLabel}>
                          {category.label}
                        </span>
                        <span className={styles.rcBarVal}>
                          {category.score.toFixed(1)}
                        </span>
                      </span>
                      <span className={styles.rcBarTrack}>
                        <span
                          className={styles.rcBarFill}
                          style={{ width: `${category.score * 10}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcScoreFoot}>
                <span className={`${styles.rcGrade} ${styles.rcGradeAlt}`}>
                  Grade B
                </span>
                <span className={styles.rcMethod}>
                  <a className={styles.rcMethodLink} href="#method">
                    How we score
                  </a>
                  <span className={styles.rcMethodNote}>
                    Editorial scoring methodology
                  </span>
                </span>
              </div>
            </div>

            {/* Six specification tiles */}
            <div className={styles.rcTiles}>
              {mgTiles.map((tile) => (
                <div key={tile.main} className={styles.rcTile}>
                  <TileMark name={tile.icon} />
                  <span className={styles.rcTileText}>
                    <span className={styles.rcTileMain}>{tile.main}</span>
                    <span className={styles.rcTileSub}>{tile.sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Pros and cons */}
            <div className={styles.rcPair}>
              <div className={styles.rcPros}>
                <p className={styles.rcBoxTitle}>What we liked</p>
                <ul className={styles.rcList}>
                  {mgLiked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkYes}>
                        ✓
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcCons}>
                <p className={styles.rcBoxTitle}>What we didn&rsquo;t like</p>
                <ul className={styles.rcList}>
                  {mgDisliked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkNo}>
                        ✕
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Editorial verdict */}
            <p className={styles.rcVerdict}>
              <strong className={styles.rcVerdictLead}>Why #4?</strong> MEGELIN
              stands out for its large treatment area and 3,840 published LEDs,
              giving buyers a full-body option with adjustable settings. It
              also advertises HSA/FSA eligibility and a 60-day money-back
              period. However, LED quantity alone does not establish better
              results, and at $739, MEGELIN costs substantially more than our
              $199.99 ApolloThera Recovery Mat. It is a reasonable alternative
              for buyers focused on full-body coverage and technical features,
              but less compelling for shoppers prioritizing everyday
              affordability.
            </p>

            {/* Choose it if / Skip it if */}
            <div className={styles.rcFit}>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelYes}>Choose it if</p>
                <p className={styles.rcFitBody}>{mgChooseIf}</p>
              </div>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelNo}>Skip it if</p>
                <p className={styles.rcFitBody}>{mgSkipIf}</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 10 — DETAILED REVIEW #5 */}
        <section
          id="nuvio"
          className={styles.review}
          aria-labelledby="nuvio-name"
        >
          <div className={styles.rcCard}>
            <p className={`${styles.rcBadge} ${styles.rcBadgeAlt}`}>
              <MedalIcon />
              #5 Best Budget Full-Body Mat
            </p>

            <h2 id="nuvio-name" className={styles.rcTitle}>
              NUVIO Red Light Therapy Mat
            </h2>

            <p className={styles.rcSub}>
              The $499.99 full-body mat with 3,840 LEDs, adjustable intensity,
              and a simpler package than some premium alternatives.
            </p>

            <figure className={styles.rcFigure}>
              <img
                className={styles.rcImg}
                src="/nuvio-mat.png"
                alt="The NUVIO Red Light Therapy Mat, its LED surface illuminated"
                width={1254}
                height={1254}
              />
            </figure>
            <p className={styles.rcCredit}>Product image: NUVIO</p>

            {/* Scoring panel */}
            <div className={styles.rcScore}>
              <div className={styles.rcScoreGrid}>
                <div className={styles.rcRing}>
                  <svg
                    className={styles.rcRingSvg}
                    viewBox="0 0 100 100"
                    aria-hidden
                    focusable="false"
                  >
                    <circle
                      className={styles.rcRingTrack}
                      cx="50"
                      cy="50"
                      r="45.5"
                    />
                    <circle
                      className={styles.rcRingFill}
                      cx="50"
                      cy="50"
                      r="45.5"
                      strokeDasharray={`${(NV_SCORE / 10) * 285.88} 285.88`}
                    />
                  </svg>
                  <span className={styles.rcRingVal}>
                    <span className={styles.rcRingNum}>{NV_SCORE}</span>
                    <span className={styles.rcRingOut}>of 10</span>
                  </span>
                </div>

                <ul className={styles.rcBars}>
                  {nvScores.map((category) => (
                    <li key={category.label} className={styles.rcBarRow}>
                      <span className={styles.rcBarHead}>
                        <span className={styles.rcBarLabel}>
                          {category.label}
                        </span>
                        <span className={styles.rcBarVal}>
                          {category.score.toFixed(1)}
                        </span>
                      </span>
                      <span className={styles.rcBarTrack}>
                        <span
                          className={styles.rcBarFill}
                          style={{ width: `${category.score * 10}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcScoreFoot}>
                <span className={`${styles.rcGrade} ${styles.rcGradeAlt}`}>
                  Grade B-
                </span>
                <span className={styles.rcMethod}>
                  <a className={styles.rcMethodLink} href="#method">
                    How we score
                  </a>
                  <span className={styles.rcMethodNote}>
                    Editorial scoring methodology
                  </span>
                </span>
              </div>
            </div>

            {/* Six specification tiles */}
            <div className={styles.rcTiles}>
              {nvTiles.map((tile) => (
                <div key={tile.main} className={styles.rcTile}>
                  <TileMark name={tile.icon} />
                  <span className={styles.rcTileText}>
                    <span className={styles.rcTileMain}>{tile.main}</span>
                    <span className={styles.rcTileSub}>{tile.sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Pros and cons */}
            <div className={styles.rcPair}>
              <div className={styles.rcPros}>
                <p className={styles.rcBoxTitle}>What we liked</p>
                <ul className={styles.rcList}>
                  {nvLiked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkYes}>
                        ✓
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rcCons}>
                <p className={styles.rcBoxTitle}>What we didn&rsquo;t like</p>
                <ul className={styles.rcList}>
                  {nvDisliked.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.rcMarkNo}>
                        ✕
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Editorial verdict */}
            <p className={styles.rcVerdict}>
              <strong className={styles.rcVerdictLead}>Why #5?</strong> NUVIO
              offers a relatively affordable way to get full-body red light
              coverage, with a 71-inch mat, 3,840 LEDs, and five adjustable
              intensity levels for $499.99. Its specifications make it a
              credible alternative for buyers prioritizing size. However, it
              still costs $300 more than our #1 ApolloThera Recovery Mat, and
              its published warranty language emphasizes replacement rather
              than automatic refunds. For buyers focused on everyday back or
              joint recovery rather than maximum coverage, ApolloThera offers a
              lower-cost starting point.
            </p>

            {/* Choose it if / Skip it if */}
            <div className={styles.rcFit}>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelYes}>Choose it if</p>
                <p className={styles.rcFitBody}>{nvChooseIf}</p>
              </div>
              <div className={styles.rcFitRow}>
                <p className={styles.rcFitLabelNo}>Skip it if</p>
                <p className={styles.rcFitBody}>{nvSkipIf}</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 11 — HOW WE SCORE */}
        <section
          id="method"
          className={styles.review}
          aria-labelledby="method-name"
        >
          <div className={styles.msWrap}>
            <h2 id="method-name" className={styles.msHeading}>
              How we score
            </h2>

            <p className={styles.msIntro}>
              Every mat in this guide is evaluated against the same five
              criteria: coverage, light output, ease of use, returns and
              warranty, and overall value. We use publicly available
              manufacturer specifications, product listings, and published
              policies rather than claiming hands-on testing. Our goal is to
              help readers understand the practical trade-offs between compact
              recovery mats and larger full-body alternatives.
            </p>

            <div className={styles.msCard}>
              <h3 className={styles.msCardTitle}>
                Our five evaluation criteria
              </h3>

              <table className={styles.msTable}>
                <thead>
                  <tr>
                    <th scope="col">Evaluation category</th>
                    <th scope="col" className={styles.msNumCell}>
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {msWeights.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td className={styles.msNumCell}>{row.weight}</td>
                    </tr>
                  ))}
                  <tr className={styles.msTotalRow}>
                    <td>Total</td>
                    <td className={styles.msNumCell}>100%</td>
                  </tr>
                </tbody>
              </table>

              <ol className={styles.msCriteria}>
                {msCriteria.map((item) => (
                  <li key={item.n} className={styles.msCriterion}>
                    <span className={styles.msNum}>{item.n}</span>
                    <span className={styles.msCritBody}>
                      <span className={styles.msCritTitle}>{item.title}</span>
                      <span className={styles.msCritText}>{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>

              {/* Calculation — presented as the proposed framework only */}
              <div className={styles.msCalc}>
                <p className={styles.msCalcTitle}>
                  How the overall score is calculated
                </p>

                <p className={styles.msFormula}>
                  Overall score = (Coverage × 0.20) + (Light Output × 0.20) +
                  (Ease of Use × 0.20) + (Returns &amp; Warranty × 0.20) +
                  (Value × 0.20)
                </p>

                <p className={styles.msCalcLine}>
                  Each category is evaluated on a 0&ndash;10 scale. Worked
                  example, using the proposed category scores for the
                  ApolloThera Full Body Mat:
                </p>

                <ul className={styles.msCalcList}>
                  {msExample.map((row) => (
                    <li key={row.label}>
                      <span>{row.label}</span>
                      <span className={styles.msCalcScore}>{row.score}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.msCalcResult}>
                  (10.0 + 9.8 + 9.4 + 8.8 + 8.0) ÷ 5 ={" "}
                  <strong>9.2/10</strong>
                </p>

                <p className={styles.msCalcNote}>
                  This is an arithmetic illustration of the proposed scoring
                  framework. It is not evidence that the underlying category
                  assessments have been objectively validated, and the ratings
                  currently shown in the five reviews are editorial
                  assessments rather than outputs of this formula.
                </p>
              </div>

              {/* Grade scale */}
              <p className={styles.msGradeTitle}>What the grades mean</p>

              <table className={styles.msGradeTable}>
                <thead>
                  <tr>
                    <th scope="col">Overall score</th>
                    <th scope="col">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {msGrades.map((row) => (
                    <tr key={row.grade}>
                      <td>{row.range}</td>
                      <td className={styles.msGradeCell}>{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Limitations */}
              <div className={styles.msNote}>
                <p className={styles.msNoteTitle}>
                  Important note about published specifications
                </p>
                <p className={styles.msNoteText}>
                  Manufacturer-published specifications are not always directly
                  comparable. LED quantities may be counted differently,
                  irradiance may be measured at different distances or under
                  different conditions, and warranty terms can vary by
                  location. Our ratings reflect an editorial comparison of the
                  available information, not independent verification of
                  clinical effectiveness.
                </p>
              </div>
            </div>

            <p className={styles.msAffiliate}>
              This website may earn a commission when readers purchase through
              certain links. Affiliate relationships should not determine the
              evaluation criteria or automatically improve a product&rsquo;s
              score.
            </p>
          </div>
        </section>

        {/* SECTION 13 — HOW TO CHOOSE A RED LIGHT THERAPY MAT */}
        <section
          id="how-to-choose"
          className={styles.review}
          aria-labelledby="how-to-choose-name"
        >
          <div className={styles.msWrap}>
            <h2 id="how-to-choose-name" className={styles.msHeading}>
              How to Choose a Red Light Therapy Mat for Pain Relief
            </h2>

            <p className={styles.msIntro}>
              Not every red light therapy mat is designed for the same purpose.
              Before comparing prices or LED counts, consider where you want to
              use the device, how much coverage you need, and whether its
              specifications and return terms are clearly documented.
            </p>

            <ol className={styles.bgList}>
              {buyingTips.map((tip) => (
                <li key={tip.n} className={styles.bgRow}>
                  <span className={styles.bgNum}>{tip.n}</span>
                  <span className={styles.bgBody}>
                    <span className={styles.bgTitle}>{tip.title}</span>
                    <span className={styles.bgText}>{tip.text}</span>
                  </span>
                </li>
              ))}
            </ol>

            {/* Quick checklist */}
            <div className={styles.bgCheck}>
              <p className={styles.bgCheckTitle}>
                Quick checklist before you buy
              </p>
              <ul className={styles.bgCheckList}>
                {buyingChecklist.map((item) => (
                  <li key={item}>
                    <span aria-hidden className={styles.bgCheckMark}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.bgMedical}>
              Red light therapy is an area of ongoing clinical research.
              Individual outcomes can vary, and evidence for one device or
              condition should not automatically be applied to every product.
              Home-use mats should not replace medical evaluation or prescribed
              treatment for persistent or worsening pain.
            </p>
          </div>
        </section>

        {/* SECTION 14 — FINAL #1 RECOMMENDATION & OFFER */}
        <section
          id="final-pick"
          className={styles.review}
          aria-labelledby="final-pick-name"
        >
          <div className={styles.foCard}>
            {/* Dark navy recommendation bar */}
            <div className={styles.foBar}>
              <span className={styles.foBadge}>
                <MedalIcon />
                #1 Best Overall
              </span>
              <span className={styles.foBarNote}>
                Best Value for Everyday Recovery
              </span>
            </div>

            <div className={styles.foBody}>
              <figure className={styles.foFigure}>
                <img
                  className={styles.foImg}
                  src="/apollothera-recovery-mat.png"
                  alt="The ApolloThera Recovery Mat, its red LED surface illuminated"
                  width={1254}
                  height={1254}
                />
              </figure>

              <div className={styles.foContent}>
                <h2 id="final-pick-name" className={styles.foName}>
                  ApolloThera Recovery Mat™
                </h2>

                <p className={styles.foSub}>
                  Our top choice for practical neck-to-hip red light therapy at
                  home.
                </p>

                <p className={styles.foPrice}>
                  <span className={styles.foNow}>$199.99</span>
                  <s className={styles.foWas}>$399.99</s>
                  <span className={styles.foSave}>Save 50%</span>
                </p>

                <ul className={styles.foBullets}>
                  {foBullets.map((item) => (
                    <li key={item.lead}>
                      <span aria-hidden className={styles.foCheck}>
                        ✓
                      </span>
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={styles.foBonus}>
                  <p className={styles.foBonusTitle}>Current offer includes:</p>
                  <ul className={styles.foBonusList}>
                    {foBonuses.map((bonus) => (
                      <li key={bonus.name}>
                        <strong>{bonus.name}</strong>
                        <span className={styles.foBonusValue}>
                          {" "}
                          — {bonus.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={styles.foTrust}>
                  {foTrust.map((item, index) => (
                    <Fragment key={item}>
                      {index > 0 ? (
                        <span aria-hidden className={styles.foTrustSep}>
                          |
                        </span>
                      ) : null}
                      <span>{item}</span>
                    </Fragment>
                  ))}
                </p>

                <a className={styles.foCta} href={RECOVERY_URL}>
                  <span className={styles.foCtaMain}>
                    Check Price &amp; Availability →
                  </span>
                  <span className={styles.foCtaSub}>
                    ApolloThera Official Website
                  </span>
                </a>

                <p className={styles.foFine}>
                  Offer and availability may change. See the official website
                  for current terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 15 — FREQUENTLY ASKED QUESTIONS */}
        <section
          id="faq"
          className={styles.review}
          aria-labelledby="faq-name"
        >
          <div className={styles.msWrap}>
            <h2 id="faq-name" className={styles.msHeading}>
              Frequently Asked Questions
            </h2>

            <p className={styles.fqIntro}>
              Answers to common questions about red light therapy mats,
              coverage, specifications, and what to expect before buying.
            </p>

            <FaqAccordion items={faqs} />

            <p className={styles.fqNote}>
              Product details and policies were reviewed using publicly
              available brand information. Prices, offers, and return
              conditions may change. Always confirm the latest details with the
              manufacturer.
            </p>
          </div>
        </section>

        {/* SECTION 16 — AUTHOR, STANDARDS, SOURCES, DISCLOSURES */}
        <section
          id="editorial"
          className={styles.review}
          aria-labelledby="editorial-name"
        >
          <div className={styles.msWrap}>
            {/* Author */}
            <div className={styles.ftAuthor}>
              <img
                className={styles.ftAvatar}
                src="/reviewer-richard-ellison.png"
                alt=""
                width={76}
                height={76}
              />
              <div className={styles.ftAuthorBody}>
                <p className={styles.ftKicker} id="editorial-name">
                  About the author
                </p>
                <p className={styles.ftAuthorName}>Richard Ellison</p>
                <p className={styles.ftAuthorText}>
                  Richard Ellison researches and compares home wellness and
                  recovery products, focusing on published specifications,
                  practical usability, pricing, and consumer buying
                  considerations. His reviews aim to help readers understand
                  the differences between competing products and choose the
                  option that best fits their needs.
                </p>
              </div>
            </div>

            {/* Editorial standards */}
            <h3 className={styles.ftHeading}>Our editorial standards</h3>
            <p className={styles.ftBody}>
              Our comparisons draw on publicly available manufacturer
              specifications, product information, pricing, warranty
              documentation, and return policies. We identify meaningful
              strengths and limitations for each product, and we distinguish
              published manufacturer claims from independently verified
              findings.
            </p>
            <ul className={styles.ftList}>
              {editorialPrinciples.map((item) => (
                <li key={item.lead}>
                  <strong>{item.lead}</strong> {item.rest}
                </li>
              ))}
            </ul>

            {/* Article information */}
            <h3 className={styles.ftSubheading}>Article information</h3>
            <dl className={styles.ftInfo}>
              {articleInfo.map((row) => (
                <div key={row.label} className={styles.ftInfoRow}>
                  <dt className={styles.ftInfoLabel}>{row.label}</dt>
                  <dd className={styles.ftInfoValue}>{row.value}</dd>
                </div>
              ))}
            </dl>

            {/* Sources */}
            <h3 className={styles.ftHeading}>Sources &amp; references</h3>
            <p className={styles.ftBody}>
              Product information was gathered from official manufacturer
              listings and published policies. Scientific references provide
              general background on photobiomodulation and do not
              independently validate the performance of any specific mat
              reviewed.
            </p>

            <p className={styles.ftSourceLabel}>Product information</p>
            <ol className={styles.ftSources}>
              {productSources.map((source) => (
                <li key={source.name}>
                  {source.href ? (
                    <a
                      className={styles.ftLink}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.name}
                    </a>
                  ) : (
                    source.name
                  )}
                </li>
              ))}
            </ol>

            <p className={styles.ftSourceLabel}>Scientific background</p>
            <ol className={styles.ftSources} start={6}>
              {researchSources.map((source) => (
                <li key={source.href}>
                  <a
                    className={styles.ftLink}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.citation}
                  </a>
                </li>
              ))}
            </ol>

            {/* Affiliate disclosure */}
            <div className={styles.ftDisclosure}>
              <p className={styles.ftDisclosureTitle}>Affiliate disclosure</p>
              <p className={styles.ftDisclosureText}>
                Best Red Light Review may receive compensation when readers
                purchase products through links on this page. This may include
                purchases of ApolloThera products. Commissions may be earned at
                no additional cost to the reader.
              </p>
              <p className={styles.ftDisclosureText}>
                Our rankings are editorial evaluations based on the criteria
                described in this guide. Readers should review the published
                methodology, product specifications, and any commercial
                relationships when interpreting our recommendations.
              </p>
            </div>

            {/* Medical disclaimer */}
            <div className={styles.ftMedical}>
              <h3 className={styles.ftMedicalTitle}>Medical disclaimer</h3>
              <p className={styles.ftMedicalText}>
                The information on this website is provided for general
                educational and product-comparison purposes only. It is not
                medical advice and should not be used to diagnose, treat, cure,
                or prevent any medical condition.
              </p>
              <p className={styles.ftMedicalText}>
                Red and near-infrared light therapy research varies by
                condition, device, wavelength, and treatment parameters.
                Individual outcomes may differ. Consult a qualified healthcare
                professional about persistent pain, medical concerns, or
                whether a light therapy device is appropriate for your
                circumstances.
              </p>
              <p className={styles.ftMedicalText}>
                Manufacturer specifications and promotional claims should not
                be interpreted as independent clinical proof of effectiveness.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* COMPACT PUBLICATION FOOTER */}
      <footer className={styles.ftFooter}>
        <div className={styles.msWrap}>
          <div className={styles.ftFooterInner}>
            <div className={styles.ftFooterBrand}>
              <img
                className={styles.ftFooterMark}
                src="/brr-logo.png"
                alt=""
                width={34}
                height={34}
              />
              <div>
                <p className={styles.ftFooterName}>Best Red Light Review</p>
                <p className={styles.ftFooterTag}>
                  Independent Product Comparisons &amp; Buying Guides
                </p>
              </div>
            </div>

            <nav className={styles.ftFooterNav} aria-label="Footer">
              {footerLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    className={styles.ftFooterLink}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className={styles.ftFooterMuted}>
                    {link.label}
                  </span>
                ),
              )}
            </nav>
          </div>

          <p className={styles.ftCopyright}>
            © 2026 Best Red Light Review. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
