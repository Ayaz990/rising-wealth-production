import MainContainer from "./MainContainer";
import Section from "./Section";
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Heading from "./Heading";
import Description from "./Description";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

export default function Heading1() {
  return (
    <MainContainer
      customStyles={`bg-white text-black bg-no-repeat bg-cover md:bg-contain bg-center md:bg-left`}
    >
      <Section customStyles={"py-24"}>
        {/* Increased padding to the top and bottom */}
        <div className="w-full lg:h-auto flex flex-col lg:flex-row lg:items-center bg-auto bg-no-repeat">
          <div className="flex-1 flex flex-col gap-10 lg:gap-y-10 items-center md:items-start text-center md:text-left">
            <Heading color={"text-black"}>
              Building a wealthy tomorrow,{" "}
              <span style={{ color: "#464bd8" }}>today</span>
            </Heading>

            <Description color={"text-blue"}>
              At Rising Wealth, we craft personalized financial strategies
              tailored for your success.
            </Description>

            <ButtonGroup>
              <Link href={"#contact"}>
                <Button bgColor={"bg-black"}>
                  Contact us <RiArrowRightUpLine size={25} />
                </Button>
              </Link>
            </ButtonGroup>
          </div>

          {/* Video container, visible only on medium screens and larger */}
          <div className="hidden md:flex flex-1 justify-center items-center mt-10 lg:mt-0">
            <video
              style={{ width: "400px", height: "600px" }} // Set specific width and height
              className="rounded-lg shadow-md"
              controls
              autoPlay
              loop
              muted
            >
              <source src="/Videos/Rising Wealth 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Section>
    </MainContainer>
  );
}
