import { Toaster } from "@/components/sui/sonner";
import JumpBackButton from "@/components/ui/layout/jump-back-button";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Feito com Amor",
  description:
    "Os melhores bolos de aniversário, cupcakes, tartes, semifrios, e muito mais...",
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
        {children}
        <JumpBackButton />
        <Toaster richColors />
      </body>
    </html>
  );
}
