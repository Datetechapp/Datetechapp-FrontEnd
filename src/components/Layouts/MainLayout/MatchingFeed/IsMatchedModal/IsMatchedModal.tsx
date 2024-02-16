import React from 'react';
import avatar from '../../../../../assets/user/avatar Ivan.svg';
import styles from './IsMatchedModal.module.css';
import { ModalMatchedProps } from '../interfaces';

const IsMatchedModal: React.FC<ModalMatchedProps> = ({
  profilesData,
  selectedProfileId,
  closeMatchedModal,
}) => {
  if (selectedProfileId !== null) {
    const selectedProfile = profilesData.find(
      (profile) => profile.id === selectedProfileId,
    );

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
            <span className={styles.coloredText}>
              {' '}
              {selectedProfile?.name}{' '}
            </span>{' '}
            have liked each other!
          </p>
          <div className={styles.imagesContainer}>
            <img
              className={styles.matchImage}
              src={avatar}
              alt="Your profile"
            />
            <img
              className={`${styles.matchImage} ${styles.partnerImage}`}
              src={selectedProfile && selectedProfile.img}
              alt={selectedProfile?.name + "'s profile"}
            />
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
  }

  return null;
};

export default IsMatchedModal;
