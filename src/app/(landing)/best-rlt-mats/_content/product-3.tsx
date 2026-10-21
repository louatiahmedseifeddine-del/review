import styles from "../page.module.css";
import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const scores: Scores = {
  Effectiveness: 9.2,
  "Ease of Use": 9.4,
  "Quality & Design": 9.6,
  "Safety & Certifications": 9.3,
  "Value for Money": 8.8,
  "Customer Satisfaction": 9.5,
};

const rows: [string, React.ReactNode][] = [
  ["Coverage", "200 × 105 cm"],
  ["Wavelengths", "660nm + 850nm"],
  ["LEDs", "1,000"],
  ["Irradiance", "120 mW/cm²"],
  ["Brightness modes", "5"],
  ["Extras", "40Hz pulsing; stackable and hangable"],
  ["Safety certified", "Not disclosed"],
  ["EMF rating", "Not specified"],
  ["Warranty", "Yes"],
];

export const productThree: Product = {
  number: 3,
  name: "HigherDOSE Full Body Red Light Mat",
  sponsoredLabel: null,
  tagline: "“A premium wellness brand and influencer favourite”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/higherdose-evaluation.png",
    alt: "HigherDOSE Full Body Red Light Mat. Test Result: A-. Rating: 9.0/10. (3591 Reviews)",
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
              <span className={styles.analysisHighlight}>$1,149</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.verdict}>
        <strong>Best for</strong> mood support, relaxation and lifestyle
        routines. At this price the{" "}
        <strong>1,000-LED count is the lowest here</strong>, so it is the
        weaker choice for intensive pain management.
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
      <strong>Dual-wavelength coverage:</strong> combines 630 and 850 nm for
      both skin and deep tissue benefits.
    </>,
    <>
      <strong>Versatile design:</strong> stackable and hangable for multiple
      room setups.
    </>,
    <>
      <strong>Premium brand:</strong> trusted wellness company with strong
      customer support.
    </>,
    <>
      <strong>40Hz pulsing:</strong> targeted frequency for muscle recovery and
      pain relief.
    </>,
    <>
      <strong>Trusted brand:</strong> strong customer reviews and reputation
      for reliability.
    </>,
  ],

  cons: [
    <>
      <strong>Premium pricing:</strong> $1149 places it at the higher end of
      the market.
    </>,
    <>
      <strong>Lower LED density:</strong> only 1,000 LEDs compared to 1,290 in
      other comparable mats.
    </>,
    <>
      <strong>Limited public disclosure:</strong> we were unable to find
      information online to confirm the product’s EMF rating and safety
      certifications.
    </>,
  ],

  conclusion: (
    <p>
      The <strong>HigherDOSE</strong> offers a{" "}
      <strong>premium wellness experience</strong> with{" "}
      <strong>excellent mood and lifestyle benefits</strong>, perfect for those
      seeking <strong>relaxation and energy enhancement</strong>. However,{" "}
      <strong>serious pain management users</strong> may find{" "}
      <strong>
        better therapeutic value in higher-density LED options at a lower price
        point
      </strong>
      .
    </p>
  ),

  availabilityFinal: { kind: "none" },
};
