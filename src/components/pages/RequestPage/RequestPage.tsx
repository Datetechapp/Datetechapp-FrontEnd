import { useState } from 'react';
import { RequestModal } from './components/Modal';
import SearchInput from './components/SearchInput';
import RequestTable from './components/Table';
import styles from './request.module.css';

export function RequestPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState(0);

  return (
    <div className={styles.container}>
      <SearchInput />
      <RequestTable handleOpen={handleOpen} setId={setId} />
      <RequestModal open={open} handleClose={handleClose} id={id} />
    </div>
  );
}
