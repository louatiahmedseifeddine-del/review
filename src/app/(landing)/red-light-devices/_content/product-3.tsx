import type { Product } from "../../_components/product-section";
import { EMPTY_SCORES } from "../../_components/score-bars";

const specifications: [string, string][] = [
  ["Model:", "Single Solo 3.0 panel"],
  ["LEDs:", "150 — 76 red + 74 near-infrared"],
  ["Wavelengths:", "660 nm + 850 nm"],
  ["Light modes:", "Red, near-infrared, or both"],
  ["Light output:", "Up to 88 W"],
  [
    "Irradiance:",
    "Above 100 mW/cm²; measurement distance not specified",
  ],
  ["Dimensions:", "91.44 × 22.23 × 5.94 cm"],
  ["Weight:", "Approximately 6.35 kg"],
  ["Timer:", "1–20 minutes"],
  ["Standard session guidance:", "10 minutes at 16–24 inches"],
  ["Power:", "Mains-powered"],
  ["Included warranty:", "Two years limited"],
];

export const productThree: Product = {
  number: 3,
  name: "Joovv Solo 3.0",
  sponsoredLabel: null,
  tagline:
    "“An expandable red and near-infrared light panel for a dedicated home recovery setup.”",
  // Slot reserved for the Joovv assets. The previous product's rating,
  // review count, and test result are deliberately not carried over.
  evaluation: {
    kind: "pending",
    label: "JOOVV SOLO 3.0 IMAGE + RATING GRAPHIC",
  },
  availabilityTop: { kind: "text", text: <strong>Available On Amazon</strong> },

  whyWeLoveIt: (
    <>
      <p>
        The <strong>Joovv Solo 3.0</strong> stands out with its{" "}
        <strong>modular panel design</strong>, offering a dedicated home setup
        that can expand as your needs change. Unlike a wearable device focused
        on one joint, its upright format exposes a larger region from a
        distance, with compatible{" "}
        <strong>stand, door, or wall-mounting options</strong> for hands-free
        sessions.
      </p>
      <p>
        The panel combines{" "}
        <strong>660 nm red light and 850 nm near-infrared light</strong>{" "}
        through <strong>150 LEDs</strong>, with the option to use{" "}
        <strong>red, near-infrared, or both together</strong>. Joovv describes
        its intended use as{" "}
        <strong>
          topical heating for temporary relief of minor muscle and joint
          discomfort and support for local circulation
        </strong>
        .
      </p>
      <p>
        Its published specifications list{" "}
        <strong>up to 88 W of light output</strong> and{" "}
        <strong>irradiance above 100 mW/cm²</strong>, although the measurement
        distance is not specified in that specification block. These figures
        describe its output, rather than establishing better recovery results
        than the other devices reviewed.
      </p>
      <p>
        At <strong>91.44 × 22.23 × 5.94 cm</strong> and approximately{" "}
        <strong>6.35 kg</strong>, Solo 3.0 is a substantial panel designed for
        a dedicated position in your home. Standard guidance recommends{" "}
        <strong>10-minute sessions at 16–24 inches</strong>, while the{" "}
        <strong>adjustable timer ale light modes</strong> give users control
        over their routine.
      </p>
      <p>
        However,{" "}
        <strong>the dedicated setup is also its main trade-off</strong>.
        Appropriate mounting, positioning space, and its rigid construction
        make it less convenient to move and store than a flexible mat. Its
        expandability is appealing, but additional panels and mounting choices
        can increase the overall investment.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>
        Best suited for wellness enthusiasts who want a dedicated, expandable
        light-panel system
      </strong>{" "}
      and have the space and budget for it. Less ideal for those seeking{" "}
      <strong>
        a flexible device they can use while resting, roll away after a
        session, or purchase at a lower upfront cost
      </strong>
      .
    </p>
  ),

  priceCheck: (
    <>
      <p>
        <strong>As of our last check on October 7th, 2026</strong>, the{" "}
        <strong>Joovv Solo 3.0</strong> was displayed at{" "}
        <strong>$1,699</strong>, making it the{" "}
        <strong>highest-priced device in this comparison</strong>. The selected
        mounting configuration may affect the final package and price.
      </p>
      <p>
        Its{" "}
        <strong>
          modular construction, selectable wavelengths, and expansion options
        </strong>{" "}
        offer value for buyers committed to a dedicated panel system. However,
        the premium price is harder to justify if your priority is simply{" "}
        <strong>
          a straightforward recovery routine from the comfort of your bed or
          sofa
        </strong>
        .
      </p>
      <p>
        Joovv publishes a <strong>two-year limited warranty</strong> and{" "}
        <strong>60-day return period</strong>, subject to authorization,
        like-new condition, and original packaging requirements. Customers are
        responsible for return shipping.
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
      <strong>Expandable system:</strong> additional panels can increase the
      size of your setup.
    </>,
    <>
      <strong>Selectable wavelengths:</strong> use red light, near-infrared
      light, or both together.
    </>,
    <>
      <strong>Hands-free positioning:</strong> compatible mounting options
      support a dedicated session setup.
    </>,
    <>
      <strong>Adjustable timer:</strong> built-in controls help manage session
      duration.
    </>,
    <>
      <strong>Two-year limited warranty:</strong> longer included warranty
      coverage than the other devices in this comparison.
    </>,
  ],

  cons: [
    <>
      <strong>Premium price:</strong> the checked $1,699 price represents a
      substantial upfront investment.
    </>,
    <>
      <strong>Requires positioning space:</strong> suitable mounting and
      distance from the panel need to be considered.
    </>,
    <>
      <strong>Less portable:</strong> its rigid construction and approximately
      6.35 kg weight make frequent moving and storage less convenient.
    </>,
    <>
      <strong>Expansion adds cost:</strong> additional panels and mounting
      configurations can increase the total investment.
    </>,
  ],

  conclusion: (
    <>
      <p>
        The <strong>Joovv Solo 3.0</strong> is a compelling option for buyers
        who want{" "}
        <strong>
          a dedicated, expandable red and near-infrared light system
        </strong>
        . Its selectable wavelengths, timer controls, and mounting options suit
        users ready to make a panel setup part of their home.
      </p>
      <p>
        For those seeking{" "}
        <strong>
          a simpler resting routine without the same cost or installation
          requirements
        </strong>
        , the{" "}
        <strong>ApolloThera Recovery Mat remains our top pick</strong>. Joovv’s
        main appeal is its expandable panel format; ApolloThera brings together{" "}
        <strong>
          flexible positioning, a lower checked price, and its included
          recovery bundle
        </strong>
        .
      </p>
    </>
  ),

  availabilityFinal: { kind: "none" },
};
