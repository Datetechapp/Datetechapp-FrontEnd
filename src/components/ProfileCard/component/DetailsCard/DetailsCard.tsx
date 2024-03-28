import { useState } from 'react';
import style from './DetailsCard.module.css';
import LikeButton from '../LikeButton/LikeButton';
import message from './../../../../assets/Profile/message.svg';
import { PopoverItem } from 'components/pages/ProfilePage/components/PopoverItem';
import dots from './../../../../assets/Profile/dots.svg';

export const DetailsCard = () => {
  const [match, setMatch] = useState(false);

  return (
    <div className={style.cardInfoDetails}>
      <LikeButton match={match} setMatch={setMatch} />
      {match && (
        <img
          src={message}
          alt="message"
          className={match ? `${style.message}` : ''}
        />
      )}
      <PopoverItem
        selectedButton=""
        placement={'bottom'}
        overlayStyle={{ marginTop: '15px' }}
        buttonStyle={{
          minWidth: '32px',
          borderRadius: '50%',
          background: '#201B27',
          border: 'none',
        }}
        buttonContent={<img src={dots} alt="dots" />}
      />
    </div>
  );
};
