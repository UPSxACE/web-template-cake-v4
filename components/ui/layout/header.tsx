"use client";
import lobster from "@/app/fonts/lobster";
import saira from "@/app/fonts/saira";
import { Button } from "@/components/sui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sui/sheet";
import Image from "next/image";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export default function Header({ activeTab }: { activeTab: string }) {
  return (
    <header className="h-20 flex justify-center px-8 sm:px-12 bg-white !bg-transparent z-10">
      <div className="flex w-full items-center max-w-screen-xl">
        <div className="flex w-full items-center bg-transparent max-sm:bg-white max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:px-6 max-sm:shadow-sm max-sm:min-h-14">
          <Link
            href="/"
            className={`h-auto sm:h-12 bg-white rounded-3xl flex items-center p-2 text-lg justify-center text-theme-grey5 ${lobster.className}`}
          >
            <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="logo"
              className="block mr-2 max-sm:w-7 max-sm:min-h-7"
            />
            Feito com Amor
          </Link>
          <nav
            className={`h-12 bg-white rounded-3xl ml-auto hidden lg:flex items-center p-2 ${saira.className}`}
          >
            {tabs.map((x, i) => (
              <Link
                key={i}
                href={x.link}
                className={twMerge(
                  "h-9 rounded-3xl flex justify-center items-center px-5 py-2 text-[#494949] font-semibold",
                  x.link === (activeTab || "/")
                    ? "bg-[#0079b6] text-white"
                    : "hover:bg-gray-200"
                )}
                target={x.external ? "_blank" : undefined}
              >
                {x.text}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={`h-12 w-12 bg-white rounded-3xl ml-auto lg:hidden flex items-center p-2 ${saira.className} text-3xl`}
              >
                <IoMenuSharp />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link
                    href="/"
                    className={`h-12 text-xl sm:text-2xl text-theme-grey5 ${lobster.className}`}
                  >
                    Feito com Amor
                  </Link>
                </SheetTitle>
                <SheetDescription className="text-left">
                  <nav className={`flex flex-col ${saira.className}`}>
                    {tabs.map((x, i) => (
                      <Link
                        key={i}
                        href={x.link}
                        className={twMerge(
                          "pb-1 text-neutral-600 font-medium text-base sm:text-lg",
                          x.link === (activeTab || "/")
                            ? "text-neutral-800 font-bold"
                            : "hover:text-neutral-800"
                        )}
                        target={x.external ? "_blank" : undefined}
                      >
                        {x.text}
                      </Link>
                    ))}
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
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
    link: "https://www.instagram.com/feitocomamor242024",
    text: "Instagram",
    external: true,
  },
  {
    link: "/contact",
    text: "Contacto",
  },
];
