import { Poppins, Urbanist } from "next/font/google";

const poppins600 = Poppins({ subsets: ["latin"], weight: "600" });

export default function H1({ children, color, textSize, customStyles }) {
  return (
    <h1
      className={`${poppins600?.className} ${color || "text-black"} ${
        textSize || "text-3xl md:text-5xl"
      } leading-tight md:leading-tight tracking-wide ${customStyles || ""}`}
    >
      {children}
    </h1>
  );
}
