import styles from './logoIcon.module.css';

type Props = {
  src: string;
  name: string;
  status: string;
  premium?: boolean;
  type?: string;
};

export function LogoIcon({ src, name, status, premium, type }: Props) {
  const gradientBackground =
    'linear-gradient(180deg, rgba(151, 71, 255, 1) 0%, rgba(222, 119, 199, 1) 100%)';

  const transparentBackground = 'transparent';

  const lgSize = 48;
  const smSize = 44;

  const imageSize = type === 'new' ? smSize : lgSize;

  return (
    <div className={styles.icon}>
      <div
        className={styles.imageWrapper}
        style={{
          background: premium ? gradientBackground : transparentBackground,
        }}
      >
        <img
          src={src}
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
