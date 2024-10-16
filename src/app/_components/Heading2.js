import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { Urbanist } from "next/font/google";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Badge from "./Badge";
import Heading from "./Heading";
import Description from "./Description";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

const urbanist500 = Urbanist({ subsets: ["latin"], weight: "500" });
const urbanist700 = Urbanist({ subsets: ["latin"], weight: "700" });

export default function Heading2() {
  return (
    <>
      <MainContainer
        id={"about"}
        // bgImage={"/bbblurry11.svg"}
        customStyles={`bg-no-repeat bg-right text-black`}
      >
        <Section customStyles={""}>
          <div className="w-full py-6 flex flex-row-reverse items-center justify-between bg-center md:bg-right bg-no-repeat">
            <div className="flex-1 flex flex-col gap-y-6 md:items-start">
            <p className="text-sm text-[#464bd8] mb-2 bg-[#464bd8] p-2 rounded">
  Your Path to Financial Freedom Starts Here
</p>

              <Heading>
                We Create Advertising Campaigns That Help Your Business Grow
              </Heading>
              <Description color={"text-gray-700"}>
                At Logam Digital we are committed to the need of our clients. We
                are a team of experts in the field of digital marketing and
                online lead generation.
              </Description>
              <ButtonGroup>
                <Link href={"/about"}>
                  <Button bgColor={"bg-black"} textColor={"text-white"}>
                    About Us <BsArrowRight size={20} />
                  </Button>
                </Link>
              </ButtonGroup>
            </div>
            <div className="hidden md:flex flex-1 group">
              <Image
                className="group-hover:-translate-x-4 transition-all duration-300"
                src={"/Untitled-design.svg"}
                width={700}
                height={700}
                alt="design"
              />
            </div>
          </div>
        </Section>
      </MainContainer>
    </>
  );
}
