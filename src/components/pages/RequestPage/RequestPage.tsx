import { useState } from 'react';
import { RequestModal } from './components/Modal';
import SearchInput from './components/SearchInput';
import RequestTable from './components/Table';
import styles from './request.module.css';

export function RequestPage() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <SearchInput text={text} setText={setText} />
      <RequestTable
        handleChangeOpen={handleChangeOpen}
        setId={setId}
        text={text}
      />
      <RequestModal open={open} handleChangeOpen={handleChangeOpen} id={id} />
    </div>
  );
}
