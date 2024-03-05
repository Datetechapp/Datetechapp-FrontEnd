import React, { Dispatch, FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlayButtonIcon } from '../../../../../assets/feed/PlayIcon.svg';
import { ReactComponent as ContactIcon } from '../../../../../assets/feed/Contact.svg';
import { ReactComponent as QuestionIcon } from '../../../../../assets/feed/Question.svg';
import { ReactComponent as GlobeIcon } from '../../../../../assets/feed/Globe.svg';
import { ReactComponent as LogoutIcon } from '../../../../../assets/feed/Logout.svg';
import { useAppSelector } from 'hooks/hooks';
import { getLanguage } from 'store/language/selectors';
import styles from './Dropdown.module.css';

type MenuItem = {
  path: string;
  icon: React.ElementType;
  text: string;
};

type DropdownContentProps = {
  closeDropdown: () => void;
  setModalOpen: (isOpen: boolean) => void;
  setLanguageModalVisible: Dispatch<React.SetStateAction<boolean>>;
};

const DropdownContent: FC<DropdownContentProps> = ({
  closeDropdown,
  setModalOpen,
  setLanguageModalVisible,
}) => {
  const openModalPremium = () => {
    setModalOpen(true);
    closeDropdown();
  };

  const languageName = useAppSelector(getLanguage);

  const handleLinkClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLAnchorElement) {
      closeDropdown();
    }
  };

  const menuItems: MenuItem[] = [
    { path: '/feed', icon: PlayButtonIcon, text: 'For you' },
    { path: '/profile', icon: ContactIcon, text: 'View Profile' },
    { path: '/support/faq', icon: QuestionIcon, text: 'Feedback and help' },
  ];

  return (
    <>
      <div
        style={{ display: 'flex' }}
        className={styles.dropdownContent}
        id="dropdown"
        onClick={handleLinkClick}
      >
        <button
          className={styles.dropdownButtonPremium}
          onClick={openModalPremium}
        >
          Try Premium
        </button>
        <div className={styles.dropdownOptions}>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className={styles.dropdownItem}>
              <item.icon />
              <span>{item.text}</span>
            </Link>
          ))}
          <div
            className={styles.dropdownItem}
            onClick={() => setLanguageModalVisible(true)}
          >
            <GlobeIcon />
            <span>{languageName}</span>
          </div>
        </div>

        <Link
          to="/logout"
          className={`${styles.dropdownItem} ${styles.logoutItem}`}
        >
          <LogoutIcon />
          <span>Log out</span>
        </Link>
      </div>
    </>
  );
};

export default DropdownContent;
