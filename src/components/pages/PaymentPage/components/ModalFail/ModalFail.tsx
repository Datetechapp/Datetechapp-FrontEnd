import React from 'react';
import style from './ModalFail.module.css';
import close from './../../../../../assets/Payment/CloseIcon.svg';
import error from './../../../../../assets/Payment/Error.svg';
import { Button } from './../../../../../components/common/button';

const ModalFail = () => {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalBox}>
        <img src={close} alt="logo" className={style.imgClose} />
        <div className={style.modalLogo}>
          <img src={error} alt="logo" className={style.imgLogo} />
        </div>
        <div className={style.modalContent}>
          <h2 className={style.modalTitle}>Payment failed</h2>
          <p className={style.modalText}>
            An error occurred while processing the payment. Please try again
          </p>
        </div>
        <Button className={style.modalBtn}>Retry</Button>
      </div>
    </div>
  );
};

export default ModalFail;
