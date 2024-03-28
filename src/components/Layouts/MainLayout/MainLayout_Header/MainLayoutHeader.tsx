import { FC, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import DropdownContent from './DropdownContent/DropdownContent';
import bell from '../../../../assets/feed/bell.svg';
import calendar from '../../../../assets/feed/calendar.svg';
import arrow from '../../../../assets/feed/arrow.svg';
import logo from '../../../../assets/ModalAuth/logo.svg';
import avatar from '../../../../assets/user/avatarIvan.svg';
import ModalPremium from './ModalPremium/ModalPremium';
import ModalNotification from 'components/ModalNotification/ModalNotification';
import { LanguageSelect } from 'components/Header/LanguageSelect/LanguageSelect';

import styles from './mainLayoutHeader.module.css';

export const MainLayoutHeader: FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isPremiumModalOpen, setPremiumModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotifiicationModalOpen] =
    useState(false);
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  const { pathname } = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOpenNotificationModal = () => {
    setIsNotifiicationModalOpen(!isNotificationModalOpen);
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

  const closePremiumModal = () => {
    setPremiumModalOpen(false);
  };
  const closeNotificationModal = () => {
    setIsNotifiicationModalOpen(false);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.headerInfo}>
        <div className={styles.headerIcons}>
          <button
            className={`${styles.headerIcon} ${
              isNotificationModalOpen || pathname === '/notification'
                ? styles.bellActive
                : ''
            }`}
            onClick={handleOpenNotificationModal}
          >
            <img src={bell} alt="notifications" />
          </button>
          <button className={(styles.headerCalendar, styles.headerIcon)}>
            <img src={calendar} alt="calendar" />
          </button>
        </div>

        <button className={styles.userButton} onClick={handleDropdownClick}>
          <div className={styles.userInfo}>
            <div className={styles.userPersonalInfo}>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? styles.activeSelfLink : styles.deactiveSelfLink
                }
              >
                <div className={styles.navPanelUserPic}>
                  <img src={avatar} alt="avatar" />{' '}
                </div>
              </NavLink>
              <div>
                <div className={styles.navPanelUserName}>Ivan</div>
                <div className={styles.navPanelUserCity}>Now in Paris</div>
              </div>
            </div>

            <img
              src={arrow}
              alt="button arrow"
              className={` ${styles.userImg} ${
                dropdownVisible ? styles.arrowRotate : ''
              }`}
            />
          </div>
        </button>

        {dropdownVisible && !isLanguageModalVisible ? (
          <DropdownContent
            closeDropdown={closeDropdown}
            setModalOpen={setPremiumModalOpen}
            setLanguageModalVisible={setLanguageModalVisible}
          />
        ) : null}
        {isPremiumModalOpen && (
          <ModalPremium
            isOpen={isPremiumModalOpen}
            closeModal={closePremiumModal}
          />
        )}
        <ModalNotification
          isOpen={isNotificationModalOpen}
          onClose={closeNotificationModal}
        />
      </div>
      {isLanguageModalVisible && (
        <div className={styles.languageModal}>
          <div className={styles.languageModalHeader}>
            <img
              src={arrow}
              alt="arrow"
              onClick={() => setLanguageModalVisible(false)}
            />
            <p>Language</p>
          </div>
          <LanguageSelect
            isActiveMenu={isLanguageModalVisible}
            setIsActiveMenu={setLanguageModalVisible}
          />
        </div>
      )}
    </div>
  );
};
