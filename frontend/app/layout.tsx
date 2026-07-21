import MetaPixelManager from "@/components/globals/MetaPixelManager";
import { AppProvider } from "@/context";
import type { Metadata } from "next";
import { Poppins, Russo_One } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://interactiplay.com.br/";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Interactiplay - ISL campanha de vídeos interativos",
  description:
    "Crie campanhas interativas e aumente o engajamento do seu público com a Interactiplay.",
  keywords: [
    "interatividade",
    "campanha",
    "marketing digital",
    "engajamento",
    "ISL",
    "plataforma",
    "vídeo interativo",
    "vídeo de vendas interativo",
  ],
  authors: [{ name: "DonutsTech", url: "https://donutstech.com.br" }],
  creator: "DonutsTech",
  robots: "index, follow",
  icons: [
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  openGraph: {
    title: "Interactiplay - ISL Campanha interativa",
    description:
      "Crie campanhas interativas e aumente o engajamento do seu público com a Interactiplay.",
    url: SITE_URL,
    siteName: "Interactiplay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banner Interactiplay",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  themeColor: "#000125",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <AppProvider>
        <body
          className={`${poppins.variable} ${russoOne.variable} antialiased`}
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            limit={3}
          />
          <MetaPixelManager />
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
