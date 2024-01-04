import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';

export function NavBar() {
  const Links = [
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
      {Links.map((link, i) => (
        <NavLink
          to={link.href}
          key={i}
          className={(navData) => (navData.isActive ? styles.active : '')}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}
