import { UploadButton } from 'components/pages/Questionnaire/UploadButton';
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
  const [files, setFiles] = useState<File[] | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordedBlob, setIsRecordedBlob] = useState(false);

  const recorderControls = useVoiceVisualizer();

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setMessage(target.value);

  const handleUploadFile = (files: File[]) => setFiles(files);

  const handleCloseModal = () => setFiles(null);

  return (
    <div className={css.blockForReplyMessage}>
      {files && (
        <ModalClipElements
          message={message}
          files={files}
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
            <EmojiIcon className={css.emojiIcon} />
          )}
          <div className={css.recordingAudioBlock}>
            <RecordingAudio
              setIsRecording={setIsRecording}
              // setMessage={setMessage}
              setIsRecordedBlob={setIsRecordedBlob}
            />
          </div>
          {!isRecording && !isRecordedBlob && (
            <UploadButton
              icon={<Clip className={css.clipIcon} />}
              onUpload={handleUploadFile}
              inputId="clipUpload"
              accept="image/*"
              multiple
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
