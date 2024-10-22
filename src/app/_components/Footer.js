"use client";
import Image from "next/image";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { Urbanist } from "next/font/google";
import { usePathname } from "next/navigation";

const urbanist = Urbanist({ subsets: ["latin"], weight: "400" });

const socialIcons = [
  {
    img: <MdAlternateEmail size={25} />,
    name: "email",
    link: "mailto:logam.digital@gmail.com",
  },
  {
    img: <BsInstagram size={25} />,
    name: "instagram",
    link: "https://www.instagram.com/logam.digital/",
  },
  {
    img: <BsFacebook size={25} />,
    name: "facebook",
    link: "https://www.facebook.com/logamdigital/",
  },
  {
    img: <BsLinkedin size={25} />,
    name: "linkedin",
    link: "https://www.linkedin.com/company/logamdigital",
  },
  {
    img: <FaYoutube size={25} />,
    name: "youtube",
    link: "https://www.youtube.com/@LogamDigital",
  },
  {
    img: <IoLocationSharp size={25} />,
    name: "maps",
    link: "https://maps.app.goo.gl/dxRCYnNY5M9c1QCR9",
  },
];

const footerMenuArr = [
  {
    name: "Company",
    menu: [
      { title: "About Us", path: "/about" },
      { title: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    name: "Legal",
    menu: [
      { title: "Privacy Policy", path: "/privacy-policy" },
      { title: "FAQs", path: "/faqs" },
    ],
  },
];

export default function Footer() {
  const path = usePathname();

  if (
    path === "/digital-marketing-for-real-estate" ||
    path === "/digital-marketing-consultation"
  ) {
    return null;
  }

  return (
    <MainContainer customStyles="bg-[#f8f8f8] text-black">
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center py-5 text-gray-600 text-sm border-t-[1px] border-gray-300">
          <p className="flex items-center mb-2 md:mb-0">
            <IoLocationSharp size={20} className="mr-1" />
            <a href="422M+JH5, Anjar, Gujarat 370110" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Office no. 11, City Square-C, Chitrkoot, Anjar - 370110
            </a>
          </p>
          <div className="text-left">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> |{" "}
            <Link href="/faqs" className="hover:underline">FAQs</Link>
          </div>
          <div className="text-right">
            <p>© 2024 Rising Wealth. All rights reserved.</p>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <p className="text-xs text-black">
            <a href="https://www.logamdigital.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Powered by Logam-Digital
            </a>
          </p>
        </div>
      </Section>
    </MainContainer>
  );
}