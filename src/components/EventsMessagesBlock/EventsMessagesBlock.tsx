import { useState } from 'react';
import { MainPanel, Switcher } from './components';
import styles from './eventsMessagesBlock.module.css';
export function EventsMessagesBlock() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <Switcher isChecked={isChecked} setIsChecked={setIsChecked} />
      <MainPanel isChecked={isChecked} />
    </div>
  );
}
