import { ProfileCard } from 'components/ProfileCard';
import style from './ProfilePage.module.css';
import { MainLayoutHeader } from 'components/Layouts/MainLayout/MainLayout_Header/MainLayout_header';

export const ProfilePage = () => {
  return (
    <div className={style.profileContainer}>
      <div className={style.profileHeader}>
        <MainLayoutHeader />
      </div>
      <div className={style.mainContentProfile}>
        <ProfileCard />
      </div>
    </div>
  );
};
