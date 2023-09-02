// import "@/styles/theme.scss";
import "@/styles/app.scss";
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/providers/Providers";
import Footer from "@/components/UI/footer/Footer";
import Header from "@/components/UI/header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "The blog",
  description: "Discover insightful articles at The Blog. Explore expert tips, in-depth guides, and the latest trends. Get inspired and stay informed with our engaging and informative blog posts.",
};

type props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: props) {
  const lang = "en";
  const fontClass = inter.className;
  const dir = "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className={fontClass}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
