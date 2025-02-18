import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'devicon/devicon.min.css';
import FooterComponent from "@/components/footer/footer-component";
import HeaderComponent from "@/components/header/header-component";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmadeusDev",
  icons: {
    icon: '/favicon.svg',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black min-h-screen text-white">
          <header className="absolute top-[15%] justify-center items-center w-full">
            <HeaderComponent backendDomain={process.env.BACKEND_DOMAIN} backendPort={process.env.BACKEND_PORT} />
          </header>
          <div className="bg-black mt-[7vw] mx-auto w-[90%] pt-[7rem]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
