import styles from "../page.module.css";
import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const scores: Scores = {
  Effectiveness: 8.7,
  "Ease of Use": 9.4,
  "Quality & Design": 9.3,
  "Safety & Certifications": 9.6,
  "Value for Money": 8.5,
  "Customer Satisfaction": 9.2,
};

const rows: [string, React.ReactNode][] = [
  ["Coverage", "180 × 80 cm"],
  ["Wavelengths", "660, 660, 810, 850, 940 nm"],
  ["LEDs", "3,840"],
  ["Irradiance", "140 mW/cm²"],
  ["Session", "10–20 minutes"],
  ["Brightness modes", "Not specified"],
  ["Safety certified", "FDA-registered"],
  ["EMF rating", "Not specified"],
  ["Warranty", "Yes"],
];

export const productFour: Product = {
  number: 4,
  name: "Swirise Red & Near-Infrared Light Therapy Mat Pro",
  sponsoredLabel: null,
  tagline: "“A feature-rich mat with multi-wavelength versatility”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/swirise-evaluation.png",
    alt: "Swirise Red & Near-Infrared Light Therapy Mat Pro. Test Result: A-. Rating: 9.0/10. (3591 Reviews)",
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
              <span className={styles.analysisHighlight}>$949</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.verdict}>
        <strong>Best for</strong> buyers who want a high LED count and
        multi-wavelength coverage in short sessions, and who are comfortable
        at a premium price with{" "}
        <strong>no adjustable brightness</strong>.
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
      <strong>Comprehensive wavelength system:</strong> combines 660, 660, 810,
      850, 940 nm wavelengths.
    </>,
    <>
      <strong>High-powered irradiance:</strong> 140mW/cm² delivers faster, more
      effective results.
    </>,
    <>
      <strong>Efficient sessions:</strong> achieve full therapeutic dose in just
      10-20 minutes.
    </>,
    <>
      <strong>Compact and portable:</strong> ideal for home or travel use, easy
      to store and position.
    </>,
    <>
      <strong>Plug-and-go operation:</strong> no setup required,
      beginner-friendly.
    </>,
  ],

  cons: [
    <>
      <strong>Higher learning curve:</strong> multiple wavelengths may feel
      overwhelming for beginners
    </>,
    <>
      <strong>No adjustable brightness modes:</strong> less flexibility compared
      to other mats in this price range.
    </>,
    <>
      <strong>Higher price:</strong> more LEDs and wavelengths, but this is
      reflected in it’s premium price-point.
    </>,
  ],

  conclusion: (
    <p>
      <strong>
        The Swirise Red &amp; Near-Infrared Light Therapy Mat Pro
      </strong>{" "}
      is a <strong>scientifically advanced option</strong> that delivers{" "}
      <strong>professional-grade therapy</strong> with{" "}
      <strong>comprehensive wavelength coverage</strong>. Perfect for users who
      want the <strong>most thorough red light treatment available</strong> and
      don’t mind <strong>investing in superior technology</strong> for{" "}
      <strong>faster, deeper results</strong>.
    </p>
  ),

  availabilityFinal: { kind: "none" },
};
