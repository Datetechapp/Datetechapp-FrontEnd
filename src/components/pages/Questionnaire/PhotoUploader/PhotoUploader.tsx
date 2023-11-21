import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import css from './photoUploader.module.css';
import { UploadButton } from '../UploadButton';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';
import { ReactComponent as AddPhoto } from '../../../../assets/CreateAccountForm/addPhoto.svg';

interface PhotoUploaderProps {
  onUpload: (imageData: string | null) => void;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  photo: string;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  onUpload,
  onChange,
  photo,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editorPosition, setEditorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0.5, y: 0.5 });
  const [editorScale, setEditorScale] = useState<number>(1.5);
  const [isPhotoSelected, setIsPhotoSelected] = useState<boolean>(false);
  const editorRef = useRef<AvatarEditor | null>(null);

  const handleFileUploaded = (file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result?.toString() || null;

      setSelectedImage(imageData);
      setIsPhotoSelected(true);
      onChange(true);
      setEditorPosition({ x: 0.5, y: 0.5 });
      setEditorScale(1.5);
      onUpload(imageData);
    };
    reader.readAsDataURL(file);
  };

  const handlePositionChange = (position: { x: number; y: number }) => {
    setEditorPosition(position);
  };

  const handleDeletePhoto = () => {
    setSelectedImage(null);
    setIsPhotoSelected(false);
    onChange(false);
    onUpload(null);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    if (!isNaN(value)) {
      const thumbPositionPercentage =
        ((value - parseFloat(e.target.min)) /
          (parseFloat(e.target.max) - parseFloat(e.target.min))) *
        100;

      e.target.style.setProperty(
        '--thumb-percentage',
        `${thumbPositionPercentage}%`,
      );
    }
  };

  return (
    <div className={css.blockForPhotoUploader}>
      {photo ? (
        <div>
          <CloseIcon className={css.closeIcon} onClick={handleDeletePhoto} />
          <AvatarEditor
            ref={editorRef}
            image={photo}
            width={200}
            height={200}
            border={0}
            borderRadius={0}
            scale={editorScale}
            position={editorPosition}
            onPositionChange={handlePositionChange}
          />
          <div>
            <input
              className={css.editorScale}
              type="range"
              id="myRange"
              min="1"
              max="2"
              step="0.01"
              value={editorScale}
              onChange={(e) => {
                setEditorScale(parseFloat(e.target.value));
                handleRangeChange(e);
              }}
            />
          </div>
        </div>
      ) : (
        <div className={css.buttonWrapper}>
          <UploadButton
            onUpload={handleFileUploaded}
            inputId="photo-upload-button"
            accept=".jpg,.jpeg,.png,.svg"
            icon={<AddPhoto className={css.addFileIcon} />}
          />
        </div>
      )}
    </div>
  );
};
