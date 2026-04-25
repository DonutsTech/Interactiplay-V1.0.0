'use client';

import { ICampaign } from '@/@types/campaign';
import { ErrorMessage } from '@/@types/error';
import { useCallDataBase } from '@/hook/useCallDataBase';
import api from '@/service/config';
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
  editingCampaign: string | undefined;
  setEditingCampaign: Dispatch<SetStateAction<string | undefined>>;
  modalOpenF: boolean;
  setModalOpenF: Dispatch<SetStateAction<boolean>>;
  dataIdCampaign: ICampaign;
  loadingIdCampaign: boolean;
  errorIdCampaign: ErrorMessage | undefined;
  fecthIdCampaign: () => void;
}

const DEFAULT_CONTEXT: EditCampaignContextType = {
  editingCampaign: undefined,
  setEditingCampaign: () => {},
  modalOpenF: false,
  setModalOpenF: () => {},
  dataIdCampaign: {} as ICampaign,
  loadingIdCampaign: false,
  errorIdCampaign: undefined,
  fecthIdCampaign: () => {},
};

const EditCampaignContext =
  createContext<EditCampaignContextType>(DEFAULT_CONTEXT);

export const EditCampaignProvider = ({ children }: { children: ReactNode }) => {
  const [editingCampaign, setEditingCampaign] = useState<string | undefined>(
    DEFAULT_CONTEXT.editingCampaign
  );
  const [modalOpenF, setModalOpenF] = useState<boolean>(false);

  const [dataIdCampaign, loadingIdCampaign, errorIdCampaign, fecthIdCampaign] =
    useCallDataBase<ICampaign>({
      axiosInstance: api,
      method: 'get',
      url: '/user/campaigns/',
      uuid: editingCampaign,
    });

  const value = useMemo(
    () => ({
      editingCampaign,
      setEditingCampaign,
      modalOpenF,
      setModalOpenF,
      dataIdCampaign,
      loadingIdCampaign,
      errorIdCampaign,
      fecthIdCampaign,
    }),
    [
      editingCampaign,
      setEditingCampaign,
      modalOpenF,
      setModalOpenF,
      dataIdCampaign,
      loadingIdCampaign,
      errorIdCampaign,
      fecthIdCampaign,
    ]
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
