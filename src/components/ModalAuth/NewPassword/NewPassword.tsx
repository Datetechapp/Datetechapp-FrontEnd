import { FC, useState } from "react";
import css from "./newPassword.module.css";
import { PasswordInput } from "../PasswordInput";

type NewPasswordInputProps = {
       value: string;
       confirmPasswordValue: string;
       errorMessage: string;
       errorConfirmPasswordMessage: string;
       onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       onConfirmChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       isFocused: boolean;
       onFocus: () => void;
       onBlur: () => void;
};

export const NewPassword: FC<NewPasswordInputProps> = ({
       value,
       confirmPasswordValue,
       onChange,
       onConfirmChange,
       errorMessage,
       errorConfirmPasswordMessage,
       isFocused,
       onFocus,
       onBlur,
}) => {
       const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false)

       const handleFocusConfirmPasswordChange = () => {
              setIsConfirmPasswordFocused(prevIsConfirmPasswordFocused => !prevIsConfirmPasswordFocused);
       };


       return (
              <div className={css.blockInputNewPassword}>
                     <div className={css.passwordInput}>
                            <PasswordInput
                                   value={value}
                                   onChange={onChange}
                                   errorMessage={errorMessage}
                                   isFocused={isFocused}
                                   onFocus={onFocus}
                                   onBlur={onBlur}
                                   placeholder="Password"
                            />
                     </div>
                     {errorMessage && <div className={css.errorMsg}>{errorMessage}</div>}
                     <div className={css.confirmPasswordInput}>
                            <PasswordInput
                                   value={confirmPasswordValue}
                                   onChange={onConfirmChange}
                                   errorMessage={errorConfirmPasswordMessage}
                                   isFocused={isConfirmPasswordFocused}
                                   onFocus={handleFocusConfirmPasswordChange}
                                   onBlur={handleFocusConfirmPasswordChange}
                                   placeholder="Confirm Password"
                            />
                     </div>
                     {errorConfirmPasswordMessage && <div className={css.errorMsg}>{errorConfirmPasswordMessage}</div>}
              </div>
       );
};