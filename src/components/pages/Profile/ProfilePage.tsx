import { ProfileCard } from 'components/ProfileCard';
import style from './ProfilePage.module.css';
import { MainLayoutHeader } from 'components/Layouts/MainLayout/MainLayout_Header/MainLayout_header';
import { ProfileContent } from 'components/ProfileContent';
import { useState } from 'react';

export const ProfilePage = () => {
  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <div className={style.profileContainer}>
      <div className={style.profileHeader}>
        <MainLayoutHeader />
      </div>
      <div
        className={
          activeVideo ? `${style.activeMainContent}` : `${style.overlayContent}`
        }
      >
        <div className={style.mainContentProfile}>
          <ProfileCard />
          <ProfileContent setActiveVideo={setActiveVideo} />
        </div>
      </div>
    </div>
  );
};
