import Footer from "@/components/ui/layout/footer";
import Header from "@/components/ui/layout/header";
import Cta from "./cta";
import Gallery from "./gallery";
import More from "./more";
import Options from "./options";
import Shapes from "./shapes";
import Specialties from "./specialties";

export default function Home() {
  // try: -shapes
  //      -pink shapes
  //      -no shapes + pink gradient
  //      -no shapes + details on cake
  //      -details on cta text?

  return (
    <main className="min-h-[calc(100svh_-_1rem)] relative flex flex-col text-theme-grey-5 -z-20">
      <section
        id="cta"
        className="z-10 relative flex-1 flex flex-col bg-white min-h-[calc(100svh_-_1rem)] pb-8 overflow-hidden"
      >
        <Shapes />

        <Header activeTab="/" />
        <div className="flex justify-center px-12 flex-1">
          <Cta />
        </div>
      </section>
      <section
        id="specialties"
        className="-mt-4 relative before:bg-[#37312e] before:bg-opacity-[0.9] before:absolute before:h-full before:w-full z-10"
        style={{
          mask: "url(/waves-2-down.svg) bottom, url(/waves-2.svg) top",
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskComposite: "intersect",
          background: "url(/backgrounds/bg12.jpg)",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center px-12 flex-1 h-96">
          <Specialties />
        </div>
      </section>

      <section
        id="gallery"
        className="-mt-4 relative before:bg-white before:bg-opacity-80 before:absolute before:h-full before:w-full"
      >
        <div className="flex justify-center px-12 flex-1 z-10 relative">
          <Gallery />
        </div>
      </section>
      <section
        id="more"
        className="-mt-4 relative before:bg-[#37312e] before:bg-opacity-80 before:absolute before:h-full before:w-full"
        style={{
          mask: "url(/waves-2-down.svg) bottom, url(/waves-2.svg) top",
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskComposite: "intersect",
          background: "url(/backgrounds/bg4.jpg)",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center px-12 flex-1 py-32">
          <More />
        </div>
      </section>
      <section id="options" className="bg-white">
        <div className="flex justify-center px-12 flex-1">
          <Options />
        </div>
      </section>

      <Footer />
    </main>
  );
}
