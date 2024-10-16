import Description from "./Description";
import H1 from "./H1";
import H3 from "./H3";
import Heading from "./Heading";

export default function SectionHeader({
  heading,
  description,
  headingText,
  descriptionText,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 md:gap-4 py-5 text-black">
      <H1 color={headingText || "text-black"}>{heading}</H1>
      <H3
        textSize={"text-sm md:text-lg"}
        color={descriptionText || "text-black"}
      >
        {description}
      </H3>
    </div>
  );
}
