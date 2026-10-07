import type { Product } from "../../_components/product-section";
import type { Scores } from "../../_components/score-bars";

const scores: Scores = {
  Effectiveness: 8.7,
  "Ease of Use": 9.4,
  "Quality & Design": 9.3,
  "Safety & Certifications": 9.6,
  "Value for Money": 8.5,
  "Customer Satisfaction": 9.2,
};

// Supplied inline, separated by vertical bars, with bold field labels.
const specifications: [string, string][] = [
  ["LEDs:", "3,840"],
  ["Irradiance Power:", "140 mW/cm²"],
  ["Adjustable brightness modes:", "Not specified"],
  ["Wavelengths:", "660, 660, 810, 850, 940 nm"],
  ["Dimensions:", "180 x 80 cm"],
  ["Weight:", "Not specified"],
  ["Safety Certified:", "FDA-registered"],
  ["EMF Rating:", "Not specified"],
  ["Free Warranty:", "Yes"],
];

export const productThree: Product = {
  number: 3,
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

  whyWeLoveIt: (
    <>
      <p>
        <strong>
          The Swirise Red &amp; Near-Infrared Light Therapy Mat Pro
        </strong>{" "}
        stands out with its impressive{" "}
        <strong>
          6-wavelength system (630nm, 660nm, 810nm, 830nm, 880nm, and 1064nm)
        </strong>{" "}
        - more than most competitors offer.
      </p>
      <p>
        This <strong>FDA-registered mat</strong> delivers powerful{" "}
        <strong>140mW/cm² irradiance</strong>, meaning you get{" "}
        <strong>84J/cm² of therapeutic energy in just 10 minutes</strong>,
        making sessions <strong>efficient for busy schedules</strong>.
      </p>
      <p>
        The inclusion of <strong>1064nm wavelength</strong> is particularly
        noteworthy, as it{" "}
        <strong>penetrates deeper than standard red light therapy</strong> to{" "}
        <strong>target inflammation at the root level</strong>. With{" "}
        <strong>3,840 LEDs</strong> across the generous{" "}
        <strong>180 x 80 cm surface</strong>, coverage is{" "}
        <strong>comprehensive and even</strong>.
      </p>
      <p>
        The <strong>shorter session times (10-20 minutes)</strong> work well for
        those integrating therapy into <strong>morning routines</strong> or{" "}
        <strong>post-workout recovery</strong>.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>Ideal for serious wellness enthusiasts</strong> who want{" "}
      <strong>clinical-grade results</strong>,{" "}
      <strong>athletes needing deep tissue recovery</strong>, and{" "}
      <strong>anyone dealing with chronic inflammation or pain</strong> who
      values <strong>science-backed therapy</strong>.
    </p>
  ),

  priceCheck: (
    <p>
      <strong>As of our last check on January 29, 2026</strong>, the{" "}
      <strong>
        The Swirise Red &amp; Near-Infrared Light Therapy Mat Pro
      </strong>{" "}
      was priced at <strong>$949</strong>, placing it in the{" "}
      <strong>mid-to-upper premium tier for price</strong>. While positioned in
      the <strong>premium range</strong>, the{" "}
      <strong>6-wavelength system</strong> and <strong>high irradiance</strong>{" "}
      deliver <strong>exceptional value</strong> for those seeking{" "}
      <strong>professional-grade results at home</strong>.
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
