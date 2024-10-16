import Description from "../_components/Description";
import FAQPage from "../_components/FAQPage";
import Heading from "../_components/Heading";
import MainContainer from "../_components/MainContainer";
import Section from "../_components/Section";

export const metadata = {
  title: "FAQs at Rising Wealth",
  description:
    "We have listed all the Frequently Asked Questions (FAQs) .",
};

export default function Page() {
  return (
    <MainContainer customStyles={"bg-[#464bd8] text-black"}>
      <Section customStyles={"py-16"}>
        <div className="w-full flex flex-col items-center space-y-6 md:space-y-10">
          {/* Header Section */}
          <div className="text-center space-y-3">
            <Description
              textSize={"text-base md:text-xl"}
              color={"text-black"}
            >
              We Have Great Answers
            </Description>
            <Heading color={"text-gray-100"} customStyles={"text-3xl md:text-5xl font-bold"}>
              Ask Us Anything
            </Heading>
          </div>

          {/* FAQ Section */}
          <div className="w-full max-w-4xl px-4">
            <FAQPage />
          </div>
        </div>
      </Section>
    </MainContainer>
  );
}