import { Poppins } from "next/font/google"
import Image from "next/image"
import { BiRightArrowAlt } from "react-icons/bi"
import SectionHeader from "./SectionHeader";



const poppins = Poppins({ subsets: ["latin"], weight: "400" })

const processSteps = [
  {
    title: "Step 1: Book a Free Consultation",
    description: "We guide you through a tailored investment strategy designed for your goals.",
    icon: "/book.png" // Unique image for Step 1
  },
  {
    title: "Step 2: Meet up at office",
    description: "We design an investment plan based on your needs and goals. Our aim is to grow your wealth while minimizing risks.",
    icon: "/meet.png" // Unique image for Step 2
  },
  {
    title: "Step 3: Beat the market",
    description: "We'll regularly review and adjust your plan to keep you on track. We're with you every step of the way.",
    icon: "/chess.png" // Unique image for Step 3
  }
]


export default function Component() {
  return (
    <div className="max-w-7xl bg-white mx-auto px-1 py-12 md:py-24">
     
     
      <SectionHeader heading={"Step to start with us"} />
      <div className="text-black flex flex-col md:flex-row gap-6">
        {processSteps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg flex-1 flex flex-col items-center text-center">
            <Image
              src={step.icon}
              width={64}
              height={64}
              alt={step.title}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-black marker:mb-9">{step.title}</h3>
            <p className={`${poppins.className} text-md mb-4`}>{step.description}</p>
            <div className="mt-auto">
              {/* Add more content if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
