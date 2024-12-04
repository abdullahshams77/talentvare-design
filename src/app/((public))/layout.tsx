import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Start Page",
  description: "Case Study Start Page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
