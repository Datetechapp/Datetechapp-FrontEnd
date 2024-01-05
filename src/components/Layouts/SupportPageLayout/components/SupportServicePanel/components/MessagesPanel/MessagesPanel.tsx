import React, { useState } from 'react';
import styles from './messagesPanel.module.css';

interface IMessage {
  userUrl: string;
  name: string;
  description: string;
}

export function MessagesPanel() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  return (
    <div className={styles.messagesPanel}>
      {messages.length !== 0 ? (
        <div className={styles.fullPanel}>
          <ul>
            {messages.map((message, i) => (
              <li key={i}>{message.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.emptyPanel}>
          Here you can submit a support request. Describe your problem in detail
          and, if necessary, attach screenshots or attachments.
        </div>
      )}
    </div>
  );
}