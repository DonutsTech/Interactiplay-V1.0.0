'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ModalFlow.module.scss';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { useFlow } from '@/context/FlowContext';
import ButtonGenerator from './ButtonGenerator';
import CtaGenerator from './CtaGenerator';
import { formatDuration } from '@/utils/videoUtils';
import { Bond } from '@/@types/flow';

interface ModalFlowProps {
  onClose: () => void;
  type?: 'node' | 'edge';
}

const ModalFlow = ({ onClose, type = 'node' }: ModalFlowProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<boolean>(false);

  const { dadosModal, setNodes, nodes, setEdges } = useFlow();
  const [timeVideo, setTimeVideo] = useState<number>(0);

  // Estados para CTA (quando type === 'node')
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

  // Estados para Button (quando type === 'edge')
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const [textBtn, setTextBtn] = useState<string>('');
  const [bgColorBtn, setBgColorBtn] = useState<string>('#23118E');
  const [textColorBtn, setTextColorBtn] = useState<string>('#FFFFFF');
  const [borderRadiusBtn, setBorderRadiusBtn] = useState<number>(0);
  const [startBtn, setStartBtn] = useState<number>(0);
  const [btnTop, setBtnTop] = useState<number>(50);
  const [btnLeft, setBtnLeft] = useState<number>(50);

  // Carrega dados existentes quando modal abre
  useEffect(() => {
    if (!dadosModal) return;

    // Carrega dados de CTA
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
      setCtaTop(style.ctaTop || 50);
      setCtaLeft(style.ctaLeft || 50);
    }

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
          setBtnTop(btnStyle.btnTop || 50);
          setBtnLeft(btnStyle.btnLeft || 50);
        }
      }
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
    } catch {}
    draggingRef.current = false;
  };

  const handleDelete = () => {
    if (!dadosModal) return;

    // Remove bond dos nodes
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

  if (!dadosModal) return null;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => {
          onClose();
          if (type === 'edge' && !btnActive) {
            handleDelete();
          }
        }}
      />

      <div className={styles.modalFlow}>
        <button
          className={styles.modalFlow_close}
          onClick={() => {
            onClose();
            if (type === 'edge' && !btnActive) {
              handleDelete();
            }
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
            >
              <source src={dadosModal.VIDEO.URL} type="video/mp4" />
            </video>

            {ctaActive && type === 'node' && start <= timeVideo && (
              <div
                onPointerDown={onPointerDownBtn}
                onPointerUp={onPointerUpBtn}
                style={{
                  position: 'absolute',
                  top: `${ctaTop}%`,
                  left: `${ctaLeft}%`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: alignment as any,
                  cursor: draggingRef.current ? 'grabbing' : 'grab',
                  pointerEvents: 'auto',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '90%',
                }}
              >
                <p
                  style={{
                    color: textColor,
                    fontWeight: textStyle === 'bold' ? 'bold' : 'normal',
                    fontStyle: textStyle === 'italic' ? 'italic' : 'normal',
                    marginBottom: '8px',
                  }}
                >
                  {ctaText || 'Texto do CTA'}
                </p>
                <button
                  style={{
                    backgroundColor: buttonColor,
                    color: buttonTextColor,
                    borderRadius: `${borderRadius}px`,
                    padding: '8px 16px',
                    border: 'none',
                    cursor: 'pointer',
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
                  padding: '8px 16px',
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
          </div>

          {/* Informações do vídeo */}
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
            </div>
          </div>
        </div>

        {/* Ferramentas (sidebar direita) */}
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
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ModalFlow;
