import { FC } from 'react';
import s from './ProfileContent.module.css';
import { ProfileContentT, VideoItemT } from './../pages/ProfilePage/types';

export const ProfileContent: FC<ProfileContentT> = ({
  setOpenVideoList,
  setSelectedVideo,
  videoItems,
  openVideoList,
}) => {
  return (
    <div
      className={
        openVideoList
          ? `${s.openContentProfileContainer}`
          : `${s.contentProfileContainer}`
      }
    >
      <h3 className={s.contentTitle}>Videos</h3>
      <div className={s.mainContent}>
        {videoItems.map((img: VideoItemT) => (
          <video
            poster={img.img}
            className={s.img}
            key={img.id}
            onClick={() => {
              setOpenVideoList(true);
              setSelectedVideo(img.id);
            }}
          >
            <source src={img.src} />
          </video>
        ))}
      </div>
    </div>
  );
};
