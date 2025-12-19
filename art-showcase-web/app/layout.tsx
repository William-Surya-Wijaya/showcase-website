import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artist Showcase",
  description: "Digital art portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
