import React from 'react';
import styles from './ModalPremium.module.css';
import logo from '../../../../../assets/ModalAuth/logo.svg';
import { ReactComponent as CloseIcon } from '../../../../../assets/AudioPlayer/closeIcon.svg';

type ModalPremiumProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const ModalPremium: React.FC<ModalPremiumProps> = ({ isOpen, closeModal }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div>
          <div className={styles.overlay} onClick={handleOverlayClick}></div>
          <div className={styles.modalPremiumWrap}>
            <div className={styles.modalPremium}>
              <div className={styles.premiumLogo}>
                <div></div>
                <img src={logo} alt="logo" />
                <div onClick={closeModal}>
                  <CloseIcon className={styles.logoButton} />
                </div>
              </div>
              <div>
                <div className={styles.headerPremium}>Become a Premium</div>
                <div className={styles.premiumDescription}>
                  To view people who are «Interested in you» you need to
                  subscribe to a Premium account
                </div>
              </div>
              <button type="button" className={styles.premiumButton}>
                Learn more
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPremium;
