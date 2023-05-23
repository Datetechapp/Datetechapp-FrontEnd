import React, { useState } from "react";
import css from "./login.module.css";
import questionSign from "../../../assets/ModalAuth/questionSign.svg";
import { Button, Input, Checkbox } from "../../common";
import validator from 'validator';

export const Login = () => {
       const [value, setValue] = useState('');
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [rememberLogin, setRememberLogin] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const [isFocused, setIsFocused] = useState(false);


       const handleFocus = () => {
              setIsFocused(true);
       };

       const handleBlur = () => {
              setIsFocused(false);
       };

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              setValue(newValue);

              if (validator.isEmail(newValue)) {
                     setType('email');
              } else if (validator.isMobilePhone(newValue, 'any')) {
                     setType('phone');
              }
       };

       const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();

              if (type === 'email') {
                     console.log(`Your email is ${value}`);
              } else if (type === 'phone') {
                     console.log(`Your phone number is ${value}`);
              }

              if (!validator.isEmail(value) && !validator.isMobilePhone(value, 'any')) {
                     setErrorMessage(type === 'email' ? 'Try logging in with your phone number' : 'Try logging in with your email');
              }
       };

       const handleRememberLoginChange = () => {
              setRememberLogin(prevState => !prevState);
       };

       return (
              <div>
                     <h2 className={css.messageLogIn}>
                            Log in to your account with E-mail or Phone number
                     </h2>
                     <form className={css.formForEmail} onSubmit={handleSubmit}>
                            <div className={css.inputBlock}>
                                   <Input
                                          className={css.inputForEmail}
                                          type="text"
                                          autoComplete="off"
                                          name="email"
                                          value={value}
                                          onChange={handleInputChange}
                                          placeholder="E-mail or Phone number"
                                          onFocus={handleFocus}
                                          onBlur={handleBlur}
                                   />
                            </div>
                            <div className={css.blockCheckbox}>
                                   <label className={css.labelForCheckbox}>
                                          <Checkbox
                                                 className={css.checkboxForPassword}
                                                 checked={rememberLogin}
                                                 onChange={handleRememberLoginChange}
                                          />
                                          Remember the Login
                                   </label>
                                   <div className={css.blockHoverIcon}>
                                          <img
                                                 className={css.questionIcon}
                                                 src={questionSign}
                                                 alt="questionSign"
                                          />
                                          <div className={css.saveLoginBlock}>
                                                 <p className={css.saveLoginTitle}>Save Login</p>
                                                 <p className={css.saveLoginText}>
                                                        Select to save your account details for quick login on this device
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                            <Button
                                   className={
                                          !isFocused && value.length === 0
                                          ? css.btnContinue
                                          : (validator.isEmail(value) || validator.isMobilePhone(value)) 
                                          ? css.btnFocusedValid 
                                          : css.btnFocused
                                   }
                                   disabled={!validator.isEmail(value) && !validator.isMobilePhone(value)}
                            >
                                   Continue
                            </Button>
                            {errorMessage && <div>{errorMessage}</div>}
                     </form>
              </div>
       );
};

