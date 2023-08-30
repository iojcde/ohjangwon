import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "오장원 선생님, 감사합니다.",
  description: "오장원 선생님을 위한 편지를 써보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-full p-4 lg:p-8 lg:py-16 ">
          <div className="bg-[url('/oh1.jpg')] grayscale-[70%] absolute inset-0 "></div>
          <main className="prose max-w-[65ch] prose-h1:text-2xl sm:prose-h1:text-4xl min-h-screen relative py-16 px-8 lg:px-16 z-10  border-2 rounded-sm border-[#045195]  bg-white shadow-xl mx-auto lg:prose-lg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
