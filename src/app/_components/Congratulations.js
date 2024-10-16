"use client";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";

export default function Congratulations({ setShowOverlay }) {
  return (
    <div
      id="overlay"
      className="w-full hidden fixed top-0 z-20 justify-center items-center bg-[#464bd8]/[0.3] h-screen"
    >
      <div className="bg-black w-11/12 lg:w-1/2 lg:h-[50vh] p-10">
        <LiaTimesSolid
          size={20}
          color="white"
          className="relative -top-2 -left-2 cursor-pointer"
          onClick={() =>
            document.getElementById("overlay").classList.add("hidden")
          }
        />
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
          <h1 className="text-[#464bd8] text-3xl md:text-4xl">
            Congratulations !
          </h1>
          <p className="text-black text-xl">We have Something for you</p>
          <h1 className="text-[#ffaa00] text-lg md:text-xl md:text-center">
            Here is a PDF with information on our business and some of our
            earlier work.
          </h1>
          <Link
            href={"/Logam-Digital-Company-Profile.pdf"}
            target="_blank"
            onClick={() =>
              document.getElementById("overlay").classList.add("hidden")
            }
          >
            <button className="px-3 py-2 bg-[#464bd8] rounded-full">
              Download PDF
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
