import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/layout/Navigation";
import Footer from "@/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Movie APP",
    default: 'Movie APP'
  },
  description: "This is 'Movie APP'",
};

// page.tsx나 layout.tsx만 메타데이터를 내보낼 수 있다.
// server cpmponent에서만 사용한다.
// 컴포넌트에서 메타데이터를 내보낼수 없다. 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
