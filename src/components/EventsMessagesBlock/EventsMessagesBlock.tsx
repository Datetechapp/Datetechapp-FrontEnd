import { useState } from 'react';
import { MainPanel, Switcher } from './components';
import styles from './eventsMessagesBlock.module.css';
export function EventsMessagesBlock() {
  const [events, setEvents] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <Switcher isChecked={isChecked} setIsChecked={setIsChecked} />
      <MainPanel events={events} messages={messages} isChecked={isChecked} />
    </div>
  );
}
