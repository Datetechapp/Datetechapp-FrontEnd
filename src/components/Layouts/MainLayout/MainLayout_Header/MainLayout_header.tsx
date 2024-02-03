import { FC, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownContent from './DropdownContent/DropdownContent';
import bell from '../../../../assets/feed/bell.svg';
import calendar from '../../../../assets/feed/calendar.svg';
import arrow from '../../../../assets/feed/arrow.svg';
import logo from '../../../../assets/ModalAuth/logo.svg';
import avatar from '../../../../assets/user/avatar Ivan.svg';
import './index.css';
import ModalPremium from './ModalPremium/ModalPremium';

export const MainLayoutHeader: FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

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

  const closeModal = () => {
    setModalOpen(false);
  };

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

            <img
              src={arrow}
              alt="button arrow"
              className={`user_img ${dropdownVisible ? `arrow_rotate` : ''}`}
            />
          </div>
        </button>
        {dropdownVisible && (
          <DropdownContent
            closeDropdown={closeDropdown}
            setModalOpen={setModalOpen}
          />
        )}
        {isModalOpen && (
          <ModalPremium isOpen={isModalOpen} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};
