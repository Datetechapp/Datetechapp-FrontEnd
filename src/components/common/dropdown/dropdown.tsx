import { MouseEvent, useState } from 'react';
import styles from './dropdown.module.css';

type Options = { key: string; value: string };

interface DropdownProps {
  selected: string;
  options?: Options[];
  onChange: (value: string) => void;
}

const getSelectedValue = (options: Options[], selectedKey: string) =>
  options?.find(({ key }) => key === selectedKey)?.value;

export function Dropdown({ selected, options, onChange }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);

  const selectedValue = options && getSelectedValue(options, selected);

  const handleOptionClick = (e: MouseEvent, optionKey: string) => {
    e.preventDefault();
    setOpen(false);
    onChange(optionKey);
  };

  const handleOpen = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdownButton} onClick={handleOpen}>
        {selectedValue}
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options &&
            options?.length > 0 &&
            options.map(({ key, value }) => (
              <div
                className={`${styles.option} ${
                  key === selected ? styles.selected : ''
                }`}
                key={key}
                onClick={(e) => handleOptionClick(e, key)}
              >
                {value}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
