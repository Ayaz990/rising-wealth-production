"use client";

import Image from "next/image";

function Loading() {
  return (
    <div className="absolute left-0 top-0 w-full h-screen flex justify-center bg-[#1b1a1a] items-center">
      <Image
        src={"/Untitled-540-×-540px.png"}
        width={250}
        height={250}
        alt="Logam Digital Private Limited Logo"
        className="animate-ping"
      />
    </div>
  );
}

export default Loading;
