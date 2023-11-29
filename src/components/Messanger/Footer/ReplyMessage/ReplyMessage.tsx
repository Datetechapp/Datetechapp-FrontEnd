import { FC } from 'react';
import { ReactComponent as Reply } from '../../../../assets/Messanger/ContextMenu/Answer.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/Messanger/ContextMenu/closeIcon.svg';
import css from './replyMessage.module.css';

interface ReplyMessageProps {
  text: string;
  setShowReplyMessage: () => void;
}

export const ReplyMessage: FC<ReplyMessageProps> = ({
  text,
  setShowReplyMessage,
}) => {
  return (
    <div className={css.replyMessageWrapper}>
      <div className={css.iconAntTextBlock}>
        <Reply />
        <div className={css.replyMessageText}>
          <p className={css.titleForReplyMessage}>Reply to Michael</p>
          <p className={css.textForReplyMessage}>{text}</p>
        </div>
      </div>
      <CloseIcon className={css.closeIcon} onClick={setShowReplyMessage} />
    </div>
  );
};
