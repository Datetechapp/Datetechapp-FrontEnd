import { ButtonProps } from '../interfaces';
import styles from '../MatchingFeed.module.css';

export const LikeMatchButton = ({ onClick }: ButtonProps) => (
  <button className={styles.containerIcons} onClick={onClick}>
    <svg
      className={`${styles.heartIcon} ${styles.matchingButtons}`}
      width="36"
      height="33"
      viewBox="0 0 36 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="yourPath"
        d="M34 10C34 5.58172 30.269 2 25.6667 2C22.2256 2 19.2716 4.00227 18 6.85941C16.7284 4.00227 13.7744 2 10.3333 2C5.73096 2 2 5.58172 2 10C2 22.8366 18 31.3333 18 31.3333C18 31.3333 34 22.8366 34 10Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6978_64739"
          x1="18"
          y1="2"
          x2="18"
          y2="31.3333"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop1" stopColor="#9747FF" />
          <stop id="stop2" offset="1" stopColor="#DE77C7" />
        </linearGradient>
      </defs>
    </svg>
  </button>
);
