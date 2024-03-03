import { UploadButton } from 'components/pages/Questionnaire/UploadButton';
import EmojiPicker from 'emoji-picker-react';
import { useState, type ChangeEvent } from 'react';
import { useVoiceVisualizer } from 'react-voice-visualizer';
import { ReactComponent as Clip } from '../../../assets/Messanger/Clip.svg';
import { ReactComponent as EmojiIcon } from '../../../assets/Messanger/emojiIcon.svg';
import { Input } from '../../common/input';
import { ModalClipElements } from './ModalClipElements';
import { RecordingAudio } from './RecordingAudio/RecordingAudio';
import { ReplyMessage } from './ReplyMessage';

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
  const [messageValue, setMessageValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordedBlob, setIsRecordedBlob] = useState(false);

  const recorderControls = useVoiceVisualizer();

  const handleTogglePicker = () => setShowPicker(!showPicker);

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setMessageValue(messageValue + emojiObject.emoji);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(target.value);
  };

  const handleUploadFile = (file: File) => setSelectedFile(file);

  const handleCloseModal = () => setSelectedFile(null);

  return (
    <div>
      <div className={css.blockForReplyMessage}>
        {selectedFile && (
          <div className={css.clipElementsWrapper} onClick={handleCloseModal}>
            <ModalClipElements
              file={selectedFile}
              onClose={handleCloseModal}
              onChange={handleInputChange}
            />
          </div>
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
              <EmojiIcon
                className={css.emojiIcon}
                onClick={handleTogglePicker}
              />
            )}
            <div className={css.recordingAudioBlock}>
              <RecordingAudio
                setIsRecording={setIsRecording}
                // setMessageValue={setMessageValue}
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
            value={messageValue}
            onChange={handleInputChange}
            readOnly={isRecordedBlob || isRecording}
          />
        </div>
      </div>
    </div>
  );
};
