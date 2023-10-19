import { FC, ChangeEvent } from 'react';
import css from './genderRadio.module.css';

interface GenderRadioProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const GenderRadio: FC<GenderRadioProps> = ({
  value,
  label,
  checked,
  onChange,
}: GenderRadioProps) => {
  return (
    <label
      className={
        !checked ? css.genderRadioWrapper : css.genderRadioWrapperActive
      }
    >
      <div className={css.blockForRadio}>
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </div>
    </label>
  );
};
