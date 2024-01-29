import styles from './messagesBlock.module.css';
import { IMessageProps } from 'store/messages/types';

export function Message({ message }: { message: IMessageProps }) {
  const isOnline = (status: string) => {
    if (status == 'online') {
      return 'onlineStatus';
    } else {
      return '';
    }
  };

  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageWrapper}>
        <div className={styles.icon}>
          <div className={styles.imageWrapper}>
            <img src={message.image} alt={message.name} />
            <div className={styles[isOnline(message.status)]}></div>
          </div>
        </div>
        <div className={styles.rightSideMessage}>
          <div className={styles.headerMessage}>
            <p>{message.name}</p>
            <p>{message.time}</p>
          </div>
          <div className={styles.bodyMessage}>
            <p
              style={{
                color: message.isNew ? '#C896EF' : '',
              }}
            >
              {message.message}
            </p>
            {message.isNew ? (
              <div className={styles.newMessageIcon}>
                <p>1</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
