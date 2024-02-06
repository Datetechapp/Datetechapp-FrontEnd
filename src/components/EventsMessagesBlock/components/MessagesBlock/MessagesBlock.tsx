import SearchInput from 'components/pages/RequestPage/components/SearchInput';
import styles from './messagesBlock.module.css';
import { useState } from 'react';
import { Message } from './Message';
import { useAppSelector } from 'hooks/hooks';
import { getAllMessages } from 'store/messages/selectors';

export function MessagesBlock() {
  const [text, setText] = useState('');
  const messages = useAppSelector(getAllMessages);

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
      <div className="animate__animated animate__fadeIn">
        <div className={styles.messageBlockContainer}>
          {messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
