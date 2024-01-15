import EmojiPicker from 'emoji-picker-react';
import { useCallback, useState, FC } from 'react';
import css from './emoji.module.css';
import { ReactComponent as EmojiArrow } from '../../../../assets/Messanger/EmojiArrow.svg';

interface EmojiComponentsProps {
  isMe: boolean;
}

export const EmojiComponent: FC<EmojiComponentsProps> = ({ isMe }) => {
  const [emojiBlockOpened, setEmojiBlockOpened] = useState(false);

  const handleEmojiClick = useCallback((_, emojiObject) => {
    console.log(emojiObject.srcElement);
  }, []);

  const handleEmojOpen = () => {
    setEmojiBlockOpened(!emojiBlockOpened);
  };

  return (
    <div className={`${css.emojiBlock} ${isMe ? css.emojiBlockForMe : ''}`}>
      <EmojiPicker onEmojiClick={handleEmojiClick} />

      <EmojiArrow className={css.arrowIcon} onClick={handleEmojOpen} />


    </div>
  );
};
