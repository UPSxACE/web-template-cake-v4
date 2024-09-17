"use client";
import { Button } from "@/components/ui/layout/button";
import { Leckerli_One, Saira } from "next/font/google";
import Image from "next/image";

const leckerli = Leckerli_One({ subsets: ["latin"], weight: ["400"] });

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "300", "500", "600", "700", "400"],
});

// const poiret = Poiret_One({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export default function Cta() {
  return (
    <article className="pb-24 w-full flex max-w-[1280px]">
      <div className="flex flex-col h-full justify-center gap-1">
        <span className={`text-4xl ${saira.className} font-light`}>
          Os melhores
        </span>
        <span className={`text-7xl font-bold ${leckerli.className}`}>
          Bolos de Aniversário
        </span>
        <span className={`text-4xl ${saira.className} font-light`}>
          Cupcakes, Tartes, Semifrios, e muito mais...
        </span>
        <Button
          className={`text-xl w-min ${saira.className} h-auto p-2 px-4 font-light mt-6`}
        >
          PEDIR ORÇAMENTO
        </Button>
      </div>
      <div className="ml-auto h-full flex flex-col justify-center relative">
        <div className="aspect-[1096/1103] h-[30rem] relative">
          <div className="aspect-[7108/7524] h-[27rem] absolute top-[1.45rem] right-[2.65rem]">
            <Image src="/cake.png" alt="delicious cake" fill />
          </div>
          <div className="aspect-[1096/1103] h-[30rem] absolute top-0 right-0">
            <Image
              className="pointer-events-none"
              src="/cake-border.svg"
              alt="design detail"
              fill
            />
          </div>
          <Image
            src="/gift.svg"
            alt="design detail"
            width={315 / 2.75}
            height={384 / 2.75}
            className="pointer-events-none absolute bottom-0 left-[-6.25rem]"
          />
        </div>
      </div>
    </article>
  );
}
