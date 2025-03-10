import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "E-Tutor",
  description: "Best online learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="pt-16">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
