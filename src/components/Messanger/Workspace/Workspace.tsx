import css from './workspace.module.css';
import React, { useCallback, useState, FC } from 'react';
import { AudioPlayer } from './AudioPlayer/AudioPlayer';
import { ModalForFixMessage, ModalForDeleteMessage, ModalForForwardMessage, Message, EmojiComponent, PinnedMessage, SearchMessages } from '.';

export interface MessageProps {
  id: string;
  text: string;
  isMe: boolean;
  timestamp: string;
  isPinned: boolean;
}

interface WorkspaceProps {
  setSelectedMessageText: React.Dispatch<React.SetStateAction<string>>;
  setShowReplyMessage: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMessageText: string;
  showSearchMessages: boolean;
  showReplyMessage: boolean;
  setShowSearchMessages: React.Dispatch<React.SetStateAction<boolean>>;
}

const messagesArr: MessageProps[] = [
  { id: '0', text: 'Hi! You have a cool video.Djfsdghvj fsjafhvdj shzj,chznm dzM<Fcnvm cn,zfmvn ja,mfdncm ,samfhznkjm k,jamshdzvn dsgkjvlx nxsvmn j,m n a,sxzmvn ,m anvjcz,mxn', isMe: false, timestamp: '12:30', isPinned: false },
  { id: '1', text: 'Hi!Thanks. I\'m very pleased.', isMe: true, timestamp: '12:31', isPinned: false },
  { id: '2', text: 'I would like to meet you.', isMe: false, timestamp: '12:35', isPinned: false },
  { id: '3', text: 'but I\'m very tired today', isMe: false, timestamp: '12:36', isPinned: false },
  { id: '4', text: 'i will write to you tomorrow..', isMe: false, timestamp: '12:40', isPinned: false },
];

export const Workspace: FC<WorkspaceProps> = ({ setSelectedMessageText, showReplyMessage, setShowReplyMessage, selectedMessageText, showSearchMessages, setShowSearchMessages }: WorkspaceProps) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [showSmileyMenu, setShowSmileyMenu] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState('');
  const [showModalFix, setShowModalFix] = useState(false);
  const [showModalForward, setShowModalForward] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [pinnedMessages, setPinnedMessages] = useState<MessageProps[]>([]);
  const [currentPinnedMessageIndex, setCurrentPinnedMessageIndex] = useState(0);

  const [highlighted, setHighlighted] = useState(false);

  const handleShowModal = useCallback((action: string) => {
    document.body.style.overflow = 'hidden';
    action === 'To fix' ? setShowModalFix(true) :
      action === 'Forward' ? setShowModalForward(true) :
        setShowModalDelete(true);
  }, []);

  const togglePinnedMessage = () => {
    if (pinnedMessages.length > 0) {
      setCurrentPinnedMessageIndex((prevIndex) => (prevIndex + 1) % pinnedMessages.length);

      const selectedMessage = messagesArr.find((message) => message.id === selectedMessageId);
      setHighlighted(selectedMessage?.id === selectedMessageId);
    }
  };

  const handlePinnedMessage = useCallback(
    (messageId: string) => {
      const messageToPin = messagesArr.find(
        (message) => message.id === messageId,
      );

      if (messageToPin) {
        setPinnedMessages([
          ...pinnedMessages,
          { ...messageToPin, isPinned: true },
        ]);
      }
    },
    [messagesArr, pinnedMessages],
  );

  const handleUnpinnedMessage = useCallback(
    (messageId: string) => {
      const newPinnedMessages = pinnedMessages.filter(
        (message) => message.id !== messageId,
      );

      setPinnedMessages(newPinnedMessages);

      const removedMessageIndex = pinnedMessages.findIndex(
        (message) => message.id === messageId,
      );

      if (currentPinnedMessageIndex >= removedMessageIndex) {
        setCurrentPinnedMessageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    },
    [pinnedMessages],
  );

  const handleNotShowModal = useCallback(() => {
    document.body.style.overflow = 'unset';
    setShowModalFix(false);
    setShowModalDelete(false);
    setShowModalForward(false);
  }, []);

  const handleContextMenu = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      messageId: string,
    ) => {
      event.preventDefault();
      setSelectedMessageId(messageId);
      setShowContextMenu(true);
      setShowSmileyMenu(true);
      setShowReplyMessage(false);
    },
    [],
  );

  const handleContextMenuAction = (text: string) => {
    setShowContextMenu(false);
    setShowSmileyMenu(false);
    if (text === 'To fix' || text === 'Unfix') {
      handleShowModal('To fix');
    } else if (text === 'Forward') {
      handleShowModal('Forward');
    }
    else if (text === 'Answer') {
      setShowReplyMessage(true);
      setSelectedMessageId('');
    } else if (text === 'Copy') {
      navigator.clipboard.writeText(selectedMessageText);
      setSelectedMessageId('');
    } else if (text === 'Delete') {
      handleShowModal('Delete');
    }
  };

  return (
    <div className={!showReplyMessage ? css.workspaceWrapper : css.workspaceWithReplyWrapper}>
      <div className={css.headerWorkspace}>
      <AudioPlayer />
      {showSearchMessages && <SearchMessages setShowSearchMessages={setShowSearchMessages} />}
      {pinnedMessages.length > 0 && (
        <PinnedMessage
          togglePinnedMessage={togglePinnedMessage}
          currentPinnedMessageIndex={currentPinnedMessageIndex}
          setCurrentPinnedMessageIndex={setCurrentPinnedMessageIndex}
          pinnedMessages={pinnedMessages}
          setPinnedMessages={setPinnedMessages}
          text={pinnedMessages[currentPinnedMessageIndex]?.text}
        />
      )}

      </div>
      <div className={css.workspaceContainer}>

        <div className={css.messagesContainer}>
          <p className={css.dateOfMessages}>25 May 2023</p>
          {messagesArr.map((message) => (
            <div key={message.id}>
              {showSmileyMenu && selectedMessageId === message.id && (
                <EmojiComponent isMe={message.isMe} />
              )}

              <Message
                currentPinnedMessageIndex={currentPinnedMessageIndex}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
                id={message.id}
                text={message.text}
                isMe={message.isMe}
                timestamp={message.timestamp}
                isSelected={showContextMenu && selectedMessageId === message.id}
                isPinned={pinnedMessages.some(
                  (pinnedMessage) => pinnedMessage.id === message.id
                )}
                onContextMenu={(event) => {
                  if (event) {
                    setSelectedMessageText(message.text);
                    handleContextMenu(event, message.id);
                  }
                }}
                onContextMenuAction={handleContextMenuAction}
              />
            </div>
          ))}
        </div>
      </div >
      <ModalForFixMessage
        isOpen={showModalFix}
        onRequestClose={handleNotShowModal}
        onRequestPinned={handlePinnedMessage}
        selectedMessageId={selectedMessageId}
        isPinned={pinnedMessages.some((pinnedMessage) => pinnedMessage.id === selectedMessageId)}
        handleUnpinnedMessage={handleUnpinnedMessage}
      />
      <ModalForForwardMessage
        isOpen={showModalForward}
        onRequestClose={handleNotShowModal}
        selectedMessageId={selectedMessageId}
      />
      <ModalForDeleteMessage
        isOpen={showModalDelete}
        onRequestClose={handleNotShowModal}
        onRequestDelete={handleNotShowModal}
        selectedMessageId={selectedMessageId}
      />
    </div>
  );
};
