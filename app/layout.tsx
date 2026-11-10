import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/shared/Footer";
import { Toaster} from "sonner";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
});


export const metadata: Metadata = {
  title: "StudioSpace",
  description: "Create Without Limits - Discover and Book Inspiring Studios for Your Creative Projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Toaster position="top-center"/>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
