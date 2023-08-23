import { FC, useState, useEffect } from 'react';
import { GenderRadio } from '../GenderRadio';
import css from './genderDropdawn.module.css';
import { Dropdawn } from '../../../common/dropdawn';
import { useAppSelector } from 'hooks/hooks';
import { getGenders, getSex, getDescriptionGender } from 'store/gendersAndPurpose/selectors';


interface GenderDropdownProps {
       value: string | null;
       onChange: (event: any, key: string) => void;
}

export const GenderDropdawn: FC<GenderDropdownProps> = ({ onChange }) => {
       const [selectedValue, setSelectedValue] = useState("Other");
       const [selectedKeyForSex, setSelectedKeyForSex] = useState("")

       const genders = useAppSelector(getGenders)
       const gendersArr = Object.values(genders)
       const descriptionGender = useAppSelector(getDescriptionGender)
       const descriptionArr = Object.values(descriptionGender)
       const sex = useAppSelector(getSex)


       const getSelectedKeyForSex = (selectedValues: string[], data: Record<string, string>) => {
              const selectedValue = selectedValues.find(value => Object.values(data).includes(value));
              return Object.keys(data).find(key => data[key] === selectedValue) || "";
       };


       const handleSelectChange = (value: string) => {
              setSelectedValue(value);
              const newKey = getSelectedKeyForSex([value], genders);
              setSelectedKeyForSex(newKey);
              onChange({ target: { name: "gender", value } }, newKey);
       };

       const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              const selectedValue = event.target.value;
              const newKey = getSelectedKeyForSex([selectedValue], sex);
              setSelectedValue("Other");
              setSelectedKeyForSex(newKey);
              onChange(event, newKey);
       };

       return (
              <div className={css.genderDropdownWrapper}>
                     <div className={css.blockForRadio}>
                            <GenderRadio
                                   value="Male"
                                   name="sex"
                                   label="Male"
                                   checked={sex[selectedKeyForSex] === "Male"}
                                   onChange={handleRadioChange}
                            />
                            <GenderRadio
                                   value="Female"
                                   name="sex"
                                   label="Female"
                                   checked={sex[selectedKeyForSex] === "Female"}
                                   onChange={handleRadioChange}
                            />
                     </div>
                     <Dropdawn
                            value={selectedValue}
                            name="gender"
                            genders={gendersArr}
                            descriptionGender={descriptionArr}
                            onChange={handleSelectChange}
                     />
              </div>
       );
};