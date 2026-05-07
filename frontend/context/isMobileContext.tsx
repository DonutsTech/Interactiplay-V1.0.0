'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface IsMobileContextType {
  isMobile: boolean;
  isMobileVideo: boolean;
  isTouchDevice: boolean;
  width: number;
  height: number;
}

const isMobileContext = createContext<IsMobileContextType>({
  isMobile: false,
  isMobileVideo: false,
  isTouchDevice: false,
  width: 0,
  height: 0,
});

interface IsMobileProviderProps {
  children: ReactNode;
}

export const IsMobileProvider = ({ children }: IsMobileProviderProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobileVideo = useMediaQuery({ query: '(max-width: 426px)' });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const checkTouchDevice = () => {
    // Usa apenas o ponteiro primário: coarse = toque (celular/tablet),
    // fine = mouse (desktop/notebook com touchscreen).
    return window.matchMedia('(pointer: coarse)').matches;
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsTouchDevice(checkTouchDevice());
  }, []);

  const value = useMemo(() => ({
    isMobile,
    isMobileVideo,
    isTouchDevice,
    width,
    height
  }), [isMobile, isMobileVideo, isTouchDevice, width, height]);


  return (
    <isMobileContext.Provider value={value}>
      {children}
    </isMobileContext.Provider>
  );
};


export const useIsMobile = () => {
  return useContext(isMobileContext);
}