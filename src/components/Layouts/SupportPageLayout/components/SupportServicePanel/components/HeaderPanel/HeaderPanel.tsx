import SupportIcon from '../../../../../../../assets/SupportServicePanel/SupportIcon.svg';
import styles from './headerPanel.module.css';

export function HeaderPanel() {
  return (
    <div className={styles.container}>
      <img src={SupportIcon} alt="" />
      <div>
        <p>Support Service</p>
        <p>Online</p>
      </div>
    </div>
  );
}
