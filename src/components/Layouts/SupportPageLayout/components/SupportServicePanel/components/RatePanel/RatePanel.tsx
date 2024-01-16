import { useState } from 'react';
import { smileData } from './dataSmile';
import styles from './ratePanel.module.css';

export function RatePanel() {
  const [id, setId] = useState<number>(1);

  const handlerClick = (id: number) => {
    setId(id);
  };

  return (
    <div className={styles.container}>
      <p>Please rate the assistant’s work</p>
      <div className={styles.wrapper}>
        {smileData.map((item) => (
          <div onClick={() => handlerClick(item.id)}>
            <item.href isActive={id === item.id ? true : false} key={item.id} />
          </div>
        ))}
      </div>
      <p>Thank you for rating!</p>
    </div>
  );
}
