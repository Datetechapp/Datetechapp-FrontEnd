import { useRef, useState, type ChangeEvent } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { UploadButton } from '../UploadButton';

import { ReactComponent as AddPhoto } from '../../../../assets/CreateAccountForm/addPhoto.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';

import css from './photoUploader.module.css';

type Coordinates = {
  x: number;
  y: number;
};

type PhotoUploaderProps = {
  onUpload: (photo: File | null) => void;
  photo: File | null;
};

export const PhotoUploader = ({ onUpload, photo }: PhotoUploaderProps) => {
  const [editorPosition, setEditorPosition] = useState<Coordinates>({
    x: 0.5,
    y: 0.5,
  });
  const [editorScale, setEditorScale] = useState(1.5);
  const editorRef = useRef<AvatarEditor | null>(null);

  const handleFileUpload = ([file]: File[]) => onUpload(file);

  const handlePositionChange = (position: Coordinates) =>
    setEditorPosition(position);

  const handleDeletePhoto = () => {
    onUpload(null);
    setEditorScale(1.5);
    setEditorPosition({ x: 0.5, y: 0.5 });
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
            onUpload={handleFileUpload}
            inputId="photo-upload-button"
            accept=".jpg,.jpeg,.png,.svg"
            icon={<AddPhoto className={css.addFileIcon} />}
          />
        </div>
      )}
    </div>
  );
};
