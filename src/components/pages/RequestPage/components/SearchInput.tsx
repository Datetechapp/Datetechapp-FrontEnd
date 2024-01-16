import SearchIcon from '../../.././/./../assets/SupportServicePanel/SearchIcon.svg';
import { ReactComponent as CloseIcon } from '../../.././/./../assets/SupportServicePanel/CloseIcon.svg';
import styles from '../request.module.css';
import { Dispatch, SetStateAction } from 'react';
import { Input } from 'components/common';

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
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
      {text.length > 0 && (
        <CloseIcon className={styles.close} onClick={() => setText('')} />
      )}
    </div>
  );
}
