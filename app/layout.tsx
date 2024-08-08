"use client";

import { ReactNode, useState, useEffect } from "react";
import Preloader from '@/components/Preloader';
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or wait for actual content to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#ffffff",
            colorPrimary: "#ffffff",
            colorBackground: "#0c2a2e",
            colorInputBackground: "#ffffff",
            colorInputText: "#dad7cd",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {loading ? <Preloader /> : (
            <>
              <Toaster />
              {children}
            </>
          )}
        </body>
      </ClerkProvider>
    </html>
  );
}
