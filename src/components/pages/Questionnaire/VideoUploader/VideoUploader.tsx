import { useEffect, useRef, useState, type ChangeEvent, type FC } from 'react';
import { ReactComponent as AddPhoto } from '../../../../assets/CreateAccountForm/addPhoto.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/CreateAccountForm/pauseIcon.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/CreateAccountForm/playIcon.svg';
import { ReactComponent as SoundOnIcon } from '../../../../assets/CreateAccountForm/soundIcon.svg';
import { ReactComponent as SoundOffIcon } from '../../../../assets/CreateAccountForm/soundOff.svg';
import { UploadButton } from '../UploadButton';
import css from './videoUploader.module.css';

interface VideoUploaderProps {
  onUpload: (fileData: Blob | null) => void;
  video: Blob | null;
}

export const VideoUploader: FC<VideoUploaderProps> = ({ onUpload, video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    const fileExtension = file.name.split('.').pop()!.toLowerCase();
    const allowedExtensions = ['mp4', 'mov', 'avi', 'wmv'];
    const allowedMaxSize = 1024 * 1024 * 1024;

    if (
      allowedExtensions.includes(fileExtension) &&
      file.size <= allowedMaxSize
    ) {
      const reader = new FileReader();

      reader.onload = () => {
        const videoData = new Blob([
          new Uint8Array(reader.result as ArrayBuffer),
        ]);

        onUpload(videoData);

        if (videoRef.current) {
          videoRef.current.src = URL.createObjectURL(file);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert(
        'Неверный формат файла или превышен допустимый размер (1GB). Пожалуйста, загрузите файлы только в форматах MP4, MOV, AVI, WMV.',
      );
    }
  };

  const handleRemoveVideo = () => onUpload(null);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
    setIsPlaying(!videoRef.current.paused);
  };

  useEffect(() => {
    const rangeInput = volumeRef.current;

    if (rangeInput) {
      rangeInput.style.setProperty('--thumb-percentage', `${volume * 100}%`);
    }
  }, [volume, isVolumeBlockHovered, isHovered]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(target.value);

    setVolume(newVolume);

    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleRangeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(target.value);

    if (!isNaN(value)) {
      const thumbPositionPercentage =
        ((value - parseFloat(target.min)) /
          (parseFloat(target.max) - parseFloat(target.min))) *
        100;

      target.style.setProperty(
        '--thumb-percentage',
        `${thumbPositionPercentage}%`,
      );
    }
  };

  return (
    <>
      {!video ? (
        <div className={css.blockUploadVideo}>
          <UploadButton
            icon={<AddPhoto className={css.addFileVideo} />}
            onUpload={handleFileUpload}
            inputId="video-upload-button"
            accept=".mp4,.mov,.avi,.wmv"
          />
        </div>
      ) : (
        <div className={css.videoWrapper}>
          <video className={css.videoCreateAcc} ref={videoRef}>
            <source src={video ? URL.createObjectURL(video) : ''} />
          </video>
          <CloseIcon className={css.closeIcon} onClick={handleRemoveVideo} />
          {!volume ? (
            <SoundOffIcon
              className={css.soundIcon}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setTimeout(() => setIsHovered(false), 300)}
              onClick={() => setVolume(1)}
            />
          ) : (
            <SoundOnIcon
              className={css.soundIcon}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setTimeout(() => setIsHovered(false), 500)}
              onClick={() => setVolume(0)}
            />
          )}
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
          {!isPlaying && (
            <PlayIcon className={css.iconControls} onClick={handleVideoClick} />
          )}
          {isPlaying && (
            <PauseIcon
              className={css.iconControls}
              onClick={handleVideoClick}
            />
          )}
        </div>
      )}
    </>
  );
};
