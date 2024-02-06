import React from 'react';
import style from './Notification.module.css';
import NotificationList from 'components/ModalNotification/NotificationList/NotificationList';

const NotificationPage = () => {
  return (
    <div className={style.pageContainer}>
      <h2 className={style.pageTitle}>Notifications</h2>
      <div className={style.pageBox}>
        <NotificationList />
      </div>
    </div>
  );
};

export default NotificationPage;
