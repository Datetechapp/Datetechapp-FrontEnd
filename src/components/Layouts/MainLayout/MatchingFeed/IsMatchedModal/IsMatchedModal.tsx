import React from 'react';
import styles from './IsMatchedModal.module.css';

type ModalMatchedProps = {
  closeMatchedModal: () => void;
};

const IsMatchedModal: React.FC<ModalMatchedProps> = ({ closeMatchedModal }) => {
  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => {
          closeMatchedModal();
        }}
      ></div>
      <div className={styles.matchModal}>
        <p className={styles.matchHeaderLine}>
          It's a <br />
          <span className={styles.matchHeaderText}>MATCH!</span>
        </p>
        <p className={styles.matchTextLine}>
          <span className={styles.coloredText}>You</span> and
          <span className={styles.coloredText}> </span> have liked each other!
        </p>
        <div className={styles.imagesContainer}>
          <img className={styles.matchImage} alt="Your profile" />
          <img className={styles.matchImage} alt="Other person's profile" />
        </div>
        <div className={styles.matchButtonsContainer}>
          <button
            className={`${styles.sendMessageButton} ${styles.matchButton}`}
            onClick={() => {
              /* Handle send a message */
            }}
          >
            Send a message
          </button>
          <button
            className={`${styles.continueSwipingButton} ${styles.matchButton}`}
            onClick={() => {
              closeMatchedModal();
            }}
          >
            Continue swiping
          </button>
        </div>
      </div>
    </>
  );
};

export default IsMatchedModal;
