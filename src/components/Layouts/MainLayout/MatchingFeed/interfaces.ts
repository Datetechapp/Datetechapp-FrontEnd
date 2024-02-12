import React, { MouseEventHandler } from 'react';

export interface ArrowButtonProps {
  src: string;
  alt: string;
}

export interface ButtonProps {
  onClick: MouseEventHandler;
}

export interface UserProfileCardProps {
  profile: ProfileData;
  onDelete: (id: number) => void;
  setSelectedProfileId: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface ProfileData {
  id: number;
  name: string;
  age: string;
  city: string;
  country: string;
  img: string;
  isLikedbyYou: boolean;
  likeYou: boolean;
  video: string;
}

export interface ModalMatchedProps {
  selectedProfileId: number | null;
  profilesData: ProfileData[];
  closeMatchedModal: () => void;
}
