import { FC } from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';
import { Filters } from './Filters/Filters';
import { MainLayoutHeader } from './MainLayout_Header/MainLayout_header';
import MatchingFeed from './MatchingFeed/MatchingFeed';

export const MainLayout: FC = () => {
  return (
    <div className='main_layout'>
      <header className='main_layout__header'>
        <MainLayoutHeader />
      </header>
      <div className='main_layout__wrapper'>
        <Outlet />
         <div className='main_layout__info_panel'>
         <MatchingFeed/>
          <Outlet />
        </div> 
        <div className='main_layout__message_panel'>
          <Filters />
        </div>
      </div>
    </div>
  );
};
