import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Sebastián Maldonado",
  description: "Portafolio web para Sebastián Maldonado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
