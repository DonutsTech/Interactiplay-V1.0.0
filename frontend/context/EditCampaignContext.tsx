'use client';

import { ICampaign } from '@/@types/campaign';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface EditCampaignContextType {
  editingCampaign: ICampaign | undefined;
  setEditingCampaign: Dispatch<SetStateAction<ICampaign | undefined>>;
  modalOpenF: boolean;
  setModalOpenF: Dispatch<SetStateAction<boolean>>;
}

const DEFAULT_CONTEXT: EditCampaignContextType = {
  editingCampaign: undefined,
  setEditingCampaign: () => {},
  modalOpenF: false,
  setModalOpenF: () => {},
};

const EditCampaignContext =
  createContext<EditCampaignContextType>(DEFAULT_CONTEXT);

export const EditCampaignProvider = ({ children }: { children: ReactNode }) => {
  const [editingCampaign, setEditingCampaign] = useState<ICampaign | undefined>(
    undefined
  );
  const [modalOpenF, setModalOpenF] = useState<boolean>(false);

  const fecthCampaignForEdit = (campaignId: string) => {
    try {
    } catch (error) {
      console.error('Erro ao buscar campanha para edição:', error);
    }
  };

  const value = useMemo(
    () => ({
      editingCampaign,
      setEditingCampaign,
      modalOpenF,
      setModalOpenF,
    }),
    [editingCampaign, setEditingCampaign, modalOpenF, setModalOpenF]
  );

  return (
    <EditCampaignContext.Provider value={value}>
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
