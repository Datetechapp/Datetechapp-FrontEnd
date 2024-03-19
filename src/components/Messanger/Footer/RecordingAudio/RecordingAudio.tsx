import React, { useState, useEffect, useRef } from 'react';
import { useVoiceVisualizer } from 'react-voice-visualizer';
import { ReactComponent as Microphone } from '../../../../assets/Messanger/RecordingAudio/Microphone.svg';
import { ReactComponent as StopIcon } from '../../../../assets/Messanger/RecordingAudio/StopIcon.svg';
import { ReactComponent as RecordingPoint } from '../../../../assets/Messanger/RecordingAudio/RecordingPoint.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/Messanger/RecordingAudio/PlayIcon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/RecordingAudio/SendIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/Messanger/RecordingAudio/deleteIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/Messanger/RecordingAudio/PauseIcon.svg';
import { ModalCommon } from 'components/common';
import css from './recordingAudio.module.css';

interface RecordingAudioProps {
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRecordedBlob: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RecordingAudio: React.FC<RecordingAudioProps> = ({
  setIsRecording,
  setIsRecordedBlob,
}) => {
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isOpenModalDeleteRecord, setIsOpenModalDeleteRecord] = useState(false);

  const recorderControls = useVoiceVisualizer();

  const {
    startRecording,
    stopRecording,
    recordedBlob,
    audioRef,
    isRecordingInProgress,
    clearCanvas,
    audioSrc,
  } = recorderControls;

  const timeRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!isRunning) return;

    timeRef.current = setInterval(
      () => setRecordingTime(recordingTime + 1),
      10,
    );

    return () => clearInterval(timeRef.current);
  }, [isRunning, recordingTime]);

  const minutes = Math.floor(recordingTime / 6000);
  const seconds = Math.floor((recordingTime / 100) % 60);
  const milliseconds = Math.floor((recordingTime % 100) / 10);

  const onStartAudioPlayback = () => {
    setIsPlaying(true);
  };

  const onEndAudioPlayback = () => {
    setIsPlaying(false);
  };

  const onPausedAudioPlayback = () => {
    console.log('onPausedAudioPlayback');
  };

  const onResumeAudioPlayback = () => {
    console.log('onResumeAudioPlayback');
  };

  const sendRecordBlob = () => {
    console.log('recordedBlob', audioSrc);
    clearCanvas();
    setRecordingTime(0);
    setIsRecordedBlob(false);
    setIsRecording(false);
  };

  const handleMicrophoneClick = () => {
    if (isRecordingInProgress) {
      stopRecording();
      setIsRecording(false);
      setIsRunning(!isRunning);
      setIsRecordedBlob(true);
    } else {
      startRecording();
      setIsRunning(!isRunning);
      setIsRecording(true);
    }
  };

  const handleAudioClick = () => {
    if (audioRef.current?.paused) {
      onStartAudioPlayback();
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      onPausedAudioPlayback();
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleDeleteRecord = () => {
    setIsOpenModalDeleteRecord(true);
    clearCanvas();
    setRecordingTime(0);
    setIsRecordedBlob(false);
    setIsRecording(false);
  };

  return (
    <div className={css.recordingAudio}>
      {isRecordingInProgress ? (
        <>
          <StopIcon className={css.stopIcon} onClick={handleMicrophoneClick} />
          <RecordingPoint className={css.recordingPoint} />
          <p className={css.timeIsRecording}>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')},{milliseconds.toString()}
          </p>
        </>
      ) : recordedBlob ? (
        <>
          {!isPlaying && (
            <PlayIcon className={css.playIcon} onClick={handleAudioClick} />
          )}
          {isPlaying && (
            <PauseIcon className={css.playIcon} onClick={handleAudioClick} />
          )}
          <SendIcon className={css.sendIcon} onClick={sendRecordBlob} />
          <DeleteIcon className={css.deleteIcon} onClick={handleDeleteRecord} />
          <audio ref={audioRef} src={audioSrc} onEnded={onEndAudioPlayback} />
          <p className={css.timeIsRecorded}>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')},{milliseconds.toString()}
          </p>
        </>
      ) : (
        <Microphone
          className={css.microphone}
          onClick={handleMicrophoneClick}
        />
      )}
      <ModalCommon
        textTitle="Delete?"
        textSubtitle="Are you sure you want to delete the voice message recording?"
        buttonText="No"
        secondButtonText="Delete"
        onChange={setIsOpenModalDeleteRecord}
        isOpen={isOpenModalDeleteRecord}
        isThereACancel={false}
        darkModal={true}
      />
    </div>
  );
};
