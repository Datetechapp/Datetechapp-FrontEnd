import styles from './messagesBlock.module.css';
import { IMessageProps } from 'store/messages/types';
import { ReactComponent as PremiumStar } from '../../../../assets/EventsMessagesBlock/PremiumStar.svg';

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
          <div
            className={styles.imageWrapper}
            style={{
              background: message.premium
                ? 'linear-gradient(180deg, rgba(151, 71, 255, 1) 0%, rgba(222, 119, 199, 1) 100%)'
                : 'transparent',
            }}
          >
            <img src={message.image} alt={message.name} />
            <div className={styles[isOnline(message.status)]}></div>
          </div>
        </div>
        <div className={styles.rightSideMessage}>
          <div className={styles.headerMessage}>
            <div className={styles.userName}>
              <p>{message.name}</p>
              {message.premium && <PremiumStar className={styles.star} />}
            </div>

            <p>{message.isNew ? message.time : message.weekDay}</p>
          </div>
          <div className={styles.bodyMessage}>
            <p
              style={{
                color: message.isNew ? '#C896EF' : '',
                maxWidth: message.isNew ? '220px' : '250px',
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
