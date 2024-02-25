import { FC } from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';
import { Filters } from './Filters/Filters';
import { MainLayoutHeader } from './MainLayout_Header/MainLayout_header';
import MatchingFeed from './MatchingFeed/MatchingFeed';
import { EventsMessagesBlock } from 'components/EventsMessagesBlock';

export const MainLayout: FC = () => {
  return (
    <div className="main_layout">
      <header className="main_layout__header">
        <MainLayoutHeader />
      </header>
      <div className="main_layout__wrapper">
        <EventsMessagesBlock />
        <div className="main_layout__matching">
          <MatchingFeed />
        </div>
        <div className="main_layout__filters">
          <Filters />
        </div>
      </div>
    </div>
  );
};
