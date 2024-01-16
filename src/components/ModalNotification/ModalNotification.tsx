import React, { FC } from 'react';
import styles from './modalNotification.module.css';
import NotificationList from './NotificationList/NotificationList';
   
type NotificationProp = {
onClose: ()=> void;
}

const ModalNotification: FC<NotificationProp> = ({onClose}) => {

	return (
		<div className={styles.notification__container} onMouseLeave={onClose}>
			<h3 className={styles.notification__title}>Notifications</h3>
			<NotificationList/>
		</div>
	);
};

export default ModalNotification;
