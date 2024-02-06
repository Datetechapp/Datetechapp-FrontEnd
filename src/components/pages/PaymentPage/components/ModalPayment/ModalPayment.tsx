import Modal from 'react-modal';
import style from './ModalPayment.module.css';
import React, { FC } from 'react';
import close from './../../../../../assets/Payment/CloseIcon.svg';
import { Button } from './../../../../common/button';

interface ModalPaymentProps {
  onRequestClose?: () => void;
  textTitle: string;
  textSubtitle?: string;
  buttonText?: string;
  darkModal?: boolean;
  secondButtonText?: string;
  isOpen: boolean;
  isThereACancel: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  fcFirstBtn?: () => void;
}

export const ModalPayment: FC<ModalPaymentProps> = ({
  isOpen,
  isThereACancel,
  textSubtitle,
  textTitle,
  darkModal,
  onChange,
  buttonText,
  secondButtonText,
  fcFirstBtn,
  children,
}) => {
  const handleCloseModal = () => {
    document.body.style.overflow = 'unset';
    onChange(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={`${style.modal} ${darkModal ? style.darkModal : ''}`}
      overlayClassName={style.overlayModal}
    >
      <div className={style.titleBlock}>
        {isThereACancel && (
          <img
            className={style.iconCancel}
            src={close}
            alt="cancel"
            onClick={handleCloseModal}
          />
        )}
        {children}
        <h2
          className={`${style.title} ${darkModal ? style.darkModalTitle : ''}`}
        >
          {textTitle}
        </h2>
      </div>
      {textSubtitle && (
        <p
          className={`${style.subtitle} ${
            darkModal ? style.darkModalSubtitle : ''
          }`}
        >
          {textSubtitle}
        </p>
      )}
      <Button
        className={`${style.firstBtn} ${
          darkModal ? style.darkModalFirstBtn : ''
        }`}
        onClick={fcFirstBtn}
      >
        {buttonText}
      </Button>
      {secondButtonText && (
        <Button
          className={`${style.secondBtn} ${
            darkModal ? style.darkModalSecondBtn : ''
          }`}
          onClick={handleCloseModal}
        >
          {secondButtonText}
        </Button>
      )}
    </Modal>
  );
};
