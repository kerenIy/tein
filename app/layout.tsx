import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/global/footer";

export const metadata: Metadata = {
  title: "Tein",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`gt-walsheim `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
