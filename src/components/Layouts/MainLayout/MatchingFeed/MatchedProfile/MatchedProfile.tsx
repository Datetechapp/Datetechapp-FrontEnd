import React, { useState, useEffect, useRef } from "react";
import share from "../../../../../assets/feed/share.svg";
import styles from "./MatchedProfile.module.css";
import { ReactComponent as SoundOnIcon } from "../../../../../assets/CreateAccountForm/soundIcon.svg";
import { ReactComponent as SoundOffIcon } from "../../../../../assets/CreateAccountForm/soundOff.svg";
import { ReactComponent as PlayIcon } from "../../../../../assets/CreateAccountForm/playIcon.svg";
import { ReactComponent as PauseIcon } from "../../../../../assets/CreateAccountForm/pauseIcon.svg";

interface UserProfileCardProps {
  profile: {
    id: number;
    name: string;
    age: string;
    city: string;
    country: string;
    img: string;
    isLiked: boolean;
    likeYou: boolean;
  };
  onDelete: (id: number) => void;
  setSelectedProfileId: React.Dispatch<React.SetStateAction<number | null>>;
}

const MatchedProfile: React.FC<UserProfileCardProps> = ({
  profile,
  onDelete,
  setSelectedProfileId,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);

  const [volume, setVolume] = useState(0.5);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isShareProfileVisible, setShareProfileVisible] = useState(false);

  const handleShareButtonClick = () => {
    setShareProfileVisible(!isShareProfileVisible);
  };

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

  const volumeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const rangeInput = volumeRef.current as HTMLInputElement;

    if (rangeInput) {
      rangeInput.style.setProperty("--thumb-percentage", `${volume * 100}%`);
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
        "--thumb-percentage",
        `${thumbPositionPercentage}%`,
      );
    }
  };

  return (
    <div
      className={styles.profile_matched}
      onClick={() => {
        setSelectedProfileId(profile.id);
      }}
    >
      <div className={styles.profile_container_info}>
        <div className={styles.profile_info}>
          <img
            className={styles.profile_picture}
            src={profile.img}
            alt={`Profile of ${profile.name}`}
          />
          <div>
            <div className={styles.profile_city}>
              {`${profile.city}, ${profile.country}`}
            </div>
            <div className={styles.profile_name}>
              {`${profile.name}, ${profile.age}`}
            </div>
          </div>
        </div>
        <div className={styles.profile_dots} onClick={handleShareButtonClick}>
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
        <video className={styles.videoProfile}>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlayIcons}>
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
          <div className={styles.profile_dots_copy} onClick={handleShareButtonClick}>
          ...
          {isShareProfileVisible && (
            <div className={styles.copyProfileElement}>
              <img src={share} alt="share" />
              Share profile
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MatchedProfile;
