import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Alexander Chen - Senior Backend Developer',
  description: 'Senior Backend Developer especializado en sistemas escalables y arquitecturas de microservicios. Construyendo soluciones que potencian millones de usuarios.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}