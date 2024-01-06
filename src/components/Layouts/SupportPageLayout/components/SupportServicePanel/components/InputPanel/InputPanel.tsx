import { Dispatch, SetStateAction, useState } from 'react';
import styles from './inputPanel.module.css';
import FileIcon from '../../../../../../../assets/SupportServicePanel/FileIcon.svg';
import { IMessage } from '../../type';

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
    setMessages([...messages].concat(text));
    setText({ description: ``, timeStamp: '', owner: 'Administrator' });
  };

  const handleWriteMessage = (e: { target: { value: string } }) => {
    setText({
      description: e.target.value,
      timeStamp: `${new Date().getHours()}:${
        new Date().getMinutes() < 10 ? '0' : ''
      }${new Date().getMinutes()}`,
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
        </div>
      </div>
    </div>
  );
}
