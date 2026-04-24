import { ICampaign } from '@/@types/campaign';
import { ctaStyle } from '@/@types/embed';
import { btnEdgeStyle, btnStyle, divStyle, pStyle } from '@/utils/EmbedUteis';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import style from './Embed.module.scss';

interface IEmbedProps {
  campaing: ICampaign;
}

const Embed = ({ campaing }: IEmbedProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [] = useState<boolean>(false);
  const [current, setCurrent] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    if (campaing) {
      const fristVideo = campaing.CAMPAIGN_VIDEOS.find((c) => c.ORDER === 1);

      if (fristVideo) {
        setCurrent(fristVideo.ID);
        setStarted(true);
      }
    }
  }, [campaing]);

  const handleVideoStart = () => {
    if (videoRef.current) {
      if (isPlaying === false) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(console.error);
      } else {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }

    setIsPlaying(true);
  };

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '60%',
          height: 'auto',
          aspectRatio: '16/9',
          backgroundColor: '#000125',
        }}
      >
        {!isPlaying && (
          <div
            className={style['embed-play-overlay']}
            onClick={() => handleVideoStart()}
          >
            <FontAwesomeIcon icon={faPlay} />
          </div>
        )}
        {campaing.CAMPAIGN_VIDEOS.map((c, i) => {
          const cta: ctaStyle = JSON.parse(c.CTA_STYLE || '{}');
          const bonds = c.BONDS.filter(({ BOND }) => BOND.BUTTON === true);

          if (current === c.ID) {
            return (
              <div key={c.ID}>
                <video
                  key={i}
                  src={c.VIDEO.URL}
                  preload="auto"
                  style={{
                    position: 'absolute',
                    opacity: current === c.ID ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  ref={videoRef}
                />
                {isPlaying && (
                  <>
                    {c.CTA && (
                      <div
                        className={style['embed-div']}
                        style={{ ...divStyle(cta) }}
                      >
                        <p style={{ ...pStyle(cta) }}>{c.CTA_TEXT}</p>
                        <button
                          className={style['embed-btn']}
                          style={{ ...btnStyle(cta) }}
                          onClick={() => window.open(c.CTA_URL || '', '_blank')}
                        >
                          {cta.buttonText || 'Saiba mais'}
                        </button>
                      </div>
                    )}
                    {bonds.map(({ BOND, ID }) => (
                      <>
                        <button
                          key={ID}
                          className={style['embed-btnedge']}
                          style={{
                            ...btnEdgeStyle(
                              JSON.parse(BOND.BUTTON_STYLE || '{}')
                            ),
                          }}
                          onClick={() => {}}
                        >
                          {BOND.BUTTON_TEXT || 'não definido'}
                        </button>
                      </>
                    ))}
                  </>
                )}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Embed;
