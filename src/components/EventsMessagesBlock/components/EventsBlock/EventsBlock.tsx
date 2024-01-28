import Event from './Event';
import { useAppSelector } from 'hooks/hooks';
import { getAllEvents } from 'store/events/selectors';
import styles from '../../eventsMessagesBlock.module.css';
import { useEffect, useState } from 'react';
import { v4 as uid } from 'uuid';

export function EventsBlock() {
  const events = useAppSelector(getAllEvents);
  const [value, setValue] = useState(6);
  const [showUpNewEventStyle, setShowUpNewEventStyle] =
    useState('event_newContainer');

  useEffect(() => {
    setTimeout(() => {
      setShowUpNewEventStyle('event_container');
    }, 2000);

    return;
  }, [events.length]);

  return (
    <>
      {events
        .map((item) => (
          <Event
            item={item}
            key={uid()}
            showUpNewEventStyle={showUpNewEventStyle}
          />
        ))
        .splice(0, value)}
      <div
        className={styles.see_all}
        onClick={() => {
          setValue(events.length);
        }}
      >
        {value !== events.length ? <p>See all</p> : null}
      </div>
    </>
  );
}
