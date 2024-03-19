import css from './footer.module.css';
import { Input } from '../../common/input';
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ReactComponent as EmojiIcon } from '../../../assets/Messanger/emojiIcon.svg';
import { ReactComponent as Clip } from '../../../assets/Messanger/Clip.svg';
import { ReplyMessage } from './ReplyMessage';
import { UploadButton } from 'components/pages/Questionnaire/UploadButton';
import { ModalClipElements } from './ModalClipElements';
import { RecordingAudio } from './RecordingAudio/RecordingAudio';

type FooterProps = {
  selectedMessageText: string;
  showReplyMessage: boolean;
  onShowReplyMessage: () => void;
  setBlobSrc: Dispatch<SetStateAction<string>>;
};

export const Footer = ({
  selectedMessageText,
  showReplyMessage,
  onShowReplyMessage,
  setBlobSrc,
}: FooterProps) => {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordedBlob, setIsRecordedBlob] = useState(false);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value);
  };

  const handleUploadFile = (file: File) => setSelectedFile(file);

  const handleCloseSelectedImage = () => {
    setSelectedFile(null);
  };

  const handleCloseModal = () => setSelectedFile(null);

  return (
    <div className={css.blockForReplyMessage}>
      {selectedFile && (
        <div className={css.clipElementsWrapper}>
          <ModalClipElements
            file={selectedFile}
            onClose={handleCloseModal}
            setMessage={setMessage}
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
            <EmojiIcon className={css.emojiIcon} />
          )}
          <div className={css.recordingAudioBlock}>
            <RecordingAudio
              setIsRecording={setIsRecording}
              // setMessageValue={setMessageValue}
              setIsRecordedBlob={setIsRecordedBlob}
              setBlobSrc={setBlobSrc}
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
