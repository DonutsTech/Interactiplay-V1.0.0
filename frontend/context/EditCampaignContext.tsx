'use client';

import { ICampaign } from '@/@types/campaign';
import { getCampaignById } from '@/service/campaign/capaignServices';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useError } from './ErrorContext';

interface EditCampaignContextType {
  editingCampaign: ICampaign | undefined;
  setEditingCampaign: Dispatch<SetStateAction<ICampaign | undefined>>;
  modalOpenF: boolean;
  setModalOpenF: Dispatch<SetStateAction<boolean>>;
  fecthCampaignForEdit: (id: string) => Promise<void>;
}

const DEFAULT_CONTEXT: EditCampaignContextType = {
  editingCampaign: undefined,
  setEditingCampaign: () => {},
  modalOpenF: false,
  setModalOpenF: () => {},
  fecthCampaignForEdit: async (id: string) => {},
};

const EditCampaignContext =
  createContext<EditCampaignContextType>(DEFAULT_CONTEXT);

export const EditCampaignProvider = ({ children }: { children: ReactNode }) => {
  const [editingCampaign, setEditingCampaign] = useState<ICampaign | undefined>(
    undefined
  );
  const [modalOpenF, setModalOpenF] = useState<boolean>(false);

  const { handleRequest } = useError();

  console.log(editingCampaign)

  const fecthCampaignForEdit = useCallback(async (id: string) => {
    const data = await handleRequest(
      () => getCampaignById(id),
      {
        loadingMessage: 'Carregando campanhas...',
        suppressLoadingToast: true,
        suppressLoading: true,
      }
    );

    console.log('Fetched campaign data:', data);

    if (data && 'ID' in data) {
      setEditingCampaign(data);
    }
  }, [handleRequest]);

  const value = useMemo(
    () => ({
      editingCampaign,
      setEditingCampaign,
      modalOpenF,
      setModalOpenF,
      fecthCampaignForEdit,
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
