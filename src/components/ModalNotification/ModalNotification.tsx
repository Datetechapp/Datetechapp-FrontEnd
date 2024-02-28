import React, { FC } from 'react';
import styles from './modalNotification.module.css';
import NotificationList from './NotificationList/NotificationList';
import { Button } from 'components/common';
import { useNavigate } from 'react-router-dom';

type NotificationProp = {
  isOpen: boolean;
  onClose?: () => void;
};

const ModalNotification: FC<NotificationProp> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.notificationContainer}
      onMouseLeave={onClose}
      style={{
        maxHeight: isOpen ? '100%' : '0',
      }}
    >
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
