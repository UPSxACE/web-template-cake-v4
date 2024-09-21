import leckerli from "@/app/fonts/leckerli";
import saira from "@/app/fonts/saira";
import { Button } from "@/components/sui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

// const lobster = Lobster({ subsets: ["latin"], weight: ["400"] }); //REVIEW

export default function Footer() {
  // FIXME fix z-index, clickable links!
  return (
    <footer
      className={`flex flex-col items-center ${saira.className} text-sm font-light -mt-4`}
      style={{
        mask: "url(/waves-2.svg) top",
        maskSize: "cover",
        maskRepeat: "no-repeat",
      }}
    >
      <div className="flex w-full justify-center bg-[#37312e] text-white relative -z-10 pt-4">
        <div
          style={{
            background: "url(/footer-bg.jpg)",
            backgroundSize: "100%",
            backgroundPosition: "center",
          }}
          className="absolute h-full w-full opacity-20 top-0 -z-10"
        />
        <div className="max-w-screen-xl grid grid-cols-3 py-8">
          <Link
            href="/"
            className="flex items-start  relative h-[200px] aspect-[452/338] mx-1"
          >
            <Image
              alt="feito com amor (logo)"
              src="/logo-fca.svg"
              fill
              className="object-contain"
            />
          </Link>
          <ul className="text-base text-center">
            <li className={`text-3xl ${leckerli.className} mb-3`}>
              <Link
                href="/contact"
                className="font-medium hover:text-[#757575] transition-colors duration-150"
              >
                Encomende já
              </Link>
            </li>
            <li>Bolos</li>
            <li>Cupcakes</li>
            <li>Sobremesas</li>
            <li>Tartes</li>
            <li>Semifrios</li>
            <li>Bolachas</li>
            <li>e muito mais</li>
          </ul>
          <ul className="text-base text-center space-y-2">
            <li className={`text-3xl ${leckerli.className} mb-3`}>Contactos</li>
            <li className="flex gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="text-2xl rounded-full p-0 w-[36px] h-[36px] !bg-transparent !text-white border-2 border-solid border-theme-grey-5 transition-all duration-200"
              >
                <Link
                  href="https://www.facebook.com/feitocomamor242024"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-2xl rounded-full p-0 w-[36px] h-[36px] !bg-transparent !text-white border-2 border-solid border-theme-grey-5 transition-all duration-200"
              >
                <Link
                  href="https://www.instagram.com/feitocomamor242024"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-2xl rounded-full p-0 w-[36px] h-[36px] !bg-transparent !text-white border-2 border-solid border-theme-grey-5 transition-all duration-200"
              >
                <Link href="https://wa.me/+351918681933" target="_blank">
                  <FaWhatsapp />
                </Link>
              </Button>
            </li>
            <li>+351 918 681 933</li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#757575] transition-colors duration-150"
              >
                Formulário
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <FaMapMarkerAlt className="mr-1" /> Espinho (Portugal)
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center h-12 bg-[#322b28] px-12 text-gray-300">
        <div className="flex items-center w-full max-w-screen-xl">
          <span>© Feito com Amor. Todos os direitos reservados.</span>
          <span className="ml-auto flex items-center">
            Desenvolvido por{" "}
            <Link href="https://vyzion.pt" target="_blank" className="ml-1">
              Vyzion.pt
            </Link>{" "}
            <Link
              href="/"
              className="flex items-start  relative h-[18px] aspect-[151/119] mx-1"
            >
              <Image
                alt="vyzion logo"
                src="/vyzion-white.svg"
                fill
                className="object-contain"
              />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
