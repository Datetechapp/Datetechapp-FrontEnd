import { Button, Popover } from 'antd';
import { FC } from 'react';
import style from './PopoverItem.module.css';
import { useLocation } from 'react-router-dom';
import { PopoverT } from '../../types';
import { contentProfile, contentMyVideo, contentHiddenVideo } from './content';

export const PopoverItem: FC<PopoverT> = ({
  selectedButton,
  placement,
  buttonStyle,
  buttonContent,
  overlayStyle,
}) => {
  const location = useLocation();
  let content;

  if (location.pathname === '/my-profile') {
    if (selectedButton === 'Hidden') {
      content = contentHiddenVideo;
    } else if (selectedButton === 'My Video') {
      content = contentMyVideo;
    } else {
      content = contentProfile;
    }
  } else {
    content = contentProfile;
  }

  return (
    <Popover
      content={<div className={style.popoverContainer}>{content}</div>}
      trigger="click"
      arrow={false}
      placement={placement}
      overlayStyle={overlayStyle}
      overlayInnerStyle={{
        padding: '8px',
        width: '200px',
      }}
    >
      <Button style={buttonStyle}>{buttonContent}</Button>
    </Popover>
  );
};
