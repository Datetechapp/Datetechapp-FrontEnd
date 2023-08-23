import css from "./workspace.module.css";
import { useCallback, useState, useEffect, FC } from "react";
import { v4 as uuid } from "uuid";
import { ModalForFixMessage } from "./ModalForFixMessage";
import { Message } from "./Message/Message";
import { EmojiComponent } from "./EmojiComponent";
import { PinnedMessage } from "./PinnedMessage";

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
       const [scrollPosition, setScrollPosition] = useState(0);
       const [pinnedMessages, setPinnedMessages] = useState<Message[]>([]);

       const handleShowModal = useCallback(() => {
              setScrollPosition(window.scrollY);
              document.body.style.overflow = "hidden";
              setShowModalFix(true);
       }, []);

       const handlePinnedMessage = useCallback((messageId: string) => {
              const messageToPin = messagesArr.find(message => message.id === messageId);
              console.log(messageToPin, messageId,);

              if (messageToPin) {
                     setPinnedMessages([...pinnedMessages, messageToPin]);
              }
       }, [messages, pinnedMessages]);


       const handleNotShowModal = useCallback(() => {
              window.scrollTo(0, scrollPosition)
              document.body.style.overflow = "unset";
              setShowModalFix(false);
       }, [scrollPosition]);


       const handleContextMenu = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>, messageId: string) => {
              event.preventDefault();
              setSelectedMessageId(messageId);
              setShowContextMenu(true);
              setShowSmileyMenu(true);
              setShowReplyMessage(false)
       }, []);

       const handleContextMenuAction = (text: string) => {
              setShowContextMenu(false);
              setShowSmileyMenu(false);
              if (text === "To fix") {
                     handleShowModal();
              } else if (text === "Answer") {
                     setShowReplyMessage(true);
                     setSelectedMessageId("");
              } else if (text === "Copy") {
                     navigator.clipboard.writeText(selectedMessageText);
                     setSelectedMessageId("");
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
                     <div className={css.workspaceWrapper}>
                            <div className={css.pinnedMessagesContainer}>
                                   {pinnedMessages.map((message) => (
                                          <PinnedMessage key={message.id} text={message.text} />
                                   ))}
                            </div>
                            {messages.map((message) => (


                                   <div key={message.id}>
                                          {showSmileyMenu && selectedMessageId === message.id && (
                                                 <EmojiComponent />
                                          )}

                                          <Message
                                                 id={message.id}
                                                 text={message.text}
                                                 isMe={message.isMe}
                                                 timestamp={message.timestamp}
                                                 showPhoto={message.showPhoto}
                                                 isSelected={showContextMenu && selectedMessageId === message.id}
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
                     </div >
                     <ModalForFixMessage
                            isOpen={showModalFix}
                            onRequestClose={handleNotShowModal}
                            onRequestPinned={handlePinnedMessage}
                            selectedMessageId={selectedMessageId}
                     />
              </>
       );
};




























