import React from 'react';
import styles from './NotificationList.module.css';
import { notifications } from '../notification';
import NotificationItem from './NotificationItem/NotificationItem';

const NotificationList = () => {

	return (
		<div className={styles.notificationDescription}>
				{notifications.length === 0 ? (
					<p className={styles.notificationText}>You have no notifications</p>
				) : (
                    <ul className={styles.notificationList}>
						{notifications.map((notification) => (
							<li key={notification.id} className={styles.notificationItem}>
								<NotificationItem
								notification={notification}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
	);
};

export default NotificationList;
