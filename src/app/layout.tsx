import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${jetBrainsMonoMedium.variable} ${jetBrainsMonoBold.variable} ${jetBrainsMonoExtraBold.variable} h-screen w-screen `}
      >
        <main className="w-full text-base flex flex-col gap-2 h-full font-mono main-wrapper relative">
          {children}
        </main>
      </body>
    </html>
  );
}
