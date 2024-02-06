import React from 'react';
import styles from './ModalPremium.module.css';
import logo from '../../../../../assets/ModalAuth/logo.svg';

type ModalPremiumProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const ModalPremium: React.FC<ModalPremiumProps> = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div>
          <div className={styles.overlay} onClick={closeModal}></div>
          <div className={styles.modal_premium_wrap}>
            <div className={styles.modal_premium}>
              <div className={styles.premium_logo}>
                <div></div>
                <img src={logo} alt="logo" />
                <div className={styles.logo_button} onClick={closeModal}>
                  ×
                </div>
              </div>
              <div>
                <div className={styles.header_premium}>Become a Premium</div>
                <div className={styles.premium_description}>
                  To view people who are «Interested in you» you need to
                  subscribe to a Premium account
                </div>
              </div>
              <button className={styles.premium_button}>Learn more</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPremium;
