import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './modalNotification.module.css';
import NotificationList from './NotificationList/NotificationList';
import { Button } from 'components/common';
import { getAllNotifications } from 'store/notifications/selectors';

type NotificationProp = {
  isOpen: boolean;
  onClose?: () => void;
};

const ModalNotification: FC<NotificationProp> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const notifications = useSelector(getAllNotifications);

  return (
    <div
      className={styles.notificationContainer}
      onMouseLeave={onClose}
      style={{
        maxHeight: isOpen ? '100%' : '0',
      }}
    >
      <h3 className={styles.notificationTitle}>Notifications</h3>
      <NotificationList count={5} notifications={notifications} />
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
