'use client'

import { useState, useContext, createContext, ReactNode } from 'react';
import type { Plan } from '@/@types/plan';


export type AccessType = 'login' | 'cadastro' | 'forgotPassword' | 'planos' | 'deny' | 'done' | 'newPassword';


export type SelectedPlan = Plan | null;

interface AccessTypeContextProps {
  accessType: AccessType;
    setAccessType: (type: AccessType) => void;
  promo: boolean;
  setPromo: (promo: boolean) => void;
  selectedPlan: SelectedPlan | null;
  setSelectedPlan: (plan: SelectedPlan | null) => void;
}

const AccessTypeContext = createContext<AccessTypeContextProps | undefined>(undefined);


export const AccessTypeProvider = ({ children }: { children: ReactNode }) => {
  const [accessType, setAccessType] = useState<AccessType>('login');
  const [promo, setPromo] = useState<boolean>(true);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);

  return (
    <AccessTypeContext.Provider value={{ 
      accessType, 
      setAccessType, 
      promo, 
      setPromo, 
      selectedPlan, 
      setSelectedPlan 
      }}>
      {children}
    </AccessTypeContext.Provider>
  );
};

export function useAccessType() {
  const context = useContext(AccessTypeContext);
  if (!context) {
    throw new Error('useAccessType deve ser usado dentro de AccessTypeProvider');
  }
  return context;
}
