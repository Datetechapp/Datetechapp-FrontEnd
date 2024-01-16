import React from 'react';
import style from './PushNotification.module.css';
import avatar from '../../assets/user/avatar Ivan.svg';

const pushArr = {
	name: 'Mike',
	title: '',
	photo: '',
	message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
};

const PushNotification = () => {
	return (
		<div className={style.push__container}>
			<h4 className={style.push_title}>New message</h4>
			<div className={style.push_description}>
                <img src={avatar} alt="photo" />
                <div className={style.message__box}>
                    <p><span>{pushArr.name}</span> {pushArr.message}</p>
                </div>
            </div>
		</div>
	);
};

export default PushNotification;
