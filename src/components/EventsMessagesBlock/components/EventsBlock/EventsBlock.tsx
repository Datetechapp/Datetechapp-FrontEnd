import { Event } from './Event';
import { useAppSelector } from 'hooks/hooks';
import { getAllEvents } from 'store/events/selectors';
import { useEffect, useState } from 'react';
import { ModalBox } from 'components/common/modal';
import SimpleCloseIcon from '../../../../assets/SupportServicePanel/SimpleCloseIcon.svg';
import { Button } from 'components/common';
import { v4 as uid } from 'uuid';
import styles from '../../eventsMessagesBlock.module.css';
import 'animate.css';

export function EventsBlock() {
  const defaultLengthOfEventItems = 6;
  const defaultEventNewContainerStyle = 'eventNewContainer';

  const events = useAppSelector(getAllEvents);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultLengthOfEventItems);
  const [eventId, setEventId] = useState('');
  const [showUpNewEventStyle, setShowUpNewEventStyle] = useState(
    defaultEventNewContainerStyle,
  );

  useEffect(() => {
    setTimeout(() => {
      setShowUpNewEventStyle('eventContainer');
    }, 2000);
  }, [events.length]);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  const showModal = (id: string) => {
    setEventId(id);
    handleChangeOpen();
  };

  const event = events.find((item) => item.id === eventId);

  return (
    <div className="animate__animated animate__fadeIn">
      {events
        .map((item) => (
          <div onClick={() => showModal(item.id)}>
            <Event
              item={item}
              key={uid()}
              showUpNewEventStyle={showUpNewEventStyle}
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
      <ModalBox
        open={open}
        handleChangeOpen={handleChangeOpen}
        maxWidth="600px"
      >
        <div className={styles.eventsModalContainer}>
          <div className={styles.eventsModalHeader}>
            <div className={styles.headerTitle}>
              <span>{event?.event}&nbsp;</span>
              <span> with&nbsp;</span>
              <span>{event?.name}</span>
            </div>
            <img
              src={SimpleCloseIcon}
              alt="SimpleCloseIcon"
              style={{
                cursor: 'pointer',
              }}
              onClick={handleChangeOpen}
            />
          </div>
          <div className={styles.eventsModalMain}>
            <div className={styles.userLogo}>
              <img src={event?.image} alt={event?.name} />
            </div>
            <div className={styles.eventInfo}>
              <div className={styles.eventInfoDescription}>
                <span>Location:&nbsp;</span>
                <span>Stade Roland-Garros, Paris, France</span>
              </div>
              <div className={styles.eventInfoDescription}>
                <span>Date:&nbsp;</span>
                <span>{event?.dateEvent}</span>
              </div>
              <div className={styles.eventInfoDescription}>
                <span>Time:&nbsp;</span>
                <span>{event?.time} AM</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventModalButtons}>
          <div className={styles.linearBorder}>
            <Button className={styles.cancelButton}>Cancel</Button>
          </div>
          <Button className={styles.editButton}>Edit</Button>
        </div>
      </ModalBox>
    </div>
  );
}
