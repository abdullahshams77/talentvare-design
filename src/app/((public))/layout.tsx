import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talentvare",
  description: "Talentvare",
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
