import {
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

import { AudioPlayer } from './AudioPlayer/AudioPlayer';
import {
  EmojiComponent,
  Message,
  ModalForDeleteMessage,
  ModalForFixMessage,
  ModalForForwardMessage,
  PinnedMessage,
  SearchMessages,
} from '.';
import { useAppSelector } from 'hooks/hooks';
import { getAudioInfo } from 'store/audioInfo/selectors';
import css from './workspace.module.css';

export interface MessageProps {
  id: string;
  type: string;
  text: string;
  isMe: boolean;
  timestamp: string;
  isPinned: boolean;
  blob?: string;
  data?: string[];
}

interface WorkspaceProps {
  setSelectedMessageText: Dispatch<SetStateAction<string>>;
  setShowReplyMessage: Dispatch<SetStateAction<boolean>>;
  selectedMessageText: string;
  showSearchMessages: boolean;
  showReplyMessage: boolean;
  setShowSearchMessages: Dispatch<SetStateAction<boolean>>;
}

const photos = [
  new URL('../../../assets/photos/amar-preciado.jpg', import.meta.url).href,
  new URL('../../../assets/photos/arun-thomas.jpg', import.meta.url).href,
  new URL('../../../assets/photos/dids.jpg', import.meta.url).href,
  new URL('../../../assets/photos/evgeniy-petkevich.jpg', import.meta.url).href,
  new URL('../../../assets/photos/francesco-ungaro.jpg', import.meta.url).href,
  new URL('../../../assets/photos/jordan-rushton.jpg', import.meta.url).href,
  new URL('../../../assets/photos/michael-king.jpg', import.meta.url).href,
  new URL('../../../assets/photos/mike-kit.jpg', import.meta.url).href,
  new URL('../../../assets/photos/mohan-nannapaneni.jpg', import.meta.url).href,
  new URL('../../../assets/photos/nubia-navarro.jpg', import.meta.url).href,
  new URL('../../../assets/photos/pixabay-158725.jpg', import.meta.url).href,
  new URL('../../../assets/photos/pixabay-162140.jpg', import.meta.url).href,
  new URL('../../../assets/photos/pixabay-40803.jpg', import.meta.url).href,
  new URL('../../../assets/photos/pixabay-416179.jpg', import.meta.url).href,
  new URL('../../../assets/photos/pixabay-458976.jpg', import.meta.url).href,
];

const messagesArr: MessageProps[] = [
  {
    id: '0',
    type: 'text',
    text: 'Hi! You have a cool video.Djfsdghvj fsjafhvdj shzj,chznm dzM<Fcnvm cn,zfmvn ja,mfdncm ,samfhznkjm k,jamshdzvn dsgkjvlx nxsvmn j,m n a,sxzmvn ,m anvjcz,mxn',
    isMe: false,
    timestamp: '12:30',
    isPinned: false,
  },
  {
    id: '1',
    type: 'text',
    text: "Hi!Thanks. I'm very pleased.",
    isMe: true,
    timestamp: '12:31',
    isPinned: false,
  },
  {
    id: '2',
    type: 'text',
    text: 'I would like to meet you.',
    isMe: false,
    timestamp: '12:35',
    isPinned: false,
  },
  {
    id: '3',
    type: 'text',
    text: "but I'm very tired today",
    isMe: false,
    timestamp: '12:36',
    isPinned: false,
  },
  {
    id: '4',
    type: 'text',
    text: 'i will write to you tomorrow..',
    isMe: false,
    timestamp: '12:40',
    isPinned: false,
  },
  {
    id: '5',
    type: 'audio',
    blob: 'blob:http://localhost:3000/b87f9df3-5b7b-4fde-9b15-0a6c49aa4aca',
    text: '',
    isMe: true,
    timestamp: '12:40',
    isPinned: false,
  },
  {
    id: '6',
    type: 'audio',
    blob: 'blob:http://localhost:3000/8f163ac5-141d-4f1f-9821-91685a62725a',
    text: '',
    isMe: false,
    timestamp: '12:40',
    isPinned: false,
  },
  {
    id: '7',
    type: 'photo',
    data: photos.slice(Math.random() * 5, Math.random() * photos.length + 5),
    text: 'The text is displayed here ...',
    isMe: false,
    timestamp: '12:45',
    isPinned: false,
  },
  {
    id: '8',
    type: 'photo',
    data: photos.slice(Math.random() * 5, Math.random() * photos.length + 5),
    text: 'The text is displayed here ...',
    isMe: true,
    timestamp: '12:50',
    isPinned: false,
  },
];

export const Workspace = ({
  setSelectedMessageText,
  showReplyMessage,
  setShowReplyMessage,
  selectedMessageText,
  showSearchMessages,
  setShowSearchMessages,
}: WorkspaceProps) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [showSmileyMenu, setShowSmileyMenu] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState('');
  const [showModalFix, setShowModalFix] = useState(false);
  const [showModalForward, setShowModalForward] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [pinnedMessages, setPinnedMessages] = useState<MessageProps[]>([]);
  const [highlighted, setHighlighted] = useState(false);
  const [currentPinnedMessageIndex, setCurrentPinnedMessageIndex] = useState(0);
  const { isPinned } = useAppSelector(getAudioInfo);

  const handleShowModal = useCallback((action: string) => {
    document.body.style.overflow = 'hidden';
    action === 'To fix'
      ? setShowModalFix(true)
      : action === 'Forward'
      ? setShowModalForward(true)
      : setShowModalDelete(true);
  }, []);

  const togglePinnedMessage = () => {
    if (pinnedMessages?.length) {
      setCurrentPinnedMessageIndex(
        (prevIndex) => (prevIndex + 1) % pinnedMessages.length,
      );

      const selectedMessage = messagesArr.find(
        (message) => message.id === selectedMessageId,
      );

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
    (event: MouseEvent, messageId: string) => {
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
    } else if (text === 'Answer') {
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
    <div
      className={
        !showReplyMessage ? css.workspaceWrapper : css.workspaceWithReplyWrapper
      }
    >
      <div className={css.headerWorkspace}>
        {isPinned && <AudioPlayer />}

        {showSearchMessages && (
          <SearchMessages setShowSearchMessages={setShowSearchMessages} />
        )}
        {!!pinnedMessages?.length && (
          <PinnedMessage
            togglePinnedMessage={togglePinnedMessage}
            currentPinnedMessageIndex={currentPinnedMessageIndex}
            setCurrentPinnedMessageIndex={setCurrentPinnedMessageIndex}
            pinnedMessages={pinnedMessages}
            setPinnedMessages={setPinnedMessages}
            text={
              pinnedMessages[currentPinnedMessageIndex]?.text || 'Voice Message'
            }
          />
        )}
      </div>
      <div className={css.workspaceContainer}>
        <div className={css.messagesContainer}>
          <p className={css.dateOfMessages}>25 May 2023</p>
          {messagesArr.map((message) => (
            <Fragment key={message.id}>
              {showSmileyMenu && selectedMessageId === message.id && (
                <EmojiComponent isMe={message.isMe} />
              )}
              <Message
                currentPinnedMessageIndex={currentPinnedMessageIndex}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
                id={message.id}
                blob={message.blob}
                data={message.data}
                type={message.type}
                text={message.text}
                isMe={message.isMe}
                timestamp={message.timestamp}
                isSelected={showContextMenu && selectedMessageId === message.id}
                isPinned={pinnedMessages.some(
                  (pinnedMessage) => pinnedMessage.id === message.id,
                )}
                onContextMenu={(event) => {
                  setSelectedMessageText(message.text);
                  handleContextMenu(event, message.id);
                }}
                onContextMenuAction={handleContextMenuAction}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <ModalForFixMessage
        isOpen={showModalFix}
        onRequestClose={handleNotShowModal}
        onRequestPinned={handlePinnedMessage}
        selectedMessageId={selectedMessageId}
        isPinned={pinnedMessages.some(
          (pinnedMessage) => pinnedMessage.id === selectedMessageId,
        )}
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
