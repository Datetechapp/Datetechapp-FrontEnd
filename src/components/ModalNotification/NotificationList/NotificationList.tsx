import styles from './NotificationList.module.css';

import NotificationItem from './NotificationItem/NotificationItem';
import { INotificationProps } from 'store/notifications/types';

const NotificationList = ({
  count,
  notifications,
}: {
  count?: number;
  notifications: INotificationProps[];
}) => {
  return (
    <div className={styles.notificationDescription}>
      {notifications.length === 0 ? (
        <p className={styles.notificationText}>You have no notifications</p>
      ) : (
        <ul className={styles.notificationList}>
          {notifications
            .map((notification) => (
              <li key={notification.id} className={styles.notificationItem}>
                <NotificationItem notification={notification} />
              </li>
            ))
            .splice(0, count ? count : notifications.length)}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
