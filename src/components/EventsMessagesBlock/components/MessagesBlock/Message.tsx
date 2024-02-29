import { IMessageProps } from 'store/messages/types';
import { ReactComponent as PremiumStar } from '../../../../assets/EventsMessagesBlock/PremiumStar.svg';
import styles from './messagesBlock.module.css';
import { useNavigate } from 'react-router-dom';
import LogoIcon from 'components/common/logoIcon/LogoIcon';

export function Message({ message }: { message: IMessageProps }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.messageContainer}
      onClick={() => navigate(`/messager/${+message.id + 1}`)}
    >
      <div className={styles.messageWrapper}>
        <LogoIcon
          src={message.image}
          name={message.name}
          status={message.status}
          premium={message.premium}
        />

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
            {message.isNew && (
              <div className={styles.newMessageIcon}>
                <p>1</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
