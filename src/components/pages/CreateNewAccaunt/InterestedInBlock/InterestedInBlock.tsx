import { FC, useState, useEffect } from "react";
import { Checkbox } from "components/common";
import css from "./interestedInBlock.module.css"

const interests = ["Friendship & communication", "Romantic dates", "Marriage, family creation", "Language exchange"];

type CheckedItemsState = string[];

interface InterestedInBlockProps {
       onChange: (interests: string[]) => void;
       checkedItems: CheckedItemsState;
};

export const InterestedInBlock: FC<InterestedInBlockProps> = ({ onChange, checkedItems }) => {
       const [checkedItemsState, setCheckedItems] = useState<CheckedItemsState>(checkedItems);
       const [hasClass, setHasClass] = useState(false);

       useEffect(() => {
              const numChecked = checkedItemsState.filter(Boolean).length;
              setHasClass(numChecked > 0);
              if (numChecked === 0) {
                     setHasClass(false);
              }
              onChange(checkedItemsState)
       }, [checkedItemsState]);

       const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              const item = event.target.name;
              const isChecked = event.target.checked;
              setCheckedItems((prev: CheckedItemsState) => {
                     if (isChecked) {
                            return [...prev, item];
                     } else {
                            return prev.filter((interest: string) => interest !== item);
                     }
              });
              
       };


       return (
              <div className={!hasClass ? css.interestedInBlock : css.hasChecked}>
                     {interests.map((interest) => (
                            <label key={interest} className={css.labelForCheckbox}>
                                   {interest}
                                   <Checkbox
                                          className={css.checkboxInterests}
                                          name={interest}
                                          checked={checkedItemsState.includes(interest)}
                                          onChange={handleChange}
                                   />
                            </label>
                     ))}
              </div>
       );
};