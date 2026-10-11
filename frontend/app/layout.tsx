import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  Geist,
  Cormorant_Garamond,
  Montserrat,
  Great_Vibes,
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

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
});

// export const metadata: Metadata = {
//   title: "Bianca Mariano | Christening Invitation",
//   description:
//     "Join us in celebrating Bianca Mariano's special christening day.",
//   applicationName: "Bianca's Christening",
//   icons: {
//     icon: [
//       { url: "/favicon.ico", sizes: "any" },
//       { url: "/icon.png", type: "image/png" },
//     ],
//     apple: "/apple-icon.png",
//   },
//   appleWebApp: {
//     capable: true,
//     title: "Bianca's Christening",
//     statusBarStyle: "default",
//   },
// };


export const metadata: Metadata = {
  title: "Bianca Mariano | Christening Invitation",
  description: "A little blessing, a lifetime of love.",
  metadataBase: new URL(
    "https://bianca-invitation.netlify.app"
  ),
  openGraph: {
    title: "Bianca Mariano | Christening Invitation",
    description: "A little blessing, a lifetime of love.",
    url: "https://bianca-invitation.netlify.app",
    siteName: "Bianca Mariano",
    type: "website",
    images: [
      {
        url: "/images/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Bianca Mariano Christening Invitation",
      },
    ],
  },
};


export const viewport: Viewport = {
  themeColor: "#fffaf7",
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