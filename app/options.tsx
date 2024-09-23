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
import Link from "next/link";
import leckerli from "./fonts/leckerli";
import lobster from "./fonts/lobster";
import saira from "./fonts/saira";

export default function Options() {
  const state = useCarouselState();

  return (
    <section id="options" className="bg-white">
      <div className="flex justify-center px-8 sm:px-12 flex-1">
        <div
          className={`py-16 pb-24 w-full flex flex-col justify-center items-center max-w-screen-xl gap-8 ${saira.className}`}
        >
          <h1
            className={`text-6xl max-sm:text-4xl text-[#381C0F] text-center font-semibold ${lobster.className}`}
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
                {data.map((x, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333333%-1rem)]"
                  >
                    <article className="flex flex-col w-full px-4 gap-1">
                      <Link
                        href="/contact"
                        style={{
                          backgroundImage: `url(${x.imageSrc})`,
                          backgroundSize: "cover",
                        }}
                        className="w-full aspect-square bg-gray-300 rounded-3xl"
                      ></Link>
                      <Link
                        href="/contact"
                        className={`text-center text-xl font-medium ${leckerli.className} mt-2`}
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

const data = [
  {
    imageSrc: "/cakes/cake1.jpeg",
    title: "Bolo de Aniversário",
    price: 65,
    description:
      "Massa de noz com recheio de limão e caramelo salgado.\nCobertura de butercream.",
  },
  {
    imageSrc: "/cakes/cake2.jpeg",
    title: "Bolo de Aniversário",
    price: 55.1,
    description:
      "Massa de noz com recheio de caramelo salgado e massa de Pão de ló com recheio de crocante de chocolate branco.\nCobertura de butercream",
  },
  {
    imageSrc: "/cakes/cake3.jpeg",
    title: "Bolo de Aniversário",
    price: 50.01,
    description:
      "Massa de framboesa com recheio de frutos silvestres.\nCobertura de butercream.",
  },
  {
    imageSrc: "/cakes/cake4.jpeg",
    title: "Bolo de Aniversário",
    price: 45,
    description:
      "Massa de cenoura com recheio de creme de avelã.\nCobertura de chantily.",
  },
  {
    imageSrc: "/cakes/cake5.jpeg",
    title: "Bolo de Aniversário",
    price: 45,
    description:
      "Massa de laranja com recheio de morango.\nCobertura de chantily.",
  },
  {
    imageSrc: "/cakes/cake6.jpeg",
    title: "Bolo de Aniversário",
    price: 50,
    description:
      "Massa de chocolate com recheio de maracuja.\nCobertura de butercream.",
  },
];
