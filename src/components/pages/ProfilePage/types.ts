import { TooltipPlacement } from 'antd/es/tooltip';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';

export type ProfileContentT = {
  setOpenVideoList: Dispatch<SetStateAction<boolean>>;
  openVideoList: boolean;
  title: ReactNode;
  selectedButton: string;
};

export type VideoItemT = {
  id: string;
  img: string;
  src: string;
  isPlaying: boolean;
};

export type VideoListT = {
  setOpenVideoList: Dispatch<SetStateAction<boolean>>;
  selectedVideo: string;
  selectedButton: string;
};

export type ProfileCardT = {
  children: ReactNode;
};

export type PopoverT = {
  selectedButton: string;
  placement: TooltipPlacement;
  buttonStyle?: React.CSSProperties;
  buttonContent?: ReactNode;
  overlayStyle?: React.CSSProperties;
};
export type ContentButtonT = {
  icon: string;
  text: string;
};
