import { Button } from 'components/common';
import { FC } from 'react';
import bell from '../../../../assets/Header/bell-alert.svg';
import logo from '../../../../assets/ModalAuth/logo.svg';
import './index.css';
import ModalNotification from 'components/ModalNotification/ModalNotification';

export const MainLayoutHeader: FC = () => {
  return (
    <div className="header__wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__buttons">
        <img src={bell} alt="notifications" />
        <ModalNotification/>
        <Button className="BtnUpload">Upload</Button>
      </div>
    </div>
  );
};
