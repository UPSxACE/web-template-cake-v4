import Link from "next/link";
import leckerli from "./fonts/leckerli";
import saira from "./fonts/saira";
export default function Gallery() {
  return (
    <div
      className={`py-20 w-full flex flex-col justify-center max-w-screen-xl gap-8 ${saira.className}`}
    >
      <h1
        className={`text-5xl text-[#381C0F] text-center font-semibold ${leckerli.className}`}
      >
        Infinitas Opções
      </h1>
      <div className="flex justify-center mt-3">
        <div className="w-full max-w-5xl">
          <div className="flex gap-4 flex-wrap">
            {data.slice(0, 8).map((x, index) => (
              <div key={index} className="basis-[calc(25%-0.75rem)]">
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
];
