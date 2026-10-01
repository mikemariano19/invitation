import type { Metadata } from "next";
import "./globals.css";
import {
  Geist,
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Christening Invitation",
  description: "A special day of love and blessings",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        geist.variable,
        cormorant.variable,
        montserrat.variable
      )}
    >
      <body className="container -z-50 min-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth max-w-5xl mx-auto flex flex-col bg-gray-50">
        {children}
      </body>
    </html>
  );
}