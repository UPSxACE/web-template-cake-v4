import Link from "next/link";
import { TbBrandCakephp } from "react-icons/tb";
import leckerli from "./fonts/leckerli";
import saira from "./fonts/saira";

export default function More() {
  return (
    <section
      id="more"
      className="-mt-4 relative before:bg-[#84b2c9] before:bg-opacity-[0.87] before:absolute before:h-full before:w-full"
      style={{
        mask: "url(/waves-2-down.svg) bottom, url(/waves-2.svg) top",
        maskSize: "cover",
        maskRepeat: "no-repeat",
        maskComposite: "intersect",
        background: "url(/backgrounds/bg4.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center px-8 sm:px-12 flex-1 py-32 max-sm:py-24">
        <div
          className={`w-full flex justify-center items-center max-w-screen-xl gap-32 ${saira.className}`}
        >
          <article className="flex flex-col items-center z-10">
            {/* <div className="h-32 w-32 relative"> */}
            {/* <Seal
            classNames={{
              wrapper: "h-32 w-32",
              background: "fill-transparent",
              border: "fill-white",
            }}
          /> */}
            <TbBrandCakephp className="stroke-1 h-28 w-28 max-sm:h-20 max-sm:w-20 text-white" />
            {/* </div> */}
            <h1
              className={`text-6xl max-sm:text-5xl text-white text-center font-semibold ${leckerli.className}`}
            >
              Feito com Amor
            </h1>
            <p className="text-base max-sm:text-sm text-white text-center max-w-[48rem] mt-5 max-sm:mt-4">
              As ideias partem de si, nós a tornamos realidade!
              <br />
              Nossas criações são preparadas com todo o carinho e atenção ao
              pormenor, garantindo sabor e beleza em cada criação. Desde
              receitas tradicionais a designs personalizados, tornamos as suas
              celebrações ainda mais especiais!
            </p>
            <Link
              className="mt-5 max-sm:mt-4 text-xl max-sm:text-base text-white text-center font-medium hover:bg-white hover:text-black border border-solid border-white hover:border-theme-grey5 w-fit p-2 px-4 rounded-3xl ml-auto mr-auto"
              href="/contact"
            >
              SABER MAIS
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
