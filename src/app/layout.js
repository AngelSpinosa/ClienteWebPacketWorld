import { Space_Grotesk, Poppins } from "next/font/google"; 
import "./globals.css";

// Fuente para Títulos (Sans Serif, Moderna y Tecnológica)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-display', // Mantenemos el nombre de la variable
});

// Fuente para Textos (Poppins)
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body', // Mantenemos el nombre de la variable
});

export const metadata = {
  title: "Packet-World | Envíos Rápidos",
  description: "Soluciones logísticas a tu medida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}