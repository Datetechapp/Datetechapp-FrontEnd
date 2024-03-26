import { ProfileCard } from 'components/ProfileCard';
import { useEffect, useState } from 'react';
import s from './ProfilePage.module.css';
import { ProfileContent } from 'components/ProfileContent';
import { ProfileLayout } from 'components/Layouts/ProfileLayout';
import { DetailsCard } from 'components/ProfileCard/component/DetailsCard';
import { VideoList } from './components/VideoList';

export const ProfilePage = () => {
  const [openVideoList, setOpenVideoList] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    document.body.style.overflow = openVideoList ? 'hidden' : 'auto';
  }, [openVideoList]);

  return (
    <ProfileLayout>
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
          <ProfileCard children={<DetailsCard />} />
          {openVideoList && (
            <VideoList
              selectedVideo={selectedVideo}
              setOpenVideoList={setOpenVideoList}
            />
          )}
        </div>

        <ProfileContent
          title={<span>Videos</span>}
          setSelectedVideo={setSelectedVideo}
          openVideoList={openVideoList}
          setOpenVideoList={setOpenVideoList}
        />
      </div>
    </ProfileLayout>
  );
};
