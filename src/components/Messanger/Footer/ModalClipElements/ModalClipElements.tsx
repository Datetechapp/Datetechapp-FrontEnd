import React, { FC, useState } from 'react';
import { Input } from 'components/common';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import css from './modalClipElements.module.css';
import { ReactComponent as CloseIcon } from '../../../../assets/Messanger/CloseIconForClipElem.svg';
import { ReactComponent as EmojiIcon } from '../../../../assets/Messanger/emojiIcon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/SendIcon.svg';

interface ModalClipElementsProps {
  file: File | null;
  onClose: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ModalClipElements: FC<ModalClipElementsProps> = ({
  file,
  onClose,
  value,
  onChange,
}) => {
  const [showEmojiBlock, setShowEmojiBlock] = useState(false);

  const handleTogglePicker = () => {
    setShowEmojiBlock(!showEmojiBlock);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    const emojiChangeEvent = {
      target: {
        value: value + emojiObject.emoji,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(emojiChangeEvent);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!file) return null;

  return (
    <div className={css.background} onClick={handleBackgroundClick}>
      <CloseIcon className={css.closeButton} onClick={onClose} />
      <div className={css.blockClipElemWithDescription}>
        <div className={css.centeredContainer}>
          <img
            src={URL.createObjectURL(file)}
            className={css.clipElem}
            alt='Selected'
          />
        </div>
        <div className={css.blockInputForClipsDescription}>
          {showEmojiBlock && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          <div className={css.blockIcons}>
            <EmojiIcon className={css.emojiIcon} onClick={handleTogglePicker} />
            <SendIcon className={css.sendIcon} />
          </div>
          <Input
            className={css.fieldForMessage}
            type='text'
            placeholder='Add a caption...'
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
