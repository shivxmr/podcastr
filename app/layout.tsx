import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";



const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
    <html lang='en'>
      <body>
        
        <ConvexClerkProvider>

        {children}
        </ConvexClerkProvider>
      </body>
    </html>
  
)
}
