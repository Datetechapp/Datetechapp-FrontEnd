import React, { useState } from "react";
import css from "./emailOrPhoneInput.module.css";
import { Input } from "../../common";

type Props = {
       value: string;
       type: "email" | "phone";
       onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       className: string;
       onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
       onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EmailOrPhoneInput: React.FC<Props> = ({ value, type, onChange, className, onFocus, onBlur }) => {


       return (
              <Input
                     className={className}
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