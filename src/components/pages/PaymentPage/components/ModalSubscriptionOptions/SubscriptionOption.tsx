import React, { FC, useState } from 'react';
import Modal from 'react-modal';

import { ModalPayment } from '../ModalPayment';
import logo from '../../../../../assets/ModalAuth/mod_welc-logo.svg';
import close from '../../../../../assets/Payment/CloseIcon.svg';
import check from '../../../../../assets/Payment/Сheck.svg';

import style from './subscriptionOption.module.css';

interface ISubscription {
  onClose: () => void;
  isOpen: boolean;
}

export const SubscriptionOption: FC<ISubscription> = ({ onClose, isOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    document.body.style.overflow = 'unset';
    setOpenModal(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={style.modal}
      overlayClassName={style.overlayModal}
    >
      <div className={style.modalBoxHeader}>
        <div className={style.headerBox}>
          <div className={style.headerContent}>
            <img src={logo} alt="logo" className={style.logoImg} />
            <div className={style.headerDescription}>
              <h3 className={style.headerTitle}>Become a Premium</h3>
              <p className={style.headerText}>
                Choose the option to subscribe to a premium account
              </p>
            </div>
          </div>
          <img
            src={close}
            alt="logo"
            className={style.closeImg}
            onClick={onClose}
          />
        </div>
      </div>
      <div className={style.optionsBox}>
        <div className={style.leftBox}>
          <ul className={style.optionList}>
            <li className={style.optionItem}>
              <img src={check} alt="check" />
              <span>Unlimited likes</span>
            </li>
            <li className={style.optionItem}>
              <img src={check} alt="check" />
              <span>Who sees yous</span>
            </li>
            <li className={style.optionItem}>
              <img src={check} alt="check" />
              <span>Who do you see</span>
            </li>
            <li className={style.optionItem}>
              <img src={check} alt="check" />
              <span>No advertising</span>
            </li>
          </ul>
          <p className={style.leftBoxText}>
            Subscription can be canceled at any time
          </p>
        </div>
        <div className={style.rightBox}>
          <ul className={style.priceList}>
            <li
              className={style.priceItem}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <span>1 mouth</span>
              <div className={style.btnPrice}>39.99€</div>
            </li>
            <li className={style.priceItem}>
              <span>1 week</span>
              <div className={style.btnPrice}>19.99€</div>
            </li>
            <li className={style.priceItem}>
              <span>1 day</span>
              <div className={style.btnPrice}>9.99€</div>
            </li>
          </ul>
        </div>
      </div>
      {openModal && (
        <ModalPayment
          isOpen={true}
          isThereACancel={true}
          onChange={() => setOpenModal(false)}
          textTitle="You became Premium!"
          buttonText="Continue"
          darkModal={true}
          fcFirstBtn={handleCloseModal}
        >
          <div className={style.logoBox}>
            <img src={check} alt={check} className={style.logo} />
          </div>
        </ModalPayment>
      )}
      {/* {openModal && (
        <ModalPayment
          isOpen={true}
          isThereACancel={true}
          onChange={() => setOpenModal(false)}
          textTitle="Payment failed"
          textSubtitle="An error occurred while processing the payment. Please try again"
          buttonText="Retry"
          darkModal={false}
        >
          <div className={style.logoBox}>
            <img src={fail} alt="error" className={style.logo} />
          </div>
        </ModalPayment>
      )} */}
    </Modal>
  );
};
