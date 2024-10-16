"use client";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDoubleRight, BsChevronRight } from "react-icons/bs";
import Heading from "./Heading";
import Description from "./Description";

const faqArr = [
  {
    id: "faq-1",
    question: "What Services Does Rising Wealth Offer?",
    answer:
      "Rising Wealth offers personalized financial strategies, including investment planning, retirement solutions, tax-saving strategies, wealth management, and more tailored to your financial goals.",
  },
  {
    id: "faq-2",
    question: "How Do I Start My Financial Journey with Rising Wealth?",
    answer:
      "Simply schedule a consultation with us, and we’ll assess your financial situation, discuss your goals, and craft a custom strategy for your success.",
  },
  {
    id: "faq-3",
    question: "How Often Will I Receive Updates on My Investments?",
    answer:
      "We provide regular performance reports, typically quarterly, but you can request updates or reviews anytime based on your preferences.",
  },
  {
    id: "faq-4",
    question: "Is There a Minimum Investment Required?",
    answer:
      "Our financial solutions are customized, and we cater to clients with diverse portfolios. There is no strict minimum, but it’s best to discuss your investment capacity during the consultation.",
  },
  {
    id: "faq-5",
    question: "How Can I Reduce My Tax Liability with Rising Wealth?",
    answer:
      "Our experts create tax-efficient strategies tailored to your income and investments. We optimize your portfolio for tax savings while ensuring long-term growth.",
  },
  {
    id: "faq-6",
    question: "Do You Only Work with High-Net-Worth Individuals?",
    answer:
      "No, we work with clients from all financial backgrounds, from those starting out to seasoned investors. Our mission is to help you grow your wealth regardless of your starting point.",
  },
  {
    id: "faq-7",
    question: "How Do You Charge for Your Services?",
    answer:
      "We offer a transparent fee structure, either through a flat fee, percentage of assets under management, or a combination depending on the services provided.",
  },
  {
    id: "faq-8",
    question: "How Can I Trust Rising Wealth with My Financial Future?",
    answer:
      "With years of experience and a client-first approach, we build trust through transparency, tailored strategies, and consistent performance. We prioritize your financial well-being.",
  },
  {
    id: "faq-9",
    question: "What Is Your Approach to Investment Risk?",
    answer:
      "We assess your risk tolerance and align your portfolio to match it. Whether you prefer a conservative or aggressive strategy, we ensure your investments are aligned with your goals.",
  },
  {
    id: "faq-10",
    question: "Can Rising Wealth Help with Retirement Planning?",
    answer:
      "Yes, we provide comprehensive retirement planning services to ensure you are financially secure and able to enjoy your retirement comfortably.",
  },
  {
    id: "faq-11",
    question: "Will I Have a Dedicated Advisor?",
    answer:
      "Yes, each client is assigned a dedicated financial advisor who will work closely with you to develop, implement, and monitor your financial plan.",
  },
  {
    id: "faq-12",
    question: "How Often Will We Meet?",
    answer:
      "We recommend at least an annual review of your financial plan, but we’re available for meetings as often as you need to discuss changes or updates to your portfolio.",
  },
  {
    id: "faq-13",
    question: "Do You Offer Support for Estate Planning?",
    answer:
      "Yes, we provide estate planning services to help you ensure a smooth transfer of assets to your beneficiaries and optimize your estate’s tax efficiency.",
  },
];

const showAnswer = (id) => {
  document.getElementById(id).classList.toggle("max-h-[1000px]");
  document.getElementById(`${id}-icon`).classList.toggle("rotate-10");
};

export default function FAQPage() {
  return (
    <div className="py-5 md:py-10 flex flex-col gap-4 text-white">
      <div className="w-full flex flex-col gap-y-5">
        {faqArr?.map((faq, i) => {
          return (
            <div
              key={i}
              onClick={() => showAnswer(faq.id)}
              className="rounded-lg overflow-hidden transition-max-height"
            >
              <div className="text-lg p-4 flex items-center justify-between cursor-default md:cursor-pointer bg-white">
                <Description
                  color={"text-black"}
                  textSize={"text-md md:text:text-lg"}
                  customStyles={"tracking-normal"}
                >
                  {faq.question}
                </Description>
                <BsChevronRight
                  id={`${faq.id}-icon`}
                  className="transition-all duration-100 shrink-0"
                  color="#464bd8"
                />
              </div>
              <div
                id={faq.id}
                className={`max-h-0 overflow-hidden transition-max-height bg-white`}
              >
                <div className="p-4">
                  <Description
                    color={"text-gray-500"}
                    textSize={"text-md md:text-lg"}
                  >
                    {faq.answer}
                  </Description>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
