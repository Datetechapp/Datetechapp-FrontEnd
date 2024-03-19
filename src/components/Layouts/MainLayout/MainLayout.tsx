import { Filters } from './Filters/Filters';
import { MainLayoutHeader } from './MainLayout_Header/MainLayoutHeader';
import MatchingFeed from './MatchingFeed/MatchingFeed';
import { EventsMessagesBlock } from 'components/EventsMessagesBlock';

import './index.css';

export const MainLayout = () => {
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
