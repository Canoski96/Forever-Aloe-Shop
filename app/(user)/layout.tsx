import "swiper/swiper-bundle.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import AppContextProvider from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forever Aloe",
  description: "Your Online Shop for Healthy Living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppContextProvider>
            <Navbar />
            {children}
            <Footer />
          </AppContextProvider>
        </Providers>
      </body>
    </html>
  );
}
