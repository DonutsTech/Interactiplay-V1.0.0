import { IVideo } from '@/@types/video';
import { Handle, NodeProps, Position } from '@xyflow/react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons/faCircleNodes';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

import styles from './CustomNode.module.scss';
import { orderForEdges } from '@/utils/flowUteis';
import { formatVideoName } from '@/utils/videoUtils';
import { useEffect } from 'react';
import { useFlow } from '@/context/FlowContext';
import { Bond, DadosModal } from '@/@types/flow';
import { useError } from '@/context/ErrorContext';

interface CustomNodeData extends NodeProps {
  data: {
    VIDEO: IVideo;
    ORDER: number | null;
    BONDS: Bond[];
    CTA: boolean;
    CTA_URL: string;
    CTA_TEXT: string;
    CTA_STYLE: string;
    CTA_START: number;
    X_POSITION: number;
    Y_POSITION: number;
  };
}

export default function CustomNode({
  data,
  isConnectable,
  positionAbsoluteX,
  positionAbsoluteY,
  id,
}: CustomNodeData) {
  const {
    nodes,
    setEdges,
    setNodes,
    edges,
    setModalOpen,
    setDadosModal,
    setTypeModal,
  } = useFlow();
  const { showWarning } = useError();

  const deleteNode = (id: string) => {
    const find = nodes.find((node) => node.id === id);

    if (!find) return;

    if (find.data.ORDER === 1 && nodes.length > 1) {
      showWarning('Não é possível deletar o primeiro vídeo do fluxo.');
      return;
    }

    const deleteNode = nodes
      .filter((node) => node.id !== id)
      .map((node) => ({
        ...node,
        data: {
          ...node.data,
          BONDS: node.data.BONDS.filter((bond: Bond) => bond.VIDEO_ID !== id),
        },
      }));
    const connectedEdges = edges.filter(
      (edge) => edge.source !== id && edge.target !== id
    );

    const nodesOrder = orderForEdges(
      deleteNode.map((node) => {
        if (node.data.ORDER === 1) {
          return node;
        }

        return {
          ...node,
          data: {
            ...node.data,
            ORDER: null,
          },
        };
      })
    );
    setNodes(nodesOrder || deleteNode);
    setEdges(connectedEdges);
  };

  useEffect(() => {
    const node = nodes.find((node) => node.id === id);
    if (
      node &&
      node.data.X_POSITION !== positionAbsoluteX &&
      node.data.Y_POSITION !== positionAbsoluteY
    ) {
      const updatedNodes = nodes.map((n) => {
        if (n.id === node.id) {
          return {
            ...n,
            data: {
              ...n.data,
              X_POSITION: positionAbsoluteX,
              Y_POSITION: positionAbsoluteY,
            },
          };
        }
        return n;
      });
      setNodes(updatedNodes);
    }
  }, [positionAbsoluteX, positionAbsoluteY, nodes, id, setNodes]);

  return (
    <>
      <div className={styles.videoNode}>
        {data.ORDER !== 1 && (
          <Handle
            type="target"
            position={Position.Left}
            isConnectable={isConnectable}
            className={styles.handle}
            style={{
              background: '#353AA4',
              width: 12,
              height: 12,
              border: '2px solid #f2f2f2',
            }}
          />
        )}

        <p className={styles.videoNode_title}>
          {formatVideoName(data.VIDEO.NAME).length > 12
            ? formatVideoName(data.VIDEO.NAME).slice(0, 12) + '...'
            : formatVideoName(data.VIDEO.NAME)}
        </p>

        <div
          className={classNames({
            [styles.videoNode_card]: true,
            [styles.videoNode_card_portrait]:
              data.VIDEO.ORIENTATION === 'portrait',
            [styles.videoNode_card_landscape]:
              data.VIDEO.ORIENTATION === 'landscape',
          })}
        >
          <video
            className={styles.videoNode_card_video}
            width={data.VIDEO.ORIENTATION === 'portrait' ? 1080 : 1920}
            height={data.VIDEO.ORIENTATION === 'portrait' ? 1920 : 1080}
            loop
            muted
            autoPlay
            playsInline
            draggable={false}
            src={data.VIDEO.URL}
            preload="metadata"
          />
          <div className={styles.videoNode_card_btns}>
            <p className={styles.videoNode_card_btns_node}>
              <FontAwesomeIcon icon={faCircleNodes} />{' '}
              {data.ORDER !== null ? data.ORDER : '—'}
            </p>
            <button
              className={classNames({
                [styles.videoNode_card_btns_btn_modal]: true,
                [styles.videoNode_card_btns_btn]: true,
              })}
              onClick={(e) => {
                e.stopPropagation();
                setDadosModal({
                  TARGET: null, // Node não tem target
                  VIDEO: data.VIDEO,
                  ORDER: data.ORDER,
                  BONDS: data.BONDS,
                  CTA: data.CTA,
                  CTA_URL: data.CTA_URL,
                  CTA_TEXT: data.CTA_TEXT,
                  CTA_STYLE: data.CTA_STYLE,
                  CTA_START: data.CTA_START,
                  X_POSITION: positionAbsoluteX || 0,
                  Y_POSITION: positionAbsoluteY || 0,
                });
                setModalOpen(true);
                setTypeModal('node');
              }}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button
              className={classNames({
                [styles.videoNode_card_btns_btn_delete]: true,
                [styles.videoNode_card_btns_btn]: true,
              })}
              onClick={() => {
                deleteNode(data.VIDEO.ID);
              }}
              title="Deletar video do flow"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>

        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
          className={styles.handle}
          style={{
            background: '#353AA4',
            width: 12,
            height: 12,
            border: '2px solid #f2f2f2',
          }}
        />
      </div>
    </>
  );
}
