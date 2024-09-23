import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Shapes({
  classNameTop,
  classNameBottom,
}: {
  classNameTop?: string;
  classNameBottom?: string;
}) {
  return (
    <>
      <Image
        className={twMerge(
          "absolute top-0 right-0 pointer-events-none select-none -z-10 fill-red-500",
          classNameTop
        )}
        src={`/shape-top-2.svg`}
        alt="design detail"
        width={1334 / 2}
        height={616 / 2}
      />
      <Image
        className={twMerge(
          "absolute bottom-0 left-0 pointer-events-none select-none -z-10",
          classNameBottom
        )}
        src={`/shape-bottom-2.svg`}
        alt="design detail"
        width={1313 / 2}
        height={780 / 2}
      />
    </>
  );
}
