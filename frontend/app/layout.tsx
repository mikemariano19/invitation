import type { Metadata } from "next";
import "./globals.css";
import {
  Geist,
  Cormorant_Garamond,
  Montserrat,
  Great_Vibes,
} from "next/font/google";
import { cn } from "@/lib/utils";
import FallingPetals from "./components/FallingPetals";

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

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
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
        montserrat.variable,
        greatVibes.variable
      )}
    >
      <body className="container min-h-screen  max-w-5xl mx-auto flex flex-col bg-gray-100">
        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  );
}