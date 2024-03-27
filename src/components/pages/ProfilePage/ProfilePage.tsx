import { useEffect, useState } from 'react';

import { MainLayoutHeader } from '../../Layouts/MainLayout/MainLayout_Header/MainLayoutHeader';
import { Button } from 'components/common';
import { ProfileContent } from 'components/ProfileContent';
import { ProfileCard } from 'components/ProfileCard';
import { ModalEditProfile } from './components/ModalEditProfile';
import { VideoList } from './components/VideoList';

import profileImg1 from './../../../assets/Profile/profileImage1.png';
import profileImg2 from './../../../assets/Profile/profileImage2.png';

import s from './ProfilePage.module.css';

const videoItems = [
  { id: '0', img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '1', img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '2', img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '3', img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '4', img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '5', img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '6', img: profileImg1, src: 'https://is.gd/UMPvwU', isPlaying: false },
  { id: '7', img: profileImg2, src: 'https://is.gd/UMPvwU', isPlaying: false },
];

export const ProfilePage = () => {
  const [openVideoList, setOpenVideoList] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = openVideoList ? 'hidden' : 'auto';
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
      <Button onClick={handleEdit}>Edit profile</Button>
      <ModalEditProfile isOpen={open} setOpen={setOpen} />
    </div>
  );
};
