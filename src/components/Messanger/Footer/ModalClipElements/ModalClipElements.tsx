import { TextareaAutosize } from '@mui/material';
import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react';
import { useRef, useState } from 'react';

import { ClearMessageModal } from './ClearMessageModal';

import { ReactComponent as DeleteIcon } from '../../../../assets/Messanger/DeleteIcon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/SendIcon.svg';

import css from './modalClipElements.module.css';

type ModalClipElementsProps = {
  file: File;
  onClose: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
};

const INPUT_COLLAPSED_HEIGHT = 20;

export const ModalClipElements = ({
  file,
  onClose,
  setMessage,
}: ModalClipElementsProps) => {
  const [isModal, setModal] = useState(false);
  const [caption, setCaption] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleWrapperClick = () => {
    if (isModal) return;
    setModal(true);
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  const handleDelete = () => setModal(true);

  const handleSend = () => {}; // TODO: send to back-end

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(target.value);

    setTimeout(() => {
      if (!inputRef.current || !textareaRef.current) return;

      const height = parseInt(textareaRef.current.style.height);

      height > INPUT_COLLAPSED_HEIGHT
        ? (inputRef.current.style.borderRadius = '12px')
        : (inputRef.current.style.borderRadius = '30px');
    }, 0);
  };

  const handleCancel = () => setModal(false);

  const handleClear = () => {
    if (caption) {
      setMessage(caption);
    }
    setModal(false);
    onClose();
  };

  return (
    <>
      <div className={css.wrapper} onClick={handleWrapperClick}>
        <div className={css.modal} onClick={handleModalClick}>
          <div className={css.imageBlock}>
            <img
              src={URL.createObjectURL(file)}
              className={css.image}
              alt="Selected"
              onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
            />
            <DeleteIcon className={css.deleteIcon} onClick={handleDelete} />
          </div>
          <div className={css.inputWrapper}>
            <div className={css.inputBlock} ref={inputRef}>
              <TextareaAutosize
                className={css.textarea}
                placeholder="Add a caption..."
                value={caption}
                onChange={handleChange}
                ref={textareaRef}
              />
              <SendIcon className={css.sendIcon} onClick={handleSend} />
            </div>
          </div>
        </div>
      </div>
      {isModal && (
        <ClearMessageModal onCancel={handleCancel} onClear={handleClear} />
      )}
    </>
  );
};
