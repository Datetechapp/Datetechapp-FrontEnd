import React from 'react';
import style from './modalSuccesPayment.module.css';
import done from './../../../../../assets/Payment/done_icon.svg';
import close from './../../../../../assets/Payment/CloseIcon.svg';
import { Button } from './../../../../../components/common/button';

const ModalSuccessPayment = () => {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalBox}>
        <img src={close} alt="logo" className={style.imgClose} />
        <div className={style.modalLogo}>
          <img src={done} alt="logo" className={style.imgLogo} />
        </div>
        <h2 className={style.modalTitle}>You became Premium!</h2>
        <Button className={style.modalBtn}>Continue</Button>
      </div>
    </div>
  );
};

export default ModalSuccessPayment;
