import Image from "next/image";

export default function Shapes() {
  return (
    <>
      <Image
        className="absolute top-0 right-0 pointer-events-none select-none -z-10"
        src={"/shape-top.svg"}
        alt="design detail"
        width={1334 / 2}
        height={616 / 2}
      />
      <Image
        className="absolute bottom-0 left-0 pointer-events-none select-none -z-10"
        src={"/shape-bottom.svg"}
        alt="design detail"
        width={1313 / 2}
        height={780 / 2}
      />
    </>
  );
}
