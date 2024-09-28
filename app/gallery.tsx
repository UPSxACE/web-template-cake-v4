import Image from "next/image";
import Link from "next/link";
import lobster from "./fonts/lobster";
import saira from "./fonts/saira";

export default function Gallery({ lastPictures }: { lastPictures: string[] }) {
  return (
    <section
      id="gallery"
      className="-mt-4 relative before:bg-white before:bg-opacity-80 before:absolute before:h-full before:w-full"
    >
      <div className="flex justify-center px-8 sm:px-12 flex-1 z-10 relative">
        <div
          className={`py-20 w-full flex flex-col justify-center max-w-screen-xl gap-8 ${saira.className}`}
        >
          <div className="flex flex-col gap-8">
            <h1
              className={`text-6xl max-sm:text-4xl text-[#d998bf] text-center font-semibold ${lobster.className}`}
            >
              Infinitas Opções
            </h1>
            <p className="text-center text-lg max-sm:text-base">
              Feitos com amor a pensar em si, não vai conseguir resistir às
              nossas criações!
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <div className="w-full max-w-6xl">
              <div className="flex gap-4 flex-wrap">
                {lastPictures.map((x, index) => (
                  <div
                    key={index}
                    className="basis-full sm:basis-[calc(50%-0.50rem)] md:basis-[calc(25%-0.75rem)]"
                  >
                    <article className="flex flex-col w-full gap-1">
                      <Link
                        href="/contact"
                        className="w-full aspect-square bg-gray-300 rounded-none relative"
                      >
                        <Image
                          src={x}
                          fill
                          alt="uma de nossas criações"
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, 25vw"
                          quality={75}
                        />
                        <div className="absolute opacity-0 hover:opacity-80 bg-[#262321] w-full h-full transition-all duration-300 text-white flex justify-center items-center text-lg select-none">
                          Encomende Já
                        </div>
                      </Link>
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
      </div>
    </section>
  );
}
