import { useState } from 'react';
import s from './MyProfilePage.module.css';
import { ProfileLayout } from './../../Layouts/ProfileLayout';
import { EditProfile } from 'components/ProfileCard/component/EditProfile';
import { ProfileCard } from 'components/ProfileCard';
import { ProfileContent } from 'components/ProfileContent';
import { Button } from 'antd';

export const MyProfilePage = () => {
  const [openMyVideoList, setOpenMyVideoList] = useState(false);
  const [openVideos, setOpenVideos] = useState(true);
  const [selectedButton, setSelectedButton] = useState('My Video');

  return (
    <ProfileLayout>
      <div
        className={
          openMyVideoList
            ? `${s.openMainContentProfile}`
            : `${s.mainContentProfile}`
        }
      >
        <div
          className={
            openMyVideoList
              ? `${s.openVideoListContainer}`
              : `${s.commonCardContainer}`
          }
        >
          <ProfileCard children={<EditProfile />} />
        </div>

        <ProfileContent
          title={
            <div className={s.linksBox}>
              <Button
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: openVideos ? '#FFFFFF' : '#5F4F7F',
                }}
                onClick={() => {
                  setSelectedButton('My Video');
                  setOpenVideos(true);
                }}
              >
                My Video
              </Button>
              <Button
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: !openVideos ? '#FFFFFF' : '#5F4F7F',
                }}
                onClick={() => {
                  setSelectedButton('Hidden');
                  setOpenVideos(false);
                  setOpenMyVideoList(false);
                }}
              >
                Hidden
              </Button>
            </div>
          }
          selectedButton={selectedButton}
          openVideoList={openMyVideoList}
          setOpenVideoList={setOpenMyVideoList}
        />
      </div>
    </ProfileLayout>
  );
};
