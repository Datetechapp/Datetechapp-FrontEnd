import React, { useState, useEffect, useRef } from "react";
import css from "./login.module.css";
import { Button } from "../../common";
import validator from 'validator';
import { EmailOrPhoneInput, PasswordInput, CheckboxBlock, SocialAuth } from "..";
import { Link } from "react-router-dom"
import { login } from "../../../api"

const rememberTheData = "Remember me"

export const hasUppercaseLetter = (word: string): boolean => {
       return /[A-Z]/.test(word);
};

export const hasSpecialCharacters = (word: string): boolean => {
       const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
       return specialCharactersRegex.test(word);
};

export const Login = () => {
       const [emailOrPhoneValue, setEmailOrPhoneValue] = useState('');
       const [passwordValue, setPasswordValue] = useState("")
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [rememberLogin, setRememberLogin] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');

       const [isValidPassword, setIsValidPassword] = useState(false)

       const [isFocusedEmail, setIsFocusedEmail] = useState(false);
       const [isFocusedPassword, setIsFocusedPassword] = useState(false)

       const isLogin = true;



       const handleFocusChange = () => {
              setIsFocusedEmail(!isFocusedEmail);
       };



       const inputRef = useRef<HTMLInputElement>(null);


       const handleFocusPasswordChange = () => {
              setIsFocusedPassword(!isFocusedPassword);
       };

       const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              setEmailOrPhoneValue(newValue);

              if (validator.isEmail(newValue)) {
                     setType('email');
              } else if (validator.isMobilePhone(newValue, 'any')) {
                     setType('phone');
              }
              setEmailOrPhoneValue(newValue);
       };



       const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordValue(e.target.value);
              setIsValidPassword(e.target.value.length >= 8 && hasUppercaseLetter(e.target.value) && hasSpecialCharacters(e.target.value));
       };


       const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
              e.preventDefault();
              login({ "username": emailOrPhoneValue, "password": passwordValue, "rememberLogin": rememberLogin }).then((response) => {
                     if (response.ok) {
                            setErrorMessage("")

                     } else {
                            throw new Error('Ошибка при выполнении запроса: ' + response.status);
                     }
              })
       }

       const handleRememberLoginChange = () => {
              setRememberLogin(!rememberLogin);
       };

       useEffect(() => {
              if (inputRef.current) {
                     inputRef.current.focus();
              }
       }, []);


       return (
              <div>
                     <div className={css.blockToRegistration}>
                            <h2 className={css.messageSignIn}>Sign In</h2>
                            <Link to="/registration" className={css.messageHaveAnAccount}>Don't have an account? Sign up</Link>
                     </div>
                     <form className={css.formForEmail} onSubmit={handleSubmit}>
                            <div>
                                   <div className={css.inputBlock}>
                                          <EmailOrPhoneInput
                                                 className={!isFocusedEmail ? css.inputForEmail : css.inputForFocusedEmail}
                                                 value={emailOrPhoneValue}
                                                 type={type}
                                                 onChange={handleEmailChange}
                                                 onFocus={handleFocusChange}
                                                 onBlur={handleFocusChange}
                                          /></div>

                                   <div className={css.blockInputPassword}>
                                          <PasswordInput
                                                 className={!isFocusedPassword ? css.inputForPassword : css.inputForFocusedPassword}
                                                 value={passwordValue}
                                                 onChange={handlePasswordChange}
                                                 isFocused={isFocusedPassword}
                                                 onFocus={handleFocusPasswordChange}
                                                 onBlur={handleFocusPasswordChange}
                                                 placeholder="Password"
                                                 passwordIsValid={isValidPassword}
                                                 isLogin={isLogin}
                                          />
                                   </div>
                                   {errorMessage && <div className={css.errorMsg}>{errorMessage}</div>}
                            </div>
                            <div className={css.checkboxForgotBlock}>
                                   {!errorMessage &&
                                          <CheckboxBlock
                                                 rememberLogin={rememberLogin}
                                                 handleRememberLoginChange={handleRememberLoginChange}
                                                 rememberTheData={rememberTheData}

                                          />
                                   }
                                   {!errorMessage && <Link to="/reset_password" className={css.forgotPassword}>Forgot Password?</Link>}
                            </div>
                            <Button
                                   className={emailOrPhoneValue && passwordValue ? css.btnContinuePink : css.btnContinue}
                                   disabled={!emailOrPhoneValue || !passwordValue}
                            >
                                   Continue
                            </Button>
                     </form>
                     <SocialAuth />
              </div>
       );
};
