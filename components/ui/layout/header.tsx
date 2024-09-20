import saira from "@/app/fonts/saira";
import { Lobster } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Header({ activeTab }: { activeTab: string }) {
  return (
    <header className="h-24 flex justify-center px-12">
      <div className="flex w-full items-center max-w-screen-xl">
        <div
          className={`h-12 bg-white rounded-3xl flex items-center p-2 text-lg justify-center text-theme-grey5 ${lobster.className}`}
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
              href={x.link}
              className={twMerge(
                "h-9 rounded-3xl flex justify-center items-center px-5 py-2 text-theme-brown font-semibold",
                x.link === (activeTab || "/")
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
    link: "/",
    text: "Início",
  },
  {
    link: "/gallery",
    text: "Galeria",
  },
  {
    link: "/about-us",
    text: "Sobre Nós",
  },
  {
    link: "/contact",
    text: "Contacto",
  },
];
