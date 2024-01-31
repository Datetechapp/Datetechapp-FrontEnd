import { Event } from './Event';
import { useAppSelector } from 'hooks/hooks';
import { getAllEvents } from 'store/events/selectors';
import styles from '../../eventsMessagesBlock.module.css';
import { useEffect, useState } from 'react';
import { v4 as uid } from 'uuid';
import 'animate.css';
import { ModalBox } from 'components/common/modal';

export function EventsBlock() {
  const events = useAppSelector(getAllEvents);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(6);
  const [eventId, setEventId] = useState('');
  const [showUpNewEventStyle, setShowUpNewEventStyle] =
    useState('eventNewContainer');

  useEffect(() => {
    setTimeout(() => {
      setShowUpNewEventStyle('eventContainer');
    }, 2000);

    return;
  }, [events.length]);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  const showModal = (id: string) => {
    setEventId(id);
    handleChangeOpen();
  };

  return (
    <div className="animate__animated animate__fadeIn">
      {events
        .map((item) => (
          <div onClick={() => showModal(item.id)}>
            <Event
              item={item}
              key={uid()}
              showUpNewEventStyle={showUpNewEventStyle}
              handleChangeOpen={handleChangeOpen}
              open={open}
            />
          </div>
        ))
        .splice(0, value)}
      <div
        className={styles.seeAll}
        onClick={() => {
          setValue(events.length);
        }}
      >
        {value !== events.length ? <p>See all</p> : null}
      </div>
      <ModalBox open={open} handleChangeOpen={handleChangeOpen}>
        <div>{eventId}</div>
      </ModalBox>
    </div>
  );
}
