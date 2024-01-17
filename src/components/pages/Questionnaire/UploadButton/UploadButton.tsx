import React, { useRef } from 'react';
import { Input } from 'components/common';
import css from './uploadButton.module.css';

interface UploadButtonProps {
  onUpload: (file: File) => void;
  inputId?: string;
  accept?: string;
  icon?: React.ReactNode;
  text?: string;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ onUpload, inputId, accept, icon, text }) => {
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
    <div className={
      inputId === 'video-upload-button'
        ? `${css.blockForUploadVideoButton} ${css.clipButton}`
        : inputId === 'photo-upload-button'
          ? `${css.blockForUploadPhotoButton} ${css.clipButton}`
          : ''
    }>
      <label htmlFor={inputId} className={text ? css.blockForClipPhoto : ''}>
        {icon}
        <p className={css.clipBtn}>{text}</p>
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
