import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",
  display: "swap",
  variable: "--font-jet-brains-mono",
});

export const metadata: Metadata = {
  title: "Hobby-Hub",
  description: "Own project to learn Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable} h-screen w-screen `}>
        <main className="p-6 w-full text-base flex flex-col gap-2 h-full font-mono main-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
