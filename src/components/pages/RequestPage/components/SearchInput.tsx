import SearchIcon from '../../.././/./../assets/SupportServicePanel/SearchIcon.svg';
import CloseIcon from '../../.././/./../assets/SupportServicePanel/CloseIcon.svg';
import styles from '../request.module.css';
import { Dispatch, SetStateAction } from 'react';

export default function SearchInput({
  text,
  setText,
}: {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className={styles.searchInput}>
      <img src={SearchIcon} alt="" />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length > 0 && (
        <img
          src={CloseIcon}
          alt=""
          className={styles.close}
          onClick={() => setText('')}
        />
      )}
    </div>
  );
}
