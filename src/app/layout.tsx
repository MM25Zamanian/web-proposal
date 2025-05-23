import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin", "latin-ext"],
  weight: "variable",
  preload: true,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="size-full select-none overflow-hidden">
      <body
        className={`${vazirmatn.className} antialiased size-full overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
