import Seal from "@/components/svg/seal";
import { LuCakeSlice, LuCandyCane, LuCastle, LuCheck } from "react-icons/lu";
import { MdOutlineBakeryDining } from "react-icons/md";
import leckerli from "./fonts/leckerli";
import saira from "./fonts/saira";

const specialties_ = [
  {
    text: "Tradição",
    icon: (
      <LuCastle className="stroke-1 h-20 w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Qualidade",
    icon: (
      <LuCheck className="stroke-1 h-20 w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Creatividade",
    icon: (
      <LuCandyCane className="stroke-1 h-20 w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
  {
    text: "Paixão",
    icon: (
      <LuCakeSlice className="stroke-1 h-20 w-20 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
  },
];

export default function Specialties() {
  return (
    <div
      className={`w-full flex justify-center items-center max-w-screen-xl gap-32 ${saira.className}`}
    >
      {specialties_.slice(0, 4).map((x, i) => (
        <article key={i} className="flex flex-col items-center z-10">
          <div className="h-32 w-32 relative">
            <Seal
              classNames={{
                wrapper: "h-32 w-32",
                background: "fill-transparent",
                border: "fill-white",
              }}
            />
            {x.icon}
          </div>
          <span className="text-2xl text-white text-center mt-4 font-semibold">
            {x.text}
          </span>
        </article>
      ))}
    </div>
  );

  return (
    <div
      className={`w-full flex flex-col justify-center max-w-screen-xl gap-8 ${saira.className}`}
    >
      <h1
        className={`text-5xl text-[#381C0F] text-center font-semibold ${leckerli.className}`}
      >
        Especialidades
      </h1>
      {/* <p className="text-center text-lg">
        Feitos com amor a pensar em si, não vai conseguir resistir às nossas
        criações!
      </p> */}
      <div className="flex justify-center mt-3 grid-cols-3 gap-6 flex-wrap">
        {specialties.map((x, i) => {
          // basis-[calc((100%_/_3)_-_(3rem_/_2))]
          return (
            <article
              key={i}
              className="border border-solid w-96 border-neutral-300 p-8 flex flex-col gap-2"
            >
              <h1 className="text-xl font-medium">{x.title}</h1>
              <p>{x.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

const specialties = [
  {
    icon: (
      <MdOutlineBakeryDining className="h-28 w-28 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
    title: "Gelados Artesanais",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: (
      <MdOutlineBakeryDining className="h-28 w-28 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
    title: "Gelados Artesanais2",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: (
      <MdOutlineBakeryDining className="h-28 w-28 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
    title: "Gelados Artesanais3",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: (
      <MdOutlineBakeryDining className="h-28 w-28 absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto text-white" />
    ),
    title: "Gelados Artesanais4",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: "",
    title: "Gelados Artesanais5",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: "",
    title: "Gelados Artesanais6",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: "",
    title: "Gelados Artesanais7",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: "",
    title: "Gelados Artesanais8",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
  {
    icon: "",
    title: "Gelados Artesanais9",
    description:
      "Os gelados artesanais são feitos com ingredientes de origem natural. São Inúmeros os sabores que poderá conjugar.",
  },
];
