import { useState } from 'react';
import css from "./dropdawn.module.css"
import { ReactComponent as Circle } from "../../../assets/CreateAccountForm/radioCircle.svg"

interface Option {
       title: string;
       description: string;

}

interface DropdownProps {
       value: string;
       name: string;
       genders: string[];
       descriptionGender: string[];
       onChange: (value: string) => void;
}

export const Dropdawn = ({ value, genders, onChange, descriptionGender }: DropdownProps) => {
       const [isOpen, setOpen] = useState(false);

       const handleOptionClick = (optionValue: string) => {
              setOpen(false);
              onChange(optionValue);
       };

       const selectedOption = genders.find((gender:string) => gender === value);

       return (
              <div className={css.dropdawnWrapper}>
                     <div
                            className={
                                   !isOpen && value !== "Other"
                                          ? css.optionSelected
                                          : !isOpen
                                                 ? css.dropdawnHeader
                                                 : css.dropdawnHeaderOpen
                            }
                            onClick={() => setOpen(!isOpen)}
                     >
                            <span>{selectedOption ? selectedOption : "Other"}</span>
                     </div>
                     {isOpen && (
                            <div className={css.dropdawnOptions}>
                                   {genders.map((gender) => (
                                          <div
                                                 key={gender}
                                                 onClick={() => handleOptionClick(gender)}
                                                 className={css.blockForOption}
                                          >
                                                 <div className={css.blockTitleAndRadio}>
                                                        <div className={css.dropdawnTitle}>{gender}</div>
                                                        <Circle />
                                                 </div>
                                                 <div className={css.dropdawnDescription}>{descriptionGender[genders.indexOf(gender)]}</div>
                                          </div>
                                   ))}
                            </div>
                     )}
              </div>
       );
};