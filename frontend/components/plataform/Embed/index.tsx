import { ICampaign } from '@/@types/campaign';
import { ctaStyle } from '@/@types/embed';
import CustomVolume from '@/components/globals/CustomVolume';
import {
  btnEdgeStyle,
  btnStyle,
  ctaBtnStyle,
  ctaPStyle,
  divStyle,
  pStyle,
  subTitleStyle,
  titleStyle,
} from '@/utils/EmbedUteis';
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

  const fristVideo = campaing.CAMPAIGN_VIDEOS.find((c) => c.ORDER === 1);

  useEffect(() => {
    if (campaing && fristVideo) {
      setCurrent(fristVideo.VIDEO.ID);
      setStarted(true);
    }
  }, [campaing]);

  useEffect(() => {
    if (campaing.FEATURE?.AUTO_PLAY && started) {
      const autoPlayActive = campaing.FEATURE.AUTO_PLAY.ATIVE;

      if (autoPlayActive && fristVideo) {
        setTimeout(() => {
          videoRefs.current[fristVideo.VIDEO.ID].muted = true;
          videoRefs.current[fristVideo.VIDEO.ID].play().catch(console.error);
        }, 3000);
      }

      if (!autoPlayActive && fristVideo) {
        videoRefs.current[fristVideo.VIDEO.ID].pause();
        videoRefs.current[fristVideo.VIDEO.ID].currentTime = 0;
        setTimeVideo(0);
      }
    }
  }, [campaing]);

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

    if (
      campaing.FEATURE?.AUTO_PLAY &&
      campaing.FEATURE.AUTO_PLAY.ATIVE &&
      started
    ) {
      const autoPlaySecond = campaing.FEATURE.AUTO_PLAY.SECOND;

      if (video.currentTime >= autoPlaySecond) {
        video.currentTime = 0;
        setTimeVideo(0);
        return;
      }
    }

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

  // {console.log(c.cta)}

  return (
    <section className={style.section}>
      {campaing.FEATURE &&
        campaing.FEATURE.GANCHO &&
        campaing.FEATURE.GANCHO.ATIVE && (
          <div className={style.headlineBox}>
            <h2
              className={style.ganchoTitle}
              style={{
                ...titleStyle(JSON.parse(campaing.FEATURE.GANCHO.TITLE_STYLE)),
              }}
            >
              {campaing.FEATURE.GANCHO.TITLE}
            </h2>
            <pre
              className={style.ganchoSubTitle}
              style={{
                ...subTitleStyle(
                  JSON.parse(campaing.FEATURE.GANCHO.SUBTITLE_STYLE)
                ),
              }}
            >
              {campaing.FEATURE.GANCHO.SUBTITLE}
            </pre>
          </div>
        )}
      <div className={style.videoContainer}>
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
              {isPlaying && current === c.VIDEO.ID && (
                <CustomVolume
                  videoRef={current ? videoRefs.current[current] : null}
                />
              )}
              <video
                id={c.VIDEO.ID}
                ref={(el) => {
                  if (el) videoRefs.current[c.VIDEO.ID] = el;
                }}
                src={c.VIDEO.URL}
                muted
                preload="metadata"
                className={style.video}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'opacity 0.5s ease-in-out',
                  opacity: current === c.VIDEO.ID ? 1 : 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
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
                <>
                  {campaing.FEATURE && campaing.FEATURE.TIMELINE?.ATIVE && (
                    <div
                      className={style.timeLine}
                      style={{
                        width: `${(timeVideo / c.VIDEO.DURATION) * 100}%`,
                        height: `${campaing.FEATURE.TIMELINE.HEIGHT}px`,
                        backgroundColor: `${campaing.FEATURE.TIMELINE.COR}`,
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    {c.CTA && (
                      <div
                        className={style['embed-div']}
                        style={{ 
                          ...divStyle(cta),
                          display: timeVideo >= c.CTA_START ? 'block' : 'none', 
                        }}
                        onClick={() => console.log(btnStyle(cta)) }
                      >
                        <pre style={{ ...pStyle(cta) }}>{c.CTA_TEXT}</pre>
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
                          ...btnEdgeStyle(
                            JSON.parse(BOND.BUTTON_STYLE || '{}')
                          ),
                          display: timeVideo >= BOND.BUTTON_START ? 'block' : 'none',
                        }}
                        onClick={() => {
                          if (BOND.VIDEO_ID) {
                            setCurrent(BOND.VIDEO_ID);
                            setTimeVideo(0);
                            videoRefs.current[BOND.VIDEO_ID].muted = false;
                            if (c.VIDEO_ID) {
                              videoRefs.current[c.VIDEO_ID].muted = true;
                            }
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
                </>
              )}
            </div>
          );
        })}
      </div>
      {campaing.FEATURE &&
        campaing.FEATURE.EXTERNAL_LINK &&
        campaing.FEATURE.EXTERNAL_LINK.ATIVE && (
          <div className={style.ctaBox}>
            <pre
              style={{
                ...ctaPStyle(
                  JSON.parse(campaing.FEATURE.EXTERNAL_LINK.STYLE_TEXT || '')
                ),
              }}
            >
              {campaing.FEATURE.EXTERNAL_LINK.TEXT}
            </pre>
            <button
              className={style.btnCta}
              style={{
                ...ctaBtnStyle(
                  JSON.parse(campaing.FEATURE.EXTERNAL_LINK.BUTTON_STYLE || '')
                ),
              }}
              onClick={() => {
                if (campaing.FEATURE?.EXTERNAL_LINK) {
                  window.open(
                    campaing.FEATURE.EXTERNAL_LINK.LINK_URL || '',
                    '_blank'
                  );
                }
              }}
            >
              {campaing.FEATURE.EXTERNAL_LINK.BUTTON_TEXT}
            </button>
          </div>
        )}
    </section>
  );
};

export default Embed;
