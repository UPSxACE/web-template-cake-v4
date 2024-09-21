import Link from "next/link";
import { TbBrandCakephp } from "react-icons/tb";
import leckerli from "./fonts/leckerli";
import saira from "./fonts/saira";

export default function More() {
  return (
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
        <TbBrandCakephp className="stroke-1 h-28 w-28 text-white" />
        {/* </div> */}
        <h1
          className={`text-6xl text-white text-center font-semibold ${leckerli.className}`}
        >
          Feito com Amor
        </h1>
        <p className="text-base text-white text-center max-w-[48rem] mt-5">
          As ideias partem de si, nós a tornamos realidade!
          <br />
          Nossas criação são preparadas com todo o carinho e atenção ao
          pormenor, garantindo sabor e beleza em cada criação. Desde receitas
          tradicionais a designs personalizados, tornamos as suas celebrações
          ainda mais especiais!
        </p>
        <Link
          className="mt-5 text-xl text-white text-center font-medium hover:bg-white hover:text-black border border-solid border-white hover:border-theme-grey5 w-fit p-2 px-4 rounded-3xl ml-auto mr-auto"
          href="/contact"
        >
          SABER MAIS
        </Link>
      </article>
    </div>
  );
}
