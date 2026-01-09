import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NextVibe - Site Vitrine Professionnel",
  description: "Découvrez NextVibe, votre agence spécialisée dans la création de sites vitrines modernes et performants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">

        <Header />
        

        <main className="flex-grow">
          {children}
        </main>
        

        <Footer />
      </body>
    </html>
  );
}
