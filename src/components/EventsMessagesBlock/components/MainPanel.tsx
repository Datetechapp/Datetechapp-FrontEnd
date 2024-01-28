import { useAppSelector } from 'hooks/hooks';
import styles from '../eventsMessagesBlock.module.css';
import { EventsBlock } from './EventsBlock/EventsBlock';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { getAllEvents } from '../../../store/events/selectors';
export function MainPanel({ isChecked }: { isChecked: boolean }) {
  const messages = [];

  const events = useAppSelector(getAllEvents);

  return (
    <div className={styles.mainPanel_wrapper}>
      {isChecked ? (
        events.length != 0 ? (
          <EventsBlock />
        ) : (
          <div className={styles.emptyMessage}>
            <p> Your events will appear here when you have them</p>
          </div>
        )
      ) : messages.length != 0 ? (
        <MessagesBlock />
      ) : (
        <div className={styles.emptyMessage}>
          <p>Your messages will appear here when you have them</p>
        </div>
      )}
    </div>
  );
}
