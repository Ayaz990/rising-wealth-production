"use client";
import Image from "next/image";
import MainContainer from "./MainContainer";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Formik } from "formik";
import { DM_Sans, Poppins } from "next/font/google";
import Loader from "./Loader";
import Badge from "./Badge";
import Heading from "./Heading";
import Description from "./Description";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import jsonData from "../data.json";

const poppins300 = Poppins({ subsets: ["latin"], weight: "300" });
const poppins500 = Poppins({ subsets: ["latin"], weight: "500" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "300" });

const socialIcons = [
  // {
  //   img: <MdAlternateEmail size={25} />,
  //   name: "email",
  //   link: "mailto:ayazsmemon07@gmail.com",
  // },
  {
    img: <BsInstagram size={25} />,
    name: "instagram",
    link: "https://www.instagram.com/risingwealth.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== ",
  },
  {
    img: <BsFacebook size={25} />,
    name: "facebook",
    link: "https://www.facebook.com/share/KJ5umbGrEkXR67Wm/?mibextid=LQQJ4d",
  },
  // {
  //   img: <IoLocationSharp size={25} />,
  //   name: "maps",
  //   link: "https://maps.app.goo.gl/",
  // },
];

const ErrorText = ({ children }) => (
  <p className="text-[#2727f4] tracking-wide">{children}</p>
);

export default function Contact({ id }) {
  const router = useRouter();
  const path = usePathname();

  return (
    <MainContainer id={"contact"} customStyles={"bg-white text-black"}>
      <Section>
        <div className="w-full py-10 md:py-20 flex flex-col gap-y-5 md:gap-y-10">
          <SectionHeader
            heading={"Contact us"}
            description={"We Would Be Happy To Assist You"}
          />
          <div className="w-full flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20">
            <div className="w-full flex flex-col gap-y-7">
              <Heading color={"text-[#2727f4]"} textSize={"text-2xl md:text-4xl"}>
                We Would Be Happy To Make Financial Strategies For You
              </Heading>
              <Description color={"text-black"}>
                Do you want to talk about some incredible investing methods or ask any queries you may have about financial planning? Feel free to get in touch with us. This may be the beginning of something truly amazing.
              </Description>
              <div className="flex gap-3 items-center">
                {socialIcons.map((social, i) => (
                  <Link key={i} href={social.link} className="hover:text-[#464bd8]" target="_blank">
                    {social.img}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="w-full lg:w-3/4">
                <Formik
                  initialValues={{
                    fullName: "",
                    phone: "",
                    email: "",
                    city: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "* Required";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                      errors.email = "* Invalid email address";
                    }
                    if (!values.fullName) {
                      errors.fullName = "* Required";
                    }
                    if (!values.phone) {
                      errors.phone = "* Required";
                    } else if (!/^\d+$/.test(values.phone)) {
                      errors.phone = "* Invalid Phone Number";
                    }
                    if (!values.city) {
                      errors.city = "* Required";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { resetForm, setSubmitting }) => {
                    try {
                      console.log("reached onSubmit");
                      values.path = path;
                      values.pageUrl = window.location.href;
                      const apiRes = await fetch("/api/submitForm", {
                        method: "POST",
                        body: JSON.stringify(values),
                      });

                      setSubmitting(false);
                      resetForm({ values: "" });
                      window.location.replace("/congratulations/?Form_name=Contact_Page_Form");
                    } catch (error) {
                      console.log("form error", error.message);
                      throw error;
                    }
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit} id="Contact_Page_Form" name="Contact Page Form">
                      <div className="w-full flex flex-col gap-1">
                        <label className="text-lg md:text-xl text-gray-800" htmlFor="fullName">
                          Name <span className="text-[#2727f4]">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                          required
                          className="p-3 rounded-md bg-white border border-black shadow-md focus:outline-none focus:border-[#2727f4]"
                        />
                        {errors.fullName && touched.fullName && errors.fullName ? (
                          <ErrorText>{errors.fullName}</ErrorText>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <label className="text-lg md:text-xl text-gray-800" htmlFor="phone">
                          Mobile Number <span className="text-[#2727f4]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                          className="p-3 rounded-md bg-white border border-black shadow-md focus:outline-none focus:border-[#2727f4]"
                          required
                        />
                        {errors.phone && touched.phone && errors.phone ? (
                          <ErrorText>{errors.phone}</ErrorText>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <label className="text-lg md:text-xl text-gray-800" htmlFor="email">
                          Email <span className="text-[#2727f4]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="p-3 rounded-md bg-white border border-black shadow-md focus:outline-none focus:border-[#2727f4]"
                          required
                        />
                        {errors.email && touched.email && errors.email ? (
                          <ErrorText>{errors.email}</ErrorText>
                        ) : null}
                      </div>
                      <div className="w-full border-gray-900 flex flex-col gap-1">
                        <label className="text-lg md:text-xl text-black" htmlFor="city">
                          City <span className="text-[#2727f4]">*</span>
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                          className="p-3 rounded-md bg-white border border-black shadow-md focus:outline-none focus:border-[#2727f4]"
                          required
                        />
                        {errors.city && touched.city && errors.city ? (
                          <ErrorText>{errors.city}</ErrorText>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <label className="text-lg md:text-xl text-black" htmlFor="query">
                          Message <span className="text-[#2727f4]"></span>
                        </label>
                        <textarea
                          id="query"
                          name="query"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.query}
                          placeholder="Write to us"
                          className="p-3 rounded-md bg-white border border-black shadow-md focus:outline-none focus:border-[#2727f4]"
                        />
                      </div>
                      <button
                        disabled={isSubmitting}
                        className="px-4 py-2 rounded-md bg-[#464bd8] w-full md:w-max text-white text-xl self-end flex justify-center"
                        type="submit"
                      >
                        {isSubmitting ? <Loader /> : "Submit"}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainContainer>
  );
}
