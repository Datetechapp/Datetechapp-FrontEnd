import React from 'react';
import style from './Notification.module.css';
import NotificationList from 'components/ModalNotification/NotificationList/NotificationList';

const NotificationPage = () => {
  return (
    <div className={style.page_container}>
      <h2 className={style.page_title}>Notifications</h2>
      <div className={style.page_box}>
        <NotificationList/>
      </div>
    </div>
  );
};

export default NotificationPage;
