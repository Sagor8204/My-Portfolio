import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaus Al Munir Tushar - Software Engineer",
  description: "Personal portfolio of Gaus Al Munir Tushar, a Full Stack Software Engineer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-[#f8fafc]`}
      >
        <div className="relative min-h-screen">
          <main className="md:ml-15">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}