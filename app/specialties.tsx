import Seal from "@/components/svg/seal";
import { LuCakeSlice, LuCandyCane, LuCastle, LuCheck } from "react-icons/lu";
import saira from "./fonts/saira";

const specialties_ = [
  {
    text: "Tradição",
    icon: (
      <LuCastle className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Qualidade",
    icon: (
      <LuCheck className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Criatividade",
    icon: (
      <LuCandyCane className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Paixão",
    icon: (
      <LuCakeSlice className="stroke-1 h-1/2 w-1/2 max-h-32 max-w-32 lg:h-20 lg:w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
];

export default function Specialties() {
  return (
    <div
      className={`w-full flex justify-around items-center max-w-screen-xl gap-x-5 gap-y-5 lg:gap-32 ${saira.className} max-md:flex-wrap`}
    >
      {specialties_.slice(0, 4).map((x, i) => (
        <article
          key={i}
          className="flex flex-1 flex-col items-center z-10 max-sm:basis-[calc(50%_-_0.625rem)] sm:basis-[calc(25%_-_0.9375rem)]"
        >
          <div className="h-full w-full max-h-32 max-w-32 lg:h-32 lg:w-32 relative">
            <Seal
              classNames={{
                wrapper: "h-full w-full max-h-32 max-w-32 lg:h-32 lg:w-32",
                background: "fill-transparent",
                border: "fill-white",
              }}
            />
            {x.icon}
          </div>
          <span className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white text-center mt-2 lg:mt-4 font-semibold">
            {x.text}
          </span>
        </article>
      ))}
    </div>
  );
}

