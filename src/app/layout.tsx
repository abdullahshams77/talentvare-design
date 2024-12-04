//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";
//import Header from "@/components/common/header/header";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalentVare Design",
  description: "TalentVare Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="../../../assets/images/favicon.ico" />
      <link
        rel="apple"
        sizes="180x180"
        href="../../../assets/images/favicon.ico"
      /> */}
      <body className={"pl-7 pr-7 mt-4 mb-5" + inter.className}>
        <PrimeReactProvider>
          <header></header>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
