import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedLayout } from "@/components/AnimatedLayout/AnimatedLayout";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETH Hawaii: The most fun ETH event & Hackathon",
  description:
    "The most fun ETH event & Hackathon - Conference no one wants to miss. ETH event in paradise. Suits are forbidden. Necktie free event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className}`}>
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}
