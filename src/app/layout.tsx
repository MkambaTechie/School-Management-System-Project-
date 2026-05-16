import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // This file MUST exist, but it doesn't need any styling.
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
