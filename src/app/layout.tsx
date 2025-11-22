import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import GridBackground from "@/components/GridBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Langidis - Portfolio",
  description: "Front-End Developer based in Athens, Greece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GridBackground />
          <Navbar />
          <main className="min-h-screen bg-background/50 text-foreground relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
