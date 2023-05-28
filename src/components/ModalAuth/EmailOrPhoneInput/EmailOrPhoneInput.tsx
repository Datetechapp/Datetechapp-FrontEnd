import React from "react";
import css from "./emailOrPhoneInput.module.css";
import { Input } from "../../common";

type Props = {
       value: string;
       type: "email" | "phone";
       onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       onFocus: () => void;
       onBlur: () => void;
};

export const EmailOrPhoneInput: React.FC<Props> = ({ value, type, onChange, onFocus, onBlur }) => {
       

       return (
              <Input
                     className={css.inputForEmail}
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