import { useState } from "react";
import styles from "./Filters.module.css";

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
        <span>Geolocation</span>
      </div>

      <div>{/* код для работы с геолокацией */}</div>

      <div
        className={`${styles.filters_section}  ${styles.filters_interested_in}`}
      >
        <span>I am interested in</span>
      </div>

      <div>{/* код для работы с интересами пользователя */}</div>

      <div className={`${styles.filters_section}  ${styles.filters_age}`}>
        <span>Age</span>
      </div>
      <div>{/* код для отображения возраста пользователя */}</div>

      <div
        className={`${styles.filters_section}  ${styles.filters_looking_for}`}
        onClick={() => toggleExpand("lookingFor")}
      >
        <span>Looking for</span>
        <span>❯</span>
      </div>
      {expandedSection === "lookingFor" && (
        <div>{/* код для отображения предпочтений по поиску */}</div>
      )}

      <div
        className={`${styles.filters_section}  ${styles.filters_interests}`}
        onClick={() => toggleExpand("interests")}
      >
        <span>Interests</span>
        <span>❯</span>
      </div>
      {expandedSection === "interests" && (
        <div>{/* код для отображения интересов пользователя */}</div>
      )}
    </div>
    </>
  );
};

export default Filters;
