import type { Metadata } from "next";
import "./globals.css";
import "./classic.css";
import "./patients.css";

export const metadata: Metadata = {
  title: "Dr. Gustavo Coloma Valverde | Neurocirugía",
  description: "Neurocirugía cerebral y de columna vertebral en Gran Canaria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}



