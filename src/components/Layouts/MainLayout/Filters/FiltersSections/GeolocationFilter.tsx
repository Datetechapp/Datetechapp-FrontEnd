import React, { useState, useEffect } from 'react';
import styles from '../Filters.module.css';
import locationIcon from '../../../../../assets/user/location.svg';
import { min } from 'lodash';

const Geolocation = () => {
  const maxRange = 20;
  const minRange = 0;
  const [locationRange, setLocationRange] = useState(10);
  const updateLocationRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedValue = (Number(event.target.value) / 20) * 100;

    setLocationRange(Number(event.target.value));
    setBackgroundColor(normalizedValue);
  };

  const setBackgroundColor = (normalizedValue: number) => {
    const inputLocation = document.getElementById('location-range');

    inputLocation?.style.setProperty(
      '--sliderLinGra',
      `linear-gradient(to right, #C896EF ${normalizedValue}%, #5F4F7F ${normalizedValue}%)`,
    );
  };

  useEffect(() => {
    const normalizedValue = (Number(locationRange) / 20) * 100;

    setBackgroundColor(normalizedValue);
  }, []);

  const sliderStyle = {
    background: `var(--sliderLinGra)`,
  };

  const renderSymbol = () => {
    return locationRange === maxRange ? '> ' : '< ';
  };

  return (
    <div className={`${styles.filters_section}  ${styles.filters_geolocation}`}>
      <div className={styles.containerIcon}>
        <img className={styles.icon} src={locationIcon} alt="location icon" />
        <span>Geolocation</span>
      </div>

      <div className={styles.bar}>
        <input
          type="range"
          id="location-range"
          name="location-range"
          min={minRange}
          max={maxRange}
          className={`${styles.location_range} ${styles.range}`}
          onChange={updateLocationRange}
          value={locationRange}
          step="2.5"
          style={sliderStyle}
        />
        <label className={styles.location_label} htmlFor="location-range">
        {locationRange === minRange ? null : renderSymbol()}{locationRange} km
        </label>
      </div>
    </div>
  );
};

export default Geolocation;
