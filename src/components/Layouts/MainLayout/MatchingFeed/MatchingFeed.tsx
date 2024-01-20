import React from 'react';
import styles from './MatchingFeed.module.css';
import closeButton from '../../../../assets/feed/CloseButton.svg';
import heartIcon from '../../../../assets/feed/Heart.svg';

const MatchingFeed = () => {
  return (
    <div className={styles.matching_container}>
      <div>
        <button className={styles.container_icons}>
          <img
            className={`${styles.closeIcon} ${styles.matchingButtons}`}
            src={closeButton}
            alt={`close icon`}
          />
        </button>
      </div>
      <div className={styles.matching_feed}>
        <div className={styles.matching_nav}>
          <div className={styles.nav_category}>Interested in you</div>
          <div className={styles.nav_category}>New People</div>
        </div>
        <div className={styles.profile_matched}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <button className={styles.container_icons}>
          <img
            className={`${styles.heartIcon} ${styles.matchingButtons}`}
            src={heartIcon}
            alt={`heart icon`}
          />
        </button>
      </div>
    </div>
  );
};

export default MatchingFeed;
