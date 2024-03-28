import { ArrowButtonProps } from '../interfaces';
import styles from '../MatchingFeed.module.css';

export const ArrowMatchButton = ({ src, alt }: ArrowButtonProps) => (
  <div className={styles.arrowButtonDirection}>
    <img src={src} alt={alt} />
  </div>
);
