import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Nifad Premium",
  description: "Nifad's profssional website for showcase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="min-h-screen min-w-screen
      bg-radial from-blue-950 to-slate-900  to-90%  from-10%  
      
      ntialiased"

      >
        <Navbar/>
        <div className="w-full md:w-[80%] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
