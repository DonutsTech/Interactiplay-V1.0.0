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
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});
  const [timeVideo, setTimeVideo] = useState<number>(0);
  const [current, setCurrent] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(true);

  useEffect(() => {
    if (campaing) {
      const fristVideo = campaing.CAMPAIGN_VIDEOS.find((c) => c.ORDER === 1);

      if (fristVideo) {
        setCurrent(fristVideo.VIDEO.ID);
        setStarted(true);
      }
    }
  }, [campaing]);

  useEffect(() => {});

  const handleVideoStart = () => {
    if (!current) return;

    const video = videoRefs.current[current];
    if (!video) return;

    const isPaused = video.paused;

    Object.entries(videoRefs.current).forEach(([id, v]) => {
      if (!v) return;
      if (id !== current) v.pause();
    });

    const currentVideo = campaing.CAMPAIGN_VIDEOS.find(
      (c) => c.VIDEO.ID === current
    );

    const tempBolean = currentVideo && currentVideo.VIDEO.DURATION > timeVideo;

    if (isPaused && tempBolean) {
      video.muted = false;
      video.play().catch(console.error);
      setIsPlaying(true);
    }

    if (!isPaused && tempBolean) {
      video.pause();
      setIsPlaying(false);
    }

    setStarted(false);
  };

  const handleTimeUpdate = () => {
    if (!current) return;

    const video = videoRefs.current[current];

    if (!video) return;

    const currentTime = video.currentTime;

    setTimeVideo(currentTime);
  };

  const handleVideoEnd = () => {
    const currentVideo = campaing.CAMPAIGN_VIDEOS.find(
      (c) => c.VIDEO.ID === current
    )?.BONDS.find(({ BOND }) => BOND.BUTTON === false);

    if (currentVideo && currentVideo.BOND.VIDEO_ID) {
      setCurrent(currentVideo.BOND.VIDEO_ID);
      setTimeVideo(0);
      videoRefs.current[currentVideo.BOND.VIDEO_ID].muted = false;
      videoRefs.current[currentVideo.BOND.VIDEO_ID].play().catch(console.error);
    }
  };

  return (
    <section style={{ width: '100%', height: '100%' }}>
      {campaing.FEATURE && campaing.FEATURE.GANCHO && (
        <div>
          <h2>{campaing.FEATURE.GANCHO.TITLE}</h2>
          <p>{campaing.FEATURE.GANCHO.SUBTITLE}</p>
        </div>
      )}
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

          return (
            <div key={c.ID}>
              <video
                id={c.VIDEO.ID}
                ref={(el) => {
                  if (el) videoRefs.current[c.VIDEO.ID] = el;
                }}
                src={c.VIDEO.URL}
                muted
                preload="metadata"
                style={{
                  position: 'absolute',
                  opacity: current === c.VIDEO.ID ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onEnded={() => handleVideoEnd()}
                onClick={() => handleVideoStart()}
                onTimeUpdate={() => handleTimeUpdate()}
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                poster={
                  c.ORDER === 1 &&
                  campaing.FEATURE &&
                  campaing.FEATURE.THUMB &&
                  campaing.FEATURE.THUMB.IMAGE_URL !== '' &&
                  started
                    ? campaing.FEATURE.THUMB.IMAGE_URL
                    : undefined
                }
              >
                <source src={c.VIDEO.URL} type="video/mp4" />
              </video>
              {isPlaying && current === c.VIDEO.ID && !started && (
                <div style={{ width: '100%', height: '100%' }}>
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
                    <button
                      key={ID}
                      className={style['embed-btnedge']}
                      style={{
                        ...btnEdgeStyle(JSON.parse(BOND.BUTTON_STYLE || '{}')),
                      }}
                      onClick={() => {
                        if (BOND.VIDEO_ID) {
                          setCurrent(BOND.VIDEO_ID);
                          setTimeVideo(0);
                          videoRefs.current[BOND.VIDEO_ID].muted = false;
                          videoRefs.current[BOND.VIDEO_ID]
                            .play()
                            .catch(console.error);
                        }
                      }}
                    >
                      {BOND.BUTTON_TEXT || 'não definido'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {campaing.FEATURE && campaing.FEATURE.EXTERNAL_LINK && (
        <div>
          <p>{campaing.FEATURE.EXTERNAL_LINK.TEXT}</p>
          <button>{campaing.FEATURE.EXTERNAL_LINK.BUTTON_TEXT}</button>
        </div>
      )}
    </section>
  );
};

export default Embed;
