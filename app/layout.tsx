import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Viết Chương Trading | Giao Dịch Như Một Nhà Vô Địch",
    description: "Khóa học Trading đỉnh cao kết hợp Tâm lý, Kỹ thuật VCP và Quản trị vốn.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={`${inter.variable} font-sans bg-navy text-white`}>{children}</body>
        </html>
    );
}
