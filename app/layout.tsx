import { Toaster } from "@/components/sui/sonner";
import JumpBackButton from "@/components/ui/layout/jump-back-button";
import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./query-provider";
// import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Feito com Amor",
  description:
    "Os melhores bolos de aniversário, cupcakes, tartes, semifrios, e muito mais...",
  openGraph: {
    images: [
      {
        url: "http://feitocomamor.pt/preview.png",
        secureUrl: "https://feitocomamor.pt/preview.png",
        width: 1898,
        height: 916,
        alt: "Preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // body classname: ${geistSans.variable} ${geistMono.variable}
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased -z-20 relative`}>
        <QueryProvider>
          {children}
          <JumpBackButton />
          <Toaster richColors />
        </QueryProvider>
      </body>
    </html>
  );
}
