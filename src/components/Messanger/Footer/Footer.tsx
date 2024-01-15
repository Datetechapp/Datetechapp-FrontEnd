import css from './footer.module.css';
import { Input, Button } from '../../common';
import React, { useState, FC, useRef, useEffect } from 'react';
import { ReactComponent as EmojiIcon } from '../../../assets/Messanger/emojiIcon.svg';
import { ReactComponent as Clip } from '../../../assets/Messanger/Clip.svg';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { ReplyMessage } from './ReplyMessage';
import { UploadButton } from 'components/pages/Questionnaire/UploadButton';
import { ModalClipElements } from './ModalClipElements';
import { RecordingAudio } from './RecordingAudio/RecordingAudio';
import { ReactComponent as PhotoOrVideo } from '../../../assets/Messanger/AddFilesBlock/IconPhotoOrVideo.svg';
import { ReactComponent as File } from '../../../assets/Messanger/AddFilesBlock/IconFile.svg';
import { ReactComponent as Camera } from '../../../assets/Messanger/AddFilesBlock/IconCamera.svg';


interface FooterProps {
       selectedMessageText: string;
       showReplyMessage: boolean;
       onShowReplyMessage: () => void;
}

export const Footer: FC<FooterProps> = ({ selectedMessageText, showReplyMessage, onShowReplyMessage }) => {

       const [messageValue, setMessageValue] = useState('');
       const [selectedFile, setSelectedFile] = useState<File | null>(null);
       const [isRecording, setIsRecording] = useState(false);
       const [isRecordedBlob, setIsRecordedBlob] = useState(false);
       const [activeClip, setActiveClip] = useState(false);

       const clipRef = useRef<HTMLDivElement>(null);

       // const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
       //        setMessageValue(messageValue + emojiObject.emoji);
       // };

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newMessage = e.target.value;

              setMessageValue(newMessage);
       };

       const handleUploadFile = (file: File) => {
              setSelectedFile(file);
       };

       const handleCloseSelectedImage = () => {
              setSelectedFile(null);
       };

       const handleChangeActiveClip = () => {
              setActiveClip(!activeClip);
       };

       const handleClickOutside = (event: MouseEvent) => {
              if (
                     !event.target ||
                     (clipRef.current && !clipRef.current.contains(event.target as Node))
              ) {
                     setActiveClip(false);
              }
       };

       useEffect(() => {
              document.addEventListener('click', handleClickOutside);

              return () => {
                     document.removeEventListener('click', handleClickOutside);
              };
       }, []);



       return (
              <div>
                     <div className={css.blockForReplyMessage} >
                            {selectedFile &&
                                   <div className={css.clipElementsWrapper}>
                                          <ModalClipElements
                                                 file={selectedFile}
                                                 onClose={handleCloseSelectedImage}
                                                 value={messageValue}
                                                 onChange={handleInputChange}
                                          />
                                   </div>}
                            <div className={!showReplyMessage ? css.fieldForMessageWrapper : css.fieldForMessageWrapperWithReply}>
                                   {showReplyMessage && <ReplyMessage text={selectedMessageText} setShowReplyMessage={() => onShowReplyMessage()} />}
                                   <div className={css.iconsWrapper} >
                                          {!isRecording && !isRecordedBlob && <EmojiIcon className={css.emojiIcon} />}
                                          <div className={css.recordingAudioBlock}>
                                                 <RecordingAudio
                                                        setIsRecording={setIsRecording}
                                                        setIsRecordedBlob={setIsRecordedBlob}
                                                 />
                                          </div>
                                          <div ref={clipRef}>
                                                 {!isRecording && !isRecordedBlob && <Clip className={css.clipIcon} onClick={handleChangeActiveClip} />}
                                                 {activeClip &&
                                                        <div className={css.clipFeatures} >
                                                               <div className={css.clipFeature}>
                                                                      <UploadButton
                                                                             icon={<PhotoOrVideo />}
                                                                             onUpload={handleUploadFile}
                                                                             inputId="clipUpload"
                                                                             accept="image/*"
                                                                             text='Photo or video'
                                                                      />

                                                               </div>
                                                               <div className={css.clipFeature}>
                                                                      <File />
                                                                      <Button className={css.clipBtn}>File</Button>
                                                               </div>
                                                               <div className={css.clipFeature}>
                                                                      <Camera />
                                                                      <Button className={css.clipBtn}>Camera</Button>
                                                               </div>

                                                        </div>
                                                 }

                                          </div>
                                   </div>
                                   <Input
                                          className={(!isRecording && !isRecordedBlob)
                                                 ? css.fieldForMessage
                                                 : (!isRecording && isRecordedBlob)
                                                        ? css.fieldWithBlob
                                                        : css.fieldForRecording}
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