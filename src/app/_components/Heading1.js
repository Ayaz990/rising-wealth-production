import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { Urbanist } from "next/font/google"; // Consider if you need this import
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Badge from "./Badge";
import Heading from "./Heading";
import Description from "./Description";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

export default function Heading1() {
  return (
    <MainContainer
      customStyles={`bg-white text-black bg-no-repeat bg-cover md:bg-contain bg-center md:bg-left`}
    >
      <Section customStyles={""}>
        <div className="w-full lg:h-auto lg:py-10 flex lg:items-center bg-auto bg-no-repeat">
          <div className="flex-1 flex flex-col gap-8 lg:gap-y-6 md:items-start">
            <Badge badgeText={"Start Your Financial Journey"} />
        
            <Heading color={"text-black"}>
              Building a wealthy tomorrow,{' '}
              <span style={{ color: "#464bd8" }}>today</span>
            </Heading>

            <Description color={"text-blue"}>
              "At Rising Wealth, we craft personalized financial strategies tailored for your success."
            </Description>

            <ButtonGroup>
              <Link href={"#about"}>
                <Button>
                  Why Us <BsArrowDown size={18} />
                </Button>
              </Link>
              <Link href={"/contact-us"}>
                <Button bgColor={"bg-black"}>
                  Let's Meet <RiArrowRightUpLine size={25} />
                </Button>
              </Link>
            </ButtonGroup>
          </div>
          <div className="hidden md:flex flex-1 group">
            <Image
              className="group-hover:-translate-y-20 transition-all duration-300"
              src={"/money.svg"}
              width={850}
              height={850}
              alt="Illustration of financial growth"
            />
          </div>
        </div>
      </Section>
    </MainContainer>
  );
}
