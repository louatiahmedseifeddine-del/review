import styles from "../page.module.css";
import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const APOLLO_URL =
  "https://www.getyourapollo.com/products/apollo-recovery-mat";

const APOLLO_BUTTON = {
  kind: "button",
  label: "Check Availability at GetYourApollo.com →",
  href: APOLLO_URL,
} as const;

const rows: [string, React.ReactNode][] = [
  ["Coverage", "Neck, shoulders, back and hips — 36.2 × 15.7 inches"],
  ["Wavelengths", "660nm red + 850nm near-infrared"],
  ["LEDs", "380 triple-chip modules — 1,140 individual chips"],
  ["Irradiance", "146 mW/cm² at the surface"],
  ["Session", "10–20 minutes"],
  ["Power", "60W"],
  ["Controls", "Wired controller"],
  [
    "Included free",
    <>
      <span className={styles.analysisHighlight}>
        Personalized Recovery Protocol
      </span>
      , Recovery Cream, Shipping
    </>,
  ],
];

const scores: Scores = {
  Effectiveness: 9.7,
  "Ease of Use": 9.6,
  "Quality & Design": 9.5,
  "Safety & Certifications": 9.6,
  "Value for Money": 9.4,
  "Customer Satisfaction": 9.8,
};

export const productOne: Product = {
  number: 1,
  name: "ApolloThera Recovery Mat",
  sponsoredLabel: "Editor’s Pick — Sponsored Listing",
  tagline: (
    <strong>
      “Targeted red &amp; infrared light therapy without the premium price
      tag.”
    </strong>
  ),
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/apollothera-evaluation.png",
    alt: "ApolloThera Recovery Mat. Test Result: A+. Rating: 9.6/10. 31,240+ Reviews.",
  },
  availabilityTop: APOLLO_BUTTON,

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
              <span className={styles.analysisHighlight}>$199.99</span> — with
              an advertised{" "}
              <span className={styles.analysisNote}>50% OFF offer</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.verdict}>
        <strong>Best for</strong> treating one area at a time — neck,
        shoulders, back or hips — at the lowest price on this list. Want the
        whole body in a single session? The{" "}
        <strong>#2 pick covers neck to ankles</strong>.
      </p>
    </>
  ),

  whyWeLoveIt: null,
  whoItsFor: null,
  priceCheck: null,
  specifications: null,

  availabilityMid: APOLLO_BUTTON,
  scores,

  pros: [
    <>
      <strong>Dual wavelengths:</strong> combines 660nm red and 850nm
      near-infrared light.
    </>,
    <>
      <strong>Practical coverage:</strong> accommodates the neck, shoulders,
      back, and hips in one setup.
    </>,
    <>
      <strong>Simple daily routine:</strong> 10–20-minute sessions with an
      accessible controller.
    </>,
    <>
      <strong>Flexible positioning:</strong> suitable for use on a bed, sofa,
      or recliner.
    </>,
    <>
      <strong>Personalized guidance:</strong> a recovery protocol is included
      with the offer.
    </>,
    <>
      <strong>Included extras:</strong> Recovery Cream and shipping are
      included.
    </>,
  ],

  cons: [
    <>
      <strong>Online only:</strong> not available in physical retail stores.
    </>,
    <>
      <strong>Limited availability:</strong> already sold out twice this
      year—check availability while the 50% OFF bundle is available.
    </>,
  ],

  conclusion: (
    <>
      <p>
        The <strong>ApolloThera Recovery Mat</strong> earns our top pick by
        combining{" "}
        <strong>
          dual-wavelength technology, substantial light output, and practical
          neck-to-hip coverage
        </strong>{" "}
        in one easy-to-use design. For anyone seeking{" "}
        <strong>natural pain relief and faster recovery</strong>, it brings red
        and near-infrared light therapy into the comfort of home—without
        repeated clinic visits.
      </p>
      <p>
        <strong>
          The standout bonus is the Free Personalized Recovery Protocol.
        </strong>{" "}
        It answers the question that buying a mat alone leaves open:{" "}
        <strong>“How should I use it for my needs?”</strong> With personalized
        guidance to help you get started and stay consistent, the package gives
        you both{" "}
        <strong>the device and a clear plan for using it</strong>.
      </p>
      <p>
        Add{" "}
        <strong>50% OFF, Free Recovery Cream, and Free Shipping</strong>, and
        ApolloThera offers a compelling combination of{" "}
        <strong>technology, simplicity, and personalized support</strong>.
        That’s what makes it{" "}
        <strong>our top pick—and an offer worth checking while it’s
        available</strong>
        .
      </p>
    </>
  ),

  availabilityFinal: APOLLO_BUTTON,
};
