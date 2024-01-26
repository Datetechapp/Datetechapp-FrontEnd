import styles from '../eventsMessagesBlock.module.css';
import { IEvents, IMessages } from '../types';
import { EventsBlock } from './EventsBlock';
import { MessagesBlock } from './MessagesBlock';

export function MainPanel({
  events,
  messages,
  isChecked,
}: {
  events: IEvents[];
  messages: IMessages[];
  isChecked: boolean;
}) {
  return (
    <div className={styles.mainPanel_wrapper}>
      {isChecked ? (
        events.length != 0 ? (
          <EventsBlock />
        ) : (
          <p className={styles.emptyMessage}>
            Your events will appear here when you have them
          </p>
        )
      ) : messages.length != 0 ? (
        <MessagesBlock />
      ) : (
        <p className={styles.emptyMessage}>
          Your messages will appear here when you have them
        </p>
      )}
    </div>
  );
}
