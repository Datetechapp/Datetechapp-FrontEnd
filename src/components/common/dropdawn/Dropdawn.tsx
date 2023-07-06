import { useState } from 'react';
import css from "./dropdawn.module.css"
import { ReactComponent as Circle } from "../../../assets/CreateAccountForm/radioCircle.svg"

interface Option {
       title: string;
       description: string;
}

interface DropdownProps {
       value: string;
       options: Option[];
       onChange: (value: string) => void;
}

export const Dropdawn = ({ value, options, onChange }: DropdownProps) => {
       const [isOpen, setOpen] = useState(false);

       const handleOptionClick = (optionValue: string) => {
              setOpen(false);
              onChange(optionValue);
       };

       const selectedOption = options.find((option) => option.title === value);

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
                            <span>{selectedOption ? selectedOption.title : "Other"}</span>
                     </div>
                     {isOpen && (
                            <div className={css.dropdawnOptions}>
                                   {options.map((option) => (
                                          <div
                                                 key={option.title}
                                                 onClick={() => handleOptionClick(option.title)}
                                                 className={css.blockForOption}
                                          >
                                                 <div className={css.blockTitleAndRadio}>
                                                        <div className={css.dropdawnTitle}>{option.title}</div>
                                                        <Circle />
                                                 </div>
                                                 <div className={css.dropdawnDescription}>{option.description}</div>
                                          </div>
                                   ))}
                            </div>
                     )}
              </div>
       );
};