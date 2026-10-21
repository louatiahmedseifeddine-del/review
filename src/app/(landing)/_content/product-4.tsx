import styles from "../page.module.css";
import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const scores: Scores = {
  Effectiveness: 9.0,
  "Ease of Use": 9.3,
  "Quality & Design": 9.1,
  "Safety & Certifications": 9.4,
  "Value for Money": 8.9,
  "Customer Satisfaction": 9.2,
};

const rows: [string, React.ReactNode][] = [
  ["Coverage", "160 × 60 cm — the smallest full-size mat here"],
  ["Wavelengths", "630, 660, 810, 830, 1064 nm"],
  ["LEDs", "1,290"],
  ["Irradiance", "120 mW/cm²"],
  ["Session", "Adjustable timer, 5–30 minutes"],
  ["Extras", "ION therapy, EMS, vibration massage, ultrasound"],
  ["Weight", "9 kg"],
  ["Safety certified", "RoHS, FCC & CE approved"],
  ["EMF rating", "Not specified"],
  ["Warranty", "Yes"],
];

export const productFour: Product = {
  number: 4,
  name: "Redjuvi - Full Body Infrared Light Therapy Mat",
  sponsoredLabel: null,
  tagline: "“A premium wellness mat with advanced multi-spectrum technology”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/redjuvi-evaluation.png",
    alt: "Redjuvi - Full Body Infrared Light Therapy Mat. Test Result: B. Rating: 8.2/10. (2971 Reviews)",
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
              <span className={styles.analysisHighlight}>$1,255</span> — down
              from $1,540
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.verdict}>
        <strong>Best for</strong> people who want ION, EMS, vibration and
        ultrasound bundled into one device. It is the{" "}
        <strong>most expensive mat on this list</strong> and the smallest of
        the full-size options, so larger users should size up elsewhere.
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
      <strong>Comprehensive wavelength spectrum:</strong> 6 different
      therapeutic wavelengths for targeted benefits (630, 660, 810, 830, 850,
      1064 nm).
    </>,
    <>
      <strong>Multi-modal therapy:</strong> includes EMS, vibration, ION
      therapy, and ultrasound features.
    </>,
    <>
      <strong>Premium construction:</strong> high-quality materials and robust
      LED array.
    </>,
    <>
      <strong>Safety Certified:</strong> RoHS, FCC &amp; CE approved.
    </>,
  ],

  cons: [
    <>
      <strong>Premium price point:</strong> $1,255 (down from $1,540) may limit
      accessibility for those with a budget.
    </>,
    <>
      <strong>Feature complexity:</strong> numerous options may overwhelm users
      wanting simple therapy.
    </>,
    <>
      <strong>Heavier unit:</strong> 9 kg may make portability and storage more
      challenging.
    </>,
    <>
      <strong>Potential over-engineering:</strong> many features may go unused
      by average users.
    </>,
    <>
      <strong>Lesser coverage:</strong> 160 x 60 cm compared to other mats
      offering 180-200 x 80-105 cm.
    </>,
  ],

  conclusion: (
    <p>
      The <strong>Redjuvi – Full Body Infrared Light Therapy Mat</strong> is a{" "}
      <strong>premium, all-in-one option</strong> combining a{" "}
      <strong>broad 6-wavelength spectrum</strong> with{" "}
      <strong>advanced wellness features</strong> like{" "}
      <strong>EMS, vibration, and ION therapy</strong>. It’s best suited for{" "}
      <strong>experienced users</strong> who want{" "}
      <strong>maximum versatility</strong> and don’t mind{" "}
      <strong>added complexity</strong>, while those seeking{" "}
      <strong>simple, straightforward red light therapy</strong> may prefer{" "}
      <strong>more focused alternatives</strong>.
    </p>
  ),

  availabilityFinal: { kind: "none" },
};
