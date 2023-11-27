import React, { useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  selectedCheckboxes: string[];
  onCheckboxChange: (value: string) => void;
  onResetSelectedOptions: () => void;
  category: string; 
}

const Modal: React.FC<ModalProps> = ({ onClose, selectedCheckboxes,onCheckboxChange, onResetSelectedOptions, category }) => {


  const saveLookingFor = () => {
    console.log("Save functionality");
    onClose();
  };

  const cancelAndReset = () => {
    onResetSelectedOptions();
    onClose();
  };

  const checkboxOptionsLookingFor = [
    "Friendship & Communication",
    "Romantic Dates",
    "Marriage, Family creation",
    "Common interests & Hobbies",
    "Professional connections & Contacts",
    "Language Exchange",
    "Joint trips & Attending events",
  ];

  const checkboxOptionsInterests = [
    'Singing', 'Listening to music', 'Cars', 'Blogging', 'Reading books', 'Dancing', 'Learning new languages', 'Surfing', 'Basketball', 'Travelling', 'Shopping',
    'Hiking', 'Cycling', 'Exercising', 'Embroidering', 'Collecting things', ' Cooking', 'Baking', 'Skating', 'Gardening', 'Handmade', 'Skiing', 'Sky-jumping', 'Walking', 'Writing stories', 'Fishing', 'Longboarding', 'Drawing', 'Postcards', 'Fridge magnets', 'Butterflies and bugs', 'Darts', 'Scrapbooking', 'Dressmaking', 'Photography', 'Roller-skating', 'Running', 'Yoga', 'Coaching', 'Basketball', 'Diving', 'Bodybuilding', 'Gymnastics', 'Swimming', 'Tennis', 'Football', 'Archery', 'Rock climbing', 'Beer', 'Snowboarding', 'Parkour', 'Graffiti', 'Numismatics', 'Stones and minerals'
    
   //не знаю что такое Clothes decoration заменила на Dressmaking

  ]


  const getCheckboxOptions = () => {
    if (category === "lookingFor") {
      return checkboxOptionsLookingFor;
    } else if (category === "interests") {
      return checkboxOptionsInterests;
    } else {
      return [];
    }
  };

  


  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h1>{category === "lookingFor" ? "Looking for" : "Interests"}</h1>
        <div className={styles.modal_checkboxes}>
          {getCheckboxOptions().map((option) => (
            <div>
              <input
                type="checkbox"
                value={option}
                id={option}
                defaultChecked={selectedCheckboxes.includes(option)}
                onChange={() => onCheckboxChange(option)}
              />
              <label
                className={styles.modal_options}
                key={option}
                htmlFor={option}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.modal_buttons}>
          <button className={styles.modal_button_save} onClick={saveLookingFor}>
            Save
          </button>
          <button className={styles.modal_button_cancel} onClick={cancelAndReset}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
