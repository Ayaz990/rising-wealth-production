"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";
import clsx from "clsx";
import jsonData from "../data.json";

const navbarArr = [
  {
    title: "About Us",
    path: "#about", // Correct path to the "About Us" section
  },
  {
    title: "Contact Us",
    path: "/contact-us", // Correct path to the "Contact Us" page
    isButton: true,
  },
];

const services = jsonData.services;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let handler = () => {
      setIsMenuOpen(false); // Close the menu on mousedown
    };

    document.addEventListener("mousedown", handler);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const pathName = usePathname();

  return (
    <div
      className={clsx(
        "transition-height w-full text-white bg-[#464bd8] backdrop-blur-md sticky top-0 flex flex-col items-center z-20 shadow-lg"
      )}
      id="navbar"
    >
      <div className="px-5 md:px-0 py-2 w-full flex items-center md:w-10/12 gap-x-10 transition-all text-lg justify-between">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src={"/Untitled-540-×-540px.png"}
              width={123}
              height={123}
              alt="logo"
              priority
              sizes="(max-width: 768px) 100vw, 123px"
              className="w-auto h-auto"
            />
          </div>
        </Link>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "mobileMenu1 bg-[#fafafa] text-white md:text-white absolute md:static top-full duration-200 py-5 md:py-auto w-full md:w-fit md:block h-auto md:h-full box-border md:bg-transparent",
            isMenuOpen ? "left-0" : "-left-full"
          )}
        >
          <ul className="px-5 md:px-0 flex flex-col md:flex-row gap-5 md:gap-10 list-none justify-around md:justify-evenly h-full md:items-center">
            {navbarArr.map((nav_item, i) => {
              return (
                <li key={i} className="w-full tracking-wide group">
                  <Link
                    href={nav_item.path} // Corrected path
                    className={clsx(
                      "w-max box-border font-bold h-full flex items-center hover:border-b-2 hover:text-[#0e0707] border-[#f8f8f8]",
                      {
                        "border-b-2 text-[#eae6df]": nav_item.path === pathName,
                        "px-4 py-2 bg-white text-blue-800 rounded-lg":
                          nav_item.isButton, // Use text-blue-800 for buttons
                        "text-[#ffffff]": !nav_item.isButton, // Use white for non-buttons
                      }
                    )}
                  >
                    {nav_item.title}
                    {nav_item?.dropdown ? <MdArrowDropDown /> : null}
                  </Link>

                  {/* Dropdown Menu for Services */}
                  {nav_item?.dropdown ? (
                    <ul className="hidden md:absolute top-[60px] bg-white p-4 group-hover:flex text-black flex-col gap-2 rounded-lg text-md">
                      {services?.map((item, i) => (
                        <Link key={i} href={`/services/${item?.id}`}>
                          <li className="hover:text-[#f8f8f8]">
                            {item?.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={menuHandler}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          className="transition-all md:hidden"
        >
          {isMenuOpen ? (
            <LiaTimesSolid size={"1.7em"} color="white" />
          ) : (
            <HiBars3 size={"1.7em"} color="white" />
          )}
        </div>
      </div>
    </div>
  );
}
