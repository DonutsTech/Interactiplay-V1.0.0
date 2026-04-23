'use client';

import { ICampaign } from '@/@types/campaign';
import { createContext, useContext, useState, ReactNode } from 'react';

interface EditCampaignContextType {
  editingCampaign: ICampaign | null;
  setEditingCampaign: (campaign: ICampaign | null) => void;
}

const EditCampaignContext = createContext<EditCampaignContextType | undefined>(
  undefined
);

export const EditCampaignProvider = ({ children }: { children: ReactNode }) => {
  const [editingCampaign, setEditingCampaign] = useState<ICampaign | null>(null);

  return (
    <EditCampaignContext.Provider value={{ editingCampaign, setEditingCampaign }}>
      {children}
    </EditCampaignContext.Provider>
  );
};

export const useEditCampaign = () => {
  const context = useContext(EditCampaignContext);
  if (!context) {
    throw new Error('useEditCampaign must be used within EditCampaignProvider');
  }
  return context;
};
