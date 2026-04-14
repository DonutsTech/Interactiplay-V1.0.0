'use client';

import ProfileLayout from '@/components/plataform/ProfileLayout';
import UserPlan from '@/components/plataform/UserPlan';

export default function UserPlanPage() {
  const sections = [
    { id: 'data', label: 'Meus Dados', path: '/dashboard/user' },
    { id: 'plan', label: 'Meu Plano' },
  ];

  return (
    <ProfileLayout
      activeSection="plan"
      sections={sections}
      onSectionChange={() => {}}
      showLogoutMobile
    >
      <UserPlan />
    </ProfileLayout>
  );
}
