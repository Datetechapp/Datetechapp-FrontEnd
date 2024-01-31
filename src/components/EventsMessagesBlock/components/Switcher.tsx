import styles from '../eventsMessagesBlock.module.css';
import { CheckProps } from '../types';

export function Switcher({ isChecked, setIsChecked }: CheckProps) {
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switcherContainer} onClick={handleChecked}>
      <div className={styles.switcherContainerWrapper}>
        <div
          className={styles.switcher}
          style={{
            transform: isChecked ? 'translateX(100%)' : 'translateX(0%)',
          }}
        >
          <p>{isChecked ? 'Events' : 'Messages'}</p>
          <div className={styles.circle}></div>
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
    </div>
  );
}
