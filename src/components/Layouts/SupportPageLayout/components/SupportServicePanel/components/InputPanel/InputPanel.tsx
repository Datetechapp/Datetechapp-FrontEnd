import { useState } from 'react';
import styles from './inputPanel.module.css';
import EmodjiIcon from '../../../../../../../assets/SupportServicePanel/EmodjiIcon.svg';
import FileIcon from '../../../../../../../assets/SupportServicePanel/FileIcon.svg';

export function InputPanel() {
  const [text, setText] = useState('');

  const handleSend = async () => {
    setText('');
  };

  const onKeyDown = (e: { code: string }) => {
    e.code === 'Enter' ? handleSend() : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputField}>
          <img
            src={EmodjiIcon}
            alt="EmodjiIcon"
            className={styles.emodjiImage}
          />
          <input
            type="text"
            placeholder="Message..."
            value={text}
            onKeyDown={onKeyDown}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="file" style={{ display: 'none' }} id="file" />
          <label htmlFor="file">
            <img src={FileIcon} alt="File Icon" className={styles.fileIcon} />
          </label>
        </div>
      </div>
    </div>
  );
}
