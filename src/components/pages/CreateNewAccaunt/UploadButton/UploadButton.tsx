import React from 'react';
import { Input } from 'components/common';
import css from './uploadButton.module.css';
import { ReactComponent as AddFile } from '../../../../assets/CreateAccountForm/addFile.svg';

interface UploadButtonProps {
  onUpload: (file: File) => void;
  inputId: string;
  accept?: string;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ onUpload, inputId, accept }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onUpload(file);
    }
  };

  return (
    <div className={css.blockForUploadButton}>
      <label htmlFor={inputId}>
        <AddFile className={css.addFileIcon} />
      </label>
      <Input
        id={inputId}
        type="file"
        className={css.inputForVideo}
        onChange={handleInputChange}
        accept={accept || 'image/*'}
      />
    </div>
  );
};