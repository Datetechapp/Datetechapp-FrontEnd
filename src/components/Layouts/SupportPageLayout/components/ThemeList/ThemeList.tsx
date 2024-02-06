import { NavLink, useLocation } from 'react-router-dom';
import styles from './themeList.module.css';

export function ThemeList() {
  const themeButtons = [
    {
      title: 'My Account',
      href: 'account',
    },
    {
      title: 'Payment',
      href: 'payment',
    },
    {
      title: 'Safety',
      href: 'safety',
    },
    {
      title: 'Video',
      href: 'video',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.themeButtons}>
        {themeButtons.map((button, i) => (
          <NavLink
            to={button.href}
            className={(navData) => (navData.isActive ? styles.active : '')}
            key={button.title}
          >
            {button.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
