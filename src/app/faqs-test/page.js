import Description from "../_components/Description";
import FAQPage from "../_components/FAQPage";
import Heading from "../_components/Heading";
import MainContainer from "../_components/MainContainer";
import Section from "../_components/Section";

export const metadata = {
  title: "FAQs at Logam Digital",
  description: "You Have Questions, We Have Answers",
};

export default function Page() {
  return (
    <MainContainer customStyles={"bg-[#1b1a1a]"}>
      <Section>
        <div className="w-full py-10 flex flex-col gap-y-2">
          <div className="flex flex-col justify-center items-center gap-y-3 md:gap-4 text-white">
            <Description
              textSize={"text-sm md:text-lg"}
              color={"text-gray-100"}
            >
              We Have Great Answers
            </Description>
            <Heading color={"text-gray-300"}>Ask Us Anything</Heading>
          </div>
          <FAQPage />
        </div>
      </Section>
    </MainContainer>
  );
}
