import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import { Inter, Dancing_Script, Exo_2 } from 'next/font/google';
import { Providers } from "@/lib/Providers";


const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--dancing_script',
  weight: ["400", "500", "600", "700"]
});

const exo_2 = Exo_2({
  subsets: ['latin'],
  variable: "--exo_2",
  weight: ["400", "500", "600", "700"]
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fuad Hasan Safat",
  description: "Fuad Hasan Safat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <body
        className={`${inter.variable} ${dancing_script.variable} ${exo_2.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
    </Providers>
  )
}
