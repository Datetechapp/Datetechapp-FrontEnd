import { useState, type ChangeEvent, type MouseEvent, useRef } from 'react';
import { TextareaAutosize } from '@mui/material';

import { ReactComponent as CloseIcon } from '../../../../assets/Messanger/CloseIconForClipElem.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/SendIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/Messanger/DeleteIcon.svg';
import css from './modalClipElements.module.css';

type ModalClipElementsProps = {
  file: File | null;
  onClose: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ModalClipElements = ({
  file,
  onClose,
  onChange,
}: ModalClipElementsProps) => {
  const [caption, setCaption] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  if (!file) return null;

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  const deleteImage = () => onClose();

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(target.value);

    setTimeout(() => {
      if (!inputRef.current || !textareaRef.current) return;

      const height = parseInt(textareaRef.current.style.height);

      height > 20
        ? (inputRef.current.style.borderRadius = '12px')
        : (inputRef.current.style.borderRadius = '30px');
    }, 0);
  };

  return (
    <div className={css.modal} onClick={handleBackgroundClick}>
      <div className={css.imageBlock}>
        <img
          src={URL.createObjectURL(file)}
          className={css.image}
          alt="Selected"
        />
        <DeleteIcon className={css.deleteIcon} onClick={deleteImage} />
      </div>
      <div className={css.inputBlock}>
        <div className={css.input} ref={inputRef}>
          <TextareaAutosize
            className={css.textarea}
            placeholder="Add a caption..."
            value={caption}
            onChange={handleChange}
            ref={textareaRef}
          />
          <SendIcon className={css.sendIcon} />
        </div>
      </div>
      {/* <CloseIcon className={css.closeButton} onClick={onClose} /> */}
    </div>
  );
};
