import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';
import { Input } from '../../../../common';
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  onClose: () => void;
  selectedCheckboxes: string[];
  onCheckboxChange: (value: string) => void;
  onResetSelectedOptions: () => void;
  category: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  selectedCheckboxes,
  onCheckboxChange,
  onResetSelectedOptions,
  category,
  isModalOpen,
  setIsModalOpen,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const maxSelectedCheckboxes = 5;

  const [areAllCheckboxesDisabled, setAreAllCheckboxesDisabled] =
    useState(false);
  const [disabledCheckboxes, setDisabledCheckboxes] = useState<string[]>([]);

  const saveLookingFor = () => {
    onClose();
  };

  const cancelAndReset = () => {
    onResetSelectedOptions();
    onClose();
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      isModalOpen &&
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    setIsModalOpen(true);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      setIsModalOpen(false);
    };
  }, [isModalOpen, handleOutsideClick]);

  useEffect(() => {
    if (selectedCheckboxes.length === maxSelectedCheckboxes) {
      const newDisabledCheckboxes = getCheckboxOptions().filter(
        (option) => !selectedCheckboxes.includes(option),
      );

      setDisabledCheckboxes(newDisabledCheckboxes);
    } else {
      setDisabledCheckboxes([]);
    }
  }, [selectedCheckboxes]);

  const handleCheckboxChange = (value: string) => {
    if (selectedCheckboxes.includes(value)) {
      onCheckboxChange(value);
      setAreAllCheckboxesDisabled(false);
    } else if (
      !selectedCheckboxes.includes(value) &&
      selectedCheckboxes.length < maxSelectedCheckboxes
    ) {
      onCheckboxChange(value);
    }

    if (selectedCheckboxes.length === maxSelectedCheckboxes) {
      setAreAllCheckboxesDisabled(true);
    }
  };

  const checkboxOptionsLookingFor = [
    'Friendship & Communication',
    'Romantic Dates',
    'Marriage, Family creation',
    'Common interests & Hobbies',
    'Professional connections & Contacts',
    'Language Exchange',
    'Joint trips & Attending events',
  ];

  const checkboxOptionsInterests = [
    'Singing',
    'Listening to music',
    'Cars',
    'Blogging',
    'Reading books',
    'Dancing',
    'Learning new languages',
    'Surfing',
    'Basketball',
    'Travelling',
    'Shopping',
    'Hiking',
    'Cycling',
    'Exercising',
    'Embroidering',
    'Collecting things',
    ' Cooking',
    'Baking',
    'Skating',
    'Gardening',
    'Handmade',
    'Skiing',
    'Sky-jumping',
    'Walking',
    'Writing stories',
    'Fishing',
    'Longboarding',
    'Drawing',
    'Postcards',
    'Fridge magnets',
    'Butterflies and bugs',
    'Darts',
    'Scrapbooking',
    'Dressmaking',
    'Photography',
    'Roller-skating',
    'Running',
    'Yoga',
    'Coaching',
    'Diving',
    'Bodybuilding',
    'Gymnastics',
    'Swimming',
    'Tennis',
    'Football',
    'Archery',
    'Rock climbing',
    'Beer',
    'Snowboarding',
    'Parkour',
    'Graffiti',
    'Numismatics',
    'Stones and minerals',

    //не знаю что такое Clothes decoration заменила на Dressmaking
  ];

  const getCheckboxOptions = () => {
    if (category === 'lookingFor') {
      return checkboxOptionsLookingFor;
    } else if (category === 'interests') {
      return checkboxOptionsInterests;
    } else {
      return [];
    }
  };

  return (
    <div className={styles.modal_overlay}>
      <div ref={modalRef} className={styles.modal_content}>
        <div className={styles.modal_upperline}>
          <h1>{category === 'lookingFor' ? 'Looking for' : 'Interests'}</h1>
          <div className={styles.upperline_number}>
            {selectedCheckboxes.length}/{maxSelectedCheckboxes}
          </div>
        </div>

        <div className={styles.modal_checkboxes}>
          {getCheckboxOptions().map((option) => (
            <div key={option}>
              <Input
                className={`${styles.checkbox} ${
                  disabledCheckboxes.includes(option)
                    ? styles.disabledCheckbox
                    : ''
                }`}
                type="checkbox"
                value={option}
                id={option}
                defaultChecked={selectedCheckboxes.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label className={styles.modal_options} htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
        {category === 'lookingFor' ? (
          ''
        ) : (
          <div className={styles.modal_bottom}>
            <div className={styles.modal_bottom_1line}>
              <span>Show other users if there are no more profiles</span>
              <div className={styles.checkbox_container}>
                <input type="checkbox" id="bottomCheckbox" />
                <label htmlFor="bottomCheckbox"></label>
              </div>
            </div>
            <div className={styles.modal_bottom_2line}>
              Turn on to see more people
            </div>
          </div>
        )}
        <div className={styles.modal_buttons}>
          <button className={styles.modal_button_save} onClick={saveLookingFor}>
            Save
          </button>
          <button
            className={styles.modal_button_cancel}
            onClick={cancelAndReset}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
