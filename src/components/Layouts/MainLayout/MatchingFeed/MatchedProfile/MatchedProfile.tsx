import { useState, useEffect, useRef, ChangeEvent } from 'react';

import share from '../../../../../assets/feed/share.svg';
import copy from '../../../../../assets/feed/copy.svg';
import report from '../../../../../assets/feed/report.svg';
import { ReactComponent as SoundOnIcon } from '../../../../../assets/CreateAccountForm/soundIcon.svg';
import { ReactComponent as SoundOffIcon } from '../../../../../assets/CreateAccountForm/soundOff.svg';
import { ReactComponent as PlayIcon } from '../../../../../assets/CreateAccountForm/playIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../../assets/CreateAccountForm/pauseIcon.svg';
import { UserProfileCardProps } from '../interfaces';
import styles from './MatchedProfile.module.css';

const DEFAULT_VOLUME = 0.5;

const MatchedProfile = ({
  profile,
  setSelectedProfileId,
}: UserProfileCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);
  const [isShareProfileVisible, setIsShareProfileVisible] = useState(false);
  const [isCopyLinkVisible, setCopyLinkVisible] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef<HTMLInputElement | null>(null);
  const shareDotsRef = useRef<HTMLDivElement>(null);
  const copyDotsRef = useRef<HTMLDivElement>(null);

  const handleShareButtonClick = () => {
    setIsShareProfileVisible(!isShareProfileVisible);
  };

  const handleCopyButtonClick = () => {
    setCopyLinkVisible(!isCopyLinkVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      shareDotsRef.current &&
      !shareDotsRef.current.contains(event.target as Node)
    ) {
      setIsShareProfileVisible(false);
    }

    if (
      copyDotsRef.current &&
      !copyDotsRef.current.contains(event.target as Node)
    ) {
      setCopyLinkVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

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

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);

    setVolume(newVolume);

    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div
      className={styles.profileMatched}
      onClick={() => {
        setSelectedProfileId(profile.id);
      }}
    >
      <div className={styles.profileContainerInfo}>
        <div className={styles.profileInfo}>
          <img
            className={styles.profilePicture}
            src={profile.img}
            alt={`Profile of ${profile.name}`}
          />
          <div>
            <div className={styles.profileCity}>
              {`${profile.city}, ${profile.country}`}
            </div>
            <div className={styles.profileName}>
              {`${profile.name}, ${profile.age}`}
            </div>
          </div>
        </div>
        <div
          className={styles.profileDots}
          onClick={handleShareButtonClick}
          ref={shareDotsRef}
        >
          ...
          {isShareProfileVisible && (
            <div className={styles.shareProfileElement}>
              <img src={share} alt="share" />
              Share profile
            </div>
          )}
        </div>
      </div>

      <div className={styles.videoContainer}>
        <video
          className={styles.videoProfile}
          poster={profile.img}
          height={'100%'}
          width={'100%'}
          ref={videoRef}
        >
          <source src={profile.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlayIcons}>
          <div className={styles.overlayVolume}>
            {(isHovered || isVolumeBlockHovered) && (
              <div
                className={styles.volumeBlock}
                onMouseEnter={() => setIsVolumeBlockHovered(true)}
                onMouseLeave={() => setIsVolumeBlockHovered(false)}
              >
                <input
                  ref={volumeRef}
                  className={styles.editorVolume}
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
                className={styles.soundIcon}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setTimeout(() => setIsHovered(false), 300);
                }}
                onClick={() => setVolume(1)}
              />
            ) : (
              <SoundOnIcon
                className={styles.soundIcon}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setTimeout(() => setIsHovered(false), 500);
                }}
                onClick={() => setVolume(0)}
              />
            )}
          </div>

          <div
            className={styles.profileDotsCopy}
            onClick={handleCopyButtonClick}
            ref={copyDotsRef}
          >
            {isCopyLinkVisible && (
              <div className={styles.copyLinkElement}>
                <div className={styles.copyElement}>
                  <img src={copy} alt="copy" />
                  Copy link
                </div>
                <div className={styles.reportElement}>
                  <img src={report} alt="report" />
                  Report video
                </div>
              </div>
            )}
            ...
          </div>
        </div>
        <div className={styles.videoControls}>
          {!isPlaying && (
            <PlayIcon
              className={`${styles.iconControls}`}
              onClick={handleVideoClick}
            />
          )}
          {isPlaying && (
            <PauseIcon
              className={`${styles.iconControls}`}
              onClick={handleVideoClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchedProfile;
