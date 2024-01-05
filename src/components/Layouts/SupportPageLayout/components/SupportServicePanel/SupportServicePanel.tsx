import styles from './supportServicePanel.module.css';
import { MessagesPanel } from './components/MessagesPanel';
import { HeaderPanel } from './components/HeaderPanel';
import { InputPanel } from './components/InputPanel';

export function SupportServicePanel() {
  return (
    <div className={styles.wrapper}>
      <HeaderPanel />
      <div className={styles.main}>
        <MessagesPanel />
        <InputPanel />
      </div>
    </div>
  );
}
