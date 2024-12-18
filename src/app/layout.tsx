//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";
//import Header from "@/components/common/header/header";
import { Metadata } from "next";
import AppHeader from "@/components/common/app.header/app.header";

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
      <link rel="icon" href="../../../assets/images/talentvare.svg" />
      <link
        rel="apple"
        sizes="180x180"
        href="../../../assets/images/talentvare.svg"
      />
     <body
        style={{
          backgroundColor: "var(--surface-background)",
        }}
        className={"" + inter.className}
      >
        <PrimeReactProvider>
          <AppHeader />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
