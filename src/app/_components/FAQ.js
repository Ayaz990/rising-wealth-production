"use client";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Description from "./Description";
import SectionHeader from "./SectionHeader";

const faqArr = [
  [
    {
      id: "faq-1",
      question: "How Can Rising Wealth Help Me Build My Financial Future?",
      answer:
        "At Rising Wealth, we specialize in crafting personalized financial strategies to help you achieve your financial goals and secure your future.",
    },
    {
      id: "faq-2",
      question: "What Financial Services Does Rising Wealth Offer?",
      answer:
        "We offer a range of services, including investment management, retirement planning, tax strategies, and estate planning, all tailored to your unique financial needs.",
    },
    {
      id: "faq-3",
      question: "How Does Rising Wealth Ensure Personalized Financial Strategies?",
      answer:
        "We take the time to understand your financial goals, risk tolerance, and life circumstances to create a strategy that aligns with your specific needs and long-term success.",
    },
  ],
  [
    {
      id: "faq-4",
      question: "How Often Should I Review My Financial Plan?",
      answer:
        "It’s recommended to review your financial plan annually or whenever significant life events occur, such as a job change, marriage, or the birth of a child.",
    },
    {
      id: "faq-5",
      question: "Is It Too Early To Start Planning For Retirement?",
      answer:
        "It's never too early to start planning for retirement. The sooner you begin, the more time you have to grow your savings and prepare for a comfortable future.",
    },
    {
      id: "faq-6",
      question: "How Do I Know If My Current Investments Are Right For Me?",
      answer:
        "Rising Wealth can perform a comprehensive review of your current investments to ensure they align with your financial goals and risk tolerance.",
    },
  ],
];

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const showAnswer = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-50 py-10 px-6 flex flex-col gap-8 text-white">
      {/* Heading Section on Top */}
      <SectionHeader
        heading={"FAQs"}
        description={"Things You Want to Know"}
      />
      
      {/* FAQ Section Below the Heading */}
      <div className="flex flex-col md:flex-row gap-8">
        {faqArr?.map((item, index) => (
          <div key={index} className="flex-1 w-full flex flex-col gap-6">
            {item.map((faq) => (
              <div
                key={faq.id}
                onClick={() => showAnswer(faq.id)}
                className="rounded-lg overflow-hidden shadow-md hover:scale-[0.98] transition-all duration-300"
              >
                <div className="text-lg p-4 flex items-center justify-between cursor-pointer bg-[#464bd8]">
                  <Description
                    color={"black"}
                    textSize={"text-md md:text-lg"}
                    customStyles={"tracking-normal font-medium"}
                  >
                    {faq.question}
                  </Description>
                  <BsChevronRight
                    id={`${faq.id}-icon`}
                    className={`transition-transform duration-300 ${
                      activeQuestion === faq.id ? "rotate-90" : ""
                    }`}
                    color="white"
                  />
                </div>
                <div
                  id={faq.id}
                  className={`max-h-0 overflow-hidden transition-all duration-300 ${
                    activeQuestion === faq.id ? "max-h-[300px]" : ""
                  } bg-white`}
                >
                  <div className="p-4">
                    <Description
                      color={"text-gray-700"}
                      textSize={"text-md md:text-lg"}
                    >
                      {faq.answer}
                    </Description>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
