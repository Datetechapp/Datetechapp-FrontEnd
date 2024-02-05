import React from "react";
import playButtonIcon from "../../../../../assets/feed/PlayIcon.svg";
import contactIcon from "../../../../../assets/feed/Contact.svg";
import questionIcon from "../../../../../assets/feed/Question.svg";
import globeIcon from "../../../../../assets/feed/Globe.svg";
import logoutIcon from "../../../../../assets/feed/Logout.svg";
import styles from "./Dropdown.module.css";

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

  const handleLinkClick = () => {
    closeDropdown();
  };

  return (
    <>
      <div
        style={{ display: "flex" }}
        className={styles.dropdown_content}
        id="dropdown"
      >
        <button
          className={styles.dropdown_button_premium}
          onClick={() => openModalPremium()}
        >
          Try Premium
        </button>
        <div className={styles.dropdown_options}>
          <a
            href="#"
            className={styles.dropdown_item}
            onClick={handleLinkClick}
          >
            <img src={playButtonIcon} alt="for you" />
            <span>For you</span>
          </a>
          <a
            href="#"
            className={styles.dropdown_item}
            onClick={handleLinkClick}
          >
            <img src={contactIcon} alt="view profile" />
            <span>View Profile</span>
          </a>
          <a
            href="#"
            className={styles.dropdown_item}
            onClick={handleLinkClick}
          >
            <img src={questionIcon} alt="feedback and help" />
            <span>Feedback and help</span>
          </a>
          <a
            href="#"
            className={styles.dropdown_item}
            onClick={handleLinkClick}
          >
            <img src={globeIcon} alt="english" />
            <span>English</span>
          </a>
        </div>

        <a
          href="#"
          className={`${styles.dropdown_item} ${styles.logout_item}`}
          onClick={handleLinkClick}
        >
          <img src={logoutIcon} alt="log out" />
          <span>Log out</span>
        </a>
      </div>
    </>
  );
};

export default DropdownContent;
