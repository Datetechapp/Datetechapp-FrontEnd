import css from "./footer.module.css"
import { Input } from "../../common/input"
import { useState, FC } from "react"
import { ReactComponent as EmojiIcon } from "../../../assets/Messanger/emojiIcon.svg"
import { ReactComponent as Microphone } from "../../../assets/Messanger/Microphone.svg"
import { ReactComponent as Clip } from "../../../assets/Messanger/Clip.svg"
import EmojiPicker from "emoji-picker-react";
import { ReplyMessage } from "./ReplyMessage"

interface FooterProps {
       selectedMessageText: string;
       showReplyMessage: boolean;
       onShowReplyMessage: () => void;
}


export const Footer: FC<FooterProps> = ({ selectedMessageText, showReplyMessage, onShowReplyMessage }) => {
       const [messageValue, setMessageValue] = useState("")
       const [showPicker, setShowPicker] = useState(false);
       const [showAttachment, setShowAttachment] = useState(false);

       const handleTogglePicker = () => {
              setShowPicker(!showPicker);
       };

       const handleAttachmentClick = () => {
              setShowAttachment(!showAttachment);
       };

       const handleEmojiClick = (event: any, emojiObject: any) => {
              setMessageValue(messageValue + emojiObject.emoji);
       };

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newMessage = e.target.value;
              setMessageValue(newMessage);
       };

       return (
              <div className={css.blockForReplyMessage}>


                     <div className={css.fieldForMessageWrapper}>
                            {showReplyMessage && <ReplyMessage text={selectedMessageText} setShowReplyMessage={() => onShowReplyMessage()} />}
                            <div className={css.iconsWrapper}>
                                   <EmojiIcon className={css.emojiIcon} onClick={handleTogglePicker} />
                                   <Microphone className={css.microphoneIcon} onClick={handleAttachmentClick} />
                                   <Clip className={css.clipIcon} />
                            </div>
                            {showPicker && (
                                   <EmojiPicker onEmojiClick={handleEmojiClick} />
                            )}
                            <Input
                                   className={css.fieldForMessage}
                                   type="text"
                                   placeholder="Message..."
                                   value={messageValue}
                                   onChange={handleInputChange} />
                     </div>
              </div>
       )
}