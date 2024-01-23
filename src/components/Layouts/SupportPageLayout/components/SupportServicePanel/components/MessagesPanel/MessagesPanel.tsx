import styles from './messagesPanel.module.css';
import { Message } from '../Message/Message';
import { IMessage } from '../../type';
import { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';

export function MessagesPanel({ messages }: { messages: IMessage[] }) {
  const refs = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    refs.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.messagesPanel}>
      {messages.length !== 0 ? (
        <div className={styles.fullPanel}>
          <p className={styles.date}>{format(new Date(), 'dd MMMM yyyy')}</p>
          {messages.map((message) => (
            <Message key={uuid()} message={message} />
          ))}
          <div ref={refs}></div>
        </div>
      ) : (
        <>
          <div className={styles.emptyPanel}>
            Here you can submit a support request. Describe your problem in
            detail and, if necessary, attach screenshots or attachments.
          </div>
        </>
      )}
    </div>
  );
}