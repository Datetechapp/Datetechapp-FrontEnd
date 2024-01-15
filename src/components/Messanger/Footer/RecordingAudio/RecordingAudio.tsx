import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactComponent as Microphone } from '../../../../assets/Messanger/RecordingAudio/Microphone.svg';
import { ReactComponent as StopIcon } from '../../../../assets/Messanger/RecordingAudio/StopIcon.svg';
import { ReactComponent as RecordingPoint } from '../../../../assets/Messanger/RecordingAudio/RecordingPoint.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/Messanger/RecordingAudio/PlayIcon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/RecordingAudio/SendIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/Messanger/RecordingAudio/deleteIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/Messanger/RecordingAudio/PauseIcon.svg';
import css from './recordingAudio.module.css';
import { useVoiceVisualizer, VoiceVisualizer } from 'react-voice-visualizer';
import { ModalCommon } from 'components/common';

interface RecordingAudioProps {
       setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
       setIsRecordedBlob: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RecordingAudio: React.FC<RecordingAudioProps> = ({ setIsRecording, setIsRecordedBlob }) => {

       const [recordingTime, setRecordingTime] = useState(0);
       const [isPlaying, setIsPlaying] = useState(false);
       const [isRunning, setIsRunning] = useState(false);
       const [isOpenModalDeleteRecord, setIsOpenModalDeleteRecord] = useState(false);

       const recorderControls = useVoiceVisualizer();

       const {
              isRecordingInProgress:
              isRecorderRecording,
              startRecording,
              stopRecording,
              recordedBlob,
              audioRef,
              isRecordingInProgress,
              clearCanvas,
              audioSrc,

       } = recorderControls;

       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const timerRef = useRef<any>(null);

       useEffect(() => {
              let intervalId: ReturnType<typeof setInterval>;

              if (isRunning) {
                     intervalId = setInterval(() => setRecordingTime(recordingTime + 1), 10);
              }

              return () => clearInterval(intervalId);
       }, [isRunning, recordingTime]);

       const padZero = useCallback((value: number) => {
              return value.toString().padStart(2, '0');
       }, []);

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

       const handleMicrophoneClick = () => {
              if (isRecordingInProgress) {
                     stopRecording();
                     setIsRecording(false);
                     setIsRunning(!isRunning);
                     setIsRecordedBlob(true);
                     // clearInterval(timerRef.current);
              } else {
                     startRecording();
                     setIsRunning(!isRunning);
                     setIsRecording(true);
                     // recordingTimer();
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
              // timerRef.current = 0;
              setIsRecordedBlob(false);
              setIsRecording(false);
       };

       return (
              <div className={css.recordingAudio}>
                     {isRecordingInProgress ? (
                            <>
                                   <StopIcon
                                          className={css.stopIcon}
                                          onClick={handleMicrophoneClick}
                                   />
                                   <RecordingPoint className={css.recordingPoint} />
                                   <p className={css.timeIsRecording}>{minutes.toString().padStart(2, '0')}:
                                          {seconds.toString().padStart(2, '0')},
                                          {milliseconds.toString()}</p>
                            </>
                     ) :
                            recordedBlob ? (
                                   <>
                                          {!isPlaying && <PlayIcon className={css.playIcon} onClick={handleAudioClick} />}
                                          {isPlaying && <PauseIcon className={css.playIcon} onClick={handleAudioClick} />}
                                          <SendIcon className={css.sendIcon} />
                                          <DeleteIcon className={css.deleteIcon} onClick={handleDeleteRecord} />
                                          <audio ref={audioRef} src={audioSrc} onEnded={onEndAudioPlayback} />
                                          <p className={css.timeIsRecorded}>{minutes.toString().padStart(2, '0')}:
                                                 {seconds.toString().padStart(2, '0')},
                                                 {milliseconds.toString()}</p>
                                   </>
                            ) :
                                   (
                                          <Microphone
                                                 className={css.microphone}
                                                 onClick={handleMicrophoneClick}
                                          />
                                   )}
                     <ModalCommon
                            textTitle='Delete?'
                            textSubtitle='Are you sure you want to delete the voice message recording?'
                            buttonText='No'
                            secondButtonText='Delete'
                            onChange={setIsOpenModalDeleteRecord}
                            isOpen={isOpenModalDeleteRecord}
                            isThereACancel={false}
                            darkModal={true}
                     />
                     {/* <div className={!isPlaying ? css.visualizerContainerHidden : css.visualizerContainer}>
                            <VoiceVisualizer
                                   controls={recorderControls}
                                   // ref={audioRef}
                                   backgroundColor="#4B4A54"
                                   mainBarColor="#1F1D2B"
                                   secondaryBarColor="#C896EF"
                            />
                     </div> */}
              </div>
       );
};

