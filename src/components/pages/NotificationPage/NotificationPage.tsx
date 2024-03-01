import style from './Notification.module.css';
import { useSelector } from 'react-redux';

import NotificationList from 'components/ModalNotification/NotificationList/NotificationList';
import { MainLayoutHeader } from 'components/Layouts/MainLayout/MainLayout_Header/MainLayout_header';
import { getAllNotifications } from 'store/notifications/selectors';

const NotificationPage = () => {
  const notifications = useSelector(getAllNotifications);

  const newEventNotifications = notifications.filter(
    (notification) => notification.type === 'new',
  );

  const oldEventNotifications = notifications.filter(
    (notification) => notification.type !== 'new',
  );

  return (
    <div className={style.pageContainer}>
      <MainLayoutHeader />
      <section className={style.pageWrapper}>
        <h2 className={style.pageTitle}>Notifications</h2>
        <div className={style.pageBox}>
          <div className={style.mainNotification}>
            {newEventNotifications.length > 0 && (
              <NotificationList notifications={newEventNotifications} />
            )}
          </div>
          <NotificationList notifications={oldEventNotifications} />
        </div>
      </section>
    </div>
  );
};

export default NotificationPage;
