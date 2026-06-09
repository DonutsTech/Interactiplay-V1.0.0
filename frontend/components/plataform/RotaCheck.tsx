'use client';

import { AuthUserContext } from '@/context/AuthUserContext';
import { useRouter } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';
import DeviceGate from './DeviceGate';

const RotaCheck = ({ children }: { children: ReactNode }) => {
  const { loadAuthUser, authUser } = useContext(AuthUserContext);
  const router = useRouter();
  const [ready, setReady] = useState(false);

  // console.log('RotaCheck authUser:', authUser);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticatedUser = await loadAuthUser();

      if (!authenticatedUser) {
        router.replace('/acess/login');
        return;
      }

      setReady(true);
    };

    checkAuth();
  }, [loadAuthUser, router]);

  if (!ready) {
    return null;
  }

  return (
    <>
      <DeviceGate>{children}</DeviceGate>
    </>
  );
};

export default RotaCheck;
