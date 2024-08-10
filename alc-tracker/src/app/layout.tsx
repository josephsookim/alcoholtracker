import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// Import Montserrat font with the desired settings
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify which font weights you need
  style: ['normal', 'italic'], // Optional: Include italic if needed
  display: 'swap', // Use 'swap' to prevent FOIT (Flash of Invisible Text)
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
    <html lang="en">
      <body className={montserrat.className}>
        <div className="home-bg-gradient min-h-screen">
          {/* Header w/ Login Button */}
          <Header/>
          
          {children}

          {/* Footer */}
          <Footer/>

        </div>
      </body>
    </html>
  );
}
