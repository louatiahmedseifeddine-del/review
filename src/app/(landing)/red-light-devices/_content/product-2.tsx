import type { Product } from "../../_components/product-section";
import type { Scores } from "../../_components/score-bars";

const scores: Scores = {
  Effectiveness: 9.2,
  "Ease of Use": 9.4,
  "Quality & Design": 9.6,
  "Safety & Certifications": 9.3,
  "Value for Money": 8.8,
  "Customer Satisfaction": 9.5,
};

const specifications: [string, string][] = [
  ["Configuration:", "3 wearable modules"],
  ["LEDs:", "24 total"],
  ["Laser diodes:", "30 total, described as Class 1"],
  ["Wavelengths:", "660 nm red LEDs + 808 nm near-infrared lasers"],
  ["Optical output per module:", "160 mW LEDs + 50 mW lasers"],
  ["Irradiance:", "Not specified as a comparable mW/cm² reading"],
  ["Dimensions per module:", "5.9 × 3.7 × 3.7 cm"],
  ["Weight:", "Not specified"],
  ["Recommended sessions:", "5–15 minutes, 1–2 times daily"],
  ["Power:", "Rechargeable"],
  ["Included warranty:", "One year"],
];

export const productTwo: Product = {
  number: 2,
  name: "Kineon MOVE+",
  sponsoredLabel: null,
  tagline:
    "“Targeted red light and near-infrared laser technology in a cordless, wearable design.”",
  // Slot reserved for the Kineon assets. The previous product's rating,
  // review count, and test result are deliberately not carried over.
  evaluation: {
    kind: "pending",
    label: "KINEON MOVE+ IMAGE + RATING GRAPHIC",
  },
  availabilityTop: { kind: "text", text: <strong>Available on Amazon</strong> },

  whyWeLoveIt: (
    <>
      <p>
        The <strong>Kineon MOVE+</strong> takes a{" "}
        <strong>targeted approach to recovery</strong>, with three wearable
        modules designed to position light around a specific joint or muscle
        area. For those focused on{" "}
        <strong>one knee, shoulder, elbow, or other problem area</strong>, its
        adjustable strap offers a convenient way to keep the device in place{" "}
        <strong>without holding it throughout the session</strong>.
      </p>
      <p>
        Its combination of{" "}
        <strong>660 nm red LEDs and 808 nm near-infrared lasers</strong> sets it
        apart from standard LED-only devices. Kineon markets this light-based
        approach for <strong>joint comfort and recovery</strong>, bringing two
        types of light emitters together in a compact, skin-contact design.
      </p>
      <p>
        Each module contains{" "}
        <strong>8 red LEDs and 10 near-infrared laser diodes</strong>, giving
        the complete three-module system{" "}
        <strong>24 LEDs and 30 laser diodes</strong>. The arrangement focuses
        exposure around the selected area, making{" "}
        <strong>precise placement</strong> its main practical advantage.
      </p>
      <p>
        The <strong>rechargeable, cordless design</strong> and recommended{" "}
        <strong>5–15-minute sessions</strong> make it easy to fit targeted use
        into a daily routine. A{" "}
        <strong>
          charging case, travel case, adjustable strap, and charging cable
        </strong>{" "}
        are included, supporting both home use and portability.
      </p>
      <p>
        However, <strong>focused coverage is also its main limitation</strong>.
        Unlike a mat that exposes a broader region at once, MOVE+ requires{" "}
        <strong>repositioning between separate body areas</strong>—an important
        consideration if your shoulders, back, and hips all need attention.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>
        Best suited for users who want a focused, wearable recovery device
      </strong>{" "}
      for a small particular joint or muscle area and value{" "}
      <strong>cordless convenience</strong>. Less ideal for those seeking{" "}
      <strong>broader coverage in a single resting session</strong> or a
      lower-cost introduction to at-home red light therapy.
    </p>
  ),

  priceCheck: (
    <>
      <p>
        <strong>As of our last check on October 7th, 2026</strong>, the{" "}
        <strong>Kineon MOVE+</strong> was displayed at{" "}
        <strong>$399, reduced from $699</strong>, with an advertised{" "}
        <strong>$300 saving</strong>.
      </p>
      <p>
        Its{" "}
        <strong>
          LED-and-laser technology, rechargeable modules, and included travel
          accessories
        </strong>{" "}
        offer a distinct package for targeted use. However, at a higher price
        than ApolloThera, its value depends on whether{" "}
        <strong>localized, wearable sessions</strong> are your main priority.
      </p>
      <p>
        The product page advertis<strong>-year warranty</strong> and{" "}
        <strong>30-day satisfaction guarantee</strong>, subject to usage and
        return conditions. Shipping costs are excluded from refunds, and
        customers generally cover return shipping for unwanted items.
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
  scores,

  pros: [
    <>
      <strong>Targeted LED-and-laser system:</strong> combines 660 nm red LEDs
      and 808 nm near-infrared lasers around a selected area.
    </>,
    <>
      <strong>Hands-free placement:</strong> adjustable strap keeps the modules
      positioned during use.
    </>,
    <>
      <strong>Cordless convenience:</strong> rechargeable modules remove the
      need for a wall connection during sessions.
    </>,
    <>
      <strong>Short sessions:</strong> recommended 5–15-minute use fits into a
      daily routine.
    </>,
    <>
      <strong>Travel accessories included:</strong> charging case and travel
      case support portable use.
    </>,
  ],

  cons: [
    <>
      <strong>Limited simultaneous coverage:</strong> separate body areas
      require repositioning.
    </>,
    <>
      <strong>Higher upfront cost:</strong> the checked $399 price is higher
      than ApolloThera’s.
    </>,
    <>
      <strong>Fit may require an extra accessory:</strong> the extender strap is
      sold separately.
    </>,
  ],

  conclusion: (
    <>
      <p>
        The <strong>Kineon MOVE+</strong> stands out for its{" "}
        <strong>
          targeted LED-and-laser technology, wearable placement, and cordless
          design
        </strong>
        . It’s a compelling option for buyers who want to focus their routine
        on <strong>a specific joint or muscle area</strong> without holding a
        device in place.
      </p>
      <p>
        For those seeking{" "}
        <strong>broader neck-to-hip coverage while resting</strong>, the{" "}
        <strong>ApolloThera Recovery Mat remains our top pick</strong>,
        combining a flexible format with a lower checked price and its included
        recovery bundle. Kineon is the more specialized alternative for users
        who place <strong>localized, wearable convenience first</strong>.
      </p>
    </>
  ),

  availabilityFinal: { kind: "none" },
};
