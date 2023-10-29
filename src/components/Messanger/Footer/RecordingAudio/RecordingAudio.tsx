import React, { useState, useRef } from 'react';
import { ReactComponent as Microphone } from "../../../../assets/Messanger/Microphone.svg";
import css from "./recordingAudio.module.css"
import { AudioVisualizer } from 'react-audio-visualize';



export const RecordingAudio = () => {
       const [isRecording, setIsRecording] = useState(false);
       const [recordedBlob, setRecordedBlob] = useState<Blob>();

       const visualizerRef = useRef<HTMLCanvasElement>(null)



       const startRecording = () => {
              setIsRecording(true);

       };

       const stopRecording = () => {
              setIsRecording(false);

       };

       const onData = (recordedBlob: any) => {
              // console.log( 'chunk of real-time data is: ', recordedBlob);
       };

       const onStop = (recordedBlob: any) => {
              console.log('recordedBlob is: ', recordedBlob);
              setRecordedBlob(recordedBlob.blobURL);
       };

       const handleMouseDown = () => {
              startRecording();
       };

       const handleMouseUp = () => {
              stopRecording();
       };

       console.log(recordedBlob)

       return (
              <div className={css.reactMicWrapper}>
                     {/* {isRecording && <p>Для отмены чего-нибудь нажмите</p>} */}
                     {recordedBlob && <AudioVisualizer
                            ref={visualizerRef}
                            blob={recordedBlob}
                            width={500}
                            height={75}
                            barWidth={1}
                            gap={0}
                            barColor={'#f76565'}
                     />}
                     <Microphone
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                     >
                            {/* <circle cx="25" cy="25" r="20" fill="#CCCCCC" />
                            <circle cx="25" cy="25" r="20" fill="#FF0000" /> */}
                     </Microphone>
              </div>
       );
};



