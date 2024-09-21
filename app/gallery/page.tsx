import Footer from "@/components/ui/layout/footer";
import Header from "@/components/ui/layout/header";
import Image from "next/image";
import leckerli from "../fonts/leckerli";
import saira from "../fonts/saira";

export default function GalleryPage() {
  return (
    <main
      className={`min-h-[calc(100svh_+_1rem)] bg-full -z-20 relative flex flex-col text-theme-grey-5 ${saira.className}`}
    >
      <div className="min-h-[calc(100svh_+_1rem)] pb-4 flex flex-col relative">
        <Header activeTab="/gallery" />
        <article className="py-4 pb-16 w-full flex flex-col items-center gap-4">
          <div className="w-full max-w-screen-xl">
            <h1 className={`text-6xl text-center ${leckerli.className}`}>
              As nossas criações
            </h1>
          </div>
          <div className="w-full grid grid-cols-4 gap-4 max-w-screen-xl mt-4">
            {pictures.map((x, i) => (
              <div key={i} className="aspect-square w-full relative">
                <Image src={x} className="" fill alt="bolo feito com amor" />
              </div>
            ))}
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

const pictures = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/Pic(1).jpg",
  "/gallery/Pic(2).jpg",
  "/gallery/Pic(3).jpg",
  "/gallery/Pic(4).jpg",
  "/gallery/Pic(5).jpg",
  "/gallery/Pic(6).jpg",
  "/gallery/Pic(7).jpg",
  "/gallery/Pic(8).jpg",
  "/gallery/Pic(9).jpg",
  "/gallery/Pic(10).jpg",
  "/gallery/Pic(11).jpg",
  "/gallery/Pic(12).jpg",
  "/gallery/Pic(13).jpg",
  "/gallery/Pic(14).jpg",
  "/gallery/Pic(15).jpg",
  "/gallery/Pic(16).jpg",
];
