import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AquaPro PR | Plomería profesional en Puerto Rico",
  description: "Servicios de plomería residencial y comercial en Puerto Rico. Emergencias, fugas, destapes, calentadores, instalaciones y mantenimiento.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-PR"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
