/** BLOCK G — buying guide. */
export const buyingGuideHeading =
  "What to Consider When Choosing a Red Light Mat";

export const buyingGuide: { label: string; body: React.ReactNode }[] = [
  {
    label: "Wavelengths:",
    body: (
      <>
        Check which wavelengths the mat uses.{" "}
        <strong>660nm red light and 850nm near-infrared light</strong> are a
        common combination. Compare the actual wavelength specifications rather
        than choosing solely by the number of wavelengths advertised.
      </>
    ),
  },
  {
    label: "Irradiance (Power Output):",
    body: (
      <>
        Irradiance is measured in <strong>mW/cm²</strong>. Check the{" "}
        <strong>measurement distance</strong>, since a reading taken at direct
        contact cannot be compared directly with one taken several inches away.
        Consider the manufacturer’s recommended session duration alongside its
        output specifications.
      </>
    ),
  },
  {
    label: "Mat Size & Coverage:",
    body: (
      <>
        <strong>Larger mats cover more of the body at once</strong>, while{" "}
        <strong>compact models may be easier to position and store</strong>.
        Choose based on the areas you want to cover, the space available, and
        how you plan to use the mat.
      </>
    ),
  },
  {
    label: "Ease of Use & Adjustability:",
    body: (
      <>
        Features like{" "}
        <strong>
          timers, accessible controls, brightness adjustments, and preset modes
        </strong>{" "}
        can make sessions easier to manage. Look for controls that fit
        comfortably into your everyday routine.
      </>
    ),
  },
  {
    label: "Safety & Certifications:",
    body: (
      <>
        Look for{" "}
        <strong>
          clearly documented testing and relevant certifications
        </strong>
        . Check what each certification covers and whether the brand provides
        supporting documentation for its safety specifications.
      </>
    ),
  },
  {
    label: "Design & Build Quality:",
    body: (
      <>
        Consider{" "}
        <strong>
          durability, flexibility, cable placement, controller access, and
          storage requirements
        </strong>
        . A practical design should make the mat easy to position and use
        consistently.
      </>
    ),
  },
  {
    label: "Value for Money:",
    body: (
      <>
        Compare{" "}
        <strong>
          coverage, output specifications, build quality, warranty, and
          customer support
        </strong>{" "}
        alongside the price. Included extras, such as a{" "}
        <strong>personalized recovery protocol</strong>, can also add value by
        helping buyers establish a routine.
      </>
    ),
  },
];
