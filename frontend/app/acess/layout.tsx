// import { AppProvider } from '@/context';
import type { Metadata } from 'next';
import './acess.scss';
import LottieDoodle from '@/components/acess/LottieDoodle';
import Menu from '@/components/acess/Menu';

export default function AcessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      <div className="acess_background">
        <div className="left_acess">
          <div className="animation_wrapper">
            <LottieDoodle />
          </div>
        </div>
        <div className="right_page">{children}</div>
      </div>
    </>
  );
}
