import React from 'react';
import style from './modalPay.module.css';
import logo from '../../../../../assets/ModalAuth/mod_welc-logo.svg';
import {Button} from '../../../../common/button/Button';
import close from '../../../../../assets/Payment/CloseIcon.svg';
 
const ModalPayNotification = () => {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalBox}>
        <div className={style.modalLogo}>
          <img src={logo} alt="logo" className={style.imgLogo}/>
          <img src={close} alt="logo" className={style.imgClose}/>
        </div>
        <div className={style.modalContent}>
        <h2 className={style.modalTitle}>Become a Premium</h2>
          <p className={style.modalText}>
            To view people who are «Interested in you» you need to subscribe to a Premium account
          </p>
        </div>
          <Button className={style.modalBtn}>Learn more</Button>
      </div>

    </div>
  );
};

export default ModalPayNotification;
