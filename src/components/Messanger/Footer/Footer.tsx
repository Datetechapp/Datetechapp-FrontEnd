import { UploadButton } from 'components/pages/Questionnaire/UploadButton';
import EmojiPicker from 'emoji-picker-react';
import { useState, type ChangeEvent } from 'react';
import { useVoiceVisualizer } from 'react-voice-visualizer';

import { Input } from '../../common/input';
import { ModalClipElements } from './ModalClipElements';
import { RecordingAudio } from './RecordingAudio/RecordingAudio';
import { ReplyMessage } from './ReplyMessage';

import { ReactComponent as Clip } from '../../../assets/Messanger/Clip.svg';
import { ReactComponent as EmojiIcon } from '../../../assets/Messanger/emojiIcon.svg';

import css from './footer.module.css';

type FooterProps = {
  selectedMessageText: string;
  showReplyMessage: boolean;
  onShowReplyMessage: () => void;
};

export const Footer = ({
  selectedMessageText,
  showReplyMessage,
  onShowReplyMessage,
}: FooterProps) => {
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordedBlob, setIsRecordedBlob] = useState(false);

  const recorderControls = useVoiceVisualizer();

  const handleTogglePicker = () => setShowPicker(!showPicker);

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setMessage(message + emojiObject.emoji);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value);
  };

  const handleUploadFile = (file: File) => setSelectedFile(file);

  const handleCloseModal = () => setSelectedFile(null);

  return (
    <div className={css.blockForReplyMessage}>
      {selectedFile && (
        <ModalClipElements
          file={selectedFile}
          onClose={handleCloseModal}
          setMessage={setMessage}
        />
      )}
      <div
        className={
          !showReplyMessage
            ? css.fieldForMessageWrapper
            : css.fieldForMessageWrapperWithReply
        }
      >
        {showReplyMessage && (
          <ReplyMessage
            text={selectedMessageText}
            setShowReplyMessage={() => onShowReplyMessage()}
          />
        )}
        <div className={css.iconsWrapper}>
          {!isRecording && !isRecordedBlob && (
            <EmojiIcon className={css.emojiIcon} onClick={handleTogglePicker} />
          )}
          <div className={css.recordingAudioBlock}>
            <RecordingAudio
              setIsRecording={setIsRecording}
              // setMessageValue={setMessage}
              setIsRecordedBlob={setIsRecordedBlob}
            />
          </div>
          {!isRecording && !isRecordedBlob && (
            <UploadButton
              icon={<Clip className={css.clipIcon} />}
              onUpload={handleUploadFile}
              inputId="clipUpload"
              accept="image/*"
            />
          )}
        </div>
        {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <Input
          className={
            !isRecording && !isRecordedBlob
              ? css.fieldForMessage
              : !isRecording && isRecordedBlob
              ? css.fieldWithBlob
              : css.fieldForRecording
          }
          type="text"
          placeholder={isRecordedBlob || isRecording ? '' : 'Message...'}
          value={message}
          onChange={handleInputChange}
          readOnly={isRecordedBlob || isRecording}
        />
      </div>
    </div>
  );
};
