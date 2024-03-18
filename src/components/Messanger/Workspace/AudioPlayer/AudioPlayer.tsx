import React, { useState, useEffect, useRef } from 'react';

import { ReactComponent as FirstSpeed } from '../../../../assets/AudioPlayer/firstSpeed.svg';
import { ReactComponent as SecondSpeed } from '../../../../assets/AudioPlayer/secondSpeed.svg';
import { ReactComponent as ThirdSpeed } from '../../../../assets/AudioPlayer/thirdSpeed.svg';
import { ReactComponent as FastFowardAudio } from '../../../../assets/AudioPlayer/FastForwardAudio.svg';
import { ReactComponent as RewindAudio } from '../../../../assets/AudioPlayer/RewindAudio.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/AudioPlayer/PlayIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/AudioPlayer/PauseIcon.svg';
import { ReactComponent as VolumeIcon } from '../../../../assets/AudioPlayer/VolumeAudio.svg';
import { ReactComponent as MuteIcon } from '../../../../assets/AudioPlayer/MuteIcon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/AudioPlayer/closeIcon.svg';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { getAudioInfo } from 'store/audioInfo/selectors';
import { audioInfoDelete, audioInfoUpdate } from 'store/audioInfo/slice';
import css from './audioPlayer.module.css';

export const AudioPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);

  const volumeRef = useRef<HTMLInputElement | null>(null);

  const { speed, volume, isPlaying } = useAppSelector(getAudioInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const rangeInput = volumeRef.current as HTMLInputElement;

    if (rangeInput) {
      rangeInput.style.setProperty('--thumb-percentage', `${volume! * 100}%`);
    }
  }, [volume, isVolumeBlockHovered, isHovered]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);

    dispatch(audioInfoUpdate({ volume: newVolume }));
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

  const handlePlayPause = () => {
    dispatch(audioInfoUpdate({ isPlaying: !isPlaying }));
  };

  const handleSpeedFaster = () => {
    if (speed < 3) {
      dispatch(audioInfoUpdate({ speed: speed + 1 }));
    }
  };
  const handleSpeedSlower = () => {
    if (speed > 1) {
      dispatch(audioInfoUpdate({ speed: speed - 1 }));
    }
  };

  return (
    <div className={css.audioPlayerWrapper}>
      <div className={css.scrollBarBlock}>
        <RewindAudio onClick={handleSpeedSlower} />
        {isPlaying ? (
          <PauseIcon width={24} height={24} onClick={handlePlayPause} />
        ) : (
          <PlayIcon width={24} height={24} onClick={handlePlayPause} />
        )}
        <FastFowardAudio onClick={handleSpeedFaster} />
      </div>
      <div>
        <p className={css.name}>Michael</p>
        <p className={css.voiceMessage}>Voice Message</p>
      </div>
      <div className={css.audioSettings}>
        {speed === 1 ? (
          <FirstSpeed />
        ) : speed === 2 ? (
          <SecondSpeed />
        ) : (
          <ThirdSpeed />
        )}

        {volume ? (
          <VolumeIcon
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setTimeout(() => setIsHovered(false), 300);
            }}
            onClick={() => dispatch(audioInfoUpdate({ volume: 0 }))}
          />
        ) : (
          <MuteIcon
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setTimeout(() => setIsHovered(false), 500);
            }}
            onClick={() => dispatch(audioInfoUpdate({ volume: 1 }))}
          />
        )}
        <CloseIcon onClick={() => dispatch(audioInfoDelete())} />
        {(isHovered || isVolumeBlockHovered) && (
          <div
            className={css.volumeBlock}
            onMouseEnter={() => setIsVolumeBlockHovered(true)}
            onMouseLeave={() => setIsVolumeBlockHovered(false)}
          >
            <input
              ref={volumeRef}
              className={css.editorVolume}
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
      </div>
    </div>
  );
};
