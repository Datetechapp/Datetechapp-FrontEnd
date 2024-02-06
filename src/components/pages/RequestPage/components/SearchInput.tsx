import SearchIcon from '../../.././/./../assets/SupportServicePanel/SearchIcon.svg';
import { ReactComponent as CloseIcon } from '../../.././/./../assets/SupportServicePanel/CloseIcon.svg';
import styles from '../request.module.css';
import { Dispatch, SetStateAction } from 'react';
import { Input } from 'components/common';

export default function SearchInput({
  text,
  setText,
  placeholder,
  customStyles,
}: {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  customStyles: object;
}) {
  return (
    <div className={styles.searchInput} style={customStyles}>
      <img src={SearchIcon} alt="" />
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder={placeholder}
      />
      {text.length > 0 && (
        <CloseIcon className={styles.close} onClick={() => setText('')} />
      )}
    </div>
  );
}
