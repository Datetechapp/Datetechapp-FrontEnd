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

import { VideoList } from './components/VideoList';
import { useDispatch } from 'react-redux';
import { videoItemsSet } from 'store/videoUser/slice';

const videoItems = [
  { id: 0, img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 1, img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 2, img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 3, img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 4, img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 5, img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 6, img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: 7, img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
];

export const ProfilePage = () => {
  const [openVideoList, setOpenVideoList] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(videoItemsSet(videoItems));

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
                selectedVideo={selectedVideo}
                setOpenVideoList={setOpenVideoList}
                videoItems={videoItems}
              />
            )}
          </div>

          <ProfileContent
            setSelectedVideo={setSelectedVideo}
            openVideoList={openVideoList}
            setOpenVideoList={setOpenVideoList}
            videoItems={videoItems}
          />
        </div>
      </div>
    </div>
  );
};
