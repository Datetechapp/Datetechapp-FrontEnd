import styles from './supportServicePanel.module.css';
import SupportIcon from '../../../../../assets/SupportServicePanel/SupportIcon.svg';
import { MessagesPanel } from './components/MessagesPanel';

export function SupportServicePanel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <img src={SupportIcon} alt='' />
          <div>
            <p>Support Service</p>
            <p>Online</p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <MessagesPanel />
      </div>
    </div>
  );
}
