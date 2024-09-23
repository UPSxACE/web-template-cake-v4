"use client";
import Seal from "@/components/svg/seal";
import { AnimationProps, motion } from "framer-motion";
import { LuCakeSlice, LuCandyCane, LuCastle, LuCheck } from "react-icons/lu";
import saira from "./fonts/saira";

const container: AnimationProps["variants"] = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item: AnimationProps["variants"] = {
  hidden: { opacity: 0, y: "32px" },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      // ease: "easeOut",
      duration: 0.4,
    },
  },
};

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="-mt-4 relative before:bg-[#37312e] before:bg-opacity-[0.9] before:absolute before:h-full before:w-full z-10"
      style={{
        mask: "url(/waves-2-down.svg) bottom, url(/waves-2.svg) top",
        maskSize: "cover",
        maskRepeat: "no-repeat",
        maskComposite: "intersect",
        background: "url(/backgrounds/bg12.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center px-8 py-10 sm:px-12 lg:py-0 flex-1 h-96 max-md:h-auto">
        <motion.div
          variants={container}
          initial={"hidden"}
          whileInView="show"
          viewport={{ amount: 0.8, once: true }}
          className={`w-full flex justify-around items-center max-w-screen-xl gap-x-5 gap-y-5 lg:gap-32 ${saira.className} max-md:flex-wrap`}
        >
          {specialties_.slice(0, 4).map((x, i) => (
            <motion.article
              variants={item}
              key={i}
              className="flex flex-1 flex-col items-center z-10 max-sm:basis-[calc(50%_-_0.625rem)] sm:basis-[calc(25%_-_0.9375rem)]"
            >
              <div className="h-full w-full max-h-32 max-w-32 lg:h-32 lg:w-32 relative">
                <Seal
                  classNames={{
                    wrapper: "h-full w-full max-h-32 max-w-32 lg:h-32 lg:w-32",
                    background: "fill-transparent",
                    border: "fill-white",
                  }}
                />
                {x.icon}
              </div>
              <span className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white text-center mt-2 lg:mt-4 font-semibold">
                {x.text}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const specialties_ = [
  {
    text: "Tradição",
    icon: (
      <LuCastle className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Qualidade",
    icon: (
      <LuCheck className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Criatividade",
    icon: (
      <LuCandyCane className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Paixão",
    icon: (
      <LuCakeSlice className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
];
