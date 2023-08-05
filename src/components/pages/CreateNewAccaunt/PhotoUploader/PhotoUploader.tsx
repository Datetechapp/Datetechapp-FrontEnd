import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import css from './photoUploader.module.css';
import { UploadButton } from '../UploadButton';
import { ReactComponent as PhotoIcon } from '../../../../assets/CreateAccountForm/photoIcon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/CreateAccountForm/closeIcon.svg';

interface PhotoUploaderProps {
       onUpload: (imageData: string) => void;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onUpload }) => {
       const [selectedImage, setSelectedImage] = useState<string>('');
       const [editorPosition, setEditorPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
       const [editorScale, setEditorScale] = useState<number>(1.5);
       const [isPhotoSelected, setIsPhotoSelected] = useState<boolean>(false);
       const editorRef = useRef<AvatarEditor | null>(null);

       const handleFileUploaded = (file: File) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                     const imageData = reader.result?.toString() || '';
                     setSelectedImage(imageData);
                     setIsPhotoSelected(true);
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
              setSelectedImage('');
              setIsPhotoSelected(false);
              onUpload('');
       };

       const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseFloat(e.target.value);

              if (!isNaN(value)) {
                     const thumbPositionPercentage = ((value - parseFloat(e.target.min)) / (parseFloat(e.target.max) - parseFloat(e.target.min))) * 100;
                     e.target.style.setProperty('--thumb-percentage', `${thumbPositionPercentage}%`);
              }
       };



       return (
              <div className={css.blockForPhotoUploader}>
                     {isPhotoSelected ? (
                            <div>
                                   <CloseIcon className={css.closeIcon} onClick={handleDeletePhoto} />
                                   <AvatarEditor
                                          ref={editorRef}
                                          image={selectedImage}
                                          width={186}
                                          height={186}
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
                                   <UploadButton onUpload={handleFileUploaded} inputId="photo-upload-button" accept=".jpg,.jpeg,.png,.svg" />
                                   <PhotoIcon className={css.photoIcon} />
                            </div>
                     )}
              </div>
       );
};