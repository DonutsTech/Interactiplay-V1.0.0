'use client';

import ProfileLayout from '@/components/plataform/ProfileLayout';
import UserData from '@/components/plataform/UserProfile/UserData';
import EditProfile from '@/components/plataform/UserProfile/EditProfile';
import { useState } from 'react';
import UserProfile from '@/components/plataform/UserProfile';
import TawkWidget from '@/components/plataform/TawkWidget';

export default function UserPage() {
  const [isEditing, setIsEditing] = useState(false);

  const sections = [
    { id: 'data', label: 'Meus Dados' },
    { id: 'plan', label: 'Meu Plano', path: '/dashboard/user/plan' },
  ];

  const handleSectionChange = (sectionId: string) => {
    if (sectionId === 'data' && isEditing) {
      setIsEditing(false);
    }
  };

  return (
    <ProfileLayout
      activeSection="data"
      sections={sections}
      onSectionChange={handleSectionChange}
      showLogoutMobile
    >
      <UserProfile />
    </ProfileLayout>
  );
}
