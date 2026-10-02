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

const specifications: [string, string][] = [
  ["LEDs:", "1,290"],
  ["Irradiance Power:", "120 mW/cm²"],
  ["Adjustable brightness modes:", "Not specified"],
  ["Wavelengths:", "630, 660, 810, 830 1064 nm"],
  ["Dimensions:", "160 x 60 cm"],
  ["Weight:", "9 kg"],
  ["Safety Certified:", "RoHS, FCC & CE approved"],
  ["EMF Rating:", "Not specified"],
  ["Free Warranty:", "Yes"],
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

  whyWeLoveIt: (
    <>
      <p>
        <strong>Redjuvi - Full Body Infrared Light Therapy Mat</strong> stands
        out with its <strong>comprehensive feature set</strong>, combining{" "}
        <strong>
          6 different wavelengths (630nm, 660nm, 810nm, 830nm, 880nm, 1064nm)
        </strong>{" "}
        with additional wellness technologies like <strong>ION therapy</strong>,{" "}
        <strong>EMS</strong>, <strong>vibration massage</strong>, and{" "}
        <strong>ultrasound wave functions</strong>.
      </p>
      <p>
        With <strong>1,280 LEDs</strong> and{" "}
        <strong>120mW/cm² irradiance</strong>, it delivers{" "}
        <strong>solid light therapy performance</strong> across a{" "}
        <strong>160 x 60 cm surface</strong>. The{" "}
        <strong>adjustable timer settings (5-30 minutes)</strong> and{" "}
        <strong>variety of treatment modes</strong> make it{" "}
        <strong>highly customisable</strong> for different wellness goals.
      </p>
      <p>
        However, the <strong>complexity</strong> could also mean{" "}
        <strong>more potential points of failure</strong>. It is also worth
        noting that the mat is shorter in both length and width to the other
        red light mats that we’ve reviewed,{" "}
        <strong>
          meaning it may be less suitable for larger users looking for
          full-body coverage
        </strong>
        .
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>Best suited for wellness enthusiasts</strong> who want an{" "}
      <strong>all-in-one recovery system</strong> and don’t mind{" "}
      <strong>paying premium prices</strong> for{" "}
      <strong>maximum features</strong>. Less ideal for{" "}
      <strong>beginners</strong> or those focused purely on{" "}
      <strong>
        basic red light therapy, and those who are larger in size, as this mat
        is comparatively smaller than others on the market.
      </strong>
    </p>
  ),

  priceCheck: (
    <p>
      As of our last check on <strong>January 29, 2026</strong>, the{" "}
      <strong>
        Redjuvi - Full Body Infrared Light Therapy Mat retailed for $1,255 (down
        from $1,540)
      </strong>
      , placing it in the{" "}
      <strong>high-range category for price</strong> among comparable red light
      mat. It offers solid technology and features but at a comparably high
      cost, the <strong>cost may be prohibitive</strong> for many users seeking{" "}
      <strong>basic red light therapy benefits</strong>.
    </p>
  ),

  specifications: (
    <>
      {specifications.map(([label, value], index) => (
        <span key={label}>
          {index > 0 ? " | " : null}
          <strong>{label}</strong> {value}
        </span>
      ))}
    </>
  ),

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
