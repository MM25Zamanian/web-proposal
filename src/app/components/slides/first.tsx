import GoldBar from "../gold-bar";
import Image from "next/image";
import GoldenLogo1 from "#/images/golden-logo-1.webp";
import GoldenLogo2 from "#/images/golden-logo-2.webp";
import GoldenLogo3 from "#/images/golden-logo-3.webp";

export default function FirstSlide() {
  return (
    <section className="h-[100dvh] w-full bg-[#201d18] relative flex flex-col items-center justify-center">
      <div className="absolute top-6 -start-1 flex items-start flex-col gap-3">
        <GoldBar className="w-[50vw] min-w-52 max-w-[30rem] animate-fade-right animate-duration-1300 animate-delay-0 animate-ease-in-out" />
        <GoldBar className="w-[45vw] min-w-44 max-w-[26rem] animate-fade-right animate-duration-1300 animate-delay-200 animate-ease-in-out" />
        <GoldBar className="w-[40vw] min-w-36 max-w-[22rem] animate-fade-right animate-duration-1300 animate-delay-400 animate-ease-in-out" />
      </div>

      <div className="absolute bottom-6 -end-1 flex items-end flex-col gap-3">
        <GoldBar className="w-[40vw] min-w-36 max-w-[22rem] animate-fade-left animate-duration-1300 animate-delay-400 animate-ease-in-out" />
        <GoldBar className="w-[45vw] min-w-44 max-w-[26rem] animate-fade-left animate-duration-1300 animate-delay-200 animate-ease-in-out" />
        <GoldBar className="w-[50vw] min-w-52 max-w-[30rem] animate-fade-left animate-duration-1300 animate-delay-0 animate-ease-in-out" />
      </div>

      <div className="relative w-36 h-68 mb-4 pt-12 overflow-visible">
        <Image
          fill
          alt=""
          className="object-cover animate-fade-down animate-duration-1300 animate-delay-400 animate-ease-in-out"
          src={GoldenLogo1}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
          }}
        />
        <Image
          fill
          alt=""
          className="object-cover animate-fade-down animate-duration-1300 animate-delay-300 animate-ease-in-out"
          src={GoldenLogo2}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
          }}
        />
        <Image
          fill
          alt=""
          className="object-cover animate-fade-down animate-duration-1300 animate-delay-200 animate-ease-in-out"
          src={GoldenLogo3}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
          }}
        />
      </div>

      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide">
        <span className="animate-fade animate-duration-1300 animate-delay-200 animate-ease-in-out">S</span>
        <span className="animate-fade animate-duration-1300 animate-delay-300 animate-ease-in-out">e</span>
        <span className="animate-fade animate-duration-1300 animate-delay-400 animate-ease-in-out">p</span>
        <span className="animate-fade animate-duration-1300 animate-delay-500 animate-ease-in-out">a</span>
        <span className="animate-fade animate-duration-1300 animate-delay-600 animate-ease-in-out">n</span>
        <span className="animate-fade animate-duration-1300 animate-delay-700 animate-ease-in-out">d</span>
      </h1>
    </section>
  );
}
