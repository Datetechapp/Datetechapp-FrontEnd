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
  }, [closeDropdown]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="headerWrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="headerInfo">
        <div className="headerIcons">
          <button className="headerBell headerIcon">
            <img src={bell} alt="notifications" />
          </button>
          <button className="headerCalendar headerIcon">
            <img src={calendar} alt="calendar" />
          </button>
        </div>

        <button className="userButton" onClick={handleDropdownClick}>
          <div className="userInfo">
            <div className="userPersonalInfo">
              <NavLink
                to="self"
                className={({ isActive }) =>
                  isActive ? 'activeSelfLink' : 'deactiveSelfLink'
                }
              >
                <div className="navPanelUserPic">
                  {' '}
                  <img src={avatar} alt="avatar" />{' '}
                </div>
              </NavLink>
              <div>
                <div className="navPanelUserName">Ivan</div>
                <div className="navPanelUserCity">Now in Paris</div>
              </div>
            </div>

            <img
              src={arrow}
              alt="button arrow"
              className={`userImg ${dropdownVisible ? `arrowRotate` : ''}`}
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
