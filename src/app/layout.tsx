import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Mahmudul Haque | Full-Stack JavaScript Developer",
  description:
    "Portfolio of Mahmudul Haque, a full-stack JavaScript developer building business-oriented web applications and REST APIs.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
