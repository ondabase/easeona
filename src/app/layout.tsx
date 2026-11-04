import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { cn } from "cn"
import { Geist, Geist_Mono } from "next/font/google"

import "@/styles/globals.css"

const fontGeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const fontGeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "easeona",
    template: "%s | easeona",
  },
  description: "Under construction...",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className="antialiased"
      suppressHydrationWarning
    >
      <body className={cn(
        "bg-white text-neutral-900 text-base font-sans",
        "selection:bg-yellow-200 selection:text-neutral-900",
        fontGeistSans.variable,
        fontGeistMono.variable,
      )}
      >
        {children}
      </body>
    </html>
  )
}
