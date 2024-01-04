import { NavLink, Outlet } from 'react-router-dom';
import styles from './supportPageLayout.module.css';

export function SupportPageLayout() {
  const Links = [
    {
      title: 'FAQ',
      href: 'faq',
    },
    {
      title: 'My Requests',
      href: 'request',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.leftPart}>
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
        <div>
          <Outlet />
        </div>
      </div>
      <div className={styles.rightPart}>
        <div>SupportServiceHeader</div>
        <div>SupportServiceMain</div>
        <div>SupportServiceInput</div>
      </div>
    </section>
  );
}
