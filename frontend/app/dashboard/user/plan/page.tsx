
import ProfileLayout from '@/components/plataform/ProfileLayout';
import UserPlan from '@/components/plataform/UserPlan';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactiplay - Meu Plano',
  description: 'Área do Meu Plano na Interactiplay',
};


export default function UserPlanPage() {
  const sections = [
    { id: 'data', label: 'Meus Dados', path: '/dashboard/user' },
    { id: 'plan', label: 'Meu Plano', path: '/dashboard/user/plan' },
  ];

  return (
    <ProfileLayout
      activeSection="plan"
      sections={sections}
      showLogoutMobile
    >
      <UserPlan />
    </ProfileLayout>
  );
}
