import React, { FC } from 'react';
import styles from './modalNotification.module.css';
import NotificationList from './NotificationList/NotificationList';
import { Button } from 'components/common';
import { useNavigate } from 'react-router-dom';

type NotificationProp = {
  onClose?: () => void;
};

const ModalNotification: FC<NotificationProp> = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.notificationContainer} onMouseLeave={onClose}>
      <h3 className={styles.notificationTitle}>Notifications</h3>
      <NotificationList />
      <Button
        className={styles.btnNotification}
        onClick={() => navigate('/notification')}
      >
        Show all
      </Button>
    </div>
  );
};

export default ModalNotification;
