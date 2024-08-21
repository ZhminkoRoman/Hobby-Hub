import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: "../fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",
  display: "swap",
  variable: "--font-jet-brains-mono",
  weight: "100 900",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} h-screen w-screen `}>
        <main className="p-6 w-full text-base flex flex-col gap-2 h-full font-mono main-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
