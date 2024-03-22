/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC } from 'react';
import s from './ProfileContent.module.css';

export const ProfileContent: FC<any> = ({
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
        {videoItems.map((img: any) => (
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
