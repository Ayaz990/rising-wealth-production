import Botttom from "./_components/Bottom";
import Component from "./_components/Card";
import Heading1 from "./_components/Heading1";
import Heading2 from "./_components/Heading2";
import Heading3 from "./_components/Heading3";
import Heading4 from "./_components/Heading4";
import Slider from "./_components/Slider";
import Contact from "./_components/Contact"
import FAQ from "./_components/FAQ";

export default function Page() {
  return (
    <>
      <Heading1 />
      {/* <Heading2 /> */}
      <Component/>
      <Heading4 />
      < FAQ/>
      <Contact />
      
      {/* <Slider theme={"dark"} /> */}
      {/* <Botttom /> */}
    </>
  );
}
