'use client';

import { Bond } from '@/@types/flow';
import { useEditCampaign } from '@/context/EditCampaignContext';
import { useError } from '@/context/ErrorContext';
import { useFlow } from '@/context/FlowContext';
import { orderForEdges } from '@/utils/flowUteis';
import { formatDuration } from '@/utils/videoUtils';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import ButtonGenerator from './ButtonGenerator';
import CtaGenerator from './CtaGenerator';
import styles from './ModalFlow.module.scss';

interface ModalFlowProps {
  onClose: () => void;
  type?: 'node' | 'edge';
}

const ModalFlow = ({ onClose, type = 'node' }: ModalFlowProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<boolean>(false);
  const initialNodesRef = useRef<any[]>([]);
  const initialEdgesRef = useRef<any[]>([]);

  const initialCtaStateRef = useRef<any>(null);
  const initialBtnStateRef = useRef<any>(null);
  const wasPreviouslyConfiguredRef = useRef<boolean>(false);
  const { dadosModal, setNodes, nodes, setEdges, edges } = useFlow();
  const { editingCampaign } = useEditCampaign();
  const { showInfo, showSuccess } = useError();
  const [timeVideo, setTimeVideo] = useState<number>(0);

  const [ctaActive, setCtaActive] = useState<boolean>(false);
  const [ctaText, setCtaText] = useState<string>('');
  const [alignment, setAlignment] = useState<string>('center');
  const [textStyle, setTextStyle] = useState<string>('normal');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [buttonText, setButtonText] = useState<string>('');
  const [buttonLink, setButtonLink] = useState<string>('');
  const [buttonColor, setButtonColor] = useState<string>('#23118E');
  const [buttonTextColor, setButtonTextColor] = useState<string>('#FFFFFF');
  const [borderRadius, setBorderRadius] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [ctaTop, setCtaTop] = useState<number>(50);
  const [ctaLeft, setCtaLeft] = useState<number>(50);

  const [btnActive, setBtnActive] = useState<boolean>(true);
  const [textBtn, setTextBtn] = useState<string>('');
  const [bgColorBtn, setBgColorBtn] = useState<string>('#23118E');
  const [textColorBtn, setTextColorBtn] = useState<string>('#FFFFFF');
  const [borderRadiusBtn, setBorderRadiusBtn] = useState<number>(0);
  const [startBtn, setStartBtn] = useState<number>(0);
  const [btnTop, setBtnTop] = useState<number>(50);
  const [btnLeft, setBtnLeft] = useState<number>(50);

  const [otherBonds, setOtherBonds] = useState<Bond[]>([]);


  useEffect(() => {
    if (!dadosModal) return;

    if (
      initialNodesRef.current.length === 0 &&
      initialEdgesRef.current.length === 0
    ) {
      initialNodesRef.current = JSON.parse(JSON.stringify(nodes));
      initialEdgesRef.current = JSON.parse(JSON.stringify(edges));
    }

    if (type === 'edge' && dadosModal.TARGET) {
      const bond = dadosModal.BONDS.find(
        (b) => b.VIDEO_ID === dadosModal.TARGET
      );

      if (bond && bond.BUTTON_MODAL === false) {
        const nodesWithoutNewConnection = nodes.map((node) => {
          if (node.id === dadosModal.VIDEO.ID) {
            return {
              ...node,
              data: {
                ...node.data,
                BONDS: node.data.BONDS.filter(
                  (b: Bond) => b.VIDEO_ID !== dadosModal.TARGET
                ),
              },
            };
          }

          if (node.id === dadosModal.TARGET) {
            return {
              ...node,
              data: {
                ...node.data,
                ORDER: null,
              },
            };
          }
          return node;
        });
        wasPreviouslyConfiguredRef.current = false;
      } else {
        wasPreviouslyConfiguredRef.current = bond
          ? bond.BUTTON_MODAL === true
          : false;
      }
    }

    setCtaActive(dadosModal.CTA);
    setCtaText(dadosModal.CTA_TEXT);
    setStart(dadosModal.CTA_START);
    setButtonLink(dadosModal.CTA_URL);

    if (dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0) {
      const style = JSON.parse(dadosModal.CTA_STYLE);
      setAlignment(style.alignment || 'center');
      setTextStyle(style.textStyle || 'normal');
      setTextColor(style.textColor || '#000000');
      setButtonText(style.buttonText || '');
      setButtonColor(style.buttonColor || '#23118E');
      setButtonTextColor(style.buttonTextColor || '#FFFFFF');
      setBorderRadius(style.borderRadius || 0);
      setCtaTop(style.ctaTop);
      setCtaLeft(style.ctaLeft);
    }

    // Armazena estado inicial do CTA
    initialCtaStateRef.current = {
      ctaActive: dadosModal.CTA,
      ctaText: dadosModal.CTA_TEXT,
      start: dadosModal.CTA_START,
      buttonLink: dadosModal.CTA_URL,
      alignment:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).alignment || 'center'
          : 'center',
      textStyle:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).textStyle || 'normal'
          : 'normal',
      textColor:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).textColor || '#000000'
          : '#000000',
      buttonText:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).buttonText || ''
          : '',
      buttonColor:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).buttonColor || '#23118E'
          : '#23118E',
      buttonTextColor:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).buttonTextColor || '#FFFFFF'
          : '#FFFFFF',
      borderRadius:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).borderRadius || 0
          : 0,
      ctaTop:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).ctaTop
          : 50,
      ctaLeft:
        dadosModal.CTA_STYLE && dadosModal.CTA_STYLE.length > 0
          ? JSON.parse(dadosModal.CTA_STYLE).ctaLeft
          : 50,
    };

    // Carrega dados do Button (se for edge)
    if (type === 'edge' && dadosModal.TARGET) {
      const bond = dadosModal.BONDS.find(
        (b) => b.VIDEO_ID === dadosModal.TARGET
      );
      if (bond) {
        setBtnActive(bond.BUTTON);
        setTextBtn(bond.BUTTON_TEXT);
        setStartBtn(bond.BUTTON_START);

        if (bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0) {
          const btnStyle = JSON.parse(bond.BUTTON_STYLE);
          setBgColorBtn(btnStyle.backgroundColor || '#23118E');
          setTextColorBtn(btnStyle.textColor || '#FFFFFF');
          setBorderRadiusBtn(btnStyle.borderRadius || 0);
          setBtnTop(btnStyle.btnTop);
          setBtnLeft(btnStyle.btnLeft);
        }

        initialBtnStateRef.current = {
          btnActive: bond.BUTTON,
          textBtn: bond.BUTTON_TEXT,
          startBtn: bond.BUTTON_START,
          bgColorBtn:
            bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0
              ? JSON.parse(bond.BUTTON_STYLE).backgroundColor || '#23118E'
              : '#23118E',
          textColorBtn:
            bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0
              ? JSON.parse(bond.BUTTON_STYLE).textColor || '#FFFFFF'
              : '#FFFFFF',
          borderRadiusBtn:
            bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0
              ? JSON.parse(bond.BUTTON_STYLE).borderRadius || 0
              : 0,
          btnTop:
            bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0
              ? JSON.parse(bond.BUTTON_STYLE).btnTop
              : 50,
          btnLeft:
            bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0
              ? JSON.parse(bond.BUTTON_STYLE).btnLeft
              : 50,
        };
      } else {
        initialBtnStateRef.current = {
          btnActive: true,
          textBtn: '',
          startBtn: 0,
          bgColorBtn: '#23118E',
          textColorBtn: '#FFFFFF',
          borderRadiusBtn: 0,
          btnTop: 50,
          btnLeft: 50,
        };
      }
    }

    // Carrega outros bonds para preview
    if (type === 'edge' && dadosModal.TARGET) {
      // Quando editando uma conexão, mostra os outros bonds (exceto o atual)
      const others = dadosModal.BONDS.filter(
        (b) => b.VIDEO_ID !== dadosModal.TARGET
      );
      setOtherBonds(others);
    } else if (type === 'node') {
      // Quando editando CTA, mostra todos os bonds
      setOtherBonds(dadosModal.BONDS || []);
    }
  }, [dadosModal, type]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setTimeVideo(videoRef.current.currentTime);
    }
  };

  // Drag para posicionar CTA/Button
  const onPointerDownBtn = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    draggingRef.current = true;
  };

  const onPointerMoveContainer = (e: React.PointerEvent) => {
    if (!draggingRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const leftPercent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    const topPercent = Math.min(Math.max((y / rect.height) * 100, 0), 100);

    if (type === 'edge') {
      setBtnTop(topPercent);
      setBtnLeft(leftPercent);
    } else {
      setCtaTop(topPercent);
      setCtaLeft(leftPercent);
    }
  };

  const onPointerUpBtn = (e: React.PointerEvent) => {
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
      // console.log('Posição atualizada:', { ctaTop, ctaLeft, btnTop, btnLeft });
    } catch {}
    draggingRef.current = false;
  };

  const handleCancel = () => {
    let hasChanges = false;

    // Verifica alterações no CTA (se for tipo node)
    if (type === 'node' && initialCtaStateRef.current) {
      const currentCtaState = {
        ctaActive,
        ctaText,
        start,
        buttonLink,
        alignment,
        textStyle,
        textColor,
        buttonText,
        buttonColor,
        buttonTextColor,
        borderRadius,
        ctaTop,
        ctaLeft,
      };

      hasChanges =
        JSON.stringify(currentCtaState) !==
        JSON.stringify(initialCtaStateRef.current);
    }

    // Verifica alterações no Button (se for tipo edge)
    if (type === 'edge' && initialBtnStateRef.current) {
      const currentBtnState = {
        btnActive,
        textBtn,
        startBtn,
        bgColorBtn,
        textColorBtn,
        borderRadiusBtn,
        btnTop,
        btnLeft,
      };

      hasChanges =
        JSON.stringify(currentBtnState) !==
        JSON.stringify(initialBtnStateRef.current);
    }

    const nodesChanged =
      JSON.stringify(nodes) !== JSON.stringify(initialNodesRef.current);

    if (nodesChanged && initialNodesRef.current.length > 0) {
      const restoredNodes = JSON.parse(JSON.stringify(initialNodesRef.current));
      if (editingCampaign) {
        
        setNodes(restoredNodes);
        setEdges(JSON.parse(JSON.stringify(initialEdgesRef.current)));
      } else {
        
        const reorderedNodes = orderForEdges(restoredNodes);
        setNodes(reorderedNodes || restoredNodes);
      }
      hasChanges = true;

      if (
        type === 'edge' &&
        !wasPreviouslyConfiguredRef.current &&
        dadosModal &&
        !editingCampaign
      ) {
        setEdges((edges) =>
          edges.filter(
            (edge) =>
              !(
                edge.source === dadosModal.VIDEO.ID &&
                edge.target === dadosModal.TARGET
              )
          )
        );
      }
    }

    if (hasChanges) {
      showInfo('Alteração cancelada');
    }

    onClose();
  };

  const handleSave = () => {
    initialNodesRef.current = JSON.parse(JSON.stringify(nodes));

    wasPreviouslyConfiguredRef.current = true;

    if (type === 'node') {
      initialCtaStateRef.current = {
        ctaActive,
        ctaText,
        start,
        buttonLink,
        alignment,
        textStyle,
        textColor,
        buttonText,
        buttonColor,
        buttonTextColor,
        borderRadius,
        ctaTop,
        ctaLeft,
      };
    } else if (type === 'edge') {
      initialBtnStateRef.current = {
        btnActive,
        textBtn,
        startBtn,
        bgColorBtn,
        textColorBtn,
        borderRadiusBtn,
        btnTop,
        btnLeft,
      };
    }

    showSuccess(
      type === 'node' ? 'CTA salvo com sucesso!' : 'Conexão salva com sucesso!'
    );

    onClose();
  };

  const handleDelete = () => {
    if (!dadosModal) return;

    const newNodes = nodes.map((node) => {
      if (node.id === dadosModal.VIDEO.ID) {
        return {
          ...node,
          data: {
            ...node.data,
            BONDS: node.data.BONDS.filter(
              (bond: Bond) => bond.VIDEO_ID !== dadosModal.TARGET
            ),
          },
        };
      }
      return node;
    });

    setNodes(newNodes);

    // Remove edge
    setEdges((edges) =>
      edges.filter(
        (edge) =>
          !(
            edge.source === dadosModal.VIDEO.ID &&
            edge.target === dadosModal.TARGET
          )
      )
    );
  };

  const hasSequentialBond = () => {
    if (!dadosModal) return false;
    return dadosModal.BONDS.some((bond: Bond) => bond.BUTTON === false);
  };

  const getSequentialBondInfo = () => {
    if (!dadosModal) return null;
    const sequentialBond = dadosModal.BONDS.find(
      (bond: Bond) => bond.BUTTON === false
    );
    if (!sequentialBond) return null;

    const targetNode = nodes.find((n) => n.id === sequentialBond.VIDEO_ID);
    return {
      targetId: sequentialBond.VIDEO_ID,
      targetName: targetNode?.data?.NAME || 'Desconhecido',
    };
  };

  if (!dadosModal) return null;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => {
          handleCancel();
        }}
      />

      <div className={styles.modalFlow}>
        <button
          className={styles.modalFlow_close}
          onClick={() => {
            handleCancel();
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>

        <div className={styles.modalFlow_view}>
          <div
            className={styles.modalFlow_view_video}
            ref={containerRef}
            onPointerMove={onPointerMoveContainer}
            onPointerUp={() => (draggingRef.current = false)}
            onPointerLeave={() => (draggingRef.current = false)}
          >
            <video
              ref={videoRef}
              controls
              playsInline
              onTimeUpdate={handleTimeUpdate}
              controlsList="nodownload nofullscreen noplaybackrate"
              disablePictureInPicture
              disableRemotePlayback
              preload="metadata"
            >
              <source src={dadosModal.VIDEO.URL} type="video/mp4" />
            </video>

            {ctaActive && start <= timeVideo && (
              <div
                onPointerDown={type === 'node' ? onPointerDownBtn : undefined}
                onPointerUp={type === 'node' ? onPointerUpBtn : undefined}
                style={{
                  position: 'absolute',
                  top: `${ctaTop}%`,
                  left: `${ctaLeft}%`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: alignment as any,
                  cursor:
                    type === 'node'
                      ? draggingRef.current
                        ? 'grabbing'
                        : 'grab'
                      : 'default',
                  pointerEvents: type === 'node' ? 'auto' : 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '90%',
                  opacity: type === 'edge' ? 0.9 : 1,
                }}
              >
                {ctaText !== '' && (
                  <pre
                    style={{
                      color: textColor,
                      fontWeight: textStyle === 'bold' ? 'bold' : 'normal',
                      fontStyle: textStyle === 'italic' ? 'italic' : 'normal',
                      marginBottom: '8px',
                    }}
                  >
                    {ctaText}
                  </pre>
                )}
                <button
                  style={{
                    backgroundColor: buttonColor,
                    color: buttonTextColor,
                    borderRadius: `${borderRadius}px`,
                    border: 'none',
                    cursor: type === 'node' ? 'pointer' : 'default',
                  }}
                >
                  {buttonText || 'Botão'}
                </button>
              </div>
            )}

            {btnActive && type === 'edge' && startBtn <= timeVideo && (
              <button
                onPointerDown={onPointerDownBtn}
                onPointerUp={onPointerUpBtn}
                style={{
                  position: 'absolute',
                  top: `${btnTop}%`,
                  left: `${btnLeft}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: bgColorBtn,
                  color: textColorBtn,
                  borderRadius: `${borderRadiusBtn}px`,
                  // padding: '8px 16px',
                  border: 'none',
                  cursor: draggingRef.current ? 'grabbing' : 'grab',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '90%',
                }}
              >
                {textBtn || 'Texto do botão'}
              </button>
            )}

            {otherBonds.map((bond, index) => {
              if (!bond.BUTTON || bond.BUTTON_START > timeVideo) return null;

              const btnStyle =
                bond.BUTTON_STYLE && bond.BUTTON_STYLE.length > 0
                  ? JSON.parse(bond.BUTTON_STYLE)
                  : {};

              return (
                <button
                  key={`bond-preview-${index}`}
                  style={{
                    position: 'absolute',
                    top: `${btnStyle.btnTop}%`,
                    left: `${btnStyle.btnLeft}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: btnStyle.backgroundColor || '#23118E',
                    color: btnStyle.textColor || '#FFFFFF',
                    borderRadius: `${btnStyle.borderRadius || 0}px`,
                    padding: '8px 16px',
                    border: 'none',
                    cursor: 'default',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '90%',
                    opacity: 0.5,
                    pointerEvents: 'none',
                  }}
                >
                  {bond.BUTTON_TEXT || 'Texto do botão'}
                </button>
              );
            })}
          </div>

          <div className={styles.modalFlow_view_info}>
            <div className={styles.modalFlow_view_info_left}>
              <p>
                <strong>Nome:</strong> {dadosModal.VIDEO.NAME}
              </p>
              <p>
                <strong>Duração:</strong>{' '}
                {formatDuration(dadosModal.VIDEO.DURATION)}
              </p>
              <p>
                <strong>Ordem:</strong> {dadosModal.ORDER ?? 'N/A'}
              </p>
            </div>
            <div className={styles.modalFlow_view_info_right}>
              <p>
                <strong>Conexões:</strong> {dadosModal.BONDS.length}
              </p>
              <p>
                <strong>CTA:</strong> {dadosModal.CTA ? 'Ativo' : 'Inativo'}
              </p>
              <p>
                <strong>Sequência:</strong>{' '}
                {hasSequentialBond() ? (
                  <span style={{ color: '#5FFFFF' }}>Ativa</span>
                ) : (
                  <span style={{ color: '#f2f2f2' }}>Disponível</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.modalFlow_tools}>
          {type === 'edge' && (
            <ButtonGenerator
              duration={dadosModal.VIDEO.DURATION}
              btnActive={btnActive}
              setBtnActive={setBtnActive}
              text={textBtn}
              setText={setTextBtn}
              bgColor={bgColorBtn}
              setBgColor={setBgColorBtn}
              textColor={textColorBtn}
              setTextColor={setTextColorBtn}
              borderRadius={borderRadiusBtn}
              setBorderRadius={setBorderRadiusBtn}
              start={startBtn}
              setStart={setStartBtn}
              btnTop={btnTop}
              btnLeft={btnLeft}
              onCancel={handleCancel}
              onSave={handleSave}
            />
          )}

          {type === 'node' && (
            <CtaGenerator
              duration={dadosModal.VIDEO.DURATION}
              ctaActive={ctaActive}
              setCtaActive={setCtaActive}
              ctaText={ctaText}
              setCtaText={setCtaText}
              alignment={alignment}
              setAlignment={setAlignment}
              textStyle={textStyle}
              setTextStyle={setTextStyle}
              textColor={textColor}
              setTextColor={setTextColor}
              buttonText={buttonText}
              setButtonText={setButtonText}
              buttonLink={buttonLink}
              setButtonLink={setButtonLink}
              buttonColor={buttonColor}
              setButtonColor={setButtonColor}
              buttonTextColor={buttonTextColor}
              setButtonTextColor={setButtonTextColor}
              borderRadius={borderRadius}
              setBorderRadius={setBorderRadius}
              start={start}
              setStart={setStart}
              ctaTop={ctaTop}
              ctaLeft={ctaLeft}
              onCancel={handleCancel}
              onSave={handleSave}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ModalFlow;
