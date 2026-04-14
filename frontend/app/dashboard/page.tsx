'use client';
import TawkWidget from '@/components/plataform/TawkWidget';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useContext } from 'react';

export default function Dashboard() {
  const { authUser } = useContext(AuthUserContext);

  if (!authUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>

    </>
  );
}
