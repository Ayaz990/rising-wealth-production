import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { Urbanist } from "next/font/google"; // If you need this font, ensure to use it in your components
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Badge from "./Badge";
import Heading from "./Heading";
import Description from "./Description";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

const experienceArr = [
  { title: "500", count: "Satisfied Clients" },
  { title: "10+", count: "Years of Fulfillment" },
  { title: "30%", count: "Alpha" },
];

export default function Component() {
  return (
    <MainContainer id="about">
      <div>
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
          {/* Left Column for Heading and Subheading */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Badge
              badgeText={"Your Path to Financial Freedom Starts Here"}
              background="blue"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-1 leading-tight">
              Build a Secure Future with Personalized Financial Strategies
            </h1>
          </div>

          {/* Right Column for Description and Button */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            <p className="text-gray-600">
              At Rising Wealth, we understand that every financial journey is unique.
              That's why we offer customized solutions tailored to your specific goals,
              whether it's growing your wealth, planning for retirement, or managing
              your investments. Let's build a plan that sets you up for long-term success.
            </p>
            <Link href="/contact-us">
              <Button className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md">
                Meet At Office <RiArrowRightUpLine size={20} /> {/* Added icon for clarity */}
              </Button>
            </Link>
          </div>
        </div>

        {/* New Section for Numbers Data */}
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 mb-0">
          {experienceArr.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-6xl font-bold text-[#464bd8] mb-4">{item.title}</h3>
              <Description className="text-black">{item.count}</Description>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}
