import styles from '../eventsMessagesBlock.module.css';
import { CheckProps } from '../types';

export function Switcher({ isChecked, setIsChecked }: CheckProps) {
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switcherContainer}>
      <div
        className={
          isChecked
            ? styles.switcherContainerIsChecked
            : styles.switcherContainerIsNonChecked
        }
        onClick={handleChecked}
      >
        <div className={styles.switcher}>
          {isChecked ? 'Events' : 'Messages'}
        </div>
      </div>
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
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
        <span
          className={
            isChecked ? styles.sliderIsChecked : styles.sliderIsntChecked
          }
          id="slider"
        ></span>
      </label>
    </div>
  );
}
