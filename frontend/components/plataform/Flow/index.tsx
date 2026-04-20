'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Flow.module.scss';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { DragEvent, useCallback, useRef, useState } from 'react';
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
import { MyNode } from '@/@types/flow';
import { useVideos } from '@/context/VideosContext';
import { useError } from '@/context/ErrorContext';
import { nodeNew } from '@/utils/flowUteis';

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
  const [nameCampaign, setNameCampaign] = useState('Nome da campanha');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const menuAcervoRef = useRef<{ closeMenu: () => void }>(null);
  const { nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges } =
    useFlow();
  const { videos } = useVideos();
  const { showWarning } = useError();

  const [reactFlowInstance, setReactFlowInstance] = useState<
    ReactFlowInstance<MyNode, Edge> | undefined
  >();

  const onInit = useCallback(
    (rfi: ReactFlowInstance<MyNode, Edge>) => setReactFlowInstance(rfi),
    []
  );

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

      const node = nodeNew(nodes, source, target);

      setNodes(node);
      setEdges((eds) => addEdge({ ...params, type: 'customEdge' }, eds));
    },
    [setEdges, setNodes, nodes]
  );

  return (
    <ReactFlowProvider>
      <section className={styles.flow}>
        <MenuAcervo ref={menuAcervoRef} />
        <div className={styles.flow_content}>
          <h2 className={styles.flow_content_title}>Flow</h2>
          <div className={styles.flow_content_header}>
            <FontAwesomeIcon
              icon={faPencil}
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
