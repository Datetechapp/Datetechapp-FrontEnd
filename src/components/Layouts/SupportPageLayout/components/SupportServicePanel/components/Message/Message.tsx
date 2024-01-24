import styles from './message.module.css';
import StatusIcon from '../../../../../../../assets/SupportServicePanel/StatusIcon.svg';
import { IMessage } from '../../type';
import { TextareaAutosize } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export function Message({ message }: { message: IMessage }) {
  const divBlock = useRef<HTMLParagraphElement>(null);

  const [divBlockWidth, setDivBlockWidth] = useState(0);

  useEffect(() => {
    const width = divBlock.current?.getBoundingClientRect().width;

    setDivBlockWidth(width ?? 0);
  }, [message]);

  return (
    <div
      className={
        message.owner === 'Host' ? styles.containerHost : styles.containerOwner
      }
    >
      <div
        className={
          message.owner === 'Host' ? styles.wrapperHost : styles.wrapperOwner
        }
      >
        {message.owner === 'Host' ? (
          <div className={styles.imageWrapper}>
            <img src={message.userUrl} alt="Icon" className={styles.image} />
            <img src={StatusIcon} alt="Status" className={styles.status} />
          </div>
        ) : null}

        <div
          className={
            message.owner === 'Host' ? styles.contentHost : styles.contentOwner
          }
        >
          <p className={styles.name}>{message.name}</p>
          {divBlockWidth <= 235 ? (
            <p className={styles.message} ref={divBlock}>
              {message.description}
            </p>
          ) : (
            <TextareaAutosize
              style={{
                width: '273px',
              }}
              className={styles.message}
              value={message.description}
              disabled
            />
          )}

          <p className={styles.time}>{message.timeStamp}</p>
        </div>
      </div>
    </div>
  );
}
