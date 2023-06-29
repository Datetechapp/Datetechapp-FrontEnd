import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import css from './photoUploader.module.css';
import { UploadButton } from '../UploadButton';
import { ReactComponent as PhotoIcon } from '../../../../assets/CreateAccountForm/photoIcon.svg';
import { ReactComponent as CloseIcon} from "../../../../assets/CreateAccountForm/closeIcon.svg"

interface PhotoUploaderProps {
       onUpload: (file: File) => void;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onUpload }) => {
       const [selectedImage, setSelectedImage] = useState<string>('');
       const [editorPosition, setEditorPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
       const [editorScale, setEditorScale] = useState<number>(1);
       const [isPhotoSelected, setIsPhotoSelected] = useState<boolean>(false); // Добавлено новое состояние
       const editorRef = useRef<AvatarEditor | null>(null);

       const handleFileUploaded = (file: File) => {
              const reader = new FileReader();
              reader.onload = (e) => {
                     if (e.target) {
                            setSelectedImage(e.target.result as string);
                            setIsPhotoSelected(true); // Задаем значение true, чтобы отображалась иконка удаления
                            setEditorPosition({ x: 0.5, y: 0.5 }); // Обнуляем позицию редактора
                            setEditorScale(1); // Обнуляем масштаб редактора
                     }
              };
              reader.readAsDataURL(file);
              onUpload(file);
       };

       const handlePositionChange = (position: { x: number; y: number }) => {
              setEditorPosition(position);
       };

       const handleDeletePhoto = () => { // Добавлен обработчик клика на кнопку удаления
              setSelectedImage('');
              setIsPhotoSelected(false); // Обнуляем значение состояния
       };

       return (
              <div className={css.blockForPhotoUploader}>
                     {isPhotoSelected ? ( // Изменен блок с кнопками
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
                                          <label>Масштаб:</label>
                                          <input
                                                 type="range"
                                                 min="1"
                                                 max="2"
                                                 step="0.01"
                                                 value={editorScale}
                                                 onChange={(e) => setEditorScale(parseFloat(e.target.value))}
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