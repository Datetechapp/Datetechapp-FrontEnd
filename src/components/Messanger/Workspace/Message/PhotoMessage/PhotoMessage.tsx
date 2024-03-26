import { ReactComponent as PinnedIcon } from '../../../../../assets/Messanger/iconForPinnedMessage.svg';

import css from './photoMessage.module.css';

type PhotoMessageProps = {
  id: string;
  timestamp: string;
  isMe: boolean;
  text: string;
  data: string[];
  isPinned: boolean;
};

export const PhotoMessage = ({
  id,
  timestamp,
  isMe,
  text,
  data,
  isPinned,
}: PhotoMessageProps) => {
  return (
    <div className={isMe ? css.wrapperMe : css.wrapperOther}>
      <div className={css.imageBlock}>
        {data.map((src) => (
          <img key={src} src={src} className={css.image} alt="" />
        ))}
        {/* <p className={css.messageText}>{text}</p>
        {isPinned && <PinnedIcon className={css.pinnedIcon} />}
        <span className={css.messageTimestampt}>{timestamp}</span> */}
      </div>
    </div>
  );
};
