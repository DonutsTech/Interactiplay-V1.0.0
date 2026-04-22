

import ProfileLayout from '@/components/plataform/ProfileLayout';
import UserProfile from '@/components/plataform/UserProfile';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Interactiplay - Meu Perfil',
  description: 'Área do Meu Perfil da Interactiplay',
};

export default function UserPage() {

  const sections = [
    { id: 'data', label: 'Meus Dados' },
    { id: 'plan', label: 'Meu Plano', path: '/dashboard/user/plan' },
  ];



  return (
    <ProfileLayout
      activeSection="data"
      sections={sections}
      showLogoutMobile
    >
      <UserProfile />
    </ProfileLayout>
  );
}
