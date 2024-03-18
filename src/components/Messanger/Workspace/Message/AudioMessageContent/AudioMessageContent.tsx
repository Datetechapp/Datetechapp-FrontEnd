import { RefObject, useEffect, useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

import { ReactComponent as PlayIcon } from '../../../../../assets/Messanger/RecordingAudio/PlayIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../../assets/Messanger/RecordingAudio/PauseIcon.svg';
import { ReactComponent as PinnedIcon } from '../../../../../assets/Messanger/iconForPinnedMessage.svg';
import { formatTime } from './lib';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { audioInfoDelete, audioInfoUpdate } from 'store/audioInfo/slice';
import { getAudioInfo } from 'store/audioInfo/selectors';
import styles from './audioMessageContent.module.css';
import css from '../message.module.css';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
  timestamp: string;
  isPinned: boolean;
  blob: string;
  id: string;
};
export function AudioMessageContent({
  audioRef,
  timestamp,
  isPinned,
  blob,
  id,
}: Props) {
  const containerRef = useRef(null);
  const dispatch = useAppDispatch();
  const {
    isPlaying,
    volume,
    id: audioId,
    blob: audioBlob,
    speed,
  } = useAppSelector(getAudioInfo);

  const preservePitch = true;

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

  const handleAudioPlay = () => {
    const audioInfoStart = {
      id,
      duration: currentTime,
      isPlaying: true,
      isPinned: true,
      blob,
    };

    dispatch(audioInfoUpdate(audioInfoStart));
  };

  const handleAudioPause = () => {
    dispatch(audioInfoUpdate({ isPlaying: false }));
  };

  const handleAudioEnded = () => {
    wavesurfer && wavesurfer.stop();
    dispatch(audioInfoDelete());
  };

  useEffect(() => {
    isPlaying && dispatch(audioInfoUpdate({ duration: currentTime }));
  }, [currentTime]);

  useEffect(() => {
    wavesurfer && wavesurfer.setVolume(volume!);
  }, [volume]);

  useEffect(() => {
    if (isPlaying && id === audioId) {
      wavesurfer && wavesurfer.play();
    } else {
      wavesurfer && wavesurfer.pause();
    }
  }, [audioBlob, id, isPlaying]);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.on('finish', () => {
        handleAudioEnded();
      });
    }
  }, [wavesurfer]);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer && wavesurfer.setPlaybackRate(speed, preservePitch);
    }
  }, [speed]);

  return (
    <div className={styles.container}>
      {isPlaying && id === audioId ? (
        <PauseIcon onClick={handleAudioPause} className={styles.button} />
      ) : (
        <PlayIcon onClick={handleAudioPlay} className={styles.button} />
      )}
      {id === audioId && (
        <audio
          ref={audioRef}
          src={audioBlob}
          // onEnded={handleAudioEnded}
          id={id}
        />
      )}

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
