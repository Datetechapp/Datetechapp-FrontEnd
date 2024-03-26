/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import s from './ProfileLayout.module.css';
import { MainLayoutHeader } from '../MainLayout/MainLayout_Header/MainLayoutHeader';

import { VideoList } from './../../pages/ProfilePage/components/VideoList';
import { DetailsCard } from 'components/ProfileCard/component/DetailsCard';
import { ProfileCard } from 'components/ProfileCard';
import { Outlet } from 'react-router-dom';

export const ProfileLayout = ({ children }: any) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileHeader}>
        <MainLayoutHeader />
      </div>
      <div className={s.mainContentContainer}>{children}</div>
    </div>
  );
};
