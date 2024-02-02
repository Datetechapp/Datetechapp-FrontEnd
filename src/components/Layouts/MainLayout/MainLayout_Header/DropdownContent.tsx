import React, { useState } from 'react';
import playButtonIcon from '../../../../assets/feed/PlayIcon.svg';
import contactIcon from '../../../../assets/feed/Contact.svg';
import questionIcon from '../../../../assets/feed/Question.svg';
import globeIcon from '../../../../assets/feed/Globe.svg';
import logoutIcon from '../../../../assets/feed/Logout.svg';
import ModalPremium from './ModalPremium/ModalPremium';

type DropdownContentProps = {
  closeDropdown: () => void;
};

const DropdownContent: React.FC<DropdownContentProps> = ({ closeDropdown }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModalPremium = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLinkClick = () => {
    closeDropdown();
  };

  return (
    <div style={{ display: 'flex' }} className="dropdown-content" id="dropdown">
      <button
        className="dropdown-button-premium"
        onClick={() => openModalPremium()}
      >
        Try Premium
      </button>
      <div className="dropdown-options">
        <a href="#" className="dropdown-item" onClick={handleLinkClick}>
          <img src={playButtonIcon} alt="for you" />
          <span>For you</span>
        </a>
        <a href="#" className="dropdown-item" onClick={handleLinkClick}>
          <img src={contactIcon} alt="view profile" />
          <span>View Profile</span>
        </a>
        <a href="#" className="dropdown-item" onClick={handleLinkClick}>
          <img src={questionIcon} alt="feedback and help" />
          <span>Feedback and help</span>
        </a>
        <a href="#" className="dropdown-item" onClick={handleLinkClick}>
          <img src={globeIcon} alt="english" />
          <span>English</span>
        </a>
      </div>

      <a
        href="#"
        className="dropdown-item logout_item"
        onClick={handleLinkClick}
      >
        <img src={logoutIcon} alt="log out" />
        <span>Log out</span>
      </a>

      {isModalOpen && (
        <ModalPremium isOpen={isModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default DropdownContent;
