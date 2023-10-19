import React from 'react';
import css from './message.module.css';
import { ReactComponent as PinnedIcon } from '../../../../assets/Messanger/iconForPinnedMessage.svg';
import { ContextMenu } from '../ContextMenu';

export interface MessageProps {
  id: string;
  text: string;
  isMe: boolean;
  timestamp: string;
  isSelected: boolean;
  isPinned: boolean;
  onContextMenu: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    messageId: string,
  ) => void;
  onContextMenuAction: (text: string) => void;
}

export const Message: React.FC<MessageProps> = ({
  id,
  text,
  isMe,
  timestamp,
  isSelected,
  onContextMenu,
  onContextMenuAction,
  isPinned,
}) => {
  return (
    <div
      className={`${isMe ? css.me : css.other} ${
        isSelected ? css.selectedBlockMessage : ''
      } `}
    >
      <div>
        <div
          className={`${isMe ? css.messageInfoMe : css.messageInfoOther} ${
            isSelected ? css.selectedMessage : ''
          }`}
          onContextMenu={(event) => onContextMenu(event, id)}
        >
          <p className={css.messageText}>{text}</p>
          <div className={css.messageInfo}>
            {isPinned && <PinnedIcon className={css.pinnedIcon} />}
            <span className={css.messageTimestampt}>{timestamp}</span>
          </div>
        </div>
        <ContextMenu
          show={isSelected}
          isMe={isMe}
          isPinned={isPinned}
          onContextMenuAction={onContextMenuAction}
        />
      </div>
    </div>
  );
};
