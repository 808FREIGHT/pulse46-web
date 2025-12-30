import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse 46 - Panic Attack Relief",
  description: "Find calm in the chaos. Pulse 46 uses synchronized heartbeat haptics and guided breathing to help you through panic attacks.",
  keywords: ["panic attack", "anxiety relief", "breathing app", "calm", "mental health", "iOS app"],
  authors: [{ name: "Pulse 46" }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Pulse 46 - Panic Attack Relief",
    description: "Find calm in the chaos. Synchronized heartbeat haptics and guided breathing.",
    url: "https://pulse46.app",
    siteName: "Pulse 46",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse 46 - Panic Attack Relief",
    description: "Find calm in the chaos. Synchronized heartbeat haptics and guided breathing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
