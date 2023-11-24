import { useState, useEffect } from "react";
import styles from "./Filters.module.css";
import locationIcon from "../../../../assets/user/location.svg";
import genderIcon from "../../../../assets/user/gender.svg";
import interestsIcon from "../../../../assets/feed/interests.svg";
import lookingForIcon from "../../../../assets/feed/looking-for.svg";
import usersIcon from "../../../../assets/feed/users.svg";
import arrowIcon from "../../../../assets/feed/arrow.svg";

const Filters = () => {
  const [expandedSection, setExpandedSection] = useState("");
  const [locationRange, setLocationRange] = useState(10);
  const [ageRange, setAgeRange] = useState([18, 100]);

  const toggleExpand = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  const updateAgeRange = (value1: number, value2: number) => {
    setAgeRange([value1, value2])
    setBackgroundColorAge(value1, value2);
    
  };

  useEffect(() => {
    setBackgroundColorAge(ageRange[0], ageRange[1] );
  }, []);

  const setBackgroundColorAge = (value1: number, value2: number) => {
    const min = 18;
    const max = 100;

    const normalizedValue1 = ((value1 - min) / (max - min)) * 100;
    const normalizedValue2 = ((value2 - min) / (max - min)) * 100;
    const gradient2 = `linear-gradient(to right, #5F4F7F ${normalizedValue1}%, #C896EF ${normalizedValue1}%, #C896EF  ${normalizedValue2}%, #5F4F7F ${normalizedValue2}%)`;

    const input2 = document.getElementById("age-range-1");

    input2?.style.setProperty("--ageSlidLinGra", gradient2);
  }

  const updateLocationRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedValue = (Number(event.target.value) / 20) * 100;
    setLocationRange(Number(event.target.value));
    setBackgroundColor(normalizedValue);
  };

  const setBackgroundColor = (normalizedValue: number) => {
    const inputLocation= document.getElementById("location-range");
    inputLocation?.style.setProperty(
      "--sliderLinGra",
      `linear-gradient(to right, #C896EF ${normalizedValue}%, #5F4F7F ${normalizedValue}%)`
    );
  };

  useEffect(() => {
    const normalizedValue = (Number(locationRange) / 20) * 100;
    setBackgroundColor(normalizedValue);
  }, []);

  const sliderStyle = {
    background: `var(--sliderLinGra)`,
  };

  const ageSliderStyle = {
    background: `var(--ageSlidLinGra)`,
  };

  const [selectedOption, setSelectedOption] = useState("Women");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
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
            <img
              className={styles.icon}
              src={locationIcon}
              alt="location icon"
            />
            <span>Geolocation</span>
          </div>

          <div className={styles.bar}>
            <input
              type="range"
              id="location-range"
              min="0"
              max="20"
              className={styles.location_range}
              onChange={updateLocationRange}
              value={locationRange}
              step="5"
              style={sliderStyle}
            />
            <label className={styles.location_label} htmlFor="location-range">
              &gt;{locationRange} km
            </label>
          </div>
        </div>

        <div
          className={`${styles.filters_section}  ${styles.filters_interested_in}`}
        >
          <div className={styles.containerIcon}>
            <img className={styles.icon} src={genderIcon} alt="gender icon" />
            <span>I am interested in</span>
          </div>

          <div className={styles.interests_container}>
          <label
            className={
              selectedOption === "Women" ? styles.active_interests : ""
            }
          >
            <input
              type="radio"
              value="Women"
              checked={selectedOption === "Women"}
              onChange={handleOptionChange}
            />
            Women
          </label>

          <label
            className={selectedOption === "Men" ? styles.active_interests : ""}
          >
            <input
              type="radio"
              value="Men"
              checked={selectedOption === "Men"}
              onChange={handleOptionChange}
            />
            Men
          </label>

          <label
            className={
              selectedOption === "Everyone" ? styles.active_interests : ""
            }
          >
            <input
              type="radio"
              value="Everyone"
              checked={selectedOption === "Everyone"}
              onChange={handleOptionChange}
            />
            Everyone
          </label>
        </div>
        </div>

        

        <div className={`${styles.filters_section}  ${styles.filters_age}`}>
          <div className={styles.containerIcon}>
            <img className={styles.icon} src={usersIcon} alt="users icon" />
            <span>Age</span>
          </div>

          <div className={styles.bar}>
            <input
              type="range"
              id="age-range-0"
              min="18"
              max="100"
              className={styles.location_range}
              onChange={(e) => updateAgeRange(Number(e.target.value), ageRange[1])}
              value={ageRange[0]}
              step="1"
              
            />
            <input
              type="range"
              id="age-range-1"
              min="18"
              max="100"
              className={`${styles.location_range} ${styles.overlay}`}
              onChange={(e) => updateAgeRange(ageRange[0], Number(e.target.value))}
              value={ageRange[1]}
              step="1"
              style={ageSliderStyle}
            />
            <label className={styles.age_label} htmlFor="age-range">
              <div>{ageRange[0]} </div> <div>{ageRange[1]}</div>
            </label>
          </div>
        </div>

        <div
          className={`${styles.filters_section}  ${styles.filters_looking_for}`}
          onClick={() => toggleExpand("lookingFor")}
        >
          <div className={styles.container_line}>
            <div className={styles.containerIcon}>
              <img
                className={styles.icon}
                src={lookingForIcon}
                alt="looking for icon"
              />
              <span>Looking for</span>
            </div>

            <img
              className={styles.arrowIcon}
              src={arrowIcon}
              alt="arrow icon"
            />
          </div>
        </div>
        {expandedSection === "lookingFor" && (
          <div>{/* код для отображения предпочтений по поиску */}</div>
        )}

        <div
          className={`${styles.filters_section}  ${styles.filters_interests}`}
          onClick={() => toggleExpand("interests")}
        >
          <div className={styles.container_line}>
            <div className={styles.containerIcon}>
              <img
                className={styles.icon}
                src={interestsIcon}
                alt="interests icon"
              />
              <span>Interests</span>
            </div>
            <img
              className={styles.arrowIcon}
              src={arrowIcon}
              alt="arrow icon"
            />
          </div>
        </div>
        {expandedSection === "interests" && (
          <div>{/* код для отображения интересов пользователя */}</div>
        )}
      </div>
    </>
  );
};

export default Filters;
