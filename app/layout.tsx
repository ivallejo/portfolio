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
  title: 'Luis Fernando Vallejo - Senior Backend Developer',
  description: 'Senior Backend Developer especializado en microservicios, arquitecturas cloud y sistemas escalables. Experto en Node.js, Spring Boot, AWS y Google Cloud Platform.',
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