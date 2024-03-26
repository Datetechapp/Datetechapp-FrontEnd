import { FC } from 'react';
import s from './ProfileContent.module.css';
import { ProfileContentT, VideoItemT } from './../pages/ProfilePage/types';
import { videoItems } from 'components/pages/ProfilePage/videos';

export const ProfileContent: FC<ProfileContentT> = ({
  setOpenVideoList,
  setSelectedVideo,
  openVideoList,
  title,
}) => {
  return (
    <div
      className={
        openVideoList
          ? `${s.openContentProfileContainer}`
          : `${s.contentProfileContainer}`
      }
    >
      <div className={s.contentTitle}>{title}</div>
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
