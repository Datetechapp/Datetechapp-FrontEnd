import React, { useState } from 'react';
import styles from '../Filters.module.css';
import genderIcon from '../../../../../assets/user/gender.svg';

const InterestedInFilter = () => {
  const [selectedOption, setSelectedOption] = useState('Women');
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className={`${styles.filters_section}  ${styles.filters_interested_in}`}
    >
      <div className={styles.containerIcon}>
        <img className={styles.icon} src={genderIcon} alt="gender icon" />
        <span>I am interested in</span>
      </div>

      <div className={styles.interests_container}>
        <label
          className={selectedOption === 'Women' ? styles.active_interests : ''}
          htmlFor="women-option"
        >
          <input
            type="radio"
            value="Women"
            id="women-option"
            name="interested-in"
            checked={selectedOption === 'Women'}
            onChange={handleOptionChange}
          />
          Women
        </label>

        <label
          className={selectedOption === 'Men' ? styles.active_interests : ''}
          htmlFor="men-option"
        >
          <input
            type="radio"
            value="Men"
            id="men-option"
            name="interested-in"
            checked={selectedOption === 'Men'}
            onChange={handleOptionChange}
          />
          Men
        </label>

        <label
          className={
            selectedOption === 'Everyone' ? styles.active_interests : ''
          }
          htmlFor="everyone-option"
        >
          <input
            type="radio"
            value="Everyone"
            id="everyone-option"
            name="interested-in"
            checked={selectedOption === 'Everyone'}
            onChange={handleOptionChange}
          />
          Everyone
        </label>
      </div>
    </div>
  );
};

export default InterestedInFilter;
