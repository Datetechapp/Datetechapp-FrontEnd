import { useAppSelector } from 'hooks/hooks';
import { EventsBlock } from './EventsBlock/EventsBlock';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { getAllEvents } from '../../../store/events/selectors';
import { getAllMessages } from '../../../store/messages/selectors';
import styles from '../eventsMessagesBlock.module.css';

export function MainPanel({ isChecked }: { isChecked: boolean }) {
  const events = useAppSelector(getAllEvents);
  const messages = useAppSelector(getAllMessages);

  const eventsBlock =
    events.length !== 0 ? (
      <EventsBlock />
    ) : (
      <div className={styles.emptyMessage}>
        <p>Your events will appear here when you have them</p>
      </div>
    );

  const messagesBlock =
    messages.length !== 0 ? (
      <MessagesBlock />
    ) : (
      <div className={styles.emptyMessage}>
        <p>Your messages will appear here when you have them</p>
      </div>
    );

  return (
    <div className={styles.mainPanelWrapper}>
      {isChecked ? eventsBlock : messagesBlock}
    </div>
  );
}
