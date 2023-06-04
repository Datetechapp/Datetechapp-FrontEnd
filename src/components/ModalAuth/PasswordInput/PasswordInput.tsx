import { FC, useState } from "react";
import css from "./passwordInput.module.css";
import { Input } from "../../common";
import { Eye } from "..";

 type PasswordInputProps = {
       value: string;
       onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       errorMessage: string;
       isFocused: boolean;
       onFocus: () => void;
       onBlur: () => void;
       placeholder: string;
};

export const PasswordInput: FC<PasswordInputProps> = ({value, onChange, errorMessage, isFocused, onFocus, onBlur, placeholder}) => {
       const [showPassword, setShowPassword] = useState(false);

       const isVisiblePassword = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
              e.preventDefault();
              setShowPassword((prevShowPassword) => !prevShowPassword);
       };

       return (
              <div className={css.blockInputPassword}>
                     <Input
                            className={!errorMessage ? css.inputForPassword : css.inputForPasswordError}
                            type={showPassword ? "text" : "password"}
                            autoComplete="off"
                            name="password"
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            onFocus={onFocus}
                            onBlur={onBlur}
                     />
                     <Eye
                            showPassword={showPassword}
                            onVisiblePassword={isVisiblePassword}
                            isFocused={isFocused}
                            errorMessage={errorMessage}
                     />
              </div>
       );
};