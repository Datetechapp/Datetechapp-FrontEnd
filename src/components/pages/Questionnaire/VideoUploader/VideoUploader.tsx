import React, { useState, useEffect, useRef } from 'react';
import css from './videoUploader.module.css';
import { UploadButton } from '../UploadButton';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';
import { ReactComponent as SoundOnIcon } from '../../../../assets/CreateAccountForm/soundIcon.svg';
import { ReactComponent as SoundOffIcon } from "../../../../assets/CreateAccountForm/soundOff.svg";
import { ReactComponent as PlayIcon } from "../../../../assets/CreateAccountForm/playIcon.svg"
import { ReactComponent as PauseIcon } from "../../../../assets/CreateAccountForm/pauseIcon.svg"
import { ReactComponent as AddPhoto } from '../../../../assets/CreateAccountForm/addPhoto.svg';
import { ModalUploadVideo } from '../ModalUploadVideo';


interface VideoUploaderProps {
       onUpload: (fileData: Blob | null, isRemoved?: boolean) => void;
       onChange: React.Dispatch<React.SetStateAction<boolean>>;
       video: Blob | null;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({ onUpload, onChange, video }) => {
       const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
       const [isPlaying, setIsPlaying] = useState(false);
       const [isHovered, setIsHovered] = useState(false);
       const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);

       const [volume, setVolume] = useState(0.5);

       const videoRef = useRef<HTMLVideoElement>(null);

       const handleFileUpload = async (file: File) => {
              const fileExtension = file.name.split('.').pop()!.toLowerCase();
              const allowedExtensions = ['mp4', 'mov', 'avi', 'wmv'];
              const allowedMaxSize = 1024 * 1024 * 1024;

              if (allowedExtensions.includes(fileExtension) && file.size <= allowedMaxSize) {
                     const reader = new FileReader();
                     reader.onloadend = () => {
                            const videoData = reader.result instanceof ArrayBuffer ? new Blob([new Uint8Array(reader.result)]) : null;
                            onUpload(videoData);
                            setSelectedVideo(file);
                            onChange(true);
                            setIsPlaying(false);

                            if (videoRef.current) {
                                   videoRef.current.src = URL.createObjectURL(file);
                            }
                     };
                     reader.readAsArrayBuffer(file);
              } else {
                     alert('Неверный формат файла или превышен допустимый размер (1GB). Пожалуйста, загрузите файлы только в форматах MP4, MOV, AVI, WMV.');
              }
       };

       const handleRemoveVideo = () => {
              setSelectedVideo(null);
              onChange(false)
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

       const volumeRef = useRef<HTMLInputElement | null>(null);

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
                     const thumbPositionPercentage = ((value - parseFloat(e.target.min)) / (parseFloat(e.target.max) - parseFloat(e.target.min))) * 100;
                     e.target.style.setProperty('--thumb-percentage', `${thumbPositionPercentage}%`);
              }
       };


       return (
              <>
                     {!video ?
                            <div className={css.blockUploadVideo}>
                                   <UploadButton
                                          icon={<AddPhoto className={css.addFileVideo}
                                          />}
                                          onUpload={handleFileUpload}
                                          inputId="video-upload-button"
                                          accept=".mp4,.mov,.avi,.wmv"
                                   />
                            </div >
                            :
                            <div className={css.videoWrapper}>
                                   <video className={css.videoCreateAcc} ref={videoRef} >
                                          <source src={video ? URL.createObjectURL(video) : ''} />
                                   </video>
                                   <CloseIcon className={css.closeIcon} onClick={handleRemoveVideo} />
                                   {!volume ?
                                          <SoundOffIcon className={css.soundIcon}
                                                 onMouseEnter={() => setIsHovered(true)}
                                                 onMouseLeave={() => {
                                                        setTimeout(() => setIsHovered(false), 300);
                                                 }}
                                                 onClick={() => setVolume(1)}

                                          />
                                          : <SoundOnIcon className={css.soundIcon}
                                                 onMouseEnter={() => setIsHovered(true)}
                                                 onMouseLeave={() => {
                                                        setTimeout(() => setIsHovered(false), 500);
                                                 }}
                                                 onClick={() => setVolume(0)}
                                          />}
                                   {(isHovered || isVolumeBlockHovered) &&
                                          <div className={css.volumeBlock}
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
                                   }
                                   <div className={css.videoControls}>
                                          {!isPlaying && <PlayIcon className={`${css.iconControls}`} onClick={handleVideoClick} />}
                                          {isPlaying && <PauseIcon className={`${css.iconControls}`} onClick={handleVideoClick} />}
                                   </div>
                            </div>}
              </>
       );
};