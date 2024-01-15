import React from 'react';
import avatar from '../../../assets/user/avatar Ivan.svg';
import styles from './modalList.module.css';

type Notification = {
	id: number;
	type: 'event' | 'like' | 'new' | 'decline' | 'accept';
	user: string;
	event: string | null;
	time: string;
};

const ModalList = ({ notification }: { notification: Notification }) => {
	const newTime = new Date(notification.time).toLocaleString('en-US', {
		day: 'numeric',
		month: 'short',
		hour: 'numeric',
		minute: 'numeric',
	});
  let textEvent = '';
  
  if (notification.type === 'event'){
    textEvent = `You have an upcoming event with ${notification.user}`;
  } else if (notification.type === 'like'){
    textEvent = `You and ${notification.user} have liked each other`;
  } else if (notification.type === 'new'){
    textEvent = `You have a new event from ${notification.user}`;
  } else if (notification.type === 'decline'){
    textEvent = `${notification.user} refused you the event`;
  } else if (notification.type === 'accept'){
    textEvent = `${notification.user} accepted your event`;
  }

	return (
		<div className={styles.notification_item}>
			<img src={avatar} alt="avatar" />
			<div className={styles.event_details}>
				<p className={styles.text_event}>
					{textEvent}
					<span className={styles.user}> {notification.user}</span>
				</p>
				<span className={styles.time}>{newTime}</span>
			</div>
		</div>
	);
};

export default ModalList;
