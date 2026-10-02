import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const APOLLO_URL =
  "https://www.getyourapollo.com/products/apollothera-red-light-mat";

const APOLLO_BUTTON = {
  kind: "button",
  label: "Check Availability at GetYourApollo.com →",
  href: APOLLO_URL,
} as const;

const specifications: [string, string][] = [
  ["Wavelengths:", "660nm + 850nm"],
  ["LED configuration:", "380 triple-chip modules / 1,140 individual chips"],
  ["Reported irradiance:", "146 mW/cm² at 0 inches"],
  ["Power:", "60W"],
  ["Dimensions:", "Approximately 36.2 × 15.7 inches"],
  ["Coverage:", "Neck to hip"],
  ["Session length:", "10–20 minutes"],
  ["Design:", "Flexible mat with wired controller"],
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

  whyWeLoveIt: (
    <>
      <p>
        The <strong>ApolloThera Recovery Mat</strong> brings together
        dual-wavelength technology, practical neck-to-hip coverage, and a
        simple routine that fits into everyday life.
      </p>
      <p>
        Its <strong>660nm red light and 850nm near-infrared light</strong> are
        delivered through{" "}
        <strong>380 triple-chip LED modules—1,140 individual LED chips</strong>
        . With a reported irradiance of{" "}
        <strong>146 mW/cm² at the surface</strong>, it offers substantial
        output in a flexible format designed for home use.
      </p>
      <p>
        Place it on a bed, sofa, or recliner, position it against the intended
        area, and use the controller to start a{" "}
        <strong>10–20-minute session</strong>. Its approximately{" "}
        <strong>36.2 × 15.7-inch footprint</strong> covers the neck, shoulders,
        back, and hips without requiring a large permanent setup.
      </p>
      <p>
        <strong>
          What makes ApolloThera stand out is the support included with the
          mat.
        </strong>{" "}
        The offer combines a{" "}
        <strong>Free Personalized Recovery Protocol</strong>,{" "}
        <strong>Free Recovery Cream</strong>, and{" "}
        <strong>Free Shipping</strong>, giving buyers a guided routine
        alongside the device.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      ApolloThera is a practical choice for people who want{" "}
      <strong>
        neck-to-hip coverage, straightforward controls, and guidance on
        building a consistent at-home routine
      </strong>
      . Its compact size also suits buyers who want something easy to position
      and store.
    </p>
  ),

  priceCheck: (
    <>
      <p>
        As of our last check on June 8th, 2026, the ApolloThera Mat retailed
        for $199.99 placing it at the upper end of the red-light therapy mat
        market.{" "}
        <strong>
          What sets this offer apart is the Free Personalized Recovery Protocol
          included with the purchase—giving customers guidance on how to use
          the mat and build a consistent recovery routine.
        </strong>{" "}
        With Free Recovery Cream and Free Shipping also included, the price
        covers more than the device alone.
      </p>
      <p>
        The advertised offer includes <strong>50% OFF</strong>, a{" "}
        <strong>Free Personalized Recovery Protocol</strong>,{" "}
        <strong>Free Recovery Cream</strong>, and{" "}
        <strong>Free Shipping</strong>.
      </p>
      <p>Click below to check the current price and availability.</p>
    </>
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
      <strong>Not a full-body mat:</strong> its coverage does not extend from
      head to feet.
    </>,
    <>
      <strong>Requires a power connection:</strong> the mat uses a cable and
      wired controller.
    </>,
  ],

  conclusion: (
    <p>
      <strong>
        ApolloThera is our pick for a straightforward, guided neck-to-hip
        recovery routine.
      </strong>{" "}
      Its dual wavelengths, flexible design, and included personalized protocol
      make it a compelling option for buyers who value everyday usability and
      support alongside the device.
    </p>
  ),

  availabilityFinal: APOLLO_BUTTON,
};
