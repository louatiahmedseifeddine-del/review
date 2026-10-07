import type { Product } from "../../_components/product-section";
import { EMPTY_SCORES } from "../../_components/score-bars";

const specifications: [string, string][] = [
  ["LEDs:", "12 multi-die packages; individual chip count not specified"],
  ["Wavelengths:", "660 nm + 850 nm"],
  ["Light output:", "Up to 5 W"],
  [
    "Irradiance:",
    "Above 100 mW/cm²; measurement distance not specified",
  ],
  ["Dimensions:", "14.61 × 9.53 × 3.73 cm"],
  ["Weight:", "Approximately 0.6 kg"],
  ["Standard session guidance:", "10 minutes at 6–12 inches"],
  ["Cooldown:", "10 minutes after a 10-minute session"],
  ["Power:", "Rechargeable battery or adapter"],
  ["Battery runtime:", "Up to two hours, depending on mode"],
  ["Included warranty:", "One year limited"],
];

export const productFour: Product = {
  number: 4,
  name: "Joovv Go 2.0",
  sponsoredLabel: null,
  tagline:
    "“Compact, cordless red and near-infrared light for targeted recovery sessions at home or away.”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/joovv-go-evaluation.png",
    alt: "Joovv Go 2.0. Test Result: B. Rating: 8.2/10. (1916 Reviews)",
  },
  availabilityTop: { kind: "text", text: <strong>Available On Amazon</strong> },

  whyWeLoveIt: (
    <>
      <p>
        The <strong>Joovv Go 2.0</strong> takes a{" "}
        <strong>compact, portable approach to recovery</strong>, bringing red
        and near-infrared light into a rechargeable handheld device. For users
        who want to focus on{" "}
        <strong>a small area at home or while travelling</strong>, its cordless
        design and included travel case make it convenient to carry and store.
      </p>
      <p>
        It combines{" "}
        <strong>660 nm red light and 850 nm near-infrared light</strong>, the
        same wavelength pair used in Joovv’s larger Solo panel. The difference
        is the format: Go directs light toward{" "}
        <strong>one selected area at a time</strong>, making portability its
        main advantage over a larger home setup.
      </p>
      <p>
        Its published specifications list{" "}
        <strong>12 multi-die LED packages</strong>,{" "}
        <strong>up to 5 W of light output</strong>, and{" "}
        <strong>irradiance above 100 mW/cm²</strong>, although the measurement
        distance is not specified in that specification block. At
        approximately <strong>14.61 × 9.53 × 3.73 cm</strong> and{" "}
        <strong>0.6 kg</strong>, it offers a compact alternative to a rigid
        panel.
      </p>
      <p>
        The <strong>silicone grip and quiet, fanless design</strong> support
        handheld use, with standard guidance recommending{" "}
        <strong>10-minute sessions at 6–12 inches</strong>. The Joovv app
        allows mode changes and session customization, while an{" "}
        <strong>optional charging dock</strong> can support hands-ing for
        suitable areas.
      </p>
      <p>
        However,{" "}
        <strong>
          small-area coverage and cooldown time are important trade-offs
        </strong>
        . A{" "}
        <strong>10-minute cooldown follows each 10-minute session</strong>, so
        moving between shoulders, back, and hips can make a broader routine
        more time-consuming than using a mat across adjacent areas at once.
      </p>
    </>
  ),

  whoItsFor: (
    <p>
      <strong>
        Best suited for users who value portability, compact storage, and
        targeted sessions
      </strong>{" "}
      and are comfortable holding or positioning a device near the intended
      area. Less ideal for those seeking{" "}
      <strong>broader coverage in one resting session</strong> or a routine
      that does not require repeated positioning.
    </p>
  ),

  priceCheck: (
    <>
      <p>
        <strong>As of our last check on October 7th, 2026</strong>, the{" "}
        <strong>Joovv Go 2.0</strong> was displayed at <strong>$549</strong>.
        The optional charging dock is a separate accessory and may increase the
        total purchase price.
      </p>
      <p>
        Its{" "}
        <strong>
          rechargeable operation, compact construction, and travel accessories
        </strong>{" "}
        offer value for buyers who prioritize portability. However, its higher
        price than ApolloThera and smaller treatment format make it a more
        specialized choice for{" "}
        <strong>localized use rather than broader at-home coverage</strong>.
      </p>
      <p>
        Joovv publishes a <strong>one-year limited warranty</strong> and{" "}
        <strong>30-day return period</strong>. Opened or used returns incur a{" "}
        <strong>$50 restocking fee</strong>, with authorization, original
        packaging, condition requirements, and customer-paid return shipping
        also applying.
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
      <strong>Compact and portable:</strong> convenient for targeted use at
      home or while travelling.
    </>,
    <>
      <strong>Cordless operation:</strong> rechargeable battery supports
      sessions without a wall connection.
    </>,
    <>
      <strong>Dual wavelengths:</strong> combines 660 nm red and 850 nm
      near-infrared light.
    </>,
    <>
      <strong>Quiet design:</strong> fanless operation suits a relaxed home
      routine.
    </>,
    <>
      <strong>Travel accessories included:</strong> supplied with a travel
      case, power adapter, and protective eyewear.
    </>,
  ],

  cons: [
    <>
      <strong>Small-area coverage:</strong> separate body regions require
      additional positioning and sessions.
    </>,
    <>
      <strong>Cooldown between sessions:</strong> a 10-minute pause after each
      10-minute session adds time to multi-area use.
    </>,
    <>
      <strong>App-dependent customization:</strong> changing modes and
      customizing sessions requires the Joovv app.
    </>,
    <>
      <strong>Higher price for a compact device:</strong> a $549 list price is
      expensive for a device that treats one area at a time.
    </>,
    <>
      <strong>Opened-return fee:</strong> used or opened returns incur a $50
      restocking charge under the published policy.
    </>,
  ],

  conclusion: (
    <>
      <p>
        The <strong>Joovv Go 2.0</strong> stands out for its{" "}
        <strong>compact size, rechargeable operation, and quiet design</strong>
        . It’s a practical option for buyers who want{" "}
        <strong>
          portable red and near-infrared light for a selected area
        </strong>
        , particularly when travelling or working with limited storage space.
      </p>
      <p>
        For those seeking{" "}
        <strong>broader neck-to-hip coverage while resting</strong>, the{" "}
        <strong>ApolloThera Recovery Mat remains our top pick</strong>. Its
        flexible format avoids the same handheld positioning and
        between-session cooldown requirements, while its lower checked price
        and included recovery bundle offer a more accessible package for home
        use.
      </p>
    </>
  ),

  availabilityFinal: { kind: "none" },
};
