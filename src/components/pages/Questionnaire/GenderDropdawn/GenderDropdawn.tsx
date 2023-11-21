import React, { FC, useState, useEffect } from 'react';
import { useAppSelector } from 'hooks/hooks';
import { getGenders, getSex, getDescriptionGender } from 'store/gendersAndPurpose/selectors';
import { GenderRadio } from '../GenderRadio';
import css from './genderDropdawn.module.css';
import { Dropdawn } from '../../../common/dropdawn';

interface GenderDropdownProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  showGenders?: boolean;
  gender?: string;
  sex?: string;
}

export const GenderDropdawn: FC<GenderDropdownProps> = ({
  onChange,
  showGenders,
  gender,
  sex,
}) => {
  const [selectedValue, setSelectedValue] = useState('More options...');
  const [selectedKeyForSex, setSelectedKeyForSex] = useState('');
  const [sexValue, setSexValue] = useState('');

  // const genders = useAppSelector(getGenders)
  // const gendersArr = Object.values(genders)
  // const descriptionGender = useAppSelector(getDescriptionGender)
  // const descriptionArr = Object.values(descriptionGender)
  // const sex = useAppSelector(getSex)

  const getSelectedKeyForSex = (
    selectedValues: string[],
    data: Record<string, string>,
  ) => {
    const selectedValue = selectedValues.find((value) =>
      Object.values(data).includes(value),
    );

    return Object.keys(data).find((key) => data[key] === selectedValue) || '';
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    // const newKey = getSelectedKeyForSex([value], genders);
    // setSelectedKeyForSex(newKey);
    onChange({ target: { name: 'gender', value } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    // const newKey = getSelectedKeyForSex([selectedValue], sex);
    setSelectedValue('More options...');
    setSexValue(selectedValue);
    // setSelectedKeyForSex(newKey);
    // onChange(event, newKey);
    onChange(event);
  };

  console.log(sex);

  return (
    <div className={css.genderDropdawnWrapper}>
      <div className={css.blockForRadio}>
        <GenderRadio
          value="Male"
          label="Man"
          // checked={sex[selectedKeyForSex] === "Male"}
          checked={sex === 'Male'}
          onChange={handleRadioChange}
        />
        <GenderRadio
          value="Female"
          label="Woman"
          // checked={sex[selectedKeyForSex] === "Female"}
          checked={sex === 'Female'}
          onChange={handleRadioChange}
        />
      </div>
      {showGenders && (
        <Dropdawn
          value={gender || ''}
          name="gender"
          // genders={gendersArr}
          // descriptionGender={descriptionArr}
          onChange={handleSelectChange}
        />
      )}
    </div>
  );
};
