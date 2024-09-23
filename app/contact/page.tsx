import { Button } from "@/components/sui/button";
import Footer from "@/components/ui/layout/footer";
import Header from "@/components/ui/layout/header";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { PiPhoneCallFill } from "react-icons/pi";
import leckerli from "../fonts/leckerli";
import saira from "../fonts/saira";
import Shapes from "../shapes";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main
      className={`min-h-[calc(100svh_+_1rem)] bg-full -z-20 relative flex flex-col text-theme-grey-5 ${saira.className} text-theme-brown`}
    >
      <div className="min-h-[calc(100svh_+_1rem)] pb-4 flex flex-col relative">
        <Shapes />
        <Header activeTab="/contact" />
        <div className="flex justify-center px-8 md:px-12 flex-1 items-center">
          <div className="pb-12 pt-8 w-full grid grid-cols-[auto_auto] md:grid-cols-[22rem_auto] grid-rows-[auto_1fr] max-w-[800px] gap-4 h-min">
            <header className="col-span-2 pb-3">
              <h1
                className={`text-[2.75rem] font-semibold ${leckerli.className} text-center`}
              >
                Peça já o seu orçamento
              </h1>
            </header>
            <section
              id="contact-info"
              className="flex justify-center items-center col-span-2 md:col-span-1 order-1 max-md:mt-11"
            >
              <div className="w-full flex flex-col gap-6 justify-center items-center px-8 max-md:px-6 max-md:max-w-[36rem]">
                <div className="aspect-[292/250] w-full max-md:max-w-[16rem] relative">
                  <Image
                    className="pointer-events-none select-none"
                    src="/contact/slice-brown.svg"
                    alt="cake slice draw"
                    fill
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="text-2xl hover:text-[#c855a0] rounded-full p-0 w-[44px] h-[44px] !bg-transparent text-theme-brown border-2 border-solid border-theme-grey-5 transition-all duration-200"
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
                    className="text-2xl hover:text-[#c855a0] rounded-full p-0 w-[44px] h-[44px] !bg-transparent text-theme-brown border-2 border-solid border-theme-grey-5 transition-all duration-200"
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
                    className="text-2xl hover:text-[#c855a0] rounded-full p-0 w-[44px] h-[44px] !bg-transparent text-theme-brown border-2 border-solid border-theme-grey-5 transition-all duration-200"
                  >
                    <Link href="https://wa.me/+351918681933" target="_blank">
                      <FaWhatsapp />
                    </Link>
                  </Button>
                </div>
                <div className="max-sm:text-center grid grid-cols-[auto_1fr] text-xl w-full gap-2 items-center max-md:w-fit max-md:mt-4">
                  <span className="text-3xl max-sm:flex max-sm:justify-center max-md:text-4xl max-sm:col-span-2">
                    <PiPhoneCallFill />
                  </span>
                  <span className="font-bold text-2xl max-sm:text-lg max-sm:col-span-2">
                    +351 918 681 933
                  </span>
                  <span className="text-3xl max-sm:flex max-sm:justify-center max-md:text-4xl max-md:text-center max-sm:col-span-2">
                    <FiAtSign />
                  </span>
                  <span className="text-[0.9rem] max-sm:text-base max-sm:col-span-2 break-all">
                    feitocomamor242024@hotmail.com
                  </span>
                  <span className="text-3xl max-sm:flex max-sm:justify-center max-md:text-4xl max-md:text-center max-sm:col-span-2">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text-[1.025rem] max-sm:text-base max-sm:col-span-2 break-all">
                    Espinho (Portugal)
                  </span>

                  {/* <FaAt /> */}
                </div>
              </div>
            </section>
            <section
              id="contact-form"
              className="col-span-2 md:col-span-1 md:order-1 flex flex-col items-center"
            >
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
