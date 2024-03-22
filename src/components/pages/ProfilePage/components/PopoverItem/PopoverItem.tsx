import { Button, Popover } from 'antd';
import React, { FC, ReactNode } from 'react';
import style from './PopoverItem.module.css';
import copyLinkIcon from './../../../../../assets/Profile/copy link.svg';
import reportProfileIcon from './../../../../../assets/Profile/reportProfile.svg';
import { TooltipPlacement } from 'antd/es/tooltip';
type PopoverT = {
  placement: TooltipPlacement;
  buttonStyle?: React.CSSProperties;
  buttonContent?: ReactNode;
  overlayStyle?: React.CSSProperties;
};

const content = (
  <div className={style.popoverContainer}>
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        border: 'none',
        borderBottom: '1px solid #E1DBED',
        borderRadius: 'inherit',
        boxShadow: 'none',
        width: '100%',
        padding: '4px 8px',
      }}
    >
      <img src={copyLinkIcon} alt="copyLinkIcon" />
      <span className={style.copyLinkSpan}>Copy link</span>
    </Button>
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        border: 'none',
        boxShadow: 'none',
        padding: '4px 8px',
      }}
    >
      <img src={reportProfileIcon} alt="reportProfileIcon" />
      <span className={style.reportLinkSpan}>Report profile</span>
    </Button>
  </div>
);
export const PopoverItem: FC<PopoverT> = ({
  placement,
  buttonStyle,
  buttonContent,
  overlayStyle,
}) => {
  return (
    <Popover
      content={content}
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
