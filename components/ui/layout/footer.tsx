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
      <div className="flex w-full justify-center bg-[#0079b6] text-white relative -z-10 pt-4">
        <div
          style={{
            background: "url(/footer-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute h-full w-full opacity-[13%] top-0 -z-10"
        />
        <div className="max-w-screen-xl grid grid-cols-3 max-md:grid-cols-2 py-8 max-md:w-full max-md:gap-4">
          <Link
            href="/"
            className="flex items-start max-md:col-span-2 relative h-[200px] aspect-[452/338] mx-1 max-md:mx-auto"
          >
            <Image
              alt="feito com amor (logo)"
              src="/logo-fca.svg"
              fill
              className="object-contain"
            />
          </Link>
          <ul className="text-base text-center max-sm:col-span-2">
            <li
              className={`text-3xl max-md:text-2xl ${leckerli.className} mb-3`}
            >
              <Link
                href="/contact"
                className="font-medium hover:text-[#e39cca] transition-colors duration-150"
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
          <ul className="text-base text-center space-y-2 max-sm:col-span-2">
            <li
              className={`text-3xl max-md:text-2xl ${leckerli.className} mb-3`}
            >
              Contactos
            </li>
            <li className="flex gap-4 justify-center items-center">
              <Button
                asChild
                variant="outline"
                className="text-2xl rounded-full p-0 w-[36px] h-[36px] !bg-transparent text-white hover:text-[#e39cca] border-2 border-solid border-theme-grey-5 transition-all duration-200"
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
                className="text-2xl rounded-full p-0 w-[36px] h-[36px] !bg-transparent text-white hover:text-[#e39cca] border-2 border-solid border-theme-grey-5 transition-all duration-200"
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
                className="text-2xl rounded-full p-0 w-[36px] h-[36px] !bg-transparent text-white hover:text-[#e39cca] border-2 border-solid border-theme-grey-5 transition-all duration-200"
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
                className="hover:text-[#e39cca] transition-colors duration-150"
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
      <div className="flex w-full justify-center h-12 bg-[#005992] px-8 sm:px-12 text-gray-300 max-sm:h-24 max-md:h-16">
        <div className="flex max-md:flex-col max-md:justify-center md:items-center w-full max-w-screen-xl max-md:gap-1">
          <span className="text-center">
            © Feito com Amor. Todos os direitos reservados.
          </span>
          <span className="md:ml-auto max-md:text-center max-md:justify-center flex items-center">
            Desenvolvido por{" "}
            <Link href="https://vyzion.pt" target="_blank" className="ml-1">
              Vyzion.pt
            </Link>{" "}
            <Link
              href="https://vyzion.pt"
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
