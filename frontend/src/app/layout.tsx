import type { Metadata } from "next";
import { Original_Surfer } from "next/font/google";
import "./globals.css";

// Configuration de la police Google Font
const originalSurfer = Original_Surfer({
  weight: "400", // Original Surfer n'a qu'un seul poids
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waveo",
  description: "Préparez votre session de surf parfaite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr"> 
      <body className={`antialiased ${originalSurfer.className}`}>
        {children}
      </body>
    </html>
  );
}
