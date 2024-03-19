import styles from './groupLogo.module.css';

export function GroupLogo({
  image,
  imagePartner,
}: {
  image: string;
  imagePartner?: string;
}) {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="logo" className={styles.logo} />
      <img
        src={imagePartner}
        alt="logoPartner"
        className={styles.logoPartner}
      />
    </div>
  );
}
