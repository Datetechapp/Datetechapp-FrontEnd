import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import styles from './supportPageLayout.module.css';

export function SupportPageLayout() {
  return (
    <section className={styles.container}>
      <div className={styles.leftPart}>
        <div className={styles.wrapper}>
          <NavBar />
          <div>
            <Outlet />
          </div>
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
