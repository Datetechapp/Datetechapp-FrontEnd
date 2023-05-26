import React, { useState, useEffect, useRef, FC } from "react";
import css from "./login.module.css";
import { Button } from "../../common";
import validator from 'validator';
import { ModalForgotPassword } from "../ModalForgotPassword/ModalForgotPassword";
import { EmailOrPhoneInput } from "../EmailOrPhoneInput";
import { PasswordInput } from "../PasswordInput";
import { CheckboxBlock } from "../CheckboxBlock";

const loginText = "Log in to your account with E-mail or Phone number"
const passwordText = "To log in, you need to enter a password"
const buttonLoginText = "Continue"
const buttonPasswordText = "Sign In"
const rememberTheLogin = "Remember the Login"
const rememberThePassword = "Remember the Password"
const verifyYourAccount = "Verify your Account"
const confirmText = "Confirm"

export const Login: FC = () => {
       const [value, setValue] = useState('');
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [rememberLogin, setRememberLogin] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const [isFocused, setIsFocused] = useState(false);
       const [authorized, setAuthorized] = useState(false);
       const [showModal, setShowModal] = useState(false);
       const [requestNewPassword, setRequestNewPassword] = useState(false)

       const inputRef = useRef<HTMLInputElement>(null);

       const handleShowModal = () => {
              setShowModal(prevShowModal => !prevShowModal);
       }


       const handleFocusChange = () => {
              setIsFocused(prevIsFocused => !prevIsFocused);
       };

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              setValue(newValue);

              if (!authorized) {
                     if (validator.isEmail(newValue)) {
                            setType('email');
                     } else if (validator.isMobilePhone(newValue, 'any')) {
                            setType('phone');
                     }
              }
       };


       const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
              e.preventDefault();

              if (authorized && !requestNewPassword) {
                     if (value.length < 8) {
                            setErrorMessage("Incorrect password. Password must be at least 8 characters");
                     } else {
                            // тут будет логика запроса на сервер с email и паролем пользователя
                            setErrorMessage("");
                     }

              } else if (requestNewPassword) {
                     // пока что к примеру пароль должен быть минимум 5 символов
                     if (value.length < 4) {
                            setErrorMessage("Incorrect verification code. Please enter the correct code.");
                     } else {
                            setErrorMessage("");
                     }
              }
              else {
                     if (!validator.isEmail(value) && !validator.isMobilePhone(value, 'any')) {
                            setErrorMessage(type === 'email' ? 'Try logging in with your phone number' : 'Try logging in with your email');
                     } else {
                            // тут будет логика отправки на сервер запроса с email/телефоном пользователя
                            console.log(`Your ${type} is ${value}`);
                            setValue("");
                            setAuthorized(true);
                     }
              }
       };

       const handleRememberLoginChange = () => {
              setRememberLogin(prevState => !prevState);
       };

       const handleSetRequestNewPassword = () => {
              setRequestNewPassword(prevState => !prevState)
              setShowModal(prevShowModal => !prevShowModal)
              setErrorMessage("");
       }
       
       useEffect(() => {
              if (authorized && inputRef.current) {
                     inputRef.current.focus();
              }
       }, [authorized]);

       return (
              <div>
                     <h2 className={css.messageLogIn}>
                            {!authorized ? loginText : authorized && requestNewPassword ? verifyYourAccount : passwordText}
                     </h2>
                     {requestNewPassword && <p className={css.enterVerificCode}>Enter your Verification code</p>}
                     <form className={css.formForEmail} onSubmit={handleSubmit}>
                            <div>
                                   {!authorized ? <div className={css.inputBlock}>
                                          <EmailOrPhoneInput
                                                 value={value}
                                                 type={type}
                                                 onChange={handleInputChange}
                                                 onFocus={handleFocusChange}
                                                 onBlur={handleFocusChange}
                                          /></div>
                                          : requestNewPassword
                                                 ? <div className={css.blockInputVerificate}>
                                                        <PasswordInput
                                                               value={value}
                                                               onChange={handleInputChange}
                                                               errorMessage={errorMessage}
                                                               isFocused={isFocused}
                                                               onFocus={handleFocusChange}
                                                               onBlur={handleFocusChange}
                                                               placeholder="Verification code"
                                                        />
                                                 </div>
                                                 : <div className={css.blockInputPassword}>
                                                        <PasswordInput
                                                               value={value}
                                                               onChange={handleInputChange}
                                                               errorMessage={errorMessage}
                                                               isFocused={isFocused}
                                                               onFocus={handleFocusChange}
                                                               onBlur={handleFocusChange}
                                                               placeholder="Password"
                                                        />
                                                 </div>}
                                   {errorMessage && <div className={css.errorMsg}>{errorMessage}</div>}
                            </div>
                            {(!errorMessage && !requestNewPassword) &&
                                   <CheckboxBlock
                                          rememberLogin={rememberLogin}
                                          handleRememberLoginChange={handleRememberLoginChange}
                                          authorized={authorized}
                                          rememberTheLogin={rememberTheLogin}
                                          rememberThePassword={rememberThePassword}
                                   />
                            }
                            {requestNewPassword && <p className={css.resendVerificate}>Resend  Verification code</p>}
                            <Button
                                   className={
                                          !isFocused && value.length === 0
                                                 ? css.btnContinue
                                                 : (validator.isEmail(value) || validator.isMobilePhone(value))
                                                        ? css.btnFocusedValid
                                                        : css.btnFocused
                                   }
                                   disabled={!authorized && !validator.isEmail(value) && !validator.isMobilePhone(value)}
                            >
                                   {!authorized ? buttonLoginText : requestNewPassword ? confirmText : buttonPasswordText}
                            </Button>
                     </form>
                     {authorized && errorMessage && !requestNewPassword && <p className={css.forgotPassword} onClick={handleShowModal}>Forgot Password?</p>}
                     <ModalForgotPassword isOpen={showModal} onRequestClose={handleShowModal} onGetNewPassword={handleSetRequestNewPassword} />
              </div>
       );
};

