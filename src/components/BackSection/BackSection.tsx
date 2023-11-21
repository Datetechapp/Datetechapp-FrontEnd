import React from 'react';
import styles from './BackSection.module.css';
import { Header } from 'components/Header/Header';
import { PropsWithChildren } from 'react';
import video from '../../assets/Background/myvideo.mp4';

export const BackSection = ({
  children,
}: PropsWithChildren<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.BackSection}>
      <video
        className={styles.BackSection_video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>
      <Header />
      {children}
    </div>
  );
};
