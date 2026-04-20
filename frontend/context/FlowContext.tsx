'use client';

import React, { createContext, useContext, useMemo } from 'react';
import {
  Node,
  OnNodesChange,
  useNodesState,
  Edge,
  OnEdgesChange,
  useEdgesState,
} from '@xyflow/react';
import { DadosModal, MyNode } from '@/@types/flow';

interface FlowContextValue {
  nodes: MyNode[];
  setNodes: React.Dispatch<React.SetStateAction<MyNode[]>>;
  onNodesChange: OnNodesChange<MyNode>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange<Edge>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dadosModal: DadosModal | undefined;
  setDadosModal: React.Dispatch<React.SetStateAction<DadosModal | undefined>>;
  typeModal: 'node' | 'edge';
  setTypeModal: React.Dispatch<React.SetStateAction<'node' | 'edge'>>;
}

const FlowContext = createContext<FlowContextValue | null>(null);

export const FlowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<MyNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [dadosModal, setDadosModal] = React.useState<DadosModal | undefined>(
    undefined
  );
  const [typeModal, setTypeModal] = React.useState<'node' | 'edge'>('node');

  const value = useMemo(
    () => ({
      nodes,
      setNodes,
      onNodesChange,
      edges,
      setEdges,
      onEdgesChange,
      modalOpen,
      setModalOpen,
      dadosModal,
      setDadosModal,
      typeModal,
      setTypeModal,
    }),
    [
      nodes,
      setNodes,
      onNodesChange,
      edges,
      setEdges,
      onEdgesChange,
      modalOpen,
      setModalOpen,
      dadosModal,
      setDadosModal,
      typeModal,
      setTypeModal,
    ]
  );

  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
};

export const useFlow = () => {
  const ctx = useContext(FlowContext);
  if (!ctx) throw new Error('useFlow deve ser usado dentro de <FlowProvider>');
  return ctx;
};
