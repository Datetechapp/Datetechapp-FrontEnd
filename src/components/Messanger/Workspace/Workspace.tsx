import css from "./workspace.module.css";
import { useCallback, useState, useEffect, FC } from "react";
import { ModalForFixMessage, ModalForDeleteMessage, ModalForForwardMessage, Message, EmojiComponent, PinnedMessage } from ".";

interface Message {
       id: string;
       text: string;
       isMe: boolean;
       timestamp: string;
       showPhoto: boolean;
       isPinned: boolean;
}

interface WorkspaceProps {
       setSelectedMessageText: any;
       setShowReplyMessage: any;
       selectedMessageText: string;

}


const messagesArr: Message[] = [
       { id: "1", text: 'Hi! You have a cool video.', isMe: false, timestamp: '12:30 PM', showPhoto: false, isPinned: false },
       { id: "2", text: "Hi!Thanks. I'm very pleased.", isMe: true, timestamp: '12:31 PM', showPhoto: false, isPinned: false },
       { id: "3", text: 'I would like to meet you.', isMe: false, timestamp: '12:35 PM', showPhoto: false, isPinned: false },
       { id: "4", text: "but I'm very tired today", isMe: false, timestamp: '12:36 PM', showPhoto: false, isPinned: false },
       { id: "5", text: "i will write to you tomorrow..", isMe: false, timestamp: '12:40 PM', showPhoto: false, isPinned: false },
]

export const Workspace: FC<WorkspaceProps> = ({ setSelectedMessageText, setShowReplyMessage, selectedMessageText }: WorkspaceProps) => {
       const [messages, setMessages] = useState<Message[]>(messagesArr);
       const [showContextMenu, setShowContextMenu] = useState(false);
       const [showSmileyMenu, setShowSmileyMenu] = useState(false);
       const [selectedMessageId, setSelectedMessageId] = useState('');
       const [showModalFix, setShowModalFix] = useState(false);
       const [showModalForward, setShowModalForward] = useState(false);
       const [showModalDelete, setShowModalDelete] = useState(false);
       const [pinnedMessages, setPinnedMessages] = useState<Message[]>([]);
       const [currentPinnedMessageIndex, setCurrentPinnedMessageIndex] = useState(0);

       const handleShowModal = useCallback(() => {
              document.body.style.overflow = "hidden";
              setShowModalFix(true);
       }, []);

       const handleShowModalForward = useCallback(() => {
              document.body.style.overflow = "hidden";
              setShowModalForward(true);
       }, [])

       const handleShowModalDelete = useCallback(() => {
              document.body.style.overflow = "hidden";
              setShowModalDelete(true);
       }, [])

       const togglePinnedMessage = () => {
              if (pinnedMessages.length > 0) {
                     setCurrentPinnedMessageIndex((prevIndex) => (prevIndex + 1) % pinnedMessages.length);
              }
       };

       const handlePinnedMessage = useCallback((messageId: string) => {
              const messageToPin = messagesArr.find(message => message.id === messageId);

              if (messageToPin) {
                     setPinnedMessages([...pinnedMessages, { ...messageToPin, isPinned: true }]);
              }
       }, [messages, pinnedMessages]);

       const handleUnpinnedMessage = useCallback(
              (messageId: string) => {
                     const newPinnedMessages = pinnedMessages.filter(
                            (message) => message.id !== messageId
                     );
                     setPinnedMessages(newPinnedMessages);

                     const removedMessageIndex = pinnedMessages.findIndex(
                            (message) => message.id === messageId
                     );

                     if (currentPinnedMessageIndex >= removedMessageIndex) {
                            setCurrentPinnedMessageIndex(
                                   (prevIndex) => Math.max(prevIndex - 1, 0)
                            );
                     }
              },
              [pinnedMessages]
       );

       const handleNotShowModal = useCallback(() => {
              document.body.style.overflow = "unset";
              setShowModalFix(false);
              setShowModalDelete(false);
              setShowModalForward(false);
       }, []);


       const handleContextMenu = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>, messageId: string) => {
              event.preventDefault();
              setSelectedMessageId(messageId);
              setShowContextMenu(true);
              setShowSmileyMenu(true);
              setShowReplyMessage(false);
       }, []);

       const handleContextMenuAction = (text: string) => {
              setShowContextMenu(false);
              setShowSmileyMenu(false);
              const messageToUnpin = messagesArr.find(message => message.id === selectedMessageId);
              if (text === "To fix") {
                     handleShowModal();
              } else if (text === "Unfix" && messageToUnpin) {
                     handleUnpinnedMessage(selectedMessageId);
              } else if (text === "Forward") {
                     handleShowModalForward();
              }
              else if (text === "Answer") {
                     setShowReplyMessage(true);
                     setSelectedMessageId("");
              } else if (text === "Copy") {
                     navigator.clipboard.writeText(selectedMessageText);
                     setSelectedMessageId("");
              } else if (text === "Delete") {
                     handleShowModalDelete()
              }
       };



       useEffect(() => {
              const updatedMessages = messages.map((message, index) => {
                     if (!message.isMe && (index === 0 || messages[index - 1].isMe)) {
                            return { ...message, showPhoto: true };
                     } else {
                            return { ...message, showPhoto: false };
                     }
              });
              setMessages(updatedMessages);
       }, []);

       return (
              <>
                     {pinnedMessages.length > 0 && (
                            <div onClick={togglePinnedMessage} className={css.pinnedMessagesContainer}>
                                   <div className={css.indicatorContainer}>
                                          {pinnedMessages.map((pinnedMessage, index) => (
                                                 <div
                                                        className={`${css.indicator} ${index === currentPinnedMessageIndex ? css.active : ''
                                                               }`}
                                                        key={pinnedMessage.id}
                                                        onClick={() => setCurrentPinnedMessageIndex(index)}
                                                 ></div>
                                          ))}
                                   </div>
                                   <PinnedMessage text={pinnedMessages[currentPinnedMessageIndex]?.text} />
                            </div>
                     )}

                     <div className={css.workspaceWrapper}>
                            <div className={css.messagesContainer}>
                                   {messages.map((message) => (
                                          <div key={message.id}>
                                                 {showSmileyMenu && selectedMessageId === message.id && (
                                                        <EmojiComponent isMe={message.isMe} />
                                                 )}

                                                 <Message
                                                        id={message.id}
                                                        text={message.text}
                                                        isMe={message.isMe}
                                                        timestamp={message.timestamp}
                                                        showPhoto={message.showPhoto}
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
              </>
       );
};




























