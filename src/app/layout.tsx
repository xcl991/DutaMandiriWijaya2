import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Duta Mandiri Wijaya - Solusi Real Estate, Plumbing & Konstruksi Sipil",
  description: "PT Duta Mandiri Wijaya - Partner terpercaya untuk real estate, plumbing, dan konstruksi sipil di Batam dan sekitarnya",
  keywords: ["PT Duta Mandiri Wijaya", "Real Estate", "Plumbing", "Konstruksi Sipil", "Batam", "Properti", "Bangunan"],
  authors: [{ name: "PT Duta Mandiri Wijaya" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  other: {
    "facebook-domain-verification": "a2600179julm65zm6413eqg03m7v9s",
  },
  openGraph: {
    title: "PT Duta Mandiri Wijaya",
    description: "Solusi terpadu untuk real estate, plumbing, dan konstruksi sipil",
    url: "https://dutamandiriwijaya.com",
    siteName: "PT Duta Mandiri Wijaya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Duta Mandiri Wijaya",
    description: "Solusi terpadu untuk real estate, plumbing, dan konstruksi sipil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
