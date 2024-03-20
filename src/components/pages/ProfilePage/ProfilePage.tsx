/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProfileCard } from 'components/ProfileCard';
import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from './ProfilePage.module.css';
import { MainLayoutHeader } from '../../Layouts/MainLayout/MainLayout_Header/MainLayoutHeader';
import { ProfileContent } from 'components/ProfileContent';
import profileImg1 from './../../../assets/Profile/profileImage1.png';
import profileImg2 from './../../../assets/Profile/profileImage2.png';

import { VideoList } from './components/VideoItem';

const videoItems = [
  {
    id: 1,
    img: profileImg1,
    src: profileImg1,
  },
  {
    id: 2,
    img: profileImg2,
    src: profileImg1,
  },
  {
    id: 3,
    img: profileImg1,
    src: profileImg1,
  },
  { id: 4, img: profileImg2, src: 'https://is.gd/UMPvwU' },
  { id: 5, img: profileImg1, src: 'https://is.gd/UMPvwU' },
  { id: 6, img: profileImg2, src: 'https://is.gd/UMPvwU' },
  { id: 7, img: profileImg1, src: 'https://is.gd/UMPvwU' },
  { id: 8, img: profileImg2, src: 'https://is.gd/UMPvwU' },
];

export const ProfilePage = () => {
  const [openVideoList, setOpenVideoList] = useState(false);

  console.log(openVideoList);

  useEffect(() => {
    if (openVideoList) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ' auto';
    }
  }, [openVideoList]);

  return (
    <div className={s.profileContainer}>
      <div className={s.profileHeader}>
        <MainLayoutHeader />
      </div>
      <div className={s.mainContentContainer}>
        <div
          className={
            openVideoList
              ? `${s.openMainContentProfile}`
              : `${s.mainContentProfile}`
          }
        >
          <div
            className={
              openVideoList
                ? `${s.openVideoListContainer}`
                : `${s.commonCardContainer}`
            }
          >
            <ProfileCard />
            {openVideoList && (
              <VideoList
                setOpenVideoList={setOpenVideoList}
                videoItems={videoItems}
              />
            )}
          </div>

          <ProfileContent
            openVideoList={openVideoList}
            setOpenVideoList={setOpenVideoList}
            videoItems={videoItems}
          />
        </div>
      </div>
    </div>
  );
};
