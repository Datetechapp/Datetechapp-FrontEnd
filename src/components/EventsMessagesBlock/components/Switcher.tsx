import React, { useRef, useState } from 'react';
import styles from '../eventsMessagesBlock.module.css';
import { CheckProps } from '../types';

export function Switcher({ isChecked, setIsChecked }: CheckProps) {
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switcherContainer}>
      <div className={styles.main}>
        <div className={styles.part}>
          <p>Messages</p>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.part}>
          <p>Events</p>
          <div className={styles.circle}></div>
        </div>
      </div>
      <label className={styles.switch}>
        <input type="checkbox" checked={isChecked} onClick={handleChecked} />
        <span
          className={
            isChecked ? styles.sliderIsChecked : styles.sliderIsntChecked
          }
        ></span>
      </label>
    </div>
  );
}
