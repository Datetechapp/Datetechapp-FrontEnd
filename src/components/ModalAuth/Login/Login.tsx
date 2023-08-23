import React, { useState, useEffect, useRef, FC } from "react";
import css from "./login.module.css";
import { Button } from "../../common";
import validator from 'validator';
import { ModalForgotPassword, EmailOrPhoneInput, PasswordInput, CheckboxBlock, NewPassword, SocialAuth } from "..";
import { Link } from "react-router-dom"

const loginText = "Log in to your account with E-mail or Phone number"
const passwordText = "To log in, you need to enter a password"
const buttonLoginText = "Continue"
const buttonPasswordText = "Sign In"
const rememberTheLogin = "Remember the Login"
const rememberThePassword = "Remember the Password"
const verifyYourAccount = "Verify your Account"
const confirmText = "Confirm"
const createPassword = "Create a Password"
const passwordMustBe = "Password must be at least 8 characters"
const enterVerificCode = "Enter your Verification code"

export const Login: FC = () => {
       const [value, setValue] = useState('');
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [rememberLogin, setRememberLogin] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage] = useState("")
       const [isFocused, setIsFocused] = useState(false);
       const [authorized, setAuthorized] = useState(false);
       const [showModal, setShowModal] = useState(false);
       const [requestNewPassword, setRequestNewPassword] = useState(false)
       const [newPassword, setNewPassword] = useState(false)
       const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

       const inputRef = useRef<HTMLInputElement>(null);

       const handleShowModal = () => {
              document.body.style.overflow = "hidden";
              setShowModal(true);
       }

       const handleNotShowModal = () => {
              document.body.style.overflow = "unset";
              setShowModal(false);
       }


       const handleFocusChange = () => {
              setIsFocused(prevIsFocused => !prevIsFocused);
       };

       const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPasswordValue(e.target.value);
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
                            setErrorConfirmPasswordMessage("")
                     } else if (value !== confirmPasswordValue) {
                            // тут будет логика запроса на сервер с email и паролем пользователя
                            setErrorMessage("");
                            setErrorConfirmPasswordMessage("The Passwords doesn't match. Check the character set")
                     } else {
                            setErrorMessage("");
                            setErrorConfirmPasswordMessage("")
                     }
              }
              else if (requestNewPassword) {
                     // пока что к примеру пароль должен быть минимум 5 символов
                     if (value !== "1111") {
                            setErrorMessage("Incorrect verification code. Please enter the correct code.");
                     } else {
                            setRequestNewPassword(false)
                            setNewPassword(true);
                            setErrorMessage("");
                            setValue("")
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
              setRequestNewPassword(true)
              setShowModal(false)
              setErrorMessage("");
              document.body.style.overflow = "unset";
       }

       useEffect(() => {
              if (authorized && inputRef.current) {
                     inputRef.current.focus();
              }
       }, [authorized]);
       return (
              <div>
                     <h2 className={css.messageLogIn}>
                            {!authorized ? loginText : authorized && requestNewPassword && !newPassword ? verifyYourAccount : newPassword ? createPassword : passwordText}
                     </h2>
                     {(requestNewPassword || newPassword) && <p className={requestNewPassword ? css.enterVerificCode : css.enterNewPassword}>{newPassword ? passwordMustBe : enterVerificCode}</p>}
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
                                          : (requestNewPassword && !newPassword)
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
                                                 </div> : newPassword ?
                                                        <NewPassword
                                                               value={value}
                                                               confirmPasswordValue={confirmPasswordValue}
                                                               onChange={handleInputChange}
                                                               onConfirmChange={handleConfirmPasswordChange}
                                                               errorMessage={errorMessage}
                                                               errorConfirmPasswordMessage={errorConfirmPasswordMessage}
                                                               isFocused={isFocused}
                                                               onFocus={handleFocusChange}
                                                               onBlur={handleFocusChange}
                                                        />
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
                                   {errorMessage && !newPassword && <div className={css.errorMsg}>{errorMessage}</div>}
                            </div>
                            {((!errorMessage && !requestNewPassword) || (errorMessage && newPassword)) && !errorConfirmPasswordMessage &&
                                   <CheckboxBlock
                                          rememberLogin={rememberLogin}
                                          handleRememberLoginChange={handleRememberLoginChange}
                                          authorized={authorized}
                                          rememberTheLogin={rememberTheLogin}
                                          rememberThePassword={rememberThePassword}
                                   />
                            }
                            {requestNewPassword && !newPassword && <p className={css.resendVerificate}>Resend  Verification code</p>}
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
                                   {(!authorized || newPassword) ? buttonLoginText : requestNewPassword ? confirmText : buttonPasswordText}
                            </Button>
                     </form>
                     {authorized && errorMessage && !requestNewPassword && !newPassword && <p className={css.forgotPassword} onClick={handleShowModal}>Forgot Password?</p>}
                     {!newPassword && <SocialAuth />}
                     <ModalForgotPassword isOpen={showModal} onRequestClose={handleNotShowModal} onGetNewPassword={handleSetRequestNewPassword} />
                     <Link to="/registration">
                            <p className={newPassword ? css.linkToSignUpWithMargin : css.linkToSignUp}>Don’t Have an Account? Sign Up </p>
                     </Link>
              </div>
       );
};

