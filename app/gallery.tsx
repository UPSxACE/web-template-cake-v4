import Link from "next/link";
import lobster from "./fonts/lobster";
import saira from "./fonts/saira";
export default function Gallery() {
  return (
    <div
      className={`py-20 w-full flex flex-col justify-center max-w-screen-xl gap-8 ${saira.className}`}
    >
      <h1
        className={`text-6xl max-sm:text-4xl text-[#381C0F] text-center font-semibold ${lobster.className}`}
      >
        Infinitas Opções
      </h1>
      <p className="text-center text-lg max-sm:text-base">
        Feitos com amor a pensar em si, não vai conseguir resistir às nossas
        criações!
      </p>
      <div className="flex justify-center mt-3">
        <div className="w-full max-w-6xl">
          <div className="flex gap-4 flex-wrap">
            {data.slice(0, 8).map((x, index) => (
              <div
                key={index}
                className="basis-full sm:basis-[calc(50%-0.50rem)] md:basis-[calc(25%-0.75rem)]"
              >
                <article className="flex flex-col w-full gap-1">
                  <Link
                    href="/contact"
                    style={{
                      backgroundImage: `url(${x.imageSrc})`,
                      backgroundSize: "cover",
                    }}
                    className="w-full aspect-square bg-red-50 rounded-none"
                  ></Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link
        className="text-center font-medium hover:bg-theme-grey5 hover:text-white border border-solid border-theme-grey-5 w-fit p-2 px-4 rounded-3xl ml-auto mr-auto"
        href="/gallery"
      >
        Ver mais
      </Link>
    </div>
  );
}

const data = [
  {
    imageSrc: "/gallery/1.jpg",
    title: "Bolo de Aniversário",
    price: 65,
    description:
      "Massa de noz com recheio de limão e caramelo salgado.\nCobertura de butercream.",
  },
  {
    imageSrc: "/gallery/2.jpg",
    title: "Bolo de Aniversário",
    price: 55.1,
    description:
      "Massa de noz com recheio de caramelo salgado e massa de Pão de ló com recheio de crocante de chocolate branco.\nCobertura de butercream",
  },
  {
    imageSrc: "/gallery/3.jpg",
    title: "Bolo de Aniversário",
    price: 50.01,
    description:
      "Massa de framboesa com recheio de frutos silvestres.\nCobertura de butercream.",
  },
  {
    imageSrc: "/gallery/4.jpg",
    title: "Bolo de Aniversário",
    price: 45,
    description:
      "Massa de cenoura com recheio de creme de avelã.\nCobertura de chantily.",
  },
  {
    imageSrc: "/gallery/5.jpg",
    title: "Bolo de Aniversário",
    price: 45,
    description:
      "Massa de laranja com recheio de morango.\nCobertura de chantily.",
  },
  {
    imageSrc: "/gallery/6.jpg",
    title: "Bolo de Aniversário",
    price: 50,
    description:
      "Massa de chocolate com recheio de maracuja.\nCobertura de butercream.",
  },
  {
    imageSrc: "/gallery/7.jpg",
    title: "Bolo de Aniversário",
    price: 65,
    description:
      "Massa de noz com recheio de limão e caramelo salgado.\nCobertura de butercream.",
  },
  {
    imageSrc: "/gallery/8.jpg",
    title: "Bolo de Aniversário",
    price: 55.1,
    description:
      "Massa de noz com recheio de caramelo salgado e massa de Pão de ló com recheio de crocante de chocolate branco.\nCobertura de butercream",
  },
];