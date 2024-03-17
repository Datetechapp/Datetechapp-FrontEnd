import React, { useEffect, useState } from 'react';
import css from './message.module.css';
import { ReactComponent as PinnedIcon } from '../../../../assets/Messanger/iconForPinnedMessage.svg';
import { ContextMenu } from '../ContextMenu';
import { message } from 'antd';
import { AudioMessageContent } from './AudioMessageContent';

export interface MessageProps {
  id: string;
  text: string;
  blob?: string;
  type: string;
  isMe: boolean;
  timestamp: string;
  isSelected: boolean;
  isPinned: boolean;
  onContextMenu: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    messageId: string,
  ) => void;
  onContextMenuAction: (text: string) => void;
  currentPinnedMessageIndex: number;
  setHighlighted: React.Dispatch<React.SetStateAction<boolean>>;
  highlighted: boolean;
}

export const Message: React.FC<MessageProps> = ({
  id,
  text,
  blob,
  type,
  isMe,
  timestamp,
  isSelected,
  onContextMenu,
  onContextMenuAction,
  isPinned,
  currentPinnedMessageIndex,
  setHighlighted,
  highlighted,
}) => {
  useEffect(() => {
    if (highlighted) {
      const timer = setTimeout(() => {
        setHighlighted(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [highlighted]);

  return (
    <div
      className={`${isMe ? css.me : css.other} ${
        isSelected ? css.selectedBlockMessage : ''
      } ${
        currentPinnedMessageIndex.toString() === id && highlighted
          ? css.highlighted
          : ''
      }`}
    >
      <div>
        <div
          className={`${isMe ? css.messageInfoMe : css.messageInfoOther} ${
            isSelected ? css.selectedMessage : ''
          }`}
          onContextMenu={(event) => onContextMenu(event, id)}
        >
          {type === 'audio' && blob ? (
            <AudioMessageContent
              audioRef={{ current: null }}
              timestamp={timestamp}
              isPinned={isPinned}
              blob={blob}
              id={id}
            />
          ) : (
            <>
              <p className={css.messageText}>{text}</p>

              <div className={css.messageInfo}>
                {isPinned && <PinnedIcon className={css.pinnedIcon} />}
                <span className={css.messageTimestampt}>{timestamp}</span>
              </div>
            </>
          )}
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
