import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Widrick Electrical",
  description: "Electrical services, batteries, hydraulic hoses, fittings, and repairs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
