import React, { useState, useRef } from 'react';
import css from './videoUploader.module.css';
import { UploadButton } from '../UploadButton';
import { ReactComponent as PlayIcon } from '../../../../assets/CreateAccountForm/playIcon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';
import { ReactComponent as PlayIconControls } from "../../../../assets/CreateAccountForm/playIcon1.svg"
import { ReactComponent as PauseIconControls } from "../../../../assets/CreateAccountForm/pauseIcon1.svg"
import { ReactComponent as CropIcon } from "../../../../assets/CreateAccountForm/scissors.svg"


interface VideoUploaderProps {
       onUpload: (fileData: string | null, isRemoved?: boolean) => void;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({ onUpload }) => {
       const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
       const [isPlaying, setIsPlaying] = useState(false);
       const [volume, setVolume] = useState(0.5);

       const videoRef = useRef<HTMLVideoElement>(null);

       const handleFileUpload = async (file: File) => {
              const fileExtension = file.name.split('.').pop()!.toLowerCase();
              const allowedExtensions = ['mp4', 'mov', 'avi', 'wmv'];
              const allowedMaxSize = 1024 * 1024 * 1024;

              if (allowedExtensions.includes(fileExtension) && file.size <= allowedMaxSize) {
                     const reader = new FileReader();
                     reader.onloadend = () => {
                            const videoData = reader.result?.toString() || null;
                            onUpload(videoData);
                            setSelectedVideo(file);
                            setIsPlaying(false);

                            if (videoRef.current) {
                                   videoRef.current.src = URL.createObjectURL(file);
                            }
                     };
                     reader.readAsDataURL(file);
              } else {
                     alert('Неверный формат файла или превышен допустимый размер (1GB). Пожалуйста, загрузите файлы только в форматах MP4, MOV, AVI, WMV.');
              }
       };

       const handleRemoveVideo = () => {
              setSelectedVideo(null);
              setIsPlaying(false);

              if (videoRef.current) {
                     videoRef.current.src = "";
              }
              onUpload(null, true);
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
                     const thumbPositionPercentage = ((value - parseFloat(e.target.min)) / (parseFloat(e.target.max) - parseFloat(e.target.min))) * 100;
                     e.target.style.setProperty('--thumb-percentage', `${thumbPositionPercentage}%`);
              }
       };

       return (
              <div className={css.blockUploadVideo}>
                     {!selectedVideo && <UploadButton
                            onUpload={handleFileUpload}
                            inputId="video-upload-button"
                            accept=".mp4,.mov,.avi,.wmv"
                     />}
                     {selectedVideo && (
                            <div className={css.videoWrapper}>
                                   <video className={css.videoCreateAcc} ref={videoRef} >
                                          <source src={URL.createObjectURL(selectedVideo)} />
                                   </video>
                                   <CloseIcon className={css.closeIcon} onClick={handleRemoveVideo} />
                            </div>
                     )}
                     {selectedVideo && <div className={css.videoControls}>
                            {!isPlaying && <PlayIconControls className={css.iconControls} onClick={handleVideoClick} />}
                            {isPlaying && <PauseIconControls className={css.iconControls} onClick={handleVideoClick} />}
                            <input
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
                            <CropIcon className={css.cropIcon} />
                     </div>}
                     {!isPlaying && !selectedVideo && <PlayIcon className={css.playIcon} />}
              </div>
       );
};