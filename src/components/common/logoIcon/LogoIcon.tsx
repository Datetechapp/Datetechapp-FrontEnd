import { INotificationProps } from 'store/notifications/types';

import styles from './logoIcon.module.css';

export function LogoIcon({ data }: { data: INotificationProps }) {
  const lgSize = 48;
  const smSize = 44;

  const imageSize = data.premium ? smSize : lgSize;

  return (
    <div className={styles.icon}>
      <div className={styles.imageWrapper}>
        <img
          src={data.image}
          alt={data.name}
          style={{
            width: imageSize,
            height: imageSize,
          }}
        />
        <div
          className={data.status === 'online' ? styles.onlineStatus : ''}
        ></div>
      </div>
    </div>
  );
}
