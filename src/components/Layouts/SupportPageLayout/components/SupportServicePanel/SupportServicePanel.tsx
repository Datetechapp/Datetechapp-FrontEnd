import styles from './supportServicePanel.module.css';
import { MessagesPanel } from './components/MessagesPanel';
import { HeaderPanel } from './components/HeaderPanel';
import { InputPanel } from './components/InputPanel';
import { Dispatch, SetStateAction, useState } from 'react';
import { RatePanel } from './components/RatePanel';
import { IMessage } from './type';

type Props = {
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
};

export function SupportServicePanel({ messages, setMessages }: Props) {
  // *You can make a choice whether you want to see the message input (estimation = false) or smile panel (estimation = true)

  const [estimation, setEsimation] = useState(false);

  return (
    <div className={styles.wrapper}>
      <HeaderPanel />
      <div className={styles.main}>
        <MessagesPanel messages={messages} />
        {estimation ? (
          <div className={styles.estimation}>
            <p className={styles.estimationText}>
              The chat with the assistant is completed
            </p>
            <RatePanel />
          </div>
        ) : (
          <InputPanel setMessages={setMessages} messages={messages} />
        )}
      </div>
    </div>
  );
}
