import { Oswald, Rajdhani } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/providers/theme-provider";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Apex Fitness Sports Center",
  description:
    "Responsive gym promotional website with services, plans, trainers, and inquiry form.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${rajdhani.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
