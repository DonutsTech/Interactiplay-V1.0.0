// import { AppProvider } from '@/context';
import type { Metadata } from 'next';
import './dashboard.scss';
import { Poppins, Russo_One } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const russoOne = Russo_One({
  variable: '--font-russo-one',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Interactiplay - Plataforma',
  description: 'Interactiplay -  Interactive Sales Letter',
  icons: [
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${russoOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
