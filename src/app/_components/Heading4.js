import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Heading from "./Heading";
import Description from "./Description";
import Button from "./Button";
import VideoComponent from "../Video";

const experienceArr = [
  { title: "500", count: "Satisfied Clients" },
  { title: "10+", count: "Years of Fulfillment" },
  { title: "30%", count: "Alpha" },
];

export default function Component() {
  return (
    <MainContainer id="about">
      <div className="flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
          {/* Left Column for Heading and Subheading */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-1 leading-tight">
              Build a Secure Future with Personalized Financial Strategies
            </h1>
          </div>

          {/* Right Column for Description and Button */}
          <div className="md:w-1/2 flex flex-col space-y-6 items-center md:items-start">
            {/* Hide this paragraph on mobile view */}
            <p className="hidden md:block text-gray-600 text-center md:text-left">
              At Rising Wealth, we understand that every financial journey is unique.
              That's why we offer customized solutions tailored to your specific goals,
              whether it's growing your wealth, planning for retirement, or managing
              your investments. Let's build a plan that sets you up for long-term success.
            </p>
            <VideoComponent />
            <Link href="#contact">
              <Button className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md flex items-center justify-center">
                Meet At Office <RiArrowRightUpLine size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

       
        {/* New Section for Numbers Data */}
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-16 mt-2 mb-0">
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
