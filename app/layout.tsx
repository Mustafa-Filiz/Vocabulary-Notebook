import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/constants/antd-theme";
import NavBar from "@/components/nav-bar";

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
      <AntdRegistry>
        <ConfigProvider theme={theme}>
          <body className="relative m-auto min-h-full max-w-100 flex flex-col py-18">
            <main className=" p-4">
              {children}
              <NavBar />
            </main>
          </body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}
