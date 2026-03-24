'use client';

import { createContext, useContext, useEffect, useState } from "react";

const IsLoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}>({
  isLoading: false,
  setIsLoading: () => {},
});

export const IsLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};

export default IsLoadingContext;

const useIsLoading = () => {
  const context = useContext(IsLoadingContext);
  if (!context) {
    throw new Error("useIsLoading must be used within an IsLoadingProvider");
  }
  return context;
};

export { useIsLoading };