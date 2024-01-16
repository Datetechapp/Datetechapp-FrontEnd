import React from 'react';
import avatar from '../../../../assets/user/avatar Ivan.svg';
import styles from './NotificationItem.module.css';

type Notification = {
	id: number;
	type: 'event' | 'like' | 'new' | 'decline' | 'accept';
	user: string;
	event: string | null;
	time: string;
};

const NotificationItem = ({ notification }: { notification: Notification }) => {
	const newTime = new Date(notification.time).toLocaleString('en-US', {
		day: 'numeric',
		month: 'short',
		hour: 'numeric',
		minute: 'numeric',
	});

	const userName = <span className={styles.user}>{notification.user}</span>;

	let textEvent;

	if (notification.type === 'event') {
		textEvent = <>You have an upcoming event with {userName}</>;
	} else if (notification.type === 'like') {
		textEvent = <>You and {userName} have liked each other</>;
	} else if (notification.type === 'new') {
		textEvent = <>You have a new event from {userName}</>;
	} else if (notification.type === 'decline') {
		textEvent = <>{userName} refused you the event</>;
	} else if (notification.type === 'accept') {
		textEvent = <>{userName} accepted your event</>;
	}
	
    return (
		<div className={styles.notification_item}>
			<div className={styles.notification_item_container}>
				<img src={avatar} alt="avatar" />
				<div className={styles.event_details}>
					<p className={styles.text_event}>{textEvent}</p>
					<span className={styles.time}>{newTime}</span>
				</div>
			</div>
		</div>
	);
};

export default NotificationItem;
