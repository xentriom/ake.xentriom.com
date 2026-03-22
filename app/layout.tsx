import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { NextProvider } from "fumadocs-core/framework/next";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { source } from "@/lib/source";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ake.xentriom.com"),
  title: {
    default: "Endvoyant",
    template: "%s - Endvoyant",
  },
  description:
    "Endvoyant is a Discord companion for Arknights: Endfield with profile sync, daily attendance, wiki lookup, redemption tools, and live account views.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <NextProvider>
          <TreeContextProvider tree={source.getPageTree()}>
            <RootProvider>
              {children}
              <Analytics />
            </RootProvider>
          </TreeContextProvider>
        </NextProvider>
      </body>
    </html>
  );
}
