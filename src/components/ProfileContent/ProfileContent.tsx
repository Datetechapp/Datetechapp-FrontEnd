import { FC, useState } from 'react';
import s from './ProfileContent.module.css';
import { ProfileContentT, VideoItemT } from './../pages/ProfilePage/types';
import { videoItems } from 'components/pages/ProfilePage/videos';
import { VideoList } from 'components/pages/ProfilePage/components/VideoList';

export const ProfileContent: FC<ProfileContentT> = ({
  setOpenVideoList,
  openVideoList,
  title,
  selectedButton,
}) => {
  const [selected, setSelected] = useState('');

  return (
    <div className={openVideoList ? `${s.openContentProfileContainer}` : ''}>
      <div className={s.contentTitle}>{title}</div>
      <div className={s.mainContent}>
        {videoItems.map((img: VideoItemT) => (
          <video
            poster={img.img}
            className={s.img}
            key={img.id}
            onClick={() => {
              setOpenVideoList(true);
              setSelected(img.id);
            }}
          >
            <source src={img.src} />
          </video>
        ))}
      </div>

      {openVideoList && (
        <div className={s.overlayVideo}>
          <VideoList
            selectedButton={selectedButton}
            selectedVideo={selected}
            setOpenVideoList={setOpenVideoList}
          />
        </div>
      )}
    </div>
  );
};
