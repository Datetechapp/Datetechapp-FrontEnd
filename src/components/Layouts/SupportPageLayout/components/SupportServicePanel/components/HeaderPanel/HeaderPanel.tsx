import SupportIcon from '../../../../../../../assets/SupportServicePanel/SupportIcon.svg';
import styles from './headerPanel.module.css';

export function HeaderPanel() {
  return (
    <div className={styles.container}>
      <img src={SupportIcon} alt="" />
      <div className={styles.wrapper}>
        <p className={styles.title}>Support Service</p>
        <p className={styles.status}>Online</p>
      </div>
    </div>
  );
}
