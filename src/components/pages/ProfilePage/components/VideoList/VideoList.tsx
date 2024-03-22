/* eslint-disable @typescript-eslint/no-explicit-any */
import s from './VideoList.module.css';
import backArrow from './../../../../../assets/Profile/backarrow.svg';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as SoundOnIcon } from '../../../../../assets/CreateAccountForm/soundIcon.svg';
import { ReactComponent as SoundOffIcon } from '../../../../../assets/CreateAccountForm/soundOff.svg';
import { ReactComponent as PlayIcon } from '../../../../../assets/CreateAccountForm/playIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../../assets/CreateAccountForm/pauseIcon.svg';
import { PopoverItem } from '../PopoverItem';
import { useDispatch } from 'react-redux';
import { videoItemsSet } from 'store/videoUser/slice';
import { useAppSelector } from 'hooks/hooks';
import { getVideoItem } from '../../../../../store/videoUser/selector';

export const VideoList = ({
  setOpenVideoList,
  videoItems,
  selectedVideo,
}: any) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const DEFAULT_VOLUME = 0.5;
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);
  const [play, setPlay] = useState(false);
  const currentVideo = videoItems.find(
    (video: any) => video.id === selectedVideo,
  );
  const vid = useAppSelector(getVideoItem);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlay(!play);
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

  return (
    <div className={s.openVideoList}>
      <div className={s.openVideoListContainer}>
        <img
          src={backArrow}
          alt="arrowBack"
          width={32}
          height={32}
          onClick={() => {
            setOpenVideoList(false);
          }}
        />
        <div className={s.overlayVideos}>
          <div className={s.videoContainer}>
            <div className={s.videoItemContainer}>
              <video
                ref={videoRef}
                className={s.video}
                width={380}
                height={500}
                id={currentVideo.id}
                onClick={handleVideoClick}
              >
                <source
                  src={currentVideo.src}
                  type="video/mp4"
                  id={currentVideo.id}
                />
              </video>
              <div className={s.iconControls}>
                <div className={s.videoControls}>
                  {play ? (
                    <PauseIcon onClick={handleVideoClick} />
                  ) : (
                    <PlayIcon onClick={handleVideoClick} />
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
                    <PopoverItem
                      placement={'top'}
                      buttonStyle={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(95, 79, 127, 0.5)',
                        border: 'none',
                      }}
                      buttonContent={<div className={s.circleWithDots}></div>}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* {videoItems.map((video: any, ind: any) => (
              <div
                className={s.videoItemContainer}
                key={ind}
                onClick={() => {
                  handleVideoClick(ind);
                }}
              >
                <>
                  <video
                    ref={videoRef}
                    className={s.video}
                    width={380}
                    height={500}
                    id={video.id}
                    key={video.id}
                  >
                    <source src={video.src} type="video/mp4" id={video.id} />
                  </video>
                  <div className={s.iconControls}>
                    <div className={s.videoControls}>
                      {video.isPlaying ? <PauseIcon /> : <PlayIcon />}
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
                        <PopoverItem
                          placement={'top'}
                          buttonStyle={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'rgba(95, 79, 127, 0.5)',
                            border: 'none',
                          }}
                          buttonContent={
                            <div className={s.circleWithDots}></div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
