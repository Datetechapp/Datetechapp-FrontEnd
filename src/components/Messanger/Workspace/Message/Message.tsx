import { Dispatch, SetStateAction, useEffect, type MouseEvent } from 'react';

import { AudioMessage, PhotoMessage } from '.';
import { ReactComponent as PinnedIcon } from '../../../../assets/Messanger/iconForPinnedMessage.svg';
import { ContextMenu } from '../ContextMenu';

import css from './message.module.css';

export interface MessageProps {
  id: string;
  text: string;
  blob?: string;
  data?: string[];
  type: string;
  isMe: boolean;
  timestamp: string;
  isSelected: boolean;
  isPinned: boolean;
  onContextMenu: (event: MouseEvent, messageId: string) => void;
  onContextMenuAction: (text: string) => void;
  currentPinnedMessageIndex: number;
  setHighlighted: Dispatch<SetStateAction<boolean>>;
  highlighted: boolean;
}

export const Message = ({
  id,
  text,
  blob,
  data,
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
}: MessageProps) => {
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
      <>
        <div
          className={`${isMe ? css.messageInfoMe : css.messageInfoOther} ${
            isSelected ? css.selectedMessage : ''
          }`}
          onContextMenu={(event) => onContextMenu(event, id)}
        >
          {type === 'text' && (
            <>
              <p className={css.messageText}>{text}</p>

              <div className={css.messageInfo}>
                {isPinned && <PinnedIcon className={css.pinnedIcon} />}
                <span className={css.messageTimestampt}>{timestamp}</span>
              </div>
            </>
          )}
          {type === 'audio' && blob && (
            <AudioMessage
              audioRef={{ current: null }}
              timestamp={timestamp}
              isPinned={isPinned}
              blob={blob}
              id={id}
            />
          )}
          {type === 'photo' && data && (
            <PhotoMessage
              id={id}
              timestamp={timestamp}
              isMe={isMe}
              text={text}
              data={data}
              isPinned={isPinned}
            />
          )}
        </div>
        <ContextMenu
          show={isSelected}
          isMe={isMe}
          isPinned={isPinned}
          onContextMenuAction={onContextMenuAction}
        />
      </>
    </div>
  );
};
