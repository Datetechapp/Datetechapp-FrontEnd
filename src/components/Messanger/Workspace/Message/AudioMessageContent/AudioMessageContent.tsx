import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

import styles from './audioMessageContent.module.css';
import css from '../message.module.css';
import { IAudioInfo } from '../../../../../store/audioInfo/types';
import { ReactComponent as PlayIcon } from '../../../../../assets/Messanger/RecordingAudio/PlayIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../../assets/Messanger/RecordingAudio/PauseIcon.svg';
import { ReactComponent as PinnedIcon } from '../../../../../assets/Messanger/iconForPinnedMessage.svg';
import { formatTime } from './lib';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import {
  audioInfoDelete,
  audioInfoUpdate,
  audioInfoSet,
} from 'store/audioInfo/slice';
import { getAudioInfo } from 'store/audioInfo/selectors';

type Props = {
  audioRef: React.RefObject<HTMLAudioElement>;
  timestamp: string;
  isPinned: boolean;
  blob: string;
};
export function AudioMessageContent({
  audioRef,
  timestamp,
  isPinned,
  blob,
}: Props) {
  const containerRef = useRef(null);
  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector(getAudioInfo);

  const { wavesurfer, currentTime } = useWavesurfer({
    container: containerRef,
    height: 18,
    waveColor: '#1F1D2B',
    progressColor: '#C896EF',
    url: blob,
    barAlign: 'bottom',
    cursorWidth: 0,
    barGap: 1,
    barWidth: 2,
    normalize: true,
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);
  const handleAudioPlay = () => {
    audioRef.current?.play();
    onPlayPause();

    const audioInfo: IAudioInfo = {
      speed: 1,
      volume: audioRef.current?.volume,
      duration: currentTime,
      isPlaying: true,
    };

    dispatch(audioInfoUpdate(audioInfo));
  };

  useEffect(() => {
    isPlaying && dispatch(audioInfoUpdate({ duration: currentTime }));
  }, [currentTime]);

  const handleAudioPause = () => {
    audioRef.current?.pause();
    onPlayPause();
    dispatch(audioInfoUpdate({ isPlaying: false }));
  };

  const handleAudioEnded = () => {
    dispatch(audioInfoDelete());
  };

  return (
    <div className={styles.container}>
      {isPlaying ? (
        <PauseIcon onClick={handleAudioPause} className={styles.button} />
      ) : (
        <PlayIcon onClick={handleAudioPlay} className={styles.button} />
      )}
      <audio ref={audioRef} src={blob} onEnded={handleAudioEnded} />
      <div className={styles.audioInfo}>
        <div ref={containerRef} />

        <div className={styles.lowPart}>
          <p className={styles.audioDuration}>{formatTime(currentTime)}</p>

          <div className={css.messageInfo}>
            {isPinned && <PinnedIcon className={css.pinnedIcon} />}
            <span className={css.messageTimestampt}>{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
