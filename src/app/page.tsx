"use client";

import FirstSlide from "./components/slides/first";

import Slide1Image1 from "#/samples/slide-1/slide-1.jpeg";
import Slide1Image2 from "#/samples/slide-1/slide-2.jpeg";
import Slide1Image3 from "#/samples/slide-1/slide-3.jpeg";
import Slide1Image4 from "#/samples/slide-1/slide-4.jpeg";
import Slide1Image5 from "#/samples/slide-1/slide-5.jpeg";
import Slide1Image6 from "#/samples/slide-1/slide-6.jpeg";
import Slide1Image7 from "#/samples/slide-1/slide-7.jpeg";
import Slide1Image8 from "#/samples/slide-1/slide-8.jpeg";
import Slide1Image9 from "#/samples/slide-1/slide-9.jpeg";

import Slide2Image1 from "#/samples/slide-2/slide-1.jpeg";
import Slide2Image2 from "#/samples/slide-2/slide-2.jpeg";
import Slide2Image3 from "#/samples/slide-2/slide-3.jpeg";
import Slide2Image4 from "#/samples/slide-2/slide-4.jpeg";
import Slide2Image5 from "#/samples/slide-2/slide-5.jpeg";
import Slide2Image6 from "#/samples/slide-2/slide-6.jpeg";
import Slide2Image7 from "#/samples/slide-2/slide-7.jpeg";
import Slide2Image8 from "#/samples/slide-2/slide-8.jpeg";
import Slide2Image9 from "#/samples/slide-2/slide-9.jpeg";

import Slide3Image1 from "#/samples/slide-3/slide-1.jpeg";
import Slide3Image2 from "#/samples/slide-3/slide-2.jpeg";
import Slide3Image3 from "#/samples/slide-3/slide-3.jpeg";
import Slide3Image4 from "#/samples/slide-3/slide-4.jpeg";
import Slide3Image5 from "#/samples/slide-3/slide-5.jpeg";
import Slide3Image6 from "#/samples/slide-3/slide-6.jpeg";

import Slide4Image1 from "#/samples/slide-4/slide-1.jpeg";
import Slide4Image2 from "#/samples/slide-4/slide-2.jpeg";
import Slide4Image3 from "#/samples/slide-4/slide-3.jpeg";
import Slide4Image4 from "#/samples/slide-4/slide-4.jpeg";

import Slide5Image1 from "#/samples/slide-5/slide-1.jpeg";
import Slide5Image2 from "#/samples/slide-5/slide-2.jpeg";
import Slide5Image3 from "#/samples/slide-5/slide-3.jpeg";
import Slide5Image4 from "#/samples/slide-5/slide-4.jpeg";
import Slide5Image5 from "#/samples/slide-5/slide-5.jpeg";
import dynamic from "next/dynamic";

const ImageSlide = dynamic(() => import("./components/slides/image"), {
  ssr: false,
});
const SecondSlide = dynamic(() => import("./components/slides/second"), {
  ssr: false,
});
const ThirdSlide = dynamic(() => import("./components/slides/third"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col *:shrink-0 snap-y snap-mandatory *:snap-center overflow-x-hidden overflow-y-scroll relative size-full">
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <ImageSlide
        title="Takht-E"
        strongTitle="Jamshid"
        subtitle="Petrochemical Co."
        images={[
          Slide1Image1,
          Slide1Image2,
          Slide1Image3,
          Slide1Image4,
          Slide1Image5,
          Slide1Image6,
          Slide1Image7,
          Slide1Image8,
          Slide1Image9,
        ]}
      />
      <ImageSlide
        title="Persian Gulf"
        strongTitle="Holding"
        subtitle="Petrochemical Co."
        images={[
          Slide2Image1,
          Slide2Image2,
          Slide2Image3,
          Slide2Image4,
          Slide2Image5,
          Slide2Image6,
          Slide2Image7,
          Slide2Image8,
          Slide2Image9,
        ]}
      />
      <ImageSlide
        title="Chadormalu"
        strongTitle="Mining"
        subtitle="Industrial Co."
        images={[
          Slide3Image1,
          Slide3Image2,
          Slide3Image3,
          Slide3Image4,
          Slide3Image5,
          Slide3Image6,
        ]}
      />
      <ImageSlide
        title="Khouzestan"
        subtitle="Oxin Steel Co."
        images={[Slide4Image1, Slide4Image2, Slide4Image3, Slide4Image4]}
      />
      <ImageSlide
        title="Jam"
        strongTitle="Petrochemifcal Company"
        subtitle="World Class"
        images={[
          Slide5Image1,
          Slide5Image2,
          Slide5Image3,
          Slide5Image4,
          Slide5Image5,
        ]}
      />
    </main>
  );
}
