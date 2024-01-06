import styles from './message.module.css';
import StatusIcon from '../../../../../../../assets/SupportServicePanel/StatusIcon.svg';
import { IMessage } from '../../type';
import { TextareaAutosize } from '@mui/material';

export function Message({ message }: { message: IMessage }) {
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
          {message.description.length <= 24 ? (
            <p className={styles.message}>{message.description}</p>
          ) : (
            <TextareaAutosize
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
