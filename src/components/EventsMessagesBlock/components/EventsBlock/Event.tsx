import { IEventProps } from 'store/events/types';
import styles from '../../eventsMessagesBlock.module.css';
import { useCallback, useEffect, useState } from 'react';

export default function Event({
  item,
  showUpNewEventStyle,
}: {
  item: IEventProps;
  showUpNewEventStyle: string;
}) {
  return (
    <div
      className={
        !item.isNew ? styles.event_container : styles[showUpNewEventStyle]
      }
    >
      <div className={styles.event_wrapper}>
        <div className={styles.icon}>
          <div className={styles.image_wrapper}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.icon_rightPartOuter}>
            <div className={styles.icon_rightPartInner}>
              <p>{item.day}</p>
              <p>{item.month}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.who}>
            <span>Meet with&nbsp;</span>
            <span>{item.name}</span>
          </div>
          <div className={styles.where}>
            <span>Event:&nbsp;</span>
            <span>Italian festival</span>
          </div>
          <div className={styles.when}>
            <span>Time:&nbsp;</span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
