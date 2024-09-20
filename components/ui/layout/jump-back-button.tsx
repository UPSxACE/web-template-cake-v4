"use client";
import Seal from "@/components/svg/seal";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
export default function JumpBackButton() {
  const goTop = () => window.scrollTo({ top: 0, left: 0 });

  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest > 0);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={goTop}
          className={
            "fixed bottom-6 right-6 group flex justify-center items-center"
          }
        >
          <Seal
            classNames={{
              wrapper: "h-[3.15rem] w-[3.15rem]",
              background:
                "fill-transparent group-hover:fill-theme-pink5 transition-all [transition-duration:400ms]",
              border:
                "fill-theme-pink5 transition-all [transition-duration:400ms]",
            }}
          />
          <FaChevronUp className="text-theme-pink5 group-hover:text-white transition-all [transition-duration:400ms] absolute text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
