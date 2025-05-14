"use client";

import Image from "next/image";
import BlackLogo1 from "#/images/black-logo-1.webp";
import BlackLogo2 from "#/images/black-logo-2.webp";
import BlackLogo3 from "#/images/black-logo-3.webp";
import { motion } from "framer-motion";
export default function ThirdSlide() {
  return (
    <section className="h-screen w-full bg-[#fbc870] relative flex flex-col items-center justify-center p-6">
      <div className="flex flex-col gap-2 container max-w-lg lg:max-w-4xl xl:max-w-5xl mx-auto p-6 relative">
        <div className="flex flex-col text-black">
          <h1 className="text-7xl first-letter:font-extrabold font-extralight lg:text-9xl tracking-wide capitalize">
            our
          </h1>
          <h1 className="text-7xl first-letter:font-extrabold font-extralight lg:text-9xl tracking-wide capitalize">
            booth
          </h1>
          <h1 className="text-7xl first-letter:font-extrabold font-extralight lg:text-9xl tracking-wide capitalize">
            design
          </h1>
        </div>

        <div className="absolute -top-2 -start-2 size-44 border-t-4 border-s-4 border-black" />
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        className="absolute top-12 end-0 flex items-end flex-col gap-4"
      >
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.6,
              },
            },
          }}
          className="w-[20vw] min-w-24 max-w-[14rem] min-h-4 max-h-8 h-[3.5vh] bg-black rounded-xs"
        />
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.5,
              },
            },
          }}
          className="w-[30vw] min-w-32 max-w-[16rem] min-h-4 max-h-8 h-[3.5vh] bg-black rounded-xs"
        />
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.4,
              },
            },
          }}
          className="w-[40vw] min-w-40 max-w-[18rem] min-h-4 max-h-8 h-[3.5vh] bg-black rounded-xs"
        />
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.5,
              },
            },
          }}
          className="w-[30vw] min-w-32 max-w-[16rem] min-h-4 max-h-8 h-[3.5vh] bg-black rounded-xs"
        />
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.6,
              },
            },
          }}
          className="w-[20vw] min-w-24 max-w-[14rem] min-h-4 max-h-8 h-[3.5vh] bg-black rounded-xs"
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        className="absolute bottom-12 -start-10 flex h-36 w-72 md:h-48 md:w-92 items-end flex-col gap-4"
      >
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "-200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.2,
              },
            },
          }}
          className="absolute inset-0"
        >
          <Image src={BlackLogo1} alt="" fill className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "-200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.3,
              },
            },
          }}
          className="absolute inset-0"
        >
          <Image src={BlackLogo2} alt="" fill className="object-cover" />
        </motion.div>
        <motion.div
          variants={{
            offscreen: { opacity: 0, translateX: "-200px" },
            onscreen: {
              opacity: 0.2,
              translateX: "0px",
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delay: 0.4,
              },
            },
          }}
          className="absolute inset-0"
        >
          <Image src={BlackLogo3} alt="" fill className="object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}
