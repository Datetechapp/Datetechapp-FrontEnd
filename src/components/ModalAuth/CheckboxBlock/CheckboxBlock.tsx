import { FC } from 'react';
import css from "./checkboxBlock.module.css";
import { ReactComponent as QuestionSign } from "../../../assets/ModalAuth/questionSign.svg";
import { Checkbox } from "../../common";

type Props = {
       rememberLogin: boolean,
       handleRememberLoginChange: () => void,
       rememberTheData: string,
}

export const CheckboxBlock: FC<Props> = ({ rememberLogin, handleRememberLoginChange, rememberTheData }) => (
       <div className={css.blockCheckbox}>
              <label className={css.labelForCheckbox}>
                     <Checkbox
                            className={css.checkboxForPassword}
                            checked={rememberLogin}
                            onChange={handleRememberLoginChange}
                     />
                     {rememberTheData}
              </label>
              <div className={css.blockHoverIcon}>
                     <QuestionSign className={css.questionIcon} />
                     <div className={css.saveLoginBlock}>
                            <p className={css.saveLoginTitle}>Sign In</p>
                            <p className={css.saveLoginText}>
                                   Select to save your account details for quick login on this device
                            </p>
                     </div>
              </div>
       </div>
)