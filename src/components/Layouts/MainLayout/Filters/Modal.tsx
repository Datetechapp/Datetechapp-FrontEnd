import React, { useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(value)
        ? prevOptions.filter((option) => option !== value)
        : [...prevOptions, value],
    );
  };
  const saveLookingFor = () => {
    console.log("Save functionality");
    onClose();
  };

  const checkboxOptions = [
    "Friendship & Communication",
    "Romantic Dates",
    "Marriage, Family creation",
    "Common interests & Hobbies",
    "Professional connections & Contacts",
    "Language Exchange",
    "Joint trips & Attending events",
  ];

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h1>Looking for</h1>
        <div className={styles.modal_checkboxes}>
          {checkboxOptions.map((option) => (
            <div>
              <input
                type="checkbox"
                value={option}
                id={option}
                defaultChecked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
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
          <button className={styles.modal_button_cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
