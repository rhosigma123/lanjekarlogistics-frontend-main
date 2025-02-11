import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import Provider from "./Provider";
import { baseMetadata } from "@/utils/metadata";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K7ZZ5FC7" />
      <body
        className={`${geistSans.variable} ${notoSans.className} ${geistMono.variable} ${plusJakartaSans.className}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
