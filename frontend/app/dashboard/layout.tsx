import type { Metadata } from 'next';
import './dashboard.scss';
import RotaCheck from '@/components/plataform/RotaCheck';
import MenuDash from '@/components/plataform/MenuDash';


export const metadata: Metadata = {
  title: 'Interactiplay - Flow',
  description: 'Interactiplay -  Interactive Sales Letter',

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
