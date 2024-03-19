import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from './ProfileContent.module.css';
import profileImg1 from './../../assets/Profile/profileImage1.png';
import profileImg2 from './../../assets/Profile/profileImage2.png';
import { ReactComponent as SoundOnIcon } from '../../assets/CreateAccountForm/soundIcon.svg';
import { ReactComponent as SoundOffIcon } from '../../assets/CreateAccountForm/soundOff.svg';
import { ReactComponent as PlayIcon } from '../../assets/CreateAccountForm/playIcon.svg';
import { ReactComponent as PauseIcon } from '../../assets/CreateAccountForm/pauseIcon.svg';
import backArrow from './../../assets/Profile/backarrow.svg';
import { Button, Popover } from 'antd';
import dots from './../../assets/Profile/dots.svg';
import copyLinkIcon from './../../assets/Profile/copy link.svg';
import reportProfileIcon from './../../assets/Profile/reportProfile.svg';

const videoItems = [
  {
    id: 1,
    img: profileImg1,
    src: profileImg1,
  },
  {
    id: 2,
    img: profileImg2,
    src: profileImg1,
  },
  {
    id: 3,
    img: profileImg1,
    src: profileImg1,
  },
  { id: 4, img: profileImg2, src: 'https://is.gd/UMPvwU' },
  { id: 5, img: profileImg1, src: 'https://is.gd/UMPvwU' },
  { id: 6, img: profileImg2, src: 'https://is.gd/UMPvwU' },
  { id: 7, img: profileImg1, src: 'https://is.gd/UMPvwU' },
  { id: 8, img: profileImg2, src: 'https://is.gd/UMPvwU' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProfileContent: FC<any> = ({ setActiveVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);
  const [openVideoList, setOpenVideoList] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [videoPlay, setVideoPlay] = useState(false);

  const DEFAULT_VOLUME = 0.5;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  const handleVideoClick = (index: number) => {
    console.log(index);
    console.log(videoRef);

    if (videoRef.current) {
      if (selectedVideo === index) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      } else {
        setSelectedVideo(index);
        setIsPlaying(true);
      }
    }
  };
  useEffect(() => {}, [selectedVideo]);

  useEffect(() => {
    const rangeInput = volumeRef.current as HTMLInputElement;

    if (rangeInput) {
      rangeInput.style.setProperty('--thumb-percentage', `${volume * 100}%`);
    }
  }, [volume, isVolumeBlockHovered, isHovered]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);

    setVolume(newVolume);

    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    if (!isNaN(value)) {
      const thumbPositionPercentage =
        ((value - parseFloat(e.target.min)) /
          (parseFloat(e.target.max) - parseFloat(e.target.min))) *
        100;

      e.target.style.setProperty(
        '--thumb-percentage',
        `${thumbPositionPercentage}%`,
      );
    }
  };

  const volumeRef = useRef<HTMLInputElement | null>(null);
  const content = (
    <div className={s.popoverContainer}>
      <Button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          border: 'none',
        }}
      >
        <img src={copyLinkIcon} alt="copyLinkIcon" />
        <span className={s.copyLinkSpan}>Copy link</span>
      </Button>
      <Button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          border: 'none',
        }}
      >
        <img src={reportProfileIcon} alt="reportProfileIcon" />
        <span className={s.reportLinkSpan}>Report profile</span>
      </Button>
    </div>
  );

  return (
    <div className={s.contentProfileContainer}>
      <h3 className={s.contentTitle}>Videos</h3>
      <div className={s.mainContent}>
        {videoItems.map((img) => (
          <video
            poster={img.img}
            className={s.img}
            key={img.id}
            onClick={() => {
              setActiveVideo(true);
              setOpenVideoList(true);
              setSelectedVideo(img.id);
            }}
          >
            <source src={img.src} />
          </video>
        ))}
      </div>
      {openVideoList && (
        <div className={s.overlayContent}>
          <img
            src={backArrow}
            alt="arrowBack"
            width={32}
            height={32}
            onClick={() => {
              setOpenVideoList(false);
              setActiveVideo(false);
            }}
          />
          <div className={s.overlayVideos}>
            <div className={s.videoContainer}>
              {videoItems.map((video, ind) => (
                <div className={s.videoItemContainer}>
                  <>
                    <img src={video.img} alt="videoUser" />
                    {/* <video
                      ref={videoRef}
                      className={s.video}
                      width={380}
                      height={500}
                      key={video.id}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video> */}
                    <div className={s.iconControls}>
                      <div className={s.videoControls}>
                        {!isPlaying && (
                          <PlayIcon
                            className={`${s.iconControls}`}
                            onClick={() => handleVideoClick(ind)}
                          />
                        )}
                        {isPlaying && (
                          <PauseIcon
                            className={`${s.iconControls}`}
                            onClick={() => handleVideoClick(ind)}
                          />
                        )}
                      </div>
                      <div className={s.volumeControls}>
                        {(isHovered || isVolumeBlockHovered) && (
                          <div
                            className={s.volumeBlock}
                            onMouseEnter={() => setIsVolumeBlockHovered(true)}
                            onMouseLeave={() => setIsVolumeBlockHovered(false)}
                          >
                            <input
                              ref={volumeRef}
                              className={s.editorVolume}
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={volume}
                              onChange={(e) => {
                                handleVolumeChange(e);
                                handleRangeChange(e);
                              }}
                            />
                          </div>
                        )}
                        {!volume ? (
                          <SoundOffIcon
                            className={s.soundIcon}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => {
                              setTimeout(() => setIsHovered(false), 300);
                            }}
                            onClick={() => setVolume(1)}
                          />
                        ) : (
                          <SoundOnIcon
                            className={s.soundIcon}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => {
                              setTimeout(() => setIsHovered(false), 500);
                            }}
                            onClick={() => setVolume(0)}
                          />
                        )}
                        <div className={s.btnDots}>
                          <Popover
                            content={content}
                            title=""
                            trigger="click"
                            arrow={false}
                            placement={'top'}
                          >
                            <Button
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'rgba(95, 79, 127, 0.5)',
                                border: 'none',
                              }}
                            >
                              <div className={s.circleWithDots}></div>
                            </Button>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
