import { Button } from "@/components/ui/layout/button";
import Footer from "@/components/ui/layout/footer";
import Header from "@/components/ui/layout/header";
import Link from "next/link";
import leckerli from "../fonts/leckerli";
import saira from "../fonts/saira";
import Pictures from "./pictures";
import fetchPictures from "@/actions/fetch-pictures";

export default async function GalleryPage() {
  const firstPictures = await fetchPictures({ pageParam: 1 });
  return (
    <main
      className={`min-h-[calc(100svh_+_1rem)] bg-full -z-20 relative flex flex-col text-theme-grey-5 ${saira.className}`}
    >
      <div className="min-h-[calc(100svh_+_1rem)] pb-4 flex flex-col relative">
        <Header activeTab="/gallery" />
        <article className="py-4 pb-16 w-full flex flex-col items-center gap-4 px-8 sm:px-12">
          <div className="w-full max-w-screen-xl">
            <h1
              className={`text-5xl sm:text-6xl text-center ${leckerli.className} text-[#0079b6]`}
            >
              As nossas criações
            </h1>
          </div>
          <Pictures firstPictures={firstPictures} />
          <Button
            className={`bg-[#0079b6] text-base sm:text-xl md:text-lg lg:text-xl w-min ${saira.className} h-auto p-1 px-3 sm:p-2 sm:px-4 font-light mt-2 sm:mt-4`}
            asChild
          >
            <Link href="/contact">PEDIR ORÇAMENTO</Link>
          </Button>
        </article>
      </div>
      <Footer />
    </main>
  );
}
