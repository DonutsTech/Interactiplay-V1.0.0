'use client';

import { useIsMobile } from '@/context/isMobileContext';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

const DeviceGate = ({ children }: { children: ReactNode }) => {
  const { isMobile, isTouchDevice } = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!pathname.startsWith('/dashboard')) {
      setReady(true);
      return;
    }

    if ((isMobile || isTouchDevice) && !pathname.startsWith('/dashboard/user')) {
      router.replace('/dashboard/user/');
      return;
    }

    setReady(true);
  }, [isMobile, isTouchDevice, pathname, router]);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
};

export default DeviceGate;
