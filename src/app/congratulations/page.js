import Link from "next/link";
import Description from "../_components/Description";
import Heading from "../_components/Heading";
import MainContainer from "../_components/MainContainer";
import Section from "../_components/Section";

export const metadata = {
  title: "Congratulations - Rising Wealth",
  description:
    "Congratulations on taking the critical step toward securing your financial future with Rising Wealth. Here is a PDF with information on our services and some of our success stories.",
};

export default function Page() {
  return (
    <MainContainer customStyles={"bg-white"}>
      <Section>
        <div className="w-full py-10 lg:py-0 lg:min-h-screen flex flex-col lg:justify-center items-center gap-10 lg:gap-20">
          <Heading color={"text-[#464bd8] "} textSize={"text-4xl lg:text-6xl"}>
            Congratulations
          </Heading>
          <div className="flex flex-col gap-10 lg:gap-2">
            <Description color={"text-black"} customStyles={"text-center"}>
              Thank you for taking the first step towards securing your financial future with Rising Wealth. We're excited to help craft{" "}
              <span className="text-[#464bd8]">a personalized financial strategy</span> tailored just for you.
            </Description>
            
          </div>
          
          
        </div>
      </Section>
    </MainContainer>
  );
}
