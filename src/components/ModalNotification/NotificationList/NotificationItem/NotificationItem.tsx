import styles from './NotificationItem.module.css';

import { LogoIcon } from 'components/common/logoIcon';
import { INotificationProps } from 'store/notifications/types';
import { GroupLogo } from 'components/common/group-logo';

const NotificationItem = ({
  notification,
}: {
  notification: INotificationProps;
}) => {
  const newTime = new Date(notification.time).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });

  const userName = <span className={styles.user}>{notification.name}</span>;

  let textEvent;

  if (notification.type === 'event') {
    textEvent = <>You have an upcoming event with {userName}</>;
  } else if (notification.type === 'like') {
    textEvent = <>You and {userName} have liked each other</>;
  } else if (notification.type === 'new') {
    textEvent = <>You have a new event from {userName}</>;
  } else if (notification.type === 'decline') {
    textEvent = <>{userName} refused you the event</>;
  } else {
    textEvent = <>{userName} accepted your event</>;
  }

  return (
    <div className={styles.notificationItem}>
      <div className={styles.notificationItemContainer}>
        {notification.type === 'event' ? (
          <GroupLogo
            image={notification.image}
            imagePartner={notification.imagePartner}
          />
        ) : (
          <LogoIcon
            image={notification.image}
            name={notification.name}
            status={notification.status}
            premium={notification.premium}
          />
        )}

        <div className={styles.eventDetails}>
          <p className={styles.textEvent}>{textEvent}</p>
          <span className={styles.time}>{newTime}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
