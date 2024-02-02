import { useState, useEffect } from 'react';
import styles from '../Filters.module.css';
import usersIcon from '../../../../../assets/feed/users.svg';

const AgeFilter = () => {
  const [ageRange, setAgeRange] = useState([18, 100]);
  const updateAgeRange = (value1: number, value2: number) => {
    setAgeRange([value1, value2]);
    setBackgroundColorAge(value1, value2);
  };

  useEffect(() => {
    setBackgroundColorAge(ageRange[0], ageRange[1]);
  }, []);

  const setBackgroundColorAge = (value1: number, value2: number) => {
    const min = 18;
    const max = 100;

    const normalizedValue1 = ((value1 - min) / (max - min)) * 100;
    const normalizedValue2 = ((value2 - min) / (max - min)) * 100;
    const gradient2 = `linear-gradient(to right, #5F4F7F ${normalizedValue1}%, #C896EF ${normalizedValue1}%, #C896EF  ${normalizedValue2}%, #5F4F7F ${normalizedValue2}%)`;

    const input2 = document.getElementById('age-range-1');

    input2?.style.setProperty('--ageSlidLinGra', gradient2);
  };

  const ageSliderStyle = {
    background: `var(--ageSlidLinGra)`,
  };

  return (
    <div className={`${styles.filters_section}  ${styles.filters_age}`}>
      <div className={styles.containerIcon}>
        <img className={styles.icon} src={usersIcon} alt="users icon" />
        <span>Age</span>
      </div>

      <div className={styles.bar}>
        <input
          type="range"
          id="age-range-0"
          name="age-range"
          min="18"
          max="100"
          className={`${styles.age_range} ${styles.range}`}
          onChange={(e) => updateAgeRange(Number(e.target.value), ageRange[1])}
          value={ageRange[0]}
          step="1"
        />
        <input
          type="range"
          id="age-range-1"
          name="age-range"
          min="18"
          max="100"
          className={`${styles.age_range} ${styles.overlay} ${styles.range}`}
          onChange={(e) => updateAgeRange(ageRange[0], Number(e.target.value))}
          value={ageRange[1]}
          step="1"
          style={ageSliderStyle}
        />
        <label className={styles.age_label} htmlFor="age-range-0">
          <div>{ageRange[0]} </div> <div>{ageRange[1]}</div>
        </label>
      </div>
    </div>
  );
};

export default AgeFilter;
