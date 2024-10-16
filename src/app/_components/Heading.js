import { Poppins, Urbanist } from "next/font/google";

const poppins600 = Poppins({ subsets: ["latin"], weight: "600" });

export default function Heading({ children, color, textSize, customStyles }) {
  return (
    <h4
      className={`${poppins600?.className} ${color || "text-[#000000]"} ${
        textSize || "text-3xl md:text-5xl"
      } leading-tight md:leading-tight tracking-wide ${customStyles || ""}`}
    >
      {children}
    </h4>
  );
}
