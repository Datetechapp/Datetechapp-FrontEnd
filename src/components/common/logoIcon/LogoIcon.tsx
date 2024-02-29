import styles from './logoIcon.module.css';

type Props = {
  src: string;
  name: string;
  status: string;
  premium?: boolean;
};

export default function LogoIcon({ src, name, status, premium }: Props) {
  const gradientBackground =
    'linear-gradient(180deg, rgba(151, 71, 255, 1) 0%, rgba(222, 119, 199, 1) 100%)';

  const transparentBackground = 'transparent';

  return (
    <div className={styles.icon}>
      <div
        className={styles.imageWrapper}
        style={{
          background: premium ? gradientBackground : transparentBackground,
        }}
      >
        <img src={src} alt={name} />
        <div className={status === 'online' ? styles.onlineStatus : ''}></div>
      </div>
    </div>
  );
}
