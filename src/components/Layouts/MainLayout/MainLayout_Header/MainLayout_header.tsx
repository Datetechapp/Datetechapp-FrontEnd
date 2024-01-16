import { Button } from 'components/common';
import { FC, useState } from 'react';
import bell from '../../../../assets/Header/bell-alert.svg';
import logo from '../../../../assets/ModalAuth/logo.svg';
import './index.css';
import ModalNotification from 'components/ModalNotification/ModalNotification';
import { notifications } from 'components/ModalNotification/notification';

export const MainLayoutHeader: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleOpenModal = () => {
		setIsModalVisible(true);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
	};

	return (
		<div className="header__wrapper">
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header__buttons">
				<div className="notifications" 
        onMouseEnter={handleOpenModal}
        // onClick={}
        >
					<div className="count_notifications">{notifications.length}</div>
					<img src={bell} alt="notifications" />
				</div>
        {isModalVisible && <ModalNotification onClose={handleCloseModal} />}
				<Button className="BtnUpload">Upload</Button>
			</div>
		</div>
	);
};
