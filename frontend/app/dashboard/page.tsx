'use client';
import Flow from '@/components/plataform/Flow';
import Welcome from '@/components/plataform/Welcome';
import { AuthUserContext } from '@/context/AuthUserContext';
import { postFirstAccess } from '@/service/auth/me';
import { useCallback, useContext, useEffect, useState } from 'react';

const WELCOME_DISMISSED_SESSION_KEY = 'welcome-dismissed';

export default function Dashboard() {
  const { authUser } = useContext(AuthUserContext);


  const handleWelcomeDismiss = useCallback(() => {
    postFirstAccess();
  }, []);

  if (!authUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      {authUser.USER.FIRST_ACESS === true && (
        <>
          <Welcome onDismiss={handleWelcomeDismiss} />
        </>
      )}
      <Flow />
    </>
  );
}
