import { TextareaAutosize } from '@mui/material';
import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { ClearMessageModal } from './ClearMessageModal';

import { ReactComponent as DeleteIcon } from '../../../../assets/Messanger/DeleteIcon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/SendIcon.svg';

import css from './modalClipElements.module.css';

type ModalClipElementsProps = {
  message: string;
  files: File[];
  onClose: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
};

const INPUT_COLLAPSED_HEIGHT = 20;

export const ModalClipElements = ({
  message,
  files,
  onClose,
  setMessage,
}: ModalClipElementsProps) => {
  const [isModal, setModal] = useState(false);
  const [caption, setCaption] = useState(message);
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const imageURLs = useMemo(() => {
    const imageURLs = files
      .filter((file) => file.type.includes('image'))
      .map(URL.createObjectURL);

    imageURLs.length = 10; // TOFIX: forcibly update the number of images to only ten

    return imageURLs;
  }, [files]);

  useEffect(() => {
    setMessage('');

    return () => imageURLs.forEach((imageURL) => URL.revokeObjectURL(imageURL));
  }, []);

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
            {imageURLs.map((src) => (
              <img key={src} src={src} className={css.image} alt="" />
            ))}
            <DeleteIcon className={css.deleteIcon} onClick={handleDelete} />
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
