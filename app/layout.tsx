import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hack-N-Droid | Android Club",
  description: "Join us for an exciting hackathon organized by Android Club",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

