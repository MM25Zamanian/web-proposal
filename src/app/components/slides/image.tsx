"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { useEffect, useCallback } from "react";
import TTTenPattern from "./ttten";
import { useIsMobile } from "@/app/hooks/is-mobile";

type ImageSlideProps = {
  title: string;
  strongTitle?: string;
  subtitle: string;
  images: StaticImageData[];
};

export default function ImageSlide({
  images,
  title,
  strongTitle,
  subtitle,
}: ImageSlideProps) {
  const isMobile = useIsMobile();
  const [carouselRef, carouselApi] = useEmblaCarousel({}, [Fade()]);
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    axis: isMobile ? "x" : "y",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!carouselApi) return;
      carouselApi.scrollTo(index);
    },
    [carouselApi]
  );

  useEffect(() => {
    if (!carouselApi || !thumbsApi) return;

    const onSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      const slide = thumbsApi.slideNodes()[selectedIndex];

      if (slide) {
        thumbsApi
          .slideNodes()
          .forEach((_slide) => _slide.removeAttribute("data-active"));

        slide.setAttribute("data-active", "true");
      }

      thumbsApi.scrollTo(selectedIndex);
    };

    onSelect();

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, thumbsApi, isMobile]);

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7 }}
      className="h-[100dvh] w-full pb-24 bg-[#201d18] relative flex flex-col overflow-hidden items-center justify-center"
    >
      <motion.div
        className="absolute top-0 inset-x-0 max-h-[50vh] overflow-clip min-w-3xl"
        variants={{
          offscreen: { opacity: 0 },
          onscreen: {
            opacity: 1,
            transition: {
              type: "spring",
              duration: 3,
            },
          },
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#201d18]" />

        <TTTenPattern className="-z-10 text-[#DF9F28]" />
      </motion.div>

      <motion.div
        variants={{
          offscreen: { translateY: "100px" },
          onscreen: {
            translateY: "0px",
            transition: {
              type: "spring",
              duration: 1.5,
            },
          },
        }}
        className="w-full flex flex-col md:flex-row md:aspect-[5/3] aspect-square container overflow-hidden max-w-4xl gap-4 items-center justify-center p-6"
      >
        <div
          className="flex-1 md:h-full w-full overflow-hidden"
          ref={carouselRef}
        >
          <div className="flex size-full touch-pan-x touch-pinch-zoom">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 translate-3d relative overflow-hidden rounded-2xl"
              >
                <Image
                  alt={`Slide ${index + 1}`}
                  src={image}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="md:h-full w-full md:w-auto overflow-hidden"
          ref={thumbsRef}
        >
          <div className="flex md:h-full w-full md:w-auto md:flex-col touch-pan-x touch-pinch-zoom gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onThumbClick(index)}
                className="aspect-[4/3] shrink-0 w-20 md:w-24 translate-3d relative overflow-hidden group bg-[#201d18] cursor-pointer"
              >
                <Image
                  alt={`Thumbnail ${index + 1}`}
                  src={image}
                  fill
                  className="object-cover rounded-2xl opacity-60 group-data-[active]:opacity-100 transition-opacity duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto absolute start-6 md:start-12 bottom-12">
        <motion.div className="flex flex-col gap-1 lg:gap-2">
          <motion.h1
            variants={{
              offscreen: { opacity: 0, translateX: "-50px" },
              onscreen: {
                opacity: 1,
                translateX: "0px",
                transition: {
                  type: "spring",
                  duration: 1.7,
                },
              },
            }}
            className="text-xl md:text-2xl lg:text-3xl flex gap-1 font-bold"
          >
            {title}
            {strongTitle && (
              <div className="flex flex-col">
                <span>{strongTitle}</span>
                <motion.span
                  variants={{
                    offscreen: { opacity: 0, scaleX: 0 },
                    onscreen: {
                      opacity: 1,
                      scaleX: 1,
                      transition: {
                        type: "spring",
                        duration: 1.7,
                      },
                    },
                  }}
                  className="w-full h-1 lg:h-1.5 gold-gradient rounded-xs"
                />
              </div>
            )}
          </motion.h1>
          <motion.h1
            variants={{
              offscreen: { opacity: 0, translateX: "-50px" },
              onscreen: {
                opacity: 1,
                translateX: "0px",
                transition: {
                  type: "spring",
                  duration: 1.7,
                  delay: 0.2,
                },
              },
            }}
            className="text-xl md:text-2xl lg:text-3xl font-light"
          >
            {subtitle}
          </motion.h1>
        </motion.div>
      </div>
    </motion.section>
  );
}
