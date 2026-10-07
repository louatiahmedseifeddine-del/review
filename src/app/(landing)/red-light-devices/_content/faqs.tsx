import type { FaqEntry } from "../../_components/faq";

/** BLOCK H — FAQ. */
export const faqHeading = "Common Questions About Red Light Mats";

export const faqEntries: FaqEntry[] = [
  {
    question: "How do they work?",
    answer: (
      <p>
        Red light mats use LEDs to deliver{" "}
        <strong>red and near-infrared light</strong> to the exposed area.
        Different models offer different wavelengths, coverage, output levels,
        and controls. Follow the device’s instructions for positioning and
        session length.
      </p>
    ),
  },
  {
    question: "What should I wear during a session?",
    answer: (
      <p>
        Expose the intended area as directed in the product manual, since{" "}
        <strong>clothing can block some of the light</strong>. Choose a
        comfortable position that allows the mat to remain correctly placed
        throughout the session.
      </p>
    ),
  },
  {
    question: "How often can I use it?",
    answer: (
      <p>
        Follow the{" "}
        <strong>
          usage frequency and session duration recommended for your specific
          mat
        </strong>
        . Use any included protocol for additional guidance on building a
        consistent routine.
      </p>
    ),
  },
  {
    question: "Are red light mats safe?",
    answer: (
      <p>
        Check the device’s instructions, precautions, and testing documentation
        before use. If you have a medical condition, light sensitivity, or
        questions about suitability, ask a healthcare professional before
        starting.
      </p>
    ),
  },
  {
    question: "Can red light therapy help with recovery or pain?",
    answer: (
      <p>
        Results depend on the condition, device, and treatment settings.{" "}
        <strong>
          A mat’s specifications alone do not establish how well it will work
          for a particular person.
        </strong>{" "}
        For persistent pain or an injury, seek professional guidance about
        suitable treatment options.
      </p>
    ),
  },
  {
    question: "Can I use it on my face?",
    answer: (
      <p>
        Only use a mat on the face if the manufacturer explicitly permits it.
        Follow the device’s{" "}
        <strong>eye-protection and positioning instructions</strong>.
        Instructions for use on the body should not be treated as instructions
        for facial use.
      </p>
    ),
  },
  {
    question: "When will I see results?",
    answer: (
      <p>
        There is <strong>no guaranteed timeline</strong>. Individual
        experiences vary depending on the intended use and routine. Follow the
        recommended protocol and assess your experience over time.
      </p>
    ),
  },
];
