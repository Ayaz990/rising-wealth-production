"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainContainer from "./MainContainer";
import Section from "./Section";
import { BiLogoApple } from "react-icons/bi";
import {
  SiAmazon,
  SiApple,
  SiMeta,
  SiMicrosoft,
  SiSamsung,
  SiTwitter,
} from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Description from "./Description";
import Heading from "./Heading";

// const urbanist500 = Urbanist({ subsets: ["latin"], weight: "500" });
// const urbanist700 = Urbanist({ subsets: ["latin"], weight: "700" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400" });

const clientsArr = [
  {
    title: "Ratnakar Developers",
    src: "/images/Black/2.webp",
  },
  {
    title: "Nirvana Life County",
    src: "/images/Black/5.webp",
  },
  {
    title: "Maruti Estate",
    src: "/images/Black/8.webp",
  },
  {
    title: "Green Valley",
    src: "/images/Black/11.webp",
  },
  {
    title: "Anjani Builders",
    src: "/images/Black/14.webp",
  },
  {
    title: "Aatmee Developers",
    src: "/images/Black/17.webp",
  },
  {
    title: "Casa Amplio",
    src: "/images/Black/19.webp",
    darkSrc: "/images/Black/29.webp",
  },
  {
    title: "Sahajanand Elite",
    src: "/images/Black/20.webp",
  },
  {
    title: "Mahi Spa",
    src: "/images/Black/23.webp",
  },
  {
    title: "Study Visa Planet",
    src: "/images/Black/27.webp",
  },
  {
    title: "Zoyalty",
    src: "/images/Black/32.webp",
  },
  {
    title: "Pragati ML Group",
    src: "/images/Black/35.webp",
  },
  {
    title: "Saregama Mobile",
    src: "/images/Black/38.webp",
  },
];

export default function Slider({ theme }) {
  const text = theme && theme == "dark" ? "text-white" : "text-black";

  return (
    <MainContainer customStyles={theme == "dark" ? "bg-[#1b1a1a]" : "bg-white"}>
      <Section>
        <div className="w-full py-28 md:py-32 flex flex-col gap-10 md:gap-20">
          <div className="w-full flex flex-col items-center gap-5 text-center">
            <Description color={text} textSize={"text-lg md:text-2xl"}>
              Meet Our Clients
            </Description>
            <Heading color={text} textSize={"text-2xl md:text-5xl"}>
              They believe in us
            </Heading>
            <Description color={text} textSize={"text-lg md:text-2xl"}>
              We feel successful when our client&apos;s businesses grow. We only
              profit from your success.
            </Description>
          </div>
          <div className="">
            <Swiper
              spaceBetween={30}
              loop={true}
              style={{
                "--swiper-navigation-color":
                  theme == "dark" ? "white" : "black",
                "--swiper-navigation-size": "25px",
              }}
              navigation={{ enabled: true }}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
              fadeEffect={true}
              modules={[Autoplay, Navigation]}
            >
              {clientsArr.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="flex justify-center items-center py-5 md:py-16 min-h-[256px]">
                      <Image
                        width={256}
                        height={256}
                        src={
                          theme == "dark" ? item.darkSrc || item.src : item.src
                        }
                        alt={`Logo of ${item.title}`}
                        className="scale-[250%] lg:scale-150 w-auto object-scale-down"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Section>
    </MainContainer>
  );
}
