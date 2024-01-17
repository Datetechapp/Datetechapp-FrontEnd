import { useState } from 'react';
import styles from './Filters.module.css';
import interestsIcon from '../../../../assets/feed/interests.svg';
import lookingForIcon from '../../../../assets/feed/looking-for.svg';
import Geolocation from './FiltersSections/GeolocationFilter';
import InterestedInFilter from './FiltersSections/InterestedInFilter';
import AgeFilter from './FiltersSections/AgeFilter';
import ModalFilters from './FiltersSections/ModalFilters';

export const Filters = () => {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleExpand = (category: string) => {
    setExpandedSection(category);
  };

  const handleClear = () => {
    //прописать логику очистки фильтров, через Redux?
  };

  return (
    <>
      <div className={styles.filters_header}>
        <span className={styles.filters_title}>Filters</span>
        <button className={styles.filters_clear_button} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className={styles.filters_container}>
        <Geolocation />

        <InterestedInFilter />

        <AgeFilter />

        <ModalFilters
          category="lookingFor"
          icon={lookingForIcon}
          label="Looking for"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
          setExpandedSection={setExpandedSection}
        />
        <ModalFilters
          category="interests"
          icon={interestsIcon}
          label="Interests"
          expandedSection={expandedSection}
          toggleExpand={toggleExpand}
          setExpandedSection={setExpandedSection}
        />
      </div>
    </>
  );
};

export default Filters;
