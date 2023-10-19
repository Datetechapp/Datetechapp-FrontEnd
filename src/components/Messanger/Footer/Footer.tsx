import { useState, FC, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { UploadButton } from 'components/pages/Questionnaire/UploadButton';
import css from './footer.module.css';
import { Input } from '../../common/input';
import { ReactComponent as EmojiIcon } from '../../../assets/Messanger/emojiIcon.svg';
import { ReactComponent as Microphone } from '../../../assets/Messanger/Microphone.svg';
import { ReactComponent as Clip } from '../../../assets/Messanger/Clip.svg';
import { ReplyMessage } from './ReplyMessage';
import { ModalClipElements } from './ModalClipElements';

interface FooterProps {
  selectedMessageText: string;
  showReplyMessage: boolean;
  onShowReplyMessage: () => void;
}

export const Footer: FC<FooterProps> = ({
  selectedMessageText,
  showReplyMessage,
  onShowReplyMessage,
}) => {
  const [messageValue, setMessageValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleTogglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiClick = (event: any, emojiObject: any) => {
    setMessageValue(messageValue + event.emoji);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;

    setMessageValue(newMessage);
  };

  const handleUploadFile = (file: File) => {
    setSelectedFile(file);
    console.log('Загруженный файл:', file);
  };

  const handleCloseSelectedImage = () => {
    setSelectedFile(null);
  };

  return (
    <div className={css.blockForReplyMessage}>
      {selectedFile && (
        <div className={css.clipElementsWrapper}>
          <ModalClipElements
            file={selectedFile}
            onClose={handleCloseSelectedImage}
            value={messageValue}
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className={css.fieldForMessageWrapper}>
        {showReplyMessage && (
          <ReplyMessage
            text={selectedMessageText}
            setShowReplyMessage={() => onShowReplyMessage()}
          />
        )}
        <div className={css.iconsWrapper}>
          <EmojiIcon className={css.emojiIcon} onClick={handleTogglePicker} />
          <Microphone className={css.microphoneIcon} />
          <UploadButton
            icon={<Clip className={css.clipIcon} />}
            onUpload={handleUploadFile}
            inputId="clipUpload"
            accept="image/*"
          />
        </div>
        {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <Input
          className={css.fieldForMessage}
          type="text"
          placeholder="Message..."
          value={messageValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
