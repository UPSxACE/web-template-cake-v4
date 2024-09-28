"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/sui/carousel";
import {
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/layout/carousel-buttons";
import useCarouselState from "@/components/ui/layout/use-carousel-state";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import leckerli from "./fonts/leckerli";
import lobster from "./fonts/lobster";
import saira from "./fonts/saira";

export type PriceData = {
  imageSrc: string;
  title: string;
  price: number;
  description: string;
};

export default function Options({ pricesData }: { pricesData: PriceData[] }) {
  const state = useCarouselState();

  return (
    <section id="options" className="bg-white">
      <div className="flex justify-center px-8 sm:px-12 flex-1">
        <div
          className={`py-16 pb-24 w-full flex flex-col justify-center items-center max-w-screen-xl gap-8 ${saira.className}`}
        >
          <h1
            className={`text-6xl max-sm:text-4xl text-[#58a17e] text-center font-semibold ${lobster.className}`}
          >
            Preços
          </h1>
          <p className="text-center text-lg max-sm:text-base">
            Aqui está uma amostra dos nossos trabalhos e respetivos preços.
          </p>
          <div className="flex justify-center mt-3 w-full">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              setApi={state.setApi}
              className="w-full max-w-[calc(100%_-_2rem)] sm:max-w-[calc(100%_-_8rem)] xl:max-w-5xl"
              opts={{ align: "start" }}
            >
              <CarouselContent className="flex gap-6">
                {pricesData.map((x, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333333%-1rem)]"
                  >
                    <article className="flex flex-col w-full px-4 gap-1">
                      <Link
                        href="/contact"
                        className="w-full aspect-square bg-gray-300 rounded-3xl relative overflow-hidden"
                      >
                        <Image
                          src={x.imageSrc}
                          fill
                          alt="uma de nossas criações"
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
                        />
                      </Link>
                      <Link
                        href="/contact"
                        className={`text-center text-xl font-medium ${leckerli.className} mt-2 text-[#58a17e]`}
                      >
                        {x.title}
                      </Link>
                      <span className="text-center text-gray-600">
                        €{formatEuro(x.price)}
                      </span>
                      <p className="text-center mt-1">{x.description}</p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-[#381c0f]" state={state} />
              <CarouselNext className="text-[#381c0f]" state={state} />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatEuro(money: number) {
  const moneyStr = money.toString();
  const hasDecimal = money - Math.floor(money) !== 0;

  if (!hasDecimal) {
    return moneyStr + ".00";
  }

  const dotPosition = moneyStr.indexOf(".");
  const firstPart = moneyStr.slice(0, dotPosition);
  const secondPart = moneyStr.slice(dotPosition);

  return firstPart + secondPart.padEnd(3, "0");
}

