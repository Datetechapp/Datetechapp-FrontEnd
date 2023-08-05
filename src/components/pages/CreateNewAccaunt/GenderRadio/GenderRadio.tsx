import { FC, ChangeEvent } from 'react';
import css from "./genderRadio.module.css"
import { ReactComponent as MaleIcon } from "../../../../assets/CreateAccountForm/MaleIcon.svg"
import { ReactComponent as FemaleIcon } from "../../../../assets/CreateAccountForm/FemaleIcon.svg"


interface GenderRadioProps {
       value: string;
       name: string;
       label: string;
       checked: boolean;
       onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const GenderRadio = ({ value, label, checked, onChange }: GenderRadioProps) => (
       <div className={!checked ? css.genderRadioWrapper : css.genderRadioWrapperActive}>
              <label className={css.labelForRadio}>
                     <div className={css.blockForRadio}>
                            <input type="radio" value={value} checked={checked} onChange={onChange} />
                            <span>{label}</span>
                     </div>
                     <div>
                            {label === "Male" ?
                                   <MaleIcon className={!checked ? css.maleIcon : css.maleIconChecked} />
                                   : <FemaleIcon className={!checked ? css.femaleIcon : css.femaleIconChecked} />}
                     </div>
              </label>
       </div>
);