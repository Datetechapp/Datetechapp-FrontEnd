import React, { useState, useEffect, useRef, FC } from 'react';
import css from './audioPlayer.module.css';
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
import { audioInfoUpdate } from 'store/audioInfo/slice';

// interface AudioPlayesProps {
//        audioRef: HTMLAudioElement;
// }

export const AudioPlayer = () => {
  // const [speed, setSpeed] = useState<number>(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);
  // const [volume, setVolume] = useState(0.5);

  const volumeRef = useRef<HTMLInputElement | null>(null);

  const { speed, volume, duration, isPlaying } = useAppSelector(getAudioInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const rangeInput = volumeRef.current as HTMLInputElement;

    if (rangeInput) {
      rangeInput.style.setProperty('--thumb-percentage', `${volume! * 100}%`);
    }
  }, [volume, isVolumeBlockHovered, isHovered]);

  // useEffect(() => {
  //        if (audioRef.current) {
  //               audioRef.current.volume = volume;
  //        }
  // }, [volume]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);

    // setVolume(newVolume);

    // if (audioRef.current) {
    //        audioRef.current.volume = newVolume;
    // }
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
    dispatch(audioInfoUpdate({ isPlaying: isPlaying === true ? false : true }));
  };

  return (
    <div className={css.audioPlayerWrapper}>
      <div className={css.scrollBarBlock}>
        <RewindAudio />
        {isPlaying ? (
          <PauseIcon width={24} height={24} onClick={handlePlayPause} />
        ) : (
          <PlayIcon width={24} height={24} onClick={handlePlayPause} />
        )}
        <FastFowardAudio />
      </div>
      <div>
        <p className={css.name}>Michael</p>
        <p className={css.voiceMessage}>Voice Message</p>
      </div>
      <div className={css.audioSettings}>
        {speed === 1 ? (
          <FirstSpeed onClick={() => dispatch(audioInfoUpdate({ speed: 1 }))} />
        ) : speed === 2 ? (
          <SecondSpeed
            onClick={() => dispatch(audioInfoUpdate({ speed: 2 }))}
          />
        ) : (
          <ThirdSpeed onClick={() => dispatch(audioInfoUpdate({ speed: 3 }))} />
        )}

        {volume ? (
          <VolumeIcon
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setTimeout(() => setIsHovered(false), 500);
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
        <CloseIcon />
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
