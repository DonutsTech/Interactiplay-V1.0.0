'use client';
import Flow from '@/components/plataform/Flow';
import Welcome from '@/components/plataform/Welcome';
import { AuthUserContext } from '@/context/AuthUserContext';
import { useCallback, useContext, useEffect, useState } from 'react';

const WELCOME_DISMISSED_SESSION_KEY = 'welcome-dismissed';

export default function Dashboard() {
  const { authUser } = useContext(AuthUserContext);
  const [isWelcomeDismissed, setIsWelcomeDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(WELCOME_DISMISSED_SESSION_KEY) === '1';
    setIsWelcomeDismissed(wasDismissed);
  }, []);

  const handleWelcomeDismiss = useCallback(() => {
    sessionStorage.setItem(WELCOME_DISMISSED_SESSION_KEY, '1');
    setIsWelcomeDismissed(true);
  }, []);

  if (!authUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      {authUser.USER.FIRST_ACESS === true && !isWelcomeDismissed && (
        <>
          <Welcome onDismiss={handleWelcomeDismiss} />
        </>
      )}
      <Flow />
    </>
  );
}
