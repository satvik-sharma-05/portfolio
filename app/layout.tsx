import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Satvik Sharma | AI/ML Engineer",
    description: "Building intelligent systems, not just code",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} font-sans antialiased bg-dark text-light`}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
