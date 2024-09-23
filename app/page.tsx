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
        <Shapes classNameBottom="-bottom-8" />
        <Header activeTab="/" />
        <div className="flex justify-center px-8 sm:px-12 flex-1">
          <Cta />
        </div>
      </section>

      <Specialties />
      <Gallery />
      <More />
      <Options />

      <Footer />
    </main>
  );
}
