import MainContainer from "../_components/MainContainer";
import Section from "../_components/Section";
import { Poppins } from "next/font/google";
import { GiSmartphone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import Link from "next/link";
import SectionHeader from "../_components/SectionHeader";
import Botttom from "../_components/Bottom";
import Contact from "../_components/Contact";
import Description from "../_components/Description";

const poppins500 = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Contact us for all your queries",
  description:
    "Got any questions on your mind about marketing & sales-funnel or want to discuss some amazing ideas? Please feel free to contact us.",
};

export default async function Page() {
  return (
    <>
      <Contact />
      
    </>
  );
}
