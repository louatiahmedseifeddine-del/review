import type { FaqEntry } from "../../_components/faq";

/** BLOCK H — FAQ. */
export const faqHeading = "Common Questions About Red Light Therapy Devices";

export const faqEntries: FaqEntry[] = [
  {
    question: "How do they work?",
    answer: (
      <>
        <p>
          Red light therapy devices deliver{" "}
          <strong>red and/or near-infrared light</strong> to the treatment
          area, using LEDs or, in some devices, low-level lasers. This process
          is called <strong>photobiomodulation</strong> and is studied for its
          effects on cellular activity, pain, and recovery.
        </p>
        <p>
          <strong>
            Wavelength, light output, treatment time, and positioning all
            matter.
          </strong>{" "}
          Devices with similar-looking lights can deliver different doses, so
          LED count alone does not tell you how effective a device will be.
        </p>
        <p>
          Some devices also include <strong>heat or vibration</strong>. These
          are separate functions: feeling warmth does not tell you how much
          therapeutic light your skin is receiving.
        </p>
      </>
    ),
  },
  {
    question: "What should I wear during a session?",
    answer: (
      <>
        <p>
          For the light treatment,{" "}
          <strong>expose the area you want to treat</strong>, following the
          manufacturer’s instructions.{" "}
          <strong>
            Thick clothing can block or substantially reduce the light reaching
            your skin.
          </strong>{" "}
          Thinner fabrics may also reduce exposure, so{" "}
          <strong>bare skin is generally recommended</strong>.
        </p>
        <p>
          Positioning depends on the device: a panel may require a specified
          distance, while a wrap or mat may be designed for close contact.{" "}
          <strong>
            Do not assume that moving closer delivers better results.
          </strong>
        </p>
        <p>
          Some heating devices allow use over clothing, but their light mode
          may still require bare skin. Check the instructions for the
          particular mode you are using.
        </p>
      </>
    ),
  },
  {
    question: "How often can I use it?",
    answer: (
      <>
        <p>
          Follow your device’s recommended{" "}
          <strong>session length, frequency, and treatment distance</strong>.
          There is no single schedule that applies to every mat, panel,
          handheld device, or wrap.
        </p>
        <p>
          Check whether the suggested session time applies{" "}
          <strong>to each treatment area or to the whole session</strong>. A
          smaller device may need repositioning to cover several areas, and
          some models require a cooling period before another session.
        </p>
        <p>
          A mat with sufficient coverage can expose{" "}
          <strong>several adjacent areas during one hands-free session</strong>
          , making regular use easier to fit into your routine. Stay within the
          recommended schedule—longer or more frequent sessions do not
          automatically produce better results.
        </p>
      </>
    ),
  },
  {
    question: "Are red light therapy devices safe?",
    answer: (
      <>
        <p>
          Red light therapy appears generally well tolerated in the short term,
          but{" "}
          <strong>
            safe use depends on the device and following its instructions
          </strong>
          . Temporary irritation or discomfort can occur.
        </p>
        <p>
          Follow the manufacturer’s eye-protection guidance and{" "}
          <strong>
            do not stare directly into the LEDs or laser emitters
          </strong>
          . Near-infrared light is invisible, so the absence of visible
          brightness does not mean the device is inactive.
        </p>
        <p>
          If you have a condition that increases light sensitivity or take
          medication that causes photosensitivity, check with a healthcare
          professional before use. For devices with heating functions, follow
          the temperature limits and stop if the treatment becomes
          uncomfortable.
        </p>
      </>
    ),
  },
  {
    question: "Can red light therapy help with recovery or pain?",
    answer: (
      <>
        <p>
          Research supports potential benefits for{" "}
          <strong>some pain conditions and recovery outcomes</strong>, but
          results depend on the condition, device, and treatment protocol.
          Studies use different wavelengths, doses, and schedules, and their
          findings do not prove that every home device performs equally well.
        </p>
        <p>
          It can be considered as part of a recovery or pain-management
          routine.{" "}
          <strong>
            Persistent, worsening, or unexplained pain still needs medical
            assessment.
          </strong>
        </p>
        <p>
          For practical use, choose coverage that matches your needs. A small
          device concentrates light on a selected area; a suitably sized mat
          can cover several adjacent areas while you rest comfortably.
        </p>
      </>
    ),
  },
  {
    question: "Can I use it on my face?",
    answer: (
      <>
        <p>
          <strong>Only if the manufacturer explicitly allows facial use.</strong>{" "}
          A device designed for the back, joints, or other body areas should
          not automatically be used on the face.
        </p>
        <p>
          If facial use is permitted, follow the specified distance, sime, and
          eye-protection instructions. Do not substitute ordinary sunglasses
          for the protective eyewear recommended by the manufacturer.
        </p>
      </>
    ),
  },
  {
    question: "When will I see results?",
    answer: (
      <>
        <p>
          <strong>There is no guaranteed timeline.</strong> The treatment goal,
          device, dose, and consistency of use all affect the outcome, and some
          people may not notice a benefit.
        </p>
        <p>
          Warmth or relaxation during a session should not be confused with a
          lasting improvement in pain or recovery. Assess changes across the
          recommended treatment period rather than judging the light therapy
          after one session.
        </p>
        <p>
          For a routine you can maintain, look for{" "}
          <strong>
            hands-free use, a comfortable position, manageable weight, coverage
            for several adjacent areas, and easy storage
          </strong>
          . A mat that combines these features can make regular sessions more
          convenient.
        </p>
      </>
    ),
  },
];
