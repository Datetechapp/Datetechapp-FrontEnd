import { useRef, type ReactNode, type ChangeEvent } from 'react';
import { Input } from 'components/common';

import css from './uploadButton.module.css';

type UploadButtonProps = {
  onUpload: (files: File[]) => void;
  inputId?: string;
  accept?: string;
  multiple?: boolean;
  icon?: ReactNode;
};

export const UploadButton = ({
  onUpload,
  inputId,
  accept,
  icon,
  multiple,
}: UploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.files?.length && onUpload([...target.files]);
    inputRef.current && (inputRef.current.value = '');
  };

  return (
    <div
      className={
        inputId === 'video-upload-button'
          ? css.blockForUploadVideoButton
          : inputId === 'photo-upload-button'
          ? css.blockForUploadPhotoButton
          : css.blockForClipPhoto
      }
    >
      <label htmlFor={inputId}>{icon}</label>
      <Input
        inputRef={inputRef}
        id={inputId}
        type="file"
        className={css.inputForVideo}
        onChange={handleInputChange}
        accept={accept || 'image/*'}
        multiple={multiple}
      />
    </div>
  );
};
