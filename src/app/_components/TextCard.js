import { DM_Sans } from "next/font/google";
import Heading from "./Heading";
import Description from "./Description";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "400" });

export default function TextCard({ item, color, bgColor, headingColor }) {
  return (
    <div
      className={`flex flex-col gap-y-2 p-7 md:p-10 bg-${bgColor}/[0.1] rounded-lg`}
    >
      <Heading
        textSize={"text-2xl md:text-3xl"}
        color={`text-${headingColor}`}
        customStyles={`mb-2 w-max`}
      >
        {item.title}
      </Heading>
      {item?.description?.map((p, i) => {
        return (
          <Description
            key={i}
            textSize={"text-md md:text-lg"}
            color={`text-${color}`}
            customStyles={dmSans.className}
          >
            {p}
          </Description>
        );
      })}
    </div>
  );
}
