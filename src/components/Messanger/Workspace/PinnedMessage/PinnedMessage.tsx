import { FC, Dispatch, SetStateAction } from "react"
import css from "./pinnedMessage.module.css"
import { ReactComponent as IconPin } from "../../../../assets/Messanger/IconPin.svg"
import { ReactComponent as CloseIcon } from "../../../../assets/Messanger/iconForOnePinnedMessage.svg"
import { Message } from "../Workspace"


interface PinnedMessageProps {
       text: string;
       onClick?: () => void;
       togglePinnedMessage: () => void;
       pinnedMessages: Message[];
       setPinnedMessages: Dispatch<SetStateAction<Message[]>>;
       currentPinnedMessageIndex: number;
       setCurrentPinnedMessageIndex: Dispatch<SetStateAction<number>>;
}

export const PinnedMessage: FC<PinnedMessageProps> = ({ text, onClick, pinnedMessages, setPinnedMessages, setCurrentPinnedMessageIndex, currentPinnedMessageIndex, togglePinnedMessage }) => {
       return (
              <>
                     <div onClick={() => togglePinnedMessage()} className={css.pinnedMessagesContainer}>
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
                            <div className={css.pinnedMessageWrapper} onClick={onClick}>
                                   <p className={css.description}>Pinned Message</p>
                                   <p className={css.pinnedMessage}>{text}</p>
                            </div>
                     
                                   {pinnedMessages.length === 1 ? <CloseIcon onClick={() => setPinnedMessages([])}/> : <IconPin />}
                           
                     </div>

              </>
       )
}