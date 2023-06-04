import React from "react";
import css from "./emailOrPhoneInput.module.css";
import { Input } from "../../common";

type Props = {
       errorMessage?: string;
       value: string;
       type: "email" | "phone";
       onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       onFocus: () => void;
       onBlur: () => void;
};

export const EmailOrPhoneInput: React.FC<Props> = ({ value, type, onChange, onFocus, onBlur, errorMessage }) => {
       

       return (
              <Input
                     className={!errorMessage ? css.inputForEmail : css.inputForEmailError}
                     type={type === "email" ? "email" : "tel"}
                     autoComplete="off"
                     name="email-or-phone"
                     value={value}
                     onChange={onChange}
                     placeholder="E-mail or Phone number"
                     onFocus={onFocus}
                     onBlur={onBlur}
              />
       );
};