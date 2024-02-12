import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as PlayButtonIcon } from '../../../../../assets/feed/PlayIcon.svg';
import { ReactComponent as ContactIcon } from '../../../../../assets/feed/Contact.svg';
import { ReactComponent as QuestionIcon } from '../../../../../assets/feed/Question.svg';
import { ReactComponent as GlobeIcon } from '../../../../../assets/feed/Globe.svg';
import { ReactComponent as LogoutIcon } from '../../../../../assets/feed/Logout.svg';
import styles from './Dropdown.module.css';

type MenuItem = {
  path: string;
  icon: React.ElementType;
  text: string;
};

type DropdownContentProps = {
  closeDropdown: () => void;
  setModalOpen: (isOpen: boolean) => void;
};

const DropdownContent: React.FC<DropdownContentProps> = ({
  closeDropdown,
  setModalOpen,
}) => {
  const openModalPremium = () => {
    setModalOpen(true);
    closeDropdown();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLAnchorElement) {
      closeDropdown();
    }
  };

  const menuItems: MenuItem[] = [
    { path: '/path1', icon: PlayButtonIcon, text: 'For you' },
    { path: '/path2', icon: ContactIcon, text: 'View Profile' },
    { path: '/path3', icon: QuestionIcon, text: 'Feedback and help' },
    { path: '/path4', icon: GlobeIcon, text: 'English' },
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
