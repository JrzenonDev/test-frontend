import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Luckiest_Guy } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const acme = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={acme.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
