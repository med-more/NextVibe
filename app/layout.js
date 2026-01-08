import "./globals.css"

export const metadata = {
  title: "NextVibe",
  description: "Site vitrine professionnel",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}

