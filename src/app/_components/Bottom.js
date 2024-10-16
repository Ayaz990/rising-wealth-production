import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { Urbanist } from "next/font/google";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Badge from "./Badge";
import Heading from "./Heading";
import Description from "./Description";
import Button from "./Button";

export default function Botttom() {
  return (
    <>
      <MainContainer customStyles={`bg-center bg-white`}>
        <Section customStyles={""}>
          <div className="w-full py-10 md:py-20 flex flex-col md:flex-row items-center gap-y-5 bg-auto bg-no-repeat">
            <div className="flex flex-col items-center md:items-start flex-1 gap-y-20 lg:gap-y-5">
              <Badge
                badgeText={"Let's Connect"}
                color={"text-black"}
                background={"black"}
              />
              <div className="flex flex-col gap-y-2 lg:gap-y-5">
                <Heading color={"text-black"}>
                  Do You Want To Boost Your Business ?
                </Heading>
                <Description color={"text-gray-700"}>
                  Drop Your Details And We Will Be In Touch With You Soon.
                </Description>
              </div>
              <Link href={"/contact-us"}>
                <Button bgColor={"bg-black"}>
                  Contact Us <BiRightArrowAlt size={25} />
                </Button>
              </Link>
            </div>
            {/* <div className="flex-1 w-full flex justify-center items-center">
              <div className="bg-white w-full md:w-3/4 rounded-lg p-2 flex justify-between">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent focus:outline-none p-2 w-4/5 md:w-auto"
                />
                <Link href={"#h1"} className="w-full md:w-max">
                  <button className="w-full bg-yellow-300 hover:bg-yellow-200 text-black py-2 md:py-3 px-1 md:px-2 text-sm rounded-lg flex items-center justify-center gap-1 transition-all">
                    Subscribe Now <RiArrowRightUpLine size={25} />
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </Section>
      </MainContainer>
    </>
  );
}
