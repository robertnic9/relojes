import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "La Vie Éternelle - Relojes de Lujo Exclusivos",
  description:
    "Explora nuestra colección de relojes de lujo de marcas icónicas como Rolex, Audemars Piguet y Richard Mille. La máxima expresión de elegancia y precisión.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "relojes de lujo",
    "Rolex",
    "Audemars Piguet",
    "Richard Mille",
    "alta relojería",
    "colección exclusiva",
    "elegancia atemporal",
  ],
  openGraph: {
    title: "La Vie Éternelle - Relojes de Lujo Exclusivos",
    description:
      "Encuentra la perfección en nuestra colección de relojes de lujo, con modelos exclusivos de Rolex, Audemars Piguet y Richard Mille.",
    url: "https://www.lavieeternelle.vercel.app",
    type: "website",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Relojes de lujo de La Vie Éternelle",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${raleway.variable}`}>
      <body className="font-cmu">{children}</body>
    </html>
  );
}
