import styles from './supportServicePanel.module.css';
import { MessagesPanel } from './components/MessagesPanel';
import { HeaderPanel } from './components/HeaderPanel';
import { InputPanel } from './components/InputPanel';
import { useEffect, useState } from 'react';
import { data } from './data';
import { IMessage } from './type';

export function SupportServicePanel() {
  const [messages, setMessages] = useState<IMessage[]>(data);

  return (
    <div className={styles.wrapper}>
      <HeaderPanel />
      <div className={styles.main}>
        <MessagesPanel messages={messages} />
        <InputPanel setMessages={setMessages} messages={messages} />
      </div>
    </div>
  );
}
