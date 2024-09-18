import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthAnimatedLayout from "./_components/AuthAnimatedLayout";

const jetBrainsMonoMedium = localFont({
  src: "../fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",
  display: "swap",
  variable: "--font-jet-brains-mono-medium",
});

const jetBrainsMonoBold = localFont({
  src: "../fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
  display: "swap",
  variable: "--font-jet-brains-mono-bold",
});

const jetBrainsMonoExtraBold = localFont({
  src: "../fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2",
  display: "swap",
  variable: "--font-jet-brains-mono-extrabold",
});

const bigBlueTerminalRegular = localFont({
  src: "../fonts/BigBlueTerminal/BigBlueTerm437NerdFont-Regular.ttf",
  display: "swap",
  variable: "--font-big-blue-term-regular",
});

const bigBlueTerminalPlusRegular = localFont({
  src: "../fonts/BigBlueTerminal/BigBlueTermPlusNerdFont-Regular.ttf",
  display: "swap",
  variable: "--font-big-blue-term-plus-regular",
});

const bigBlueTerminalPlusMonoRegular = localFont({
  src: "../fonts/BigBlueTerminal/BigBlueTermPlusNerdFontMono-Regular.ttf",
  display: "swap",
  variable: "--font-big-blue-term-plus-mono-regular",
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
      <body
        className={`${jetBrainsMonoMedium.variable} ${jetBrainsMonoBold.variable} ${jetBrainsMonoExtraBold.variable} ${bigBlueTerminalRegular.variable} ${bigBlueTerminalPlusRegular.variable} ${bigBlueTerminalPlusMonoRegular.variable} h-screen w-full`}
      >
        <main className="w-full text-base flex flex-col h-full font-mono relative">
          {children}
          <AuthAnimatedLayout />
        </main>
      </body>
    </html>
  );
}
