import React from 'react';
import styles from './NotificationList.module.css';
import { Button } from 'components/common';
import { notifications } from '../notification';
import NotificationItem from './NotificationItem/NotificationItem';

const NotificationList = () => {

	return (
		<div className={styles.notification__description}>
				{notifications.length === 0 ? (
					<p className={styles.notification__text}>You have no notifications</p>
				) : (
                    <>
                    <ul className={styles.notification__list}>
						{notifications.map((notification) => (
							<li key={notification.id} className={styles.notification__item}>
								<NotificationItem
								notification={notification}
								/>
							</li>
						))}
					</ul>
                    <Button className={styles.btn_notification}>Show all</Button>
                    </>
					
				)}
			</div>
	);
};

export default NotificationList;
