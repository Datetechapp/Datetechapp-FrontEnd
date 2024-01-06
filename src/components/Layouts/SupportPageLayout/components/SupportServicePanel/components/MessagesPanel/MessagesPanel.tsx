import styles from './messagesPanel.module.css';
import { Message } from '../Message/Message';
import { IMessage } from '../../type';

export function MessagesPanel({ messages }: { messages: IMessage[] }) {
  return (
    <div className={styles.messagesPanel}>
      {messages.length !== 0 ? (
        <div className={styles.fullPanel}>
          {messages.map((message, i) => (
            <Message key={i} message={message} />
          ))}
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
