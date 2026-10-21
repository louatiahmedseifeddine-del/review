import styles from "../page.module.css";
import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const APOLLO_FULL_BODY_URL =
  "https://www.getyourapollo.com/products/apollothera-red-light-mat?variant=52233395470655";

const APOLLO_FULL_BODY_BUTTON = {
  kind: "button",
  label: "Check Availability at GetYourApollo.com →",
  href: APOLLO_FULL_BODY_URL,
} as const;

/**
 * Ordered by what a buyer actually compares. Only irradiance and the
 * money-back window are highlighted here; the price row below carries the
 * third. Highlighting more than that would flatten the emphasis again.
 */
const rows: [string, React.ReactNode][] = [
  ["Coverage", "Neck to ankles — 74.8 × 31.5 inches"],
  ["Wavelengths", "660nm red + 850nm near-infrared"],
  [
    "LEDs",
    <>
      1,420 triple-chip modules —{" "}
      <span className={styles.analysisHighlight}>4,260 individual LEDs</span>{" "}
      (two 660nm + one 850nm per module)
    </>,
  ],
  [
    "Irradiance",
    <>
      <span className={styles.analysisHighlight}>150 mW/cm²</span>{" "}
      <span className={styles.analysisNote}>— highest in this comparison</span>
    </>,
  ],
  ["Session", "20 minutes"],
  ["Power", "284W rated / 150W actual (±10%)"],
  ["Build", "SBR + EVA — CE certified"],
  [
    "Guarantee",
    <>
      1-year warranty, with a{" "}
      <span className={styles.analysisHighlight}>
        90-day money-back guarantee
      </span>
    </>,
  ],
  [
    "Included free",
    "Personalized Recovery Protocol, Recovery Cream, Priority Shipping",
  ],
];

/**
 * Overall 9.4/10. Effectiveness and customer satisfaction match or exceed the
 * Recovery Mat; Value for Money carries the difference, because this mat costs
 * meaningfully more than the #1 pick for the same wavelength pairing.
 */
const scores: Scores = {
  Effectiveness: 9.8,
  "Ease of Use": 9.2,
  "Quality & Design": 9.5,
  "Safety & Certifications": 9.5,
  "Value for Money": 8.6,
  "Customer Satisfaction": 9.8,
};

export const productTwo: Product = {
  number: 2,
  name: "ApolloThera Full Body Red Light Mat",
  sponsoredLabel: "Sponsored Listing",
  tagline: (
    <strong>
      “Neck-to-ankle coverage for anyone who wants the whole body treated in
      one session.”
    </strong>
  ),
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/apollothera-full-body-evaluation.png",
    alt: "ApolloThera Full Body Red Light Mat. Test Result: A. Rating: 9.4/10. 31,240+ Reviews.",
  },
  availabilityTop: APOLLO_FULL_BODY_BUTTON,

  // The Overall Analysis runs as a table rather than prose: the facts a buyer
  // compares, with weight only on the three values that decide the purchase.
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
              <span className={styles.analysisHighlight}>$649.99</span> — down
              from $1,299.99 <span className={styles.analysisNote}>(50% OFF)</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.verdict}>
        <strong>Best for</strong> treating several areas in one session, if the
        budget allows. Targeting a single stubborn area instead? Our{" "}
        <strong>#1 pick does that job for $199.99</strong>.
      </p>
    </>
  ),

  whyWeLoveIt: null,
  whoItsFor: null,
  priceCheck: null,
  specifications: null,

  availabilityMid: APOLLO_FULL_BODY_BUTTON,
  scores,

  pros: [
    <>
      <strong>Full-body coverage:</strong> treats neck to ankles in one
      20-minute session.
    </>,
    <>
      <strong>Highest stated output here:</strong> a reported 150mW/cm²
      irradiance.
    </>,
    <>
      <strong>High chip count:</strong> 1,420 triple-chip modules — 4,260
      individual LEDs across the surface.
    </>,
    <>
      <strong>Dual wavelengths:</strong> 660nm red and 850nm near-infrared.
    </>,
    <>
      <strong>90-day money-back guarantee:</strong> backed by a 1-year
      warranty.
    </>,
    <>
      <strong>Free Personalized Recovery Protocol:</strong> guidance for
      building a consistent routine is included.
    </>,
    <>
      <strong>Free Recovery Cream:</strong> included with the offer.
    </>,
    <>
      <strong>Free Priority Shipping:</strong> included with the offer.
    </>,
  ],

  cons: [
    <>
      <strong>Noticeably pricier:</strong> $649.99 against $199.99 for the
      Recovery Mat.
    </>,
    <>
      <strong>Needs the space:</strong> at 74.8 × 31.5 inches it wants a bed or
      a clear stretch of floor.
    </>,
    <>
      <strong>Less portable:</strong> rolls up, but it is not the mat you take
      with you.
    </>,
    <>
      <strong>Online only:</strong> not available in physical retail stores.
    </>,
  ],

  conclusion: (
    <>
      <p>
        The <strong>ApolloThera Full Body Red Light Mat</strong> takes
        everything that put the Recovery Mat at the top of this list — the{" "}
        <strong>660nm and 850nm pairing, the included guidance, the
        guarantee</strong>{" "}
        — and stretches it across a surface four times the size, at the{" "}
        <strong>highest stated irradiance in this comparison</strong>.
      </p>
      <p>
        <strong>It scores 9.4 rather than 9.6 on price alone.</strong> On
        effectiveness and customer satisfaction it matches or beats our #1
        pick; on <strong>value for money</strong> it cannot, because{" "}
        <strong>$649.99 is a real step up from $199.99</strong> for the same
        light. Set against the{" "}
        <strong>$949 to $1,255 full-size mats below</strong>, though, it is the
        cheaper way to get whole-body coverage.
      </p>
      <p>
        <strong>Choose this one if you want the whole body treated at once</strong>{" "}
        and the budget allows. If you are targeting a single area, our{" "}
        <strong>#1 pick remains the better buy</strong>.
      </p>
    </>
  ),

  availabilityFinal: APOLLO_FULL_BODY_BUTTON,
};
