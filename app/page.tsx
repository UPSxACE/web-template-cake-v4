import Footer from "@/components/ui/layout/footer";
import Header from "@/components/ui/layout/header";
import Cta from "./cta";
import Gallery from "./gallery";
import Options from "./options";
import Shapes from "./shapes";
import Specialties from "./specialties";

export default function Home({
  searchParams,
}: {
  searchParams: { clean?: string };
}) {
  const clean = searchParams.clean;
  // bg-theme-pink2
  return (
    <main className="min-h-[110svh] relative flex flex-col text-theme-grey-5 -z-20">
      <section
        id="cta"
        className="z-10 relative flex-1 flex flex-col bg-[#ecddd8] min-h-[110svh] pb-[10svh]"
        style={{
          mask: "url(/waves-2-down.svg) bottom",
          maskSize: "cover",
          maskRepeat: "no-repeat",
        }}
      >
        <Shapes />
        <Header activeTab="/" />
        <div className="flex justify-center px-12 flex-1">
          <Cta />
        </div>
      </section>
      <section
        style={{
          background: !clean ? "url(/backgrounds/bg2.jpg)" : "",
          backgroundSize: "135%",
          backgroundPosition: "center",
        }}
        id="gallery"
        className="-mt-4 relative before:bg-white before:bg-opacity-80 before:absolute before:h-full before:w-full"
      >
        <div className="flex justify-center px-12 flex-1 z-10 relative">
          <Gallery />
        </div>
      </section>
      <section
        id="specialties"
        className="-mt-4 relative before:bg-[#37312e] before:bg-opacity-80 before:absolute before:h-full before:w-full"
        style={{
          mask: "url(/waves-2-down.svg) bottom, url(/waves-2.svg) top",
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskComposite: "intersect",
          background: "url(/footer-bg.jpg)",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center px-12 flex-1 h-96">
          <Specialties />
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
