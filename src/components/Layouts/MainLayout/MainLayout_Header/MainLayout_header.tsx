import { FC, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import bell from '../../../../assets/feed/bell.svg';
import calendar from '../../../../assets/feed/calendar.svg';
import arrow from '../../../../assets/feed/arrow.svg';
import playButtonIcon from '../../../../assets/feed/PlayIcon.svg';
import contactIcon from '../../../../assets/feed/Contact.svg';
import questionIcon from '../../../../assets/feed/Question.svg';
import globeIcon from '../../../../assets/feed/Globe.svg';
import logoutIcon from '../../../../assets/feed/Logout.svg';
import logo from '../../../../assets/ModalAuth/logo.svg';
import avatar from '../../../../assets/user/avatar Ivan.svg';
import './index.css';

export const MainLayoutHeader: FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header__wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__info">
        <div className="header_icons">
          <button className="header_bell header_icon">
            <img src={bell} alt="notifications" />
          </button>
          <button className="header_calendar header_icon">
            <img src={calendar} alt="calendar" />
          </button>
        </div>

        <button className="user_button" onClick={handleDropdownClick}>
          <div className="user__info">
            <div className="user_personal_info">
              <NavLink
                to="self"
                className={({ isActive }) =>
                  isActive ? 'active_self_link' : 'deactive_self_link'
                }
              >
                <div className="nav_panel_user_pic">
                  {' '}
                  <img src={avatar} alt="avatar" />{' '}
                </div>
              </NavLink>
              <div>
                <div className="nav_panel_user_name">Ivan</div>
                <div className="nav_panel_user_city">Now in Paris</div>
              </div>
            </div>

            <img src={arrow} alt="button arrow" className="user_img" />
          </div>
        </button>
        {dropdownVisible && (
          <div
            style={{ display: 'flex' }}
            className="dropdown-content"
            id="dropdown"
          >
            <button className="dropdown-button-premium">Try Premium</button>
            <div className="dropdown-options">
              <a href="#" className="dropdown-item">
                <img src={playButtonIcon} alt="for you" />
                <span>For you</span>
              </a>
              <a href="#" className="dropdown-item">
                <img src={contactIcon} alt="view profile" />
                <span>View Profile</span>
              </a>
              <a href="#" className="dropdown-item">
                <img src={questionIcon} alt="feedback and help" />
                <span>Feedback and help</span>
              </a>
              <a href="#" className="dropdown-item">
                <img src={globeIcon} alt="english" />
                <span>English</span>
              </a>
            </div>

            <a href="#" className="dropdown-item logout_item">
              <img src={logoutIcon} alt="log out" />
              <span>Log out</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
