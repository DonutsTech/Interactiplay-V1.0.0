import type { Metadata } from 'next';
import './dashboard.scss';
import RotaCheck from '@/components/plataform/RotaCheck';
import MenuDash from '@/components/plataform/MenuDash';


export const metadata: Metadata = {
  title: 'Interactiplay - Flow',
  description: 'Interactiplay -  Interactive Sales Letter',
  // icons: [
  //   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  //   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  // ],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RotaCheck>
      <MenuDash />
      {children}
      {/* <FooterDash /> */}
    </RotaCheck>
  );
}
