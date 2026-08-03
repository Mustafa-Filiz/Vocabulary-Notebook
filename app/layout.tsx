import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/constants/antd-theme";
import NavBar from "@/components/nav-bar";
import { Suspense } from "react";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "German Vocab",
  description: "A vocabulary learning app for German learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} h-full antialiased`}>
      <Suspense fallback={<div>Loading...</div>}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <body className="relative m-auto h-screen max-w-100 grid grid-rows-[1fr_auto]">
              <main className="overflow-y-auto">{children}</main>
              <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
              </Suspense>
            </body>
          </ConfigProvider>
        </AntdRegistry>
      </Suspense>
    </html>
  );
}
