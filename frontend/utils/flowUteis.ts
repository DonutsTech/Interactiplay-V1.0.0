import { Bond, MyNode } from '@/@types/flow';


export const orderForEdges = (data: MyNode[]) => {
    const start = data.find((node) => node.data.ORDER === 1);
    if (!start) return;

    const map = Object.fromEntries(data.map((node) => [node.id, node]));
    const list = [start];

    while (list.length) {
      const now = list.shift();
      if (now?.data.BONDS.length === 0) continue;

      now?.data.BONDS.forEach((bond : Bond) => {
        const on = map[bond.VIDEO_ID];
        if (on && on.data.ORDER === null) {
          on.data.ORDER = (now.data.ORDER || 0) + 1;
          list.push(on);
        }
      })
    }

    return data;
  };

export const nodeNew = (nodes: MyNode[], source: MyNode, target: MyNode) => {
  const newNodes: MyNode[] = nodes.map((node: MyNode) => {
    if (node.id === source.id) {
      return {
        ...node,
        data: {
          ...node.data,
          BONDS: [
            ...node.data.BONDS,
            {
              VIDEO_ID: target.data.VIDEO.ID || '',
              BUTTON: true,
              BUTTON_START: 0,
              BUTTON_TEXT: '',
              BUTTON_STYLE: '',
              BUTTON_MODAL: false,
            },
          ],
        },
      };
    }
    if (node.id === target.id) {
      return {
        ...node,
        data: {
          ...node.data,
          ORDER:
            source && source.data.ORDER !== null
              ? node.data.ORDER === null
                ? source.data.ORDER + 1
                : node.data.ORDER < source.data.ORDER + 1
                  ? node.data.ORDER
                  : source.data.ORDER + 1
              : null,
        },
      };
    }
    return node;
  });

  const newMapNodes = newNodes.map((node: MyNode) => {
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
  });

  const newOrderNode = orderForEdges(newMapNodes);

  return newOrderNode || newNodes;
};


