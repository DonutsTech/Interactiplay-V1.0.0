'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReactNode } from 'react';

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
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      
      const hasTouchEvents = 'ontouchstart' in window;
      const hasTouchPoints = navigator.maxTouchPoints > 0;
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      return hasTouchEvents || hasTouchPoints || hasCoarsePointer;
    };
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouchDevice(checkTouchDevice());
  }, []);



  return (
    <isMobileContext.Provider value={{
      isMobile,
      isMobileVideo,
      isTouchDevice,
      width,
      height
    }}>
      {children}
    </isMobileContext.Provider>
  );
};

export const useIsMobile = () => {
  return useContext(isMobileContext);
};

export const useIsMobileVideo = () => {
  return useContext(isMobileContext).isMobileVideo;
};

export const useIsTouchDevice = () => {
  return useContext(isMobileContext).isTouchDevice;
};