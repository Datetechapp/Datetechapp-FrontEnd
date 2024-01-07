import { Dispatch, SetStateAction, useState } from 'react';
import styles from './inputPanel.module.css';
import FileIcon from '../../../../../../../assets/SupportServicePanel/FileIcon.svg';
import SendButton from '../../../../../../../assets/SupportServicePanel/SendButton.svg';
import { IMessage } from '../../type';
import { format } from 'date-fns';

export function InputPanel({
  messages,
  setMessages,
}: {
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}) {
  const [text, setText] = useState({
    description: ``,
    timeStamp: '',
    owner: 'Administrator',
  });

  const handleSend = () => {
    if (text.description === '') return;
    setMessages([...messages].concat(text));
    setText({ description: ``, timeStamp: '', owner: 'Administrator' });
  };

  const handleWriteMessage = (e: { target: { value: string } }) => {
    setText({
      description: e.target.value,
      timeStamp: `${format(new Date(), 'kk:mm')}`,
      owner: 'Administrator',
    });
  };

  const onKeyDown = (e: { code: string }) => {
    e.code === 'Enter' ? handleSend() : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputField}>
          <input type="file" style={{ display: 'none' }} id="file" />
          <label htmlFor="file" className={styles.fileIcon}>
            <img src={FileIcon} alt="File Icon" />
          </label>
          <input
            type="text"
            placeholder="Message..."
            value={text.description}
            onKeyDown={onKeyDown}
            onChange={(e) => handleWriteMessage(e)}
            className={styles.textInput}
          />
          <img
            src={SendButton}
            alt="SendButton"
            style={{
              visibility: text.description !== '' ? 'visible' : 'hidden',
              cursor: 'pointer',
            }}
            onClick={handleSend}
          />
        </div>
      </div>
    </div>
  );
}
