import { FC } from 'react';
import css from "./checkboxBlock.module.css";
import { ReactComponent as QuestionSign } from "../../../assets/ModalAuth/questionSign.svg";
import { Checkbox } from "../../common";

type Props = {
       rememberLogin: boolean,
       handleRememberLoginChange: () => void,
       authorized: boolean,
       rememberTheLogin: string,
       rememberThePassword: string
}

export const CheckboxBlock: FC<Props> = ({ rememberLogin, handleRememberLoginChange, authorized, rememberTheLogin, rememberThePassword }) => (
       <div className={css.blockCheckbox}>
              <label className={css.labelForCheckbox}>
                     <Checkbox
                            className={css.checkboxForPassword}
                            checked={rememberLogin}
                            onChange={handleRememberLoginChange}
                     />
                     {!authorized ? rememberTheLogin : rememberThePassword}
              </label>
              <div className={css.blockHoverIcon}>
                     <QuestionSign className={css.questionIcon} />
                     <div className={css.saveLoginBlock}>
                            <p className={css.saveLoginTitle}>Save Login</p>
                            <p className={css.saveLoginText}>
                                   Select to save your account details for quick login on this device
                            </p>
                     </div>
              </div>
       </div>
)