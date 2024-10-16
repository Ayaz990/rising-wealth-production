import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import jsonData from "../data.json";
import Badge from "./Badge";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./Button";

const services = jsonData.services;

export default function Heading3({ exclude }) {
  const featuresArr = services?.filter((service, i) => service?.id != exclude);

  return (
    <>
      <MainContainer id={"h1"} customStyles={"bg-[#1b1a1a] text-white"}>
        <Section customStyles={"p-0"}>
          <div className="w-full py-10 md:py-20 flex flex-col gap-y-16 items-center">
            <div className="w-full md:w-3/5 lg:w-2/5 text-center flex flex-col items-center gap-5 md:gap-10">
            <p className="text-sm text-gray-600 mb-2 bg-blue-200 p-2 rounded">
  Your Path to Financial Freedom Starts Here
</p>

              <Heading textSize={"text-2xl md:text-4xl"} color={"white"}>
                From Individuals to Enterprises, We serve to all.
              </Heading>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
              {featuresArr?.map((service, i) => {
                return <Card key={i} cardData={service} />;
              })}
            </div> */}
            <div className="w-full flex flex-col md:flex-row justify-center flex-wrap gap-10">
              {featuresArr?.map((service, i) => {
                return (
                  <Card
                    key={i}
                    cardData={service}
                    customStyles={"w-full lg:w-2/5"}
                  />
                );
              })}
            </div>
            <div className="">
              <Link href={"/services"}>
                <Button bgColor={"bg-yellow-300"}>
                  Explore More Services <RiArrowRightLine size={25} />
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </MainContainer>
    </>
  );
}
