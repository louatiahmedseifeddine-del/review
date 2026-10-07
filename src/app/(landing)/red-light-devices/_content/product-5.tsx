import type { Product } from "../../_components/product-section";
import { EMPTY_SCORES } from "../../_components/score-bars";

const specifications: [string, string][] = [
  [
    "Technologies:",
    "Near-infrared LEDs, heat with far-infrared energy, and vibration",
  ],
  ["Coverage:", "Lower back"],
  ["LED count:", "Not specified"],
  ["Near-infrared wavelength:", "Not specified"],
  ["Irradiance:", "Not specified"],
  ["Heat settings:", "39°C, 42°C, 45°C"],
  ["Vibration patterns:", "Low, High, Wave"],
  [
    "Session duration:",
    "10 minutes for near-infrared; 20 minutes for heat and vibration",
  ],
  ["Power:", "Rechargeable"],
  ["Battery life:", "Up to 180 minutes advertised"],
  ["Dimensions:", "Not specified"],
  ["Weight:", "Not specified"],
  [
    "Included accessories:",
    "Travel pouch and USB-C cable; power adapter excluded",
  ],
  ["Included warranty:", "One year limited"],
];

export const productFive: Product = {
  number: 5,
  name: "Therabody ThermBack LED",
  sponsoredLabel: null,
  tagline:
    "“Near-infrared light, heat, and vibration in a wearable wrap for lower-back comfort.”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/therabody-evaluation.png",
    alt: "Therabody ThermBack LED. Test Result: B. Rating: 8.2/10. (1023 Reviews)",
  },
  availabilityTop: { kind: "text", text: <strong>Available On Amazon</strong> },

  whyWeLoveIt: (
    <>
      <p>
        The <strong>Therabody ThermBack LED</strong> takes a{" "}
        <strong>combined approach to lower-back comfort</strong>, bringing
        together <strong>near-infrared light, heat, and vibration</strong> in an
        adjustable wearable wrap. For users who want{" "}
        <strong>warmth and a massage sensation alongside light exposure</strong>
        , it offers several functions in one cordless device.
      </p>
      <p>
        Its design combines{" "}
        <strong>near-infrared LEDs positioned along the spine</strong>,{" "}
        <strong>carbon-fiber heating with far-infrared energy</strong>, and{" "}
        <strong>vibration across the lower-back muscles</strong>. These
        technologies provide different inputs: light exposure, warmth, and
        mechanical stimulation, with the device intended to support{" "}
        <strong>temporary comfort and local circulation</strong>.
      </p>
      <p>
        Users can choose from{" "}
        <strong>
          three heat settings—39°C, 42°C, and 45°C—and three vibration
          patterns: Low, High, and Wave
        </strong>
        . The manual specifies{" "}
        <strong>10-minute near-infrared sessions</strong> and{" "}
        <strong>20-minute heat and vibration sessions</strong>, allowing users
        to select the functions that suit their routine.
      </p>
      <p>
        The <strong>rechargeable design</strong>, advertised{" "}
        <strong>battery life of up to 180 minutes</strong>, and adjustable fit
        support use while seated or upright. Device controls and app
        customization offer flexibility, while an included{" "}
        <strong>travel pouch and USB-C charging cable</strong> make storage and
        transport straightforward.
      </p>
      <p>
        However,{" "}
        <strong>its focus on the lower back also limits its coverage</strong>.
        It does not expose the neck, shoulders, back, and hips together, and
        the exact{" "}
        <strong>near-infrared wavelength, LED count, and irradiance</strong>{" "}
        were not specified in the reviewed material—making direct light-output
        comparisons difficult.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>
        Best suited for users whose main priority is lower-back comfort
      </strong>{" "}
      and who want{" "}
      <strong>
        heat, vibration, and near-infrared light in a wearable device
      </strong>
      . Less ideal for those seeking{" "}
      <strong>broader light exposure across several body areas</strong> or a
      device focused specifically on red and near-infrared light therapy.
    </p>
  ),

  priceCheck: (
    <>
      <p>
        <strong>As of our last check on October 7th, 2026</strong>, the{" "}
        <strong>Therabody ThermBack LED</strong> was displayed at{" "}
        <strong>$263.99, reduced from $329.99</strong>.
      </p>
      <p>
        Its{" "}
        <strong>
          combined technologies, adjustable settings, and cordless format
        </strong>{" "}
        offer value for buyers who specifically want lower-back warmth and
        vibration alongside near-infraver, the higher checked price than
        ApolloThera buys a different set of functions, rather than broader
        light coverage.
      </p>
      <p>
        Therabody publishes a <strong>one-year limited warranty</strong> and{" "}
        <strong>30-day return period</strong>, with standard return shipping
        covered for eligible direct purchases. Authorization, like-new
        condition, original packaging, and included accessories are required.
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

  availabilityMid: { kind: "none" },
  // Reserved: scores are supplied separately, not carried over.
  scores: EMPTY_SCORES,

  pros: [
    <>
      <strong>Combined recovery functions:</strong> brings together
      near-infrared light, heat, and vibration.
    </>,
    <>
      <strong>Wearable lower-back design:</strong> adjustable wrap supports
      focused use without holding the device.
    </>,
    <>
      <strong>Customizable comfort:</strong> three heat settings and three
      vibration patterns.
    </>,
    <>
      <strong>Cordless convenience:</strong> rechargeable operation supports
      seated or upright use.
    </>,
    <>
      <strong>Travel pouch included:</strong> convenient for storage and
      transport.
    </>,
  ],

  cons: [
    <>
      <strong>Limited body coverage:</strong> designed for the lower back
      rather than neck-to-hip light exposure.
    </>,
    <>
      <strong>Incomplete light specifications:</strong> exact wavelength, LED
      count, and irradiance were not specified in the reviewed material.
    </>,
    <>
      <strong>Power adapter not included:</strong> a suitable adapter may
      require a separate purchase.
    </>,
    <>
      <strong>Higher checked price than ApolloThera:</strong> best justified
      when heat and vibration are important purchasing priorities.
    </>,
  ],

  conclusion: (
    <>
      <p>
        The <strong>Therabody ThermBack LED</strong> stands out for its{" "}
        <strong>
          combination of near-infrared light, adjustable heat, and vibration
        </strong>
        . It’s a practical option for buyers who want{" "}
        <strong>
          focused lower-back comfort in a cordless, wearable format
        </strong>
        .
      </p>
      <p>
        For those seeking{" "}
        <strong>broader neck-to-hip light coverage while resting</strong>, the{" "}
        <strong>ApolloThera Recovery Mat remains our top pick</strong>,
        combining a flexible design, a lower checked price, and its included
        recovery bundle. ThermBack is the more specialized alternative for
        users who prioritize{" "}
        <strong>
          lower-back warmth and vibration alongside light exposure
        </strong>
        .
      </p>
    </>
  ),

  availabilityFinal: { kind: "none" },
};
