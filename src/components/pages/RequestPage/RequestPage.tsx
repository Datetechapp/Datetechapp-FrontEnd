import SearchInput from './components/SearchInput';
import RequestTable from './components/Table';
import styles from './request.module.css';

export function RequestPage() {
  return (
    <div className={styles.container}>
      <SearchInput />
      <RequestTable />
    </div>
  );
}
