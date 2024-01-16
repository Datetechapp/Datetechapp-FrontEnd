import React, { useRef } from 'react';
import { Input } from 'components/common';
import css from './uploadButton.module.css';

interface UploadButtonProps {
  onUpload: (file: File) => void;
  inputId?: string;
  accept?: string;
  icon?: React.ReactNode;
}

export const UploadButton: React.FC<UploadButtonProps> = ({
  onUpload,
  inputId,
  accept,
  icon,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files?.length) {
      const file = event.target.files[0];

      onUpload(file);

      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className={inputId === 'video-upload-button' ? css.blockForUploadVideoButton : inputId === 'photo-upload-button' ? css.blockForUploadPhotoButton : css.blockForClipPhoto}>
      <label htmlFor={inputId}>
        {icon}
      </label>
      <Input
        inputRef={inputRef}
        id={inputId}
        type="file"
        className={css.inputForVideo}
        onChange={handleInputChange}
        accept={accept || 'image/*'}
      />
    </div>
  );
};
