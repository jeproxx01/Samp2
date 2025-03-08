import "./styles/globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex justify-center items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
