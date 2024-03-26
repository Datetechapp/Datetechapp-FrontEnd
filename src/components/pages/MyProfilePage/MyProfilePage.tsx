import { useState } from 'react';
import s from './MyProfilePage.module.css';
import { ProfileLayout } from './../../Layouts/ProfileLayout';
import { EditProfile } from 'components/ProfileCard/component/EditProfile';
import { ProfileCard } from 'components/ProfileCard';
import { VideoList } from '../ProfilePage/components/VideoList';
import { ProfileContent } from 'components/ProfileContent';
import { Button } from 'antd';

export const MyProfilePage = () => {
  const [openVideoList, setOpenVideoList] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

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
          <ProfileCard children={<EditProfile />} />
          {openVideoList && (
            <VideoList
              selectedVideo={selectedVideo}
              setOpenVideoList={setOpenVideoList}
            />
          )}
        </div>

        <ProfileContent
          title={
            <div className={s.linksBox}>
              <Button
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#5F4F7F',
                }}
              >
                My Video
              </Button>
              <Button
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#FFFFFF',
                }}
              >
                Hidden
              </Button>
            </div>
          }
          setSelectedVideo={setSelectedVideo}
          openVideoList={openVideoList}
          setOpenVideoList={setOpenVideoList}
        />
      </div>
    </ProfileLayout>
  );
};
