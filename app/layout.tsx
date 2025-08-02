import React from "react"
import Head from "next/head"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ankit Poudel - Backend Developer | Python, Django, FastAPI",
  description:
    "Aspiring software engineer from Kathmandu, Nepal. Specializes in managing large datasets and building interactive, scalable web solutions.",
  keywords: "Backend Developer, Python, Django, FastAPI, Software Engineer, Nepal, Kathmandu",
  authors: [{ name: "Ankit Poudel" }],
  openGraph: {
    title: "Ankit Poudel - Backend Developer",
    description: "Aspiring software engineer specializing in backend systems, automation, and AI-powered tools.",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
