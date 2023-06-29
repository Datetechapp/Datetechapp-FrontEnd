import React, { useState, useRef } from 'react';
import css from './videoUploader.module.css';
import { UploadButton } from '../UploadButton';
import { ReactComponent as PlayIcon } from '../../../../assets/CreateAccountForm/playIcon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';

interface VideoUploaderProps {
       onUpload: (file: File | null, isRemoved?: boolean) => void;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({ onUpload }) => {
       const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
       const [isPlaying, setIsPlaying] = useState(false);
       const videoRef = useRef<HTMLVideoElement>(null);

       const handleFileUpload = async (file: File) => {
              // проверяем формат и размер файла
              const fileExtension = file.name.split('.').pop()!.toLowerCase();
              const allowedExtensions = ['mp4', 'mov', 'avi', 'wmv'];
              const allowedMaxSize = 1024 * 1024 * 1024;
              if (allowedExtensions.includes(fileExtension) && file.size <= allowedMaxSize) {
                     onUpload(file);
                     setSelectedVideo(file);
                     setIsPlaying(false);
                     if (videoRef.current) {
                            videoRef.current.src = URL.createObjectURL(file); // устанавливаем URL-адрес видео
                     }
              } else {
                     alert('Неверный формат файла или превышен допустимый размер (1GB). Пожалуйста, загрузите файлы только в форматах MP4, MOV, AVI, WMV.');
              }
       };

       const handleVideoClick = () => {
              if (videoRef.current) {
                     if (isPlaying) {
                            videoRef.current.pause();
                     } else {
                            videoRef.current.play();
                     }
                     setIsPlaying(!isPlaying);
              }
       };

       const handleRemoveVideo = () => {
              setSelectedVideo(null);
              setIsPlaying(false);
              if (videoRef.current) {
                     videoRef.current.src = '';
              }
              onUpload(null, true);
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
                                   <video className={css.videoCreateAcc} ref={videoRef} onClick={handleVideoClick} controls controlsList="volume">
                                          <source src={URL.createObjectURL(selectedVideo)} />
                                   </video>
                                   <CloseIcon className={css.closeIcon} onClick={handleRemoveVideo} />
                            </div>
                     )}
                     {!isPlaying && !selectedVideo && <PlayIcon className={css.playIcon} onClick={() => document.getElementById('video-upload-button')?.click()} />}
              </div>
       );
};