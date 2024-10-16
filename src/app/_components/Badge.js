import Image from "next/image";

export default function Badge({ badgeText, image, background, color }) {
  return (
    <h1
      className={`bg-${
        background || "black"
      }/[0.1] md:w-max px-4 py-3 rounded-full text-md md:text-lg flex items-center justify-center gap-2 tracking-wide ${
        color || ""
      }`}
    >
      <Image
        src={image || "/announce.svg"}
        width={40}
        height={40}
        alt="announce"
      />
      {badgeText}
    </h1>
  );
}
