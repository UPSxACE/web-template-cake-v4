import Header from "@/components/ui/layout/header";
import Cta from "./cta";
import Shapes from "./shapes";

export default function Home() {
  // bg-theme-pink2
  return (
    <main className="min-h-screen bg-[#ffe9ef] -z-20 relative flex flex-col text-theme-grey-5">
      <Shapes />
      <Header activeTab="/" />
      <div className="flex justify-center px-12 flex-1">
        <Cta />
      </div>
    </main>
  );
}
