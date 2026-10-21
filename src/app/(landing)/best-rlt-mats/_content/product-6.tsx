import styles from "../page.module.css";
import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const scores: Scores = {
  Effectiveness: 8.8,
  "Ease of Use": 8.6,
  "Quality & Design": 8.7,
  "Safety & Certifications": 8.5,
  "Value for Money": 8.3,
  "Customer Satisfaction": 8.8,
};

const rows: [string, React.ReactNode][] = [
  ["Coverage", "71 × 32 in — approx. 180 × 81 cm"],
  ["Wavelengths", "660nm + 850nm"],
  [
    "LEDs",
    <>
      <span className={styles.analysisHighlight}>3,840</span> — 1,280 × 660nm
      + 2,560 × 850nm
    </>,
  ],
  ["Irradiance", "120 mW/cm² @ 0″"],
  ["Brightness modes", "Not specified"],
  ["LED lifespan", "Estimated 80,000 hours"],
  ["Weight", "10 lb — approx. 4.5 kg"],
  ["Safety certified", "FDA-registered, according to Megelin"],
  ["EMF rating", "Not specified"],
  ["Warranty", "1 year"],
];

export const productSix: Product = {
  number: 6,
  name: "Megelin Red and Infrared Light Therapy Mat",
  sponsoredLabel: null,
  tagline:
    "“High-coverage full-body red and near-infrared therapy with an exceptionally high LED count.”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/megelin-evaluation.png",
    alt: "Megelin Red and Infrared Light Therapy Mat. Test Result: B. Rating: 8.2/10. (2971 Reviews)",
  },
  availabilityTop: { kind: "text", text: <strong>Available on Amazon</strong> },

  // The Overall Analysis runs as a table rather than prose: the facts a buyer
  // compares, with weight only on the values that decide the purchase.
  analysis: (
    <>
      <table className={styles.analysisTable}>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
          <tr className={styles.analysisPriceRow}>
            <th scope="row">Price</th>
            <td>
              <span className={styles.analysisHighlight}>$739</span> — reduced
              from a displayed reference price of $1,849
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.verdict}>
        <strong>Best for</strong> maximum LED count and full-body coverage
        at a mid-range price. At <strong>10 lb it is the heaviest here</strong>,
        and its listing shows only 54 customer reviews.
      </p>
    </>
  ),

  whyWeLoveIt: null,
  whoItsFor: null,
  priceCheck: null,
  specifications: null,

  availabilityMid: { kind: "none" },
  scores,

  pros: [
    <>
      <strong>Very high LED count:</strong> 3,840 LEDs provide significantly
      more light sources than many standard therapy mats.
    </>,
    <>
      <strong>Full-body coverage:</strong> Large 71 × 32-inch surface can cover
      most of the body during a single lying-down session.
    </>,
    <>
      <strong>Strong stated irradiance:</strong> Rated at 120 mW/cm² at direct
      contact.
    </>,
    <>
      <strong>Dual wavelengths:</strong> Combines 660nm red light with
      deeper-reaching 850nm near-infrared light.
    </>,
    <>
      <strong>Long LED lifespan:</strong> Megelin specifies an estimated
      lifespan of approximately 80,000 hours.
    </>,
    <>
      <strong>FDA-Registered:</strong> Megelin identifies the device as
      FDA-registered on its product page.
    </>,
  ],

  cons: [
    <>
      <strong>Premium price:</strong> At $739, it costs considerably more than
      smaller red-light pads and entry-level mats.
    </>,
    <>
      <strong>Less portable:</strong> At approximately 10 lb and 71 inches
      long, it is not especially convenient for frequent travel.
    </>,
    <>
      <strong>Only two wavelengths:</strong> Uses the standard 660nm + 850nm
      combination rather than the broader multi-wavelength systems found on
      some premium competitors.
    </>,
    <>
      <strong>Limited published control specifications:</strong> Megelin does
      not clearly specify brightness levels or pulse-frequency modes in the
      technical specifications shown on the product page.
    </>,
  ],

  conclusion: (
    <p>
      The <strong> Megelin Red Light Therapy Mat</strong> is a smart, expensive
      choice for users who want{" "}
      <strong>targeted neck and shoulder relief</strong> in a{" "}
      <strong>portable, easy-to-use format</strong>. Its ergonomic cervical
      support, pulse modes, and lightweight design make it easy for daily
      stress relief and desk-related tension.
    </p>
  ),

  availabilityFinal: { kind: "none" },
};
