import SearchIcon from '../../.././/./../assets/SupportServicePanel/SearchIcon.svg';
import CloseIcon from '../../.././/./../assets/SupportServicePanel/CloseIcon.svg';
import styles from '../request.module.css';

export default function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <img src={SearchIcon} alt="" />
      <input type="text" />
      <img src={CloseIcon} alt="" className={styles.close} />
    </div>
  );
}
