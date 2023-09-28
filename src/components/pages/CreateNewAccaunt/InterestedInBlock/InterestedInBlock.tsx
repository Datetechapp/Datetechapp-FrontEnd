import { FC, useState, useEffect } from "react";
import { Checkbox } from "components/common";
import css from "./interestedInBlock.module.css"
import { getPurposes } from "store/gendersAndPurpose/selectors";
import { useAppSelector } from "hooks/hooks";


interface InterestedInBlockProps {
       onChange: (interests: string[]) => void;
       checkedItems: string[];
};

export const InterestedInBlock: FC<InterestedInBlockProps> = ({ onChange, checkedItems }) => {
       const [checkedItemsState, setCheckedItems] = useState<string[]>(checkedItems);
       const [hasClass, setHasClass] = useState(false);


       const purposes = useAppSelector(getPurposes)
       const purposesArr = Object.values(purposes)

       const getSelectedKeys = (selectedValues:string[], data: Record<string, string>) => {
              return Object.keys(data).filter(key => selectedValues.includes(data[key]));
       };

       useEffect(() => {
              const selectedKeys = getSelectedKeys(checkedItemsState, purposes); 
              const numChecked = checkedItemsState.filter(Boolean).length;
              setHasClass(numChecked > 0);
              if (numChecked === 0) {
                     setHasClass(false);
              }
              onChange(selectedKeys)
       }, [checkedItemsState]);

       const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              const item = event.target.name;
              const isChecked = event.target.checked;
              
              setCheckedItems((prev: string[]) => {
                     if (isChecked) {
                            return [...prev, item];
                     } else {
                            return prev.filter((interest: string) => interest !== item);
                     }
              });

       };


       return (
              <div className={!hasClass ? css.interestedInBlock : css.hasChecked}>
                     {purposesArr.map((purpose) => (
                            <label key={purpose} className={css.labelForCheckbox}>
                                   {purpose}
                                   <Checkbox
                                          className={css.checkboxInterests}
                                          name={purpose}
                                          checked={checkedItemsState.includes(purpose)}
                                          onChange={handleChange}
                                   />
                            </label>
                     ))}
              </div>
       );
};