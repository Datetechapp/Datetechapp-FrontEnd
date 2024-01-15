import React from 'react';
import styles from './modalNotification.module.css';
import { Button } from 'components/common';
import { notifications } from './notification';
import ModalList from './ModalList/ModalList';
   
const ModalNotification = () => {

	return (
		<div className={styles.notification__container}>
			<h3 className={styles.notification__title}>Notifications</h3>
			<div className={styles.notification__description}>
				{notifications.length === 0 ? (
					<p className={styles.notification__text}>You have no notifications</p>
				) : (
                    <>
                    <ul className={styles.notification__list}>
						{notifications.map((notification) => (
							<li key={notification.id} className={styles.notification__item}>
								<ModalList
								notification={notification}
								/>
							</li>
						))}
					</ul>
                    <Button className={styles.btn_notification}>Show all</Button>
                    </>
					
				)}
			</div>
		</div>
	);
};

export default ModalNotification;
