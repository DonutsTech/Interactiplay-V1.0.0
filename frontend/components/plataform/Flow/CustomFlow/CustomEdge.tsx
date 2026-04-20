
//Edge
import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
} from "@xyflow/react";
import type { EdgeProps } from "@xyflow/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DadosModal, Bond } from "@/@types/flow";
import { orderForEdges } from "@/utils/flowUteis";
import { useFlow } from "@/context/FlowContext";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd, source, target }: EdgeProps) {
  const { setEdges, nodes, setModalOpen, setDadosModal, setTypeModal, setNodes, dadosModal } = useFlow();

  // Usando getBezierPath para criar curvas suaves
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const handleDelete = () => {
    const newNodes = nodes.map((node) => {
      if (node.id === source) {
        return {
          ...node,
          data: {
            ...node.data,
            BONDS: node.data.BONDS.filter((bond: Bond) => bond.VIDEO_ID !== target),
          },
        };
      }
      return node;
    })

    const nodesOrder = orderForEdges(newNodes.map((node) => {
      if (node.data.ORDER === 1) {
        return node;
      }

      return {
        ...node,
        data: {
          ...node.data,
          ORDER: null,
        },
      }
    }));

    setNodes(nodesOrder || newNodes);
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  const handleEdit = () => {
    const sourceNode = nodes.find((node) => node.id === source);

    setDadosModal({...sourceNode?.data, TARGET: target} as DadosModal);
    setModalOpen(true);
    setTypeModal('edge');
  };

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          strokeWidth: 2,
          stroke: '#8FFFFF',
        }}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: 'all',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            background: '#f2f2f2',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '4px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
          className="nodrag nopan"
        >
          <button
            onClick={handleEdit}
            style={{
              background: '#353aa4',
              color: '#f2f2f2',
              border: 'none',
              borderRadius: '20px',
              // padding: '4px 6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              fontSize: '10px',
              transition: 'all 0.2s ease-in-out',
            }}
            title="Editar"
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1.2)';
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FontAwesomeIcon icon={faGear} size="xs" />
          </button>
          <button
            onClick={handleDelete}
            style={{
              background: '#871121',
              color: '#f2f2f2',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              fontSize: '10px',
              transition: 'all 0.2s ease-in-out',
            }}
            title="Excluir"
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1.2)';
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  )
};

