'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Flow.module.scss';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { DragEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import MenuAcervo from './MenuAcervo';
import {
  ReactFlowProvider,
  ReactFlow,
  addEdge,
  Background,
  Connection,
  Edge,
  ReactFlowInstance,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './style.css';
import { useFlow } from '@/context/FlowContext';
import CustomNode from './CustomFlow/CustomNode';
import CustomEdge from './CustomFlow/CustomEdge';
import { MyNode, Bond } from '@/@types/flow';
import { useVideos } from '@/context/VideosContext';
import { useError } from '@/context/ErrorContext';
import { convertFlowToCampaignPayload, nodeNew, willCreateCycle } from '@/utils/flowUteis';
import ModalFlow from './ModalFlow';
import Features from './Features';
import BtnG from '../BtnG';
import { createCampaign } from '@/service/campaign/capaignServices';
import {
  ICreateCampaignPayload,
  ICreateCampaignVideo,
  ICreateBondsCampaign,
  ICampaign,
} from '@/@types/campaign';
import { isURL, isValidUrl } from '@/utils/urlValidator';
import { useEditCampaign } from '@/context/EditCampaignContext';

const nodeTypes = {
  customNode: CustomNode,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

const Flow = () => {
  const { editingCampaign, setEditingCampaign } = useEditCampaign();
  const [nameCampaign, setNameCampaign] = useState('Nome da campanha');
  const [isEditing, setIsEditing] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [savedCampaign, setSavedCampaign] = useState<ICampaign | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const menuAcervoRef = useRef<{ closeMenu: () => void }>(null);

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setNodes,
    setEdges,
    modalOpen,
    setModalOpen,
    typeModal,
    setTypeModal,
    setDadosModal,
  } = useFlow();
  const { videos } = useVideos();
  const { showWarning, showInfo, showConfirmation } = useError();

  const [reactFlowInstance, setReactFlowInstance] = useState<
    ReactFlowInstance<MyNode, Edge> | undefined
  >();

  const onInit = useCallback(
    (rfi: ReactFlowInstance<MyNode, Edge>) => setReactFlowInstance(rfi),
    []
  );

  useEffect(() => {
    return () => {
      // Cleanup: limpa todos os dados quando desmonta
      setNodes([]);
      setEdges([]);
      setModalOpen(false);
      setDadosModal(undefined);
    };
  }, [setNodes, setEdges, setModalOpen, setDadosModal]);

  // Detecta se há uma campanha sendo editada no context
  useEffect(() => {
    if (editingCampaign) {
      setSavedCampaign(editingCampaign);
      setFeaturesModalOpen(true);
      // Limpa o context após abrir o modal
      setEditingCampaign(null);
    }
  }, [editingCampaign, setEditingCampaign]);

  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();

      if (reactFlowInstance) {
        const type = event.dataTransfer.getData('application/reactflow');
        const videoId = event.dataTransfer.getData('videoId');

        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });

        console.log('Drop event:', event);
        console.log('videoId ', videoId);
        const video = videos.find((vid) => vid.ID === videoId);

        if (!video) {
          console.error('Vídeo não encontrado para o ID:', videoId);
          return;
        }

        if (nodes.find((node: MyNode) => node.data.ORDER === null)) {
          showWarning('Conecte os vídeos para adicionar um novo.');
          return;
        }

        if (nodes.find((node: MyNode) => node.data.VIDEO.ID === videoId)) {
          showWarning('Este vídeo já foi adicionado ao fluxo.');
          return;
        }

        const newNode: MyNode = {
          id: video.ID,
          type: 'customNode',
          position,
          data: {
            VIDEO: video,
            ORDER: nodes.length === 0 ? 1 : null,
            BONDS: [],
            CTA: false,
            CTA_START: 0,
            CTA_URL: '',
            CTA_TEXT: '',
            CTA_STYLE: '',
            X_POSITION: position.x,
            Y_POSITION: position.y,
          },
        };

        setNodes((nds) => nds.concat(newNode));

        if (menuAcervoRef.current) {
          menuAcervoRef.current.closeMenu();
        }
      }
    },
    [reactFlowInstance, setNodes, videos, nodes]
  );

  const onConnect = useCallback(
    (params: Connection) => {
      const source: MyNode | undefined = nodes.find(
        (n) => n.id === params.source
      );
      const target: MyNode | undefined = nodes.find(
        (n) => n.id === params.target
      );

      if (!source && !target) {
        return;
      }

      const newEdge = {
        source: params.source!,
        target: params.target!,
        id: `${params.source}-${params.target}`,
      };

      if (willCreateCycle(edges, newEdge)) {
        showWarning(
          'Operação inválida: essa conexão criaria um ciclo no Flow.'
        );
        return;
      }

      const node = nodeNew(nodes, source, target);

      setNodes(node);
      setEdges((eds) => addEdge({ ...params, type: 'customEdge' }, eds));

      setDadosModal({
        TARGET: target.id,
        VIDEO: source.data.VIDEO,
        ORDER: source.data.ORDER,
        BONDS: [
          ...source.data.BONDS,
          {
            VIDEO_ID: target.data.VIDEO.ID,
            BUTTON: true,
            BUTTON_START: 0,
            BUTTON_TEXT: '',
            BUTTON_STYLE: '',
            BUTTON_MODAL: false,
          },
        ],
        CTA: source.data.CTA,
        CTA_URL: source.data.CTA_URL,
        CTA_TEXT: source.data.CTA_TEXT,
        CTA_STYLE: source.data.CTA_STYLE,
        CTA_START: source.data.CTA_START,
        X_POSITION: source.data.X_POSITION,
        Y_POSITION: source.data.Y_POSITION,
      });
      setTypeModal('edge');
      setModalOpen(true);
    },
    [setEdges, setNodes, nodes, edges, showWarning, setDadosModal, setTypeModal, setModalOpen]
  );

  const hasChanges = useMemo(() => {
    const hasNodes = nodes.length > 0;
    const hasNameChanged = nameCampaign !== 'Nome da campanha' && nameCampaign.trim().length >= 3;
    return hasNodes || hasNameChanged;
  }, [nodes.length, nameCampaign]);





  const handleSave = useCallback(async () => {

    if (
      !nameCampaign ||
      nameCampaign.trim().length < 3 ||
      nameCampaign === `Campanha ${new Date().toLocaleDateString()}`
    ) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    if (nodes.length === 0) {
      showWarning('Adicione pelo menos um vídeo ao flow antes de salvar.');
      return;
    }

    const disconnectedNodes = nodes.filter((node) => node.data.ORDER === null);
    if (disconnectedNodes.length > 0) {
      showWarning(
        'Existem vídeos desconectados no flow. Conecte todos os vídeos antes de salvar.'
      );
      return;
    }

    const payload = convertFlowToCampaignPayload(nameCampaign, nodes);
    console.log('Payload para salvar campanha:', payload);

    const result = await createCampaign(payload);
    console.log('Resposta da criação de campanha:', result);

    if ('STATUS' in result && 'MESSAGE' in result) {
      showWarning(result.MESSAGE);
      return;
    }

    // Armazena a campanha criada e abre o modal Features
    setSavedCampaign(result as ICampaign);
    setFeaturesModalOpen(true);

    showInfo(
      `Campanha "${nameCampaign}" salva com sucesso! ${nodes.length} vídeo(s) adicionado(s).`
    );

    // Limpa o flow
    setNodes([]);
    setEdges([]);
    setNameCampaign('Nome da campanha');
    setIsEditing(false);
    if (modalOpen) {
      setModalOpen(false);
    }
  }, [
    nameCampaign,
    nodes,
    edges,
    inputRef,
    showWarning,
    showInfo,
    convertFlowToCampaignPayload,
    setNodes,
    setEdges,
    modalOpen,
    setModalOpen,
  ]);

  const handleCancel = useCallback(async () => {
    if (nodes.length > 0) {
      const confirmed = await showConfirmation(
        'Todos os dados não salvos serão perdidos. Deseja continuar?',
        {
          title: 'Cancelar Campanha',
          confirmText: 'Sim, cancelar',
          cancelText: 'Não, manter',
          type: 'warning',
        }
      );

      if (!confirmed) return;
    }

    setNodes([]);
    setEdges([]);
    setNameCampaign('Nome da campanha');
    setIsEditing(false);
    if (modalOpen) {
      setModalOpen(false);
    }

    showInfo('Campanha cancelada.');
  }, [
    nodes.length,
    setNodes,
    setEdges,
    modalOpen,
    setModalOpen,
    showInfo,
    showConfirmation,
  ]);

  return (
    <ReactFlowProvider>
      {modalOpen && (
        <ModalFlow onClose={() => setModalOpen(false)} type={typeModal} />
      )}

      {featuresModalOpen && savedCampaign && (
        <Features
          campaing={savedCampaign}
          onClose={() => {
            setFeaturesModalOpen(false);
            setSavedCampaign(null);
          }}
        />
      )}

      {hasChanges && (
        <div className={styles.actions}>
          <div className={`${styles.actions_btn}  ${styles.actions_btn_save}`}>
            <BtnG goClick={handleSave} text="Salvar" />
          </div>
          <div className={`${styles.actions_btn}  ${styles.actions_btn_cancel}`}>
            <BtnG goClick={handleCancel} text="Cancelar" />
          </div>
        </div>
      )}
      <section className={styles.flow}>
        <MenuAcervo ref={menuAcervoRef} />
        <div className={styles.flow_content}>
          <h2 className={styles.flow_content_title}>Flow</h2>
          <div className={styles.flow_content_header}>
            <FontAwesomeIcon
              icon={faPencil}
              title="Click para editar o nome da Campanha"
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
              className={classNames({
                [styles.flow_content_header_icon]: true,
                [styles.flow_content_header_icon_editing]:
                  isEditing || nameCampaign !== 'Nome da campanha',
              })}
            />
            <input
              ref={inputRef}
              className={styles.flow_content_header_input}
              type="text"
              placeholder="Nome da campanha"
              value={nameCampaign}
              onChange={(e) => setNameCampaign(e.target.value)}
              onFocus={() => {
                setNameCampaign('');
                setIsEditing(true);
              }}
              onBlur={(e) => {
                nameCampaign.trim().length < 3
                  ? setNameCampaign('Nome da campanha')
                  : setNameCampaign(e.target.value);
                setIsEditing(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  inputRef.current?.blur();
                }
              }}
            />
          </div>
          <div className="dndflow">
            <div className="reactflow-wrapper">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
                fitViewOptions={{
                  padding: 0.3,
                  maxZoom: 0.8,
                }}
                defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
                minZoom={0.3}
                maxZoom={2}
              >
                <Background bgColor="#000125" />
              </ReactFlow>
            </div>
          </div>
        </div>
      </section>
    </ReactFlowProvider>
  );
};

export default Flow;
