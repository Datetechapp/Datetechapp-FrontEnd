import React, { useState } from 'react';
import styles from '../Filters.module.css';
import Modal from '../Modal/Modal';
import arrowIcon from '../../../../../assets/feed/arrow.svg';

interface SelectedCheckboxesState {
  lookingFor: string[];
  interests: string[];
}

interface ModalFiltersProps {
  category: string;
  icon: string;
  label: string;
  expandedSection: string;
  toggleExpand: (category: string) => void;
  setExpandedSection: (section: string) => void;
}

const ModalFilters: React.FC<ModalFiltersProps> = ({
  category,
  icon,
  label,
  expandedSection,
  toggleExpand,
  setExpandedSection,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] =
    useState<SelectedCheckboxesState>({
      lookingFor: [],
      interests: [],
    });

  const [selectedLookingForCount, setSelectedLookingForCount] = useState(0);
  const [selectedInterestsCount, setSelectedInterestsCount] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateCheckboxes = (
    prevOptions: string[],
    value: string,
    setCount: (count: number) => void,
  ): string[] => {
    if (prevOptions.includes(value)) {
      const updatedCheckboxes = prevOptions.filter(
        (checkbox) => checkbox !== value,
      );

      return updatedCheckboxes;
    } else {
      const updatedOptions = [...prevOptions, value];

      const count = updatedOptions.length;

      setCount(count);

      return updatedOptions;
    }
  };

  const handleCheckboxChange = (category: string, value: string) => {
    const setCount =
      category === 'lookingFor'
        ? setSelectedLookingForCount
        : setSelectedInterestsCount;

    setSelectedCheckboxes((prev) => {
      if (category === 'lookingFor' || category === 'interests') {
        return {
          ...prev,
          [category]: updateCheckboxes(prev[category], value, setCount),
        };
      } else {
        console.warn(`Unknown category: ${category}`);

        return prev;
      }
    });
  };

  return (
    <div
      className={`${styles.filters_section} ${
        styles[`filters_${category.toLowerCase()}`]
      }`}
    >
      <div
        className={styles.container_line}
        onClick={() => toggleExpand(category)}
      >
        <div className={styles.containerIcon}>
          <img className={styles.icon} src={icon} alt={`${category} icon`} />
          <span>{label}</span>
        </div>
        <button className={styles.buttonArrowIcon}>
          {category === 'lookingFor' || category === 'interests' ? (
            selectedCheckboxes[category]?.length ? (
              <span className={styles.selectedCount}>
                {selectedCheckboxes[category].length}
              </span>
            ) : (
              <img
                className={styles.arrowIcon}
                src={arrowIcon}
                alt="arrow icon"
              />
            )
          ) : null}
        </button>
      </div>
      {expandedSection === category && (
        <Modal
          category={category}
          onClose={() => setExpandedSection('')}
          selectedCheckboxes={
            selectedCheckboxes[category as keyof SelectedCheckboxesState]
          }
          onResetSelectedOptions={() =>
            setSelectedCheckboxes((prev) => ({ ...prev, [category]: [] }))
          }
          onCheckboxChange={(value) => handleCheckboxChange(category, value)}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ModalFilters;
