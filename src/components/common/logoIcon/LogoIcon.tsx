import styles from './logoIcon.module.css';

interface Props {
  image: string;
  name: string;
  status: string;
  premium?: boolean;
}

export function LogoIcon({ image, name, status, premium }: Props) {
  const lgSize = 48;
  const smSize = 44;

  const imageSize = premium == true ? smSize : lgSize;

  return (
    <div className={styles.icon}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          style={{
            width: imageSize,
            height: imageSize,
          }}
        />
        <div className={status === 'online' ? styles.onlineStatus : ''}></div>
      </div>
    </div>
  );
}
