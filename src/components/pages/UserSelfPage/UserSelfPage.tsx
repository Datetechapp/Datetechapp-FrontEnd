import { FC } from 'react';
import avatar from '../../../assets/user/avatar Ivan.svg';
import './index.css';
import gender from '../../../assets/user/gender.svg';
import sign from '../../../assets/user/zodiac/tau.svg';
import location from '../../../assets/user/location.svg';

export const UserSelfPage: FC = () => {
  return (
    <div className="user_page__wrapper">
      <div className="user_page_short_info">
        <img src={avatar} alt="avatar" className="user_main_avatar" />
        <div className="user_page_username">
          <h2>Ivan, 34</h2>
        </div>
        <div className="user_page_gender">
          Men <img src={gender} alt="" />
        </div>
        <div className="user_page_zodiac_sign">
          Taurus <img src={sign} alt="" />
        </div>
        <div className="user_page_city">
          France, Paris <img src={location} alt="" />
        </div>
      </div>
    </div>
  );
};
