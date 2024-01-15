import { NavLink, useLocation } from 'react-router-dom';
import styles from './navBar.module.css';

export function NavBar() {
  const { pathname } = useLocation();
  const themeUrl = pathname.split('/')[2];

  const links = [
    {
      title: 'FAQ',
      href: 'faq/account',
    },
    {
      title: 'My Requests',
      href: 'request',
    },
  ];

  return (
    <nav className={styles.navBar}>
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.href}
          className={(navData) =>
            navData.isActive || themeUrl === link.href.split('/')[0]
              ? styles.active
              : ''
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}
