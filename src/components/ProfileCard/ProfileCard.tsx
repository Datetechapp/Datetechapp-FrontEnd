import style from './ProfileCard.module.css';
import avatar from '../../assets/user/avatar Ivan.svg';
import capricorn from './../../assets/Profile/сapricorn.svg';
import dots from './../../assets/Profile/dots.svg';
import Button from '@mui/material/Button';
import { useState } from 'react';
import likeButton from './../../assets/Profile/likeButton.svg';
import LikeButton from './component/LikeButton/LikeButton';
import { InterestProfile } from './component/InterestProfile';

export const ProfileCard = () => {
  const [fullText, setFullText] = useState(false);

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
              <LikeButton />
              <button className={style.cardButtonDetails}>
                <img src={dots} alt="dots" />
              </button>
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
