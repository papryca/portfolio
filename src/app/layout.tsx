import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/app/components/AOSWrapper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Inessa Smarhunova",
  description: "Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
