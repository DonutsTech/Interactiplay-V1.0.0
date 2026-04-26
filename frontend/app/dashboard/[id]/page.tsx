'use client';
import Flow from '@/components/plataform/Flow';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

export default function DasboardId() {
  const params = useParams();
  const id = params.id as string;

  const { authUser } = useContext(AuthUserContext);

  if (!authUser) {
    return <p>Carregando...</p>;
  }

  return <Flow id={id} />;
}
