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

const specifications: [string, string][] = [
  ["LEDs:", "1,000"],
  ["Irradiance Power:", "120 mW/cm²"],
  ["Adjustable brightness modes:", "5"],
  ["Wavelengths:", "660, 850 nm"],
  ["Dimensions:", "200 × 105 cm"],
  ["Weight:", "Not specified"],
  ["Safety Certified:", "***"],
  ["EMF Rating:", "Not specified"],
  ["Free Warranty:", "Yes"],
];

export const productTwo: Product = {
  number: 2,
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

  whyWeLoveIt: (
    <>
      <p>
        The <strong>HigherDOSE Full Body Red Light Mat</strong> is a standout in
        the <strong>wellness community</strong>, frequently featured by{" "}
        <strong>influencers and health enthusiasts</strong>. With{" "}
        <strong>1,000 LEDs</strong> delivering{" "}
        <strong>660nm red light and 850nm near-infrared</strong>, it’s designed
        for{" "}
        <strong>
          mood enhancement, circadian rhythm support, and gentle recovery
        </strong>
        .
      </p>
      <p>
        The mat excels at creating a <strong>spa-like experience</strong> with
        its focus on{" "}
        <strong>mental wellness, energy elevation, and relaxation</strong>. The{" "}
        <strong>40Hz pulsing feature</strong> targets{" "}
        <strong>muscle recovery</strong>, while the{" "}
        <strong>stackable, hangable design</strong> offers versatility for
        different spaces and routines.
      </p>
      <p>
        However, with{" "}
        <strong>significantly fewer LEDs (1,000 vs 1,290 in our top pick)</strong>
        , it provides{" "}
        <strong>less comprehensive coverage and lower light density</strong>.
        Some users seeking <strong>intense therapeutic benefits</strong> may
        find the{" "}
        <strong>
          power output insufficient for deeper tissue penetration or faster
          results
        </strong>
        .
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>
        Perfect for wellness enthusiasts who prioritize mood support, stress
        relief, and lifestyle integration over maximum therapeutic intensity.
      </strong>{" "}
      Ideal for those wanting to enhance{" "}
      <strong>meditation, yoga, or daily rituals with red light therapy</strong>
      .
    </p>
  ),

  priceCheck: (
    <p>
      <strong>As of our last check on January 29, 2026</strong>, the{" "}
      <strong>HigherDOSE Full Body Red Light Mat</strong> retailed for{" "}
      <strong>$1149</strong> — placing it at the{" "}
      <strong>upper end of the red-light therapy mat market</strong>. While it
      offers excellent brand reputation and mood-focused benefits,{" "}
      <strong>
        the higher price may be steep for the LED count and therapeutic output
        provided
      </strong>
      .
    </p>
  ),

  specifications: (
    <>
      {specifications.map(([label, value]) => (
        <div key={label}>
          {label} <strong>{value}</strong>
        </div>
      ))}
    </>
  ),

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
