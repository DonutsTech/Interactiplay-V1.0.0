'use client';
import Flow from '@/components/plataform/Flow';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useContext } from 'react';

export default function Dashboard() {
  const { authUser } = useContext(AuthUserContext);

  if (!authUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Flow />
    </>
  );
}
