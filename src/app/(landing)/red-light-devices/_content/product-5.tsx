import type { Product } from "../../_components/product-section";
import type { Scores } from "../../_components/score-bars";

const scores: Scores = {
  Effectiveness: 8.8,
  "Ease of Use": 8.6,
  "Quality & Design": 8.7,
  "Safety & Certifications": 8.5,
  "Value for Money": 8.3,
  "Customer Satisfaction": 8.8,
};

export const productFive: Product = {
  number: 5,
  name: "Therabody ThermBack LED",
  sponsoredLabel: null,
  tagline:
    "“High-coverage full-body red and near-infrared therapy with an exceptionally high LED count.”",
  // Supplied as a finished summary image — displayed as-is, not recreated.
  evaluation: {
    kind: "image",
    src: "/megelin-evaluation.png",
    alt: "Megelin Red and Infrared Light Therapy Mat. Test Result: B. Rating: 8.2/10. (2971 Reviews)",
  },
  availabilityTop: { kind: "text", text: <strong>Available on Amazon</strong> },

  whyWeLoveIt: (
    <>
      <p>
        This <strong> Red and Infrared Light Therapy Mat</strong> takes a much
        more <strong>full-body approach</strong> than smaller targeted
        red-light devices. The mat combines <strong>3,840 LEDs</strong> across
        two widely used wavelengths —{" "}
        <strong>660nm red light and 850nm near-infrared light</strong> — while
        delivering a stated irradiance of{" "}
        <strong>120 mW/cm² at 0 inches</strong>.
      </p>
      <p>
        Its large <strong>71 × 32-inch surface</strong> is designed to provide
        broad, uniform coverage while lying down, making it better suited to
        users who want to treat{" "}
        <strong>multiple areas during the same session</strong> rather than
        repositioning a small panel or wrap repeatedly. they also lists an
        estimated LED lifespan of <strong>80,000 hours</strong> and includes a{" "}
        <strong>1-year warranty</strong>.
      </p>
      <p>
        At approximately <strong>10 lb</strong>, however, this is considerably
        larger and heavier than compact red-light pads. Its strength is
        therefore less about portability and more about delivering a{" "}
        <strong>
          high LED count and broad treatment surface in one device
        </strong>
        .
      </p>
    </>
  ),

  whoItsFor: (
    <>
      <p>
        <strong>
          Best suited for users who want large-area or full-body red and
          near-infrared light coverage at home
        </strong>{" "}
        without investing in a rigid therapy bed or repeatedly repositioning a
        smaller panel.
      </p>
      <p>
        It may be particularly attractive to users prioritising{" "}
        <strong>
          coverage, LED density, and relatively strong stated irradiance
        </strong>{" "}
        over portability.
      </p>
    </>
  ),

  priceCheck: (
    <>
      <p>
        As of our latest check on <strong>October 1st, 2026</strong>, this
        <strong>
          {" "}
          Red and Infrared Light Therapy Mat is listed at $739
        </strong>
        , reduced from a displayed reference price of{" "}
        <strong>$1,849</strong>. The product page currently shows{" "}
        <strong>
          54 customer reviews with an average rating of 4.72/5
        </strong>
        .
      </p>
      <p>
        That places it well above entry-level red-light mats in price, although
        its{" "}
        <strong>
          3,840 LEDs, 120 mW/cm² output, and full-body dimensions
        </strong>{" "}
        provide considerably more hardware.
      </p>
    </>
  ),

  specifications: (
    <>
      <strong>LEDs:</strong> 3,840 total — 1,280 × 660nm + 2,560 × 850nm |{" "}
      <strong>Irradiance Power:</strong> 120 mW/cm² @ 0&quot; |{" "}
      <strong>Adjustable Brightness Modes:</strong> Not specified |{" "}
      <strong>Wavelengths:</strong> 660nm + 850nm | <strong>Dimensions:</strong>{" "}
      71 × 32 in / approx. 180 × 81 cm | <strong>Weight:</strong> 10 lb /
      approx. 4.5 kg | <strong>Safety Certified:</strong> FDA-Registered
      according to Megelin | <strong>EMF Rating:</strong> Not specified |{" "}
      <strong>Free Warranty:</strong> 1 Year |{" "}
      <strong>Estimated LED Lifespan:</strong> 80,000 hours
    </>
  ),

  availabilityMid: { kind: "none" },
  scores,

  pros: [
    <>
      <strong>Very high LED count:</strong> 3,840 LEDs provide significantly
      more light sources than many standard therapy mats.
    </>,
    <>
      <strong>Full-body coverage:</strong> Large 71 × 32-inch surface can cover
      most of the body during a single lying-down session.
    </>,
    <>
      <strong>Strong stated irradiance:</strong> Rated at 120 mW/cm² at direct
      contact.
    </>,
    <>
      <strong>Dual wavelengths:</strong> Combines 660nm red light with
      deeper-reaching 850nm near-infrared light.
    </>,
    <>
      <strong>Long LED lifespan:</strong> Megelin specifies an estimated
      lifespan of approximately 80,000 hours.
    </>,
    <>
      <strong>FDA-Registered:</strong> Megelin identifies the device as
      FDA-registered on its product page.
    </>,
  ],

  cons: [
    <>
      <strong>Premium price:</strong> At $739, it costs considerably more than
      smaller red-light pads and entry-level mats.
    </>,
    <>
      <strong>Less portable:</strong> At approximately 10 lb and 71 inches
      long, it is not especially convenient for frequent travel.
    </>,
    <>
      <strong>Only two wavelengths:</strong> Uses the standard 660nm + 850nm
      combination rather than the broader multi-wavelength systems found on
      some premium competitors.
    </>,
    <>
      <strong>Limited published control specifications:</strong> Megelin does
      not clearly specify brightness levels or pulse-frequency modes in the
      technical specifications shown on the product page.
    </>,
    <>
      <strong>Only a 1-year warranty:</strong> Relatively short compared with
      competitors offering multi-year warranties.
    </>,
  ],

  conclusion: (
    <p>
      The <strong> Megelin Red Light Therapy Mat</strong> is a smart, expensive
      choice for users who want{" "}
      <strong>targeted neck and shoulder relief</strong> in a{" "}
      <strong>portable, easy-to-use format</strong>. Its ergonomic cervical
      support, pulse modes, and lightweight design make it easy for daily
      stress relief and desk-related tension.
    </p>
  ),

  availabilityFinal: { kind: "none" },
};
