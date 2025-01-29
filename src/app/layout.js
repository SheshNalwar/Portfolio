import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shesh Nalwar Portfolio",
  description:
    "Shesh Nalwar's Portfolio: Showcasing skills in web development, UI/UX, and full-stack projects.",
  keywords: [
    "Next.js",
    "Shesh",
    "Nalwar",
    "Shesh Nalwar Portfolio",
    "Portfolio",
    "Shesh Nalwar",
    "Full Stack Developer",
  ],
  creator: "Shesh Nalwar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
