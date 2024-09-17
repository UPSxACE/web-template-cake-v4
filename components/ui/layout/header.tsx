import { Lobster, Saira } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "300", "500", "600", "700", "400"],
});

export default function Header({ activeTab }: { activeTab: string }) {
  return (
    <header className="h-24 flex justify-center px-12">
      <div className="flex w-full items-center max-w-[1280px]">
        <div
          className={`h-12 bg-white rounded-3xl flex items-center p-2 text-lg justify-center ${lobster.className}`}
        >
          <Image
            src="/logo.svg"
            width={36}
            height={36}
            alt="logo"
            className="mr-2"
          />
          Feito com Amor
        </div>
        <nav
          className={`h-12 bg-white rounded-3xl ml-auto flex items-center p-2 ${saira.className}`}
        >
          {tabs.map((x, i) => (
            <Link
              key={i}
              href="#"
              className={twMerge(
                "h-9 rounded-3xl flex justify-center items-center px-5 py-2 text-theme-orange font-semibold",
                x.id === (activeTab || "/")
                  ? "bg-theme-grey5 text-white"
                  : "hover:bg-gray-200"
              )}
            >
              {x.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const tabs = [
  {
    id: "/",
    text: "Início",
  },
  {
    id: "/prices",
    text: "Preço",
  },
  {
    id: "/about-us",
    text: "Sobre Nós",
  },
  {
    id: "/contact",
    text: "Contacto",
  },
];
