import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Dancing_Script, Exo_2, Playwrite_US_Modern } from 'next/font/google';
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

const playwrite = Playwrite_US_Modern({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["serif", "sans-serif"],
  variable: "--playwrite",
  weight: ["400", "100", "200", "300"]
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
        className={`${inter.variable} ${dancing_script.variable} ${exo_2.variable} ${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </Providers>
  )
}
