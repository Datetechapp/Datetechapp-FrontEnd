import { Input } from 'components/common';
import EmojiPicker from 'emoji-picker-react';
import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { ReactComponent as CloseIcon } from '../../../../assets/Messanger/CloseIconForClipElem.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/SendIcon.svg';
import { ReactComponent as EmojiIcon } from '../../../../assets/Messanger/emojiIcon.svg';
import css from './modalClipElements.module.css';

type ModalClipElementsProps = {
  file: File | null;
  onClose: () => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ModalClipElements = ({
  file,
  onClose,
  value,
  onChange,
}: ModalClipElementsProps) => {
  const [showEmojiBlock, setShowEmojiBlock] = useState(false);

  const handleTogglePicker = () => {
    setShowEmojiBlock(!showEmojiBlock);
  };

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    const emojiChangeEvent = {
      target: {
        value: value + emojiObject.emoji,
      },
    } as ChangeEvent<HTMLInputElement>;

    onChange(emojiChangeEvent);
  };

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
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
            alt="Selected"
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
            type="text"
            placeholder="Add a caption..."
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
