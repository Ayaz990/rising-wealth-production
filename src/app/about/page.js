import MainContainer from "../_components/MainContainer";
import Section from "../_components/Section";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Bottom from "../_components/Bottom";
import Slider from "../_components/Slider";
import Badge from "../_components/Badge";
import Description from "../_components/Description";
import Heading from "../_components/Heading";
import ButtonGroup from "../_components/ButtonGroup";
import Button from "../_components/Button";
import TextCard from "../_components/TextCard";
import H1 from "../_components/H1";
import H3 from "../_components/H3";

const featuresArr = [
  {
    title: "We Prioritize Your Financial Success",
    description:
      "Our primary goal is to help you achieve your financial objectives. Your success is what drives us to excel.",
  },
  {
    title: "We Simplify Financial Planning",
    description:
      "We communicate in straightforward terms, ensuring you understand every aspect of your financial journey.",
  },
  {
    title: "We Embrace Innovative Strategies",
    description:
      "Our team constantly explores new approaches to optimize your investment strategies and financial growth.",
  },
  {
    title: "We Deliver Timely Results",
    description:
      "Respecting your time and resources is paramount. We ensure our services are delivered promptly.",
  },
];

const aboutUsDetailsArr = [
  {
    title: "Who We Are?",
    description: [
      "Rising Wealth is a financial consulting agency based in [Your Location]. We provide a comprehensive range of financial services to help individuals and businesses thrive.",
      "Our team comprises experienced financial advisors specializing in investment strategies, retirement planning, tax optimization, and wealth management.",
    ],
  },
  {
    title: "Our Mission",
    description: [
      "At Rising Wealth, we believe that every individual and business deserves a clear path to financial success. We work tirelessly to empower our clients with the knowledge and tools they need to achieve their goals.",
      "Our mission is to ensure that no one misses out on opportunities due to a lack of financial understanding or support.",
    ],
  },
];

const testimonialsArr = [
  {
    description:
      "Working with Rising Wealth has transformed my financial outlook. Their team genuinely cares about my success and has guided me every step of the way.",
    clientName: "Client 1",
    firm: "Firm 1",
  },
  {
    description:
      "The advice and strategies provided by Rising Wealth have been invaluable. I feel more confident about my financial future.",
    clientName: "Client 2",
    firm: "Firm 2",
  },
  {
    description:
      "Rising Wealth's expertise and dedication have made a significant difference in my financial planning. I highly recommend them!",
    clientName: "Client 3",
    firm: "Firm 3",
  },
];

export const metadata = {
  title: "About Us - Behind the Scenes at Rising Wealth",
  description:
    "We are a financial consulting agency specializing in investment strategies, retirement planning, and wealth management.",
};

export default function Page() {
  return (
    <>
      <MainContainer customStyles={"bg-[#1b1a1a]"}>
        <Section>
          <div className="w-full py-10 md:py-20 flex flex-col items-center gap-y-10">
            <div className="w-full md:w-3/4 text-center flex flex-col items-center gap-y-5">
              <H1
                textSize={"text-xl md:text-2xl"}
                color={"text-gray-300"}
                customStyles={"uppercase"}
              >
                About Rising Wealth
              </H1>
              <H3 textSize={"text-2xl md:text-5xl"} color={"text-white"}>
                Guiding You Towards Financial Freedom.
              </H3>
            </div>
            <div className="flex flex-col w-full justify-center gap-10">
              {aboutUsDetailsArr.map((item, i) => {
                return (
                  <TextCard
                    bgColor={"white"}
                    color={"gray-300"}
                    key={i}
                    item={item}
                    headingColor={"white"}
                  />
                );
              })}
            </div>
          </div>
        </Section>
      </MainContainer>
      <MainContainer
        customStyles={`md:bg-no-repeat bg-center text-black`}
      >
        <Section customStyles={""}>
          <div className="w-full py-10 md:py-20 flex flex-col lg:flex-row-reverse gap-10 items-center bg-auto bg-no-repeat">
            <div className="flex-1 flex flex-col items-center gap-y-6 md:items-start">
              <Badge
                badgeText={"Your Financial Growth. Our Commitment."}
                background={"black"}
              />
              <Heading>We Believe in Empowering Your Wealth</Heading>
              <Description color={"text-gray-700"}>
                Our experienced financial advisors are dedicated to helping you navigate your financial journey with confidence.
              </Description>
              <ButtonGroup>
                <Link href={"/services"}>
                  <Button bgColor={"bg-yellow-300"}>
                    Our Services <RiArrowRightUpLine size={25} />
                  </Button>
                </Link>
              </ButtonGroup>
            </div>
            <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-7 flex-1 group place-items-stretch`}>
              {featuresArr.map((feature, i) => {
                return (
                  <div
                    key={i}
                    className="w-full p-5 flex flex-col gap-3 bg-gray-200/[0.4] rounded-xl"
                  >
                    <Heading
                      textSize={"text-lg md:text-xl"}
                      customStyles={"font-bold"}
                    >
                      {feature.title}
                    </Heading>
                    <Description
                      color={"text-gray-800"}
                      textSize={"text-md md:text-lg"}
                    >
                      {feature.description}
                    </Description>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </MainContainer>
      {/* Uncomment this section if you want to include testimonials */}
      {/* <MainContainer customStyles={"bg-[#1b1a1a] text-white"}>
        <Section>
          <div className="w-full py-20 flex flex-col gap-y-16 items-center">
            <div className="w-full text-center flex flex-col items-center gap-10">
              <Badge badgeText={"Our Success Stories"} />
              <h2 className="text-3xl md:text-4xl text-gray-100 tracking-wide">
                Our Clients Trust Us.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
              {testimonialsArr?.map((testimonial, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white/[0.1] p-5 flex flex-col items-start rounded-lg transition-all"
                  >
                    <BsQuote size={50} className="" />
                    <div className={`p-5 h-full flex flex-col justify-between gap-8`}>
                      <div className="flex flex-col gap-3">
                        <p className="text-md md:text-lg tracking-wide">
                          {testimonial.description}
                        </p>
                      </div>
                      <div className="">
                        <p className="font-bold tracking-wide">
                          - {testimonial.clientName}, {testimonial.firm}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </MainContainer> */}
      <Slider theme={"dark"} />
      <Bottom />
    </>
  );
}
