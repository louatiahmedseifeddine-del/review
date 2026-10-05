import type { Product } from "../_components/product-section";
import type { Scores } from "../_components/score-bars";

const APOLLO_URL =
  "https://www.getyourapollo.com/pages/apollo-recovery-lp";

const APOLLO_BUTTON = {
  kind: "button",
  label: "Check Availability at GetYourApollo.com →",
  href: APOLLO_URL,
} as const;

const specifications: [string, string][] = [
  ["LEDs:", "380 triple-chip modules / 1,140 individual chips"],
  ["Reported Irradiance:", "146mW/cm² at the surface"],
  ["Wavelengths:", "660nm red + 850nm near-infrared"],
  ["Dimensions:", "Approximately 36.2 × 15.7 inches"],
  ["Power:", "60W"],
  ["Session Length:", "10–20 minutes"],
  ["Coverage:", "Neck, shoulders, back, and hips"],
  [
    "Included:",
    "Free Personalized Recovery Protocol, Free Recovery Cream, and Free Shipping",
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

  whyWeLoveIt: (
    <>
      <p>
        If you’re looking for{" "}
        <strong>
          natural pain relief and faster recovery without repeated clinic
          visits
        </strong>
        , the <strong>ApolloThera Recovery Mat</strong> brings red and
        near-infrared light into a simple routine you can follow{" "}
        <strong>from the comfort of home</strong>.
      </p>
      <p>
        Its appeal starts with{" "}
        <strong>
          two complementary wavelengths: 660nm red light and 850nm
          near-infrared light
        </strong>
        . Together, they give you a focused light therapy setup for the areas
        you want to prioritise—without complicated equipment or a lengthy
        setup.
      </p>
      <p>
        With{" "}
        <strong>
          380 triple-chip LED modules—1,140 individual LED chips—and a reported
          irradiance of 146mW/cm² at the surface
        </strong>
        , ApolloThera combines substantial light output with a{" "}
        <strong>flexible, practical design</strong>.
      </p>
      <p>
        The approximately{" "}
        <strong>
          36.2 × 15.7-inch mat covers the neck, shoulders, back, and hips
        </strong>
        . Place it on your bed, sofa, or recliner, position it against the
        intended area, and start a <strong>10–20-minute session</strong> using
        the controller. Its compact footprint makes it easy to fit into
        everyday life and store between sessions.
      </p>
      <p>
        <strong>
          What makes ApolloThera stand out is the guidance included with your
          purchase.
        </strong>{" "}
        The <strong>Free Personalized Recovery Protocol</strong> helps you
        understand how to use the mat and build a consistent routine.{" "}
        <strong>Free Recovery Cream and Free Shipping</strong> complete the
        offer.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      ApolloThera is particularly suited to{" "}
      <strong>
        active individuals, people exploring at-home options for everyday
        discomfort, and anyone seeking a manageable recovery routine
      </strong>
      . Its{" "}
      <strong>
        neck-to-hip coverage, straightforward controls, and personalized
        guidance
      </strong>{" "}
      make it appealing for users who want support getting started and staying
      consistent.
    </p>
  ),

  priceCheck: (
    <>
      <p>
        <strong>As of our last check on October 1st, 2026</strong>, the{" "}
        <strong>ApolloThera Recovery Mat retailed for $199.99</strong>, with an
        advertised <strong>50% OFF offer</strong>.
      </p>
      <p>
        With{" "}
        <strong>
          dual wavelengths, 1,140 individual LED chips, and a Free Personalized
          Recovery Protocol
        </strong>
        , the package offers more than the device alone: it combines the mat
        with <strong>guidance for building yourus</strong>{" "}
        <strong>Free Recovery Cream and Free Shipping</strong>.
      </p>
      <p>
        To confirm whether the offer is still available, click the{" "}
        <strong>“Check Availability”</strong> button below. Prices and
        availability may change.
      </p>
    </>
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
