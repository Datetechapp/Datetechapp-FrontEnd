import style from './ProfileCard.module.css';
import avatar from '../../assets/user/avatarIvan.svg';
import capricorn from './../../assets/Profile/сapricorn.svg';
import dots from './../../assets/Profile/dots.svg';
import { useState } from 'react';
import LikeButton from './component/LikeButton/LikeButton';
import { InterestProfile } from './component/InterestProfile';
import message from './../../assets/Profile/message.svg';
import { PopoverItem } from 'components/pages/ProfilePage/components/PopoverItem';

export const ProfileCard = () => {
  const [fullText, setFullText] = useState(false);
  const [match, setMatch] = useState(false);

  const text =
    'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами';
  const shortText = text.substring(0, 120) + '...';

  return (
    <div className={style.cardContainer}>
      <div className={style.cardBox}>
        <div className={style.cardBoxHeader}>
          <div className={style.cardInfo}>
            <img src={avatar} alt="avatar" className={style.cardImg} />
            <div className={style.statusProfile}>
              <span className={style.status}>Online</span>
              <div className={style.detailsProfile}>
                <span className={style.nameProfive}>Ivan, </span>
                <span className={style.ageProfile}>32</span>
                <img src={capricorn} alt="capricorn" />
                <span className={style.locationProfile}>Now in Paris</span>
              </div>
            </div>
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
          </div>
        </div>
        <div className={style.cardBoxContent}>
          <div className={style.cardBoxDescription}>
            <span className={style.cardBoxText}>
              {fullText ? text : shortText}
            </span>
            <button onClick={() => setFullText(!fullText)}>
              {!fullText ? 'Read more' : '...Hide'}
            </button>
          </div>
          <InterestProfile />
        </div>
      </div>
    </div>
  );
};
