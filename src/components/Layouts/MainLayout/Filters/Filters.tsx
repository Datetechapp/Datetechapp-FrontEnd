import { useState } from "react";
import styles from "./Filters.module.css";
import locationIcon from "../../../../assets/user/location.svg";
import genderIcon from "../../../../assets/user/gender.svg";
import interestsIcon from "../../../../assets/feed/interests.svg";
import lookingForIcon from "../../../../assets/feed/looking-for.svg";
import usersIcon from "../../../../assets/feed/users.svg";
import arrowIcon from "../../../../assets/feed/arrow.svg";

const Filters = () => {
  const [expandedSection, setExpandedSection] = useState("");

  const toggleExpand = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  return (
    <>
    <div className={styles.filters_header}>
        <span className={styles.filters_title}>Filters</span>
        <span className={styles.filters_clear_button}>Clear</span>
    </div>
    <div className={styles.filters_container}>
      <div
        className={`${styles.filters_section}  ${styles.filters_geolocation}`}
      >
        <div className={styles.containerIcon}>
        <img className={styles.icon} src={locationIcon} alt="location icon"/>
        <span>Geolocation</span>
        </div>
        
      </div>

      <div>{/* код для работы с геолокацией */}</div>

      <div
        className={`${styles.filters_section}  ${styles.filters_interested_in}`}
      >
        <div className={styles.containerIcon}>
        <img className={styles.icon} src={genderIcon} alt="gender icon"/>
        <span>I am interested in</span>
        </div>
        
      </div>

      <div>{/* код для работы с интересами пользователя */}</div>

      <div className={`${styles.filters_section}  ${styles.filters_age}`}>
        <div className={styles.containerIcon}>
        <img className={styles.icon} src={usersIcon} alt="users icon"/>
        <span>Age</span>
        </div>
      
      </div>
      <div>{/* код для отображения возраста пользователя */}</div>

      <div
        className={`${styles.filters_section}  ${styles.filters_looking_for}`}
        onClick={() => toggleExpand("lookingFor")}
      >
        <div className={styles.containerIcon}>
        <img className={styles.icon} src={lookingForIcon} alt="looking for icon"/>
        <span>Looking for</span>
        </div>
        
        <img className={styles.arrowIcon} src={arrowIcon} alt="arrow icon"/>
      </div>
      {expandedSection === "lookingFor" && (
        <div>{/* код для отображения предпочтений по поиску */}</div>
      )}

      <div
        className={`${styles.filters_section}  ${styles.filters_interests}`}
        onClick={() => toggleExpand("interests")}
      >
        <div className={styles.containerIcon}><img className={styles.icon} src={interestsIcon} alt="interests icon"/>
        <span>Interests</span></div>
        
        <img className={styles.arrowIcon} src={arrowIcon} alt="arrow icon"/>
      </div>
      {expandedSection === "interests" && (
        <div>{/* код для отображения интересов пользователя */}</div>
      )}
    </div>
    </>
  );
};

export default Filters;
