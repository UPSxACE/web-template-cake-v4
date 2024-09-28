"use client";
import { Button } from "@/components/ui/layout/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import leckerli from "./fonts/leckerli";
import saira from "./fonts/saira";

const MotionButton = motion.create(Button);

export default function Cta() {
  return (
    <article className="pb-6 w-full flex max-w-screen-xl gap-4 text-[#494949]">
      <div className="flex flex-col h-full justify-center gap-1 w-full md:w-6/12 lg:w-7/12">
        <motion.span
          initial={{ opacity: 0, translateX: "64px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ bounce: 0, duration: 0.5, delay: 0.2 }}
          className={`text-2xl sm:text-3xl md:text-2xl lg:text-4xl ${saira.className} font-light`}
        >
          Os melhores
        </motion.span>
        <motion.span
          initial={{ opacity: 0, translateX: "64px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ bounce: 0, duration: 0.5, delay: 0.2 + 0.25 }}
          className={`text-[2.5rem] sm:text-6xl md:text-5xl lg:text-7xl font-bold ${leckerli.className} text-[#0079b6]`}
        >
          Bolos de Aniversário
        </motion.span>
        <motion.span
          initial={{ opacity: 0, translateX: "64px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ bounce: 0, duration: 0.5, delay: 0.2 + 0.25 + 0.25 }}
          className={`text-xl sm:text-3xl md:text-2xl lg:text-4xl ${saira.className} font-light`}
        >
          Cupcakes, Tartes, Semifrios, e muito mais...
        </motion.span>
        <MotionButton
          initial={{ opacity: 0, translateX: "56px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            bounce: 0,
            duration: 0.5,
            delay: 0.2 + 0.25 + 0.25 + 0.25,
          }}
          className={`bg-[#0079b6] text-base sm:text-xl md:text-lg lg:text-xl w-min ${saira.className} h-auto p-1 px-3 sm:p-2 sm:px-4 font-light mt-2 sm:mt-6`}
          asChild
        >
          <Link href="/contact">PEDIR ORÇAMENTO</Link>
        </MotionButton>
      </div>
      <div className="hidden ml-auto h-full md:flex flex-col justify-center items-end relative md:w-6/12 lg:w-5/12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            bounce: 0,
            duration: 0.7 + 0.25 + 0.25 + 0.15,
            delay: 0.2 + 0.25 + 0.25 + 0.25 + 0.1,
          }}
          className="aspect-[924/1202] relative w-[80%] mr-auto ml-auto"
        >
          <Image
            priority
            decoding="sync"
            className="p-[8%]"
            src="/cake14.png"
            alt="delicious cake"
            fill
            sizes="(max-width: 768px) 33vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </article>
  );
}
