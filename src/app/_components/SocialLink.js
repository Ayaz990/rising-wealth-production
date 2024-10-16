"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SocialLink() {
  const path = usePathname();
  let pathTitle;
  if (path != "/") {
    pathTitle = path
      ?.split("/")
      .at(-1)
      ?.split("-")
      .map((item, i) => item[0].toLocaleUpperCase() + item.slice(1))
      .join(" ");
  } else {
    pathTitle = "Home";
  }
  // console.log(pathTitle);
  return (
    <div className="w-max p-5 fixed bottom-0 right-0 group z-20">
      <Link
        className="cursor-default md:cursor-pointer"
        href={`https://wa.me/+918866972506?text=Hello+Logam+Digital%2C%0AI+visited+${pathTitle}+page+of+your+website.+I+am+interested+in+the+services+you+provide.`}
      >
        <Image
          src={"/whatsapp2.png"}
          width={60}
          height={60}
          alt={"whatsapp_icon"}
          className="md:w-auto h-auto group-hover:scale-105 transition-all"
        />
      </Link>
    </div>
  );
}
