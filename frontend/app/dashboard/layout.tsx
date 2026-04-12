import { AppProvider } from '@/context';
import type { Metadata } from 'next';
import './dashboard.scss';

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
      <AppProvider>
        <body className="antialiased">{children}</body>
      </AppProvider>
    </html>
  );
}
