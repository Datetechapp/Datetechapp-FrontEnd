import SearchInput from 'components/pages/RequestPage/components/SearchInput';
import styles from './messagesBlock.module.css';
import { useState } from 'react';
import { Message } from './Message';
import { IMessageProps } from 'store/messages/types';
import { v4 as uid } from 'uuid';

export function MessagesBlock({ messages }: { messages: IMessageProps[] }) {
  const [text, setText] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.searchInput}>
        <SearchInput
          text={text}
          setText={setText}
          placeholder="Search"
          customStyles={{ borderColor: '#5F4F7F' }}
        />
      </div>
      <div className={styles.messageBlockContainer}>
        {messages.map((message) => (
          <Message message={message} key={uid()} />
        ))}
      </div>
    </div>
  );
}
