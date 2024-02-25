import { Outlet } from 'react-router-dom';
import style from './messangerLayout.module.css';

import { EventsMessagesBlock } from 'components/EventsMessagesBlock';
import { MainLayoutHeader } from '../MainLayout/MainLayout_Header/MainLayout_header';

export const MessangerLayout = () => {
  return (
    <div className={style.container}>
      <header className={style.mainLayoutHeader}>
        <MainLayoutHeader />
      </header>
      <section className={style.wrapper}>
        <div className={style.leftBar}>
          <EventsMessagesBlock />
        </div>
        <div className={style.mainContent}>
          <Outlet />
        </div>
      </section>
    </div>
  );
};
