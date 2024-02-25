import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import styles from './supportPageLayout.module.css';
import { SupportServicePanel } from './components/SupportServicePanel';
import { MainLayoutHeader } from '../MainLayout/MainLayout_Header/MainLayout_header';
import { memo, useState } from 'react';
import { IMessage } from './components/SupportServicePanel/type';
import { data } from './components/SupportServicePanel/data';

export function SupportPageLayout() {
  const [messages, setMessages] = useState<IMessage[]>(data);
  const SupportPanel = memo(SupportServicePanel);

  return (
    <section className={styles.container}>
      <MainLayoutHeader />
      <div className={styles.wrapper}>
        <div className={styles.leftPart}>
          <div className={styles.header}>
            <NavBar />
          </div>
          <div className={styles.main}>
            <div className={styles.outlet}>
              <Outlet />
            </div>
          </div>
        </div>

        <div className={styles.rightPart}>
          <SupportPanel messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </section>
  );
}
