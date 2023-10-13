import { FC } from "react"
import css from "./isValidPasswordBlock.module.css"


interface IsValidPasswordBlockProps {
       title: any;
       firstIcon: React.ReactElement;
       firstCondition: any;
       secondIcon?: React.ReactElement;
       secondCondition?: string;
       thirdIcon?: React.ReactElement;
       thirdCondition?: string;
       isPasswordFocused: boolean;
}

export const IsValidPasswordBlock: FC<IsValidPasswordBlockProps> = ({ title, firstIcon, firstCondition, secondIcon, secondCondition, thirdIcon, thirdCondition, isPasswordFocused }) => {
       return (
              <div className={isPasswordFocused ? css.isValidPasswordBlock : css.isValidConfirmPasswordBlock}>
                     <p className={css.isValidPasswordTitle}>{title}</p>
                     <div className={css.conditionsBlock}>
                            <div className={css.isValidPasswordConditionBlock}>
                                   {firstIcon}
                                   <p className={css.isValidPasswordCondition}>{firstCondition}</p>
                            </div>
                            {secondCondition &&
                                   <>
                                          <div className={css.isValidPasswordConditionBlock}>
                                                 {secondIcon}
                                                 <p className={css.isValidPasswordCondition}>{secondCondition}</p>
                                          </div>
                                          <div className={css.isValidPasswordConditionBlock}>
                                                 {thirdIcon}
                                                 <p className={css.isValidPasswordCondition}>{thirdCondition}</p>
                                          </div>
                                   </>
                            }
                     </div>
              </div>
       )
}