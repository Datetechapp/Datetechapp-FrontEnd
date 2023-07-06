import { FC, useState } from 'react';
import { GenderRadio } from '../GenderRadio';
import css from './genderDropdawn.module.css';
import { Dropdawn } from '../../../common/dropdawn';

interface GenderDropdownProps {
       value: string;
       onChange: (event: any ) => void;
}

export const GenderDropdawn:FC<GenderDropdownProps> = ({ value, onChange }) => {
       const [selectedValue, setSelectedValue] = useState("Other");
       const optionsArr = [
              {
                     title: "Non-binary",
                     description:
                            "Does not exclusively identify as male or female, or identifies as outside the traditional gender binary.",
              },
              {
                     title: 'Agender',
                     description: 'Identifies as having no gender or lacking a gender identity',
              },
              {
                     title: 'Agender',
                     description: 'Identifies as having no gender or lacking a gender identity',
              },
              {
                     title: 'Agender',
                     description: 'Identifies as having no gender or lacking a gender identity',
              },
              {
                     title: 'Agender',
                     description: 'Identifies as having no gender or lacking a gender identity',
              },
       ];

       const handleSelectChange = (value: string) => {
              setSelectedValue(value);
              onChange({ target: { name: "gender", value } });
       };

       const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              setSelectedValue("Other");
              onChange(event);
       };

       return (
              <div className={css.genderDropdownWrapper}>
                     <div className={css.blockForRadio}>
                            <GenderRadio
                                   value="male"
                                   label="Male"
                                   checked={value === "male"}
                                   onChange={handleRadioChange}
                            />
                            <GenderRadio
                                   value="female"
                                   label="Female"
                                   checked={value === "female"}
                                   onChange={handleRadioChange}
                            />
                     </div>
                     <Dropdawn
                            value={selectedValue}
                            options={optionsArr}
                            onChange={handleSelectChange}
                     />
              </div>
       );
};