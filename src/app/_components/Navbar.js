"use client";
import Image from "next/image";
import Link from "next/link"; // Ensure Link is imported
import clsx from "clsx";

export default function Navbar() {
  return (
    <div
      className={clsx(
        "transition-height w-full text-white bg-[#464bd8] backdrop-blur-md sticky top-0 flex items-center justify-center z-20 shadow-lg"
      )}
      id="navbar"
    >
      <div className="px-10 py-8 w-full flex items-center md:w-10/12 gap-x-10 transition-all text-lg justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/"> {/* Link to the same page (homepage) */}
            <Image
              src={"/Untitled-540-×-540px.png"}
              width={150} // Adjusted width for logo visibility
              height={150} // Adjusted height for logo visibility
              alt="logo"
              priority
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 150px" // Adjust sizes for responsiveness
              className="w-32 h-auto md:w-40 md:h-auto" // Set responsive width for mobile and larger screens
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
