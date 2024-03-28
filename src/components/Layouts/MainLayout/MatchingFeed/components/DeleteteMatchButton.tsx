import { ButtonProps } from '../interfaces';
import styles from '../MatchingFeed.module.css';

export const DeleteMatchButton = ({ onClick }: ButtonProps) => (
  <button className={styles.containerIcons} onClick={onClick}>
    <svg
      className={`${styles.closeIcon} ${styles.matchingButtons}`}
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.30711 20.2929C2.91658 20.6834 2.28342 20.6834 1.89289 20.2929L1.20711 19.6071C0.816582 19.2166 0.816583 18.5834 1.20711 18.1929L8.9 10.5L1.20711 2.80711C0.816583 2.41658 0.816582 1.78342 1.20711 1.39289L1.89289 0.707107C2.28342 0.316582 2.91658 0.316582 3.30711 0.707107L11 8.4L18.6929 0.707107C19.0834 0.316583 19.7166 0.316583 20.1071 0.707107L20.7929 1.39289C21.1834 1.78342 21.1834 2.41658 20.7929 2.80711L13.1 10.5L20.7929 18.1929C21.1834 18.5834 21.1834 19.2166 20.7929 19.6071L20.1071 20.2929C19.7166 20.6834 19.0834 20.6834 18.6929 20.2929L11 12.6L3.30711 20.2929Z" />
    </svg>
  </button>
);
