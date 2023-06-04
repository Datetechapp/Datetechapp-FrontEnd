import React, { useState, useEffect, useRef, FC } from "react";
import css from "./registration.module.css";
import { Button } from "../../../common";
import validator from 'validator';
import { EmailOrPhoneInput } from "../../../ModalAuth/EmailOrPhoneInput";
import { PasswordInput } from "../../../ModalAuth/PasswordInput";
import { CheckboxBlock } from "../../../ModalAuth/CheckboxBlock";
import { NewPassword } from "../../../ModalAuth/NewPassword";
import { SocialAuth } from "components/ModalAuth/SocialAuth";
import { Link } from "react-router-dom";

const loginText = "Sign up to your account with E-mail or Phone number"
const buttonContinueText = "Continue"
const buttonPasswordText = "Sign Up"
const rememberTheLogin = "Remember the Login"
const rememberThePassword = "Remember the Password"
const verifyYourAccount = "Verify your Account"
const confirmText = "Confirm"
const createPassword = "Create a Password"
const passwordMustBe = "Password must be at least 8 characters"
const enterVerificCode = "Enter your Verification code"

export const Registration: FC = () => {
       const [value, setValue] = useState('');
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [rememberLogin, setRememberLogin] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage] = useState("")
       const [isFocused, setIsFocused] = useState(false);
       const [isCodeVerified, setIsCodeVerified] = useState(false)
       const [authorized, setAuthorized] = useState(false);
       const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

       const inputRef = useRef<HTMLInputElement>(null);

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

              if (authorized && !isCodeVerified) {
                     if (value !== "1111") {
                            setErrorMessage("Incorrect verification code. Please enter the correct code.");
                     } else {
                            // тут будет логика запроса на сервер с email и паролем пользователя
                            setErrorMessage("");
                            setValue("")
                            setIsCodeVerified(prevIsCodeVerified => !prevIsCodeVerified)
                     }

              } else if (isCodeVerified) {
                     if (value.length < 8) {
                            setErrorMessage("Incorrect password. Password must be at least 8 characters")
                            setErrorConfirmPasswordMessage("")
                     } else if (value !== confirmPasswordValue) {
                            setErrorMessage("")
                            setErrorConfirmPasswordMessage("The Passwords doesn't match. Check the character set");
                     } else {
                            setErrorMessage("")
                            setErrorConfirmPasswordMessage("")
                            // тут будет логика сохранения нового пароля
                     }
              }

              else {
                     if (!validator.isEmail(value) && !validator.isMobilePhone(value, 'any')) {
                            setErrorMessage('Incorrect E-mail or Phone number. Check the character set and try again');
                     } else {
                            // тут будет логика отправки на сервер запроса с email/телефоном пользователя
                            console.log(`Your ${type} is ${value}`);
                            setValue("");
                            setAuthorized(true);
                            setErrorMessage("")
                     }
              }
       };

       const handleRememberLoginChange = () => {
              setRememberLogin(prevState => !prevState);
       };


       useEffect(() => {
              if (authorized && inputRef.current) {
                     inputRef.current.focus();
              }
       }, [authorized]);
       return (
              <div>
                     <h2 className={css.messageLogIn}>
                            {!authorized ? loginText : (authorized && !isCodeVerified) ? verifyYourAccount : createPassword}
                     </h2>
                     {authorized && <p className={!isCodeVerified ? css.signUpSubtitle : css.createPswdSub}>{authorized && !isCodeVerified ? enterVerificCode : passwordMustBe}</p>}
                     <form className={css.formForEmail} onSubmit={handleSubmit} noValidate>
                            <div>
                                   {!authorized ? <div className={css.inputBlock}>
                                          <EmailOrPhoneInput
                                                 errorMessage={errorMessage}
                                                 value={value}
                                                 type={type}
                                                 onChange={handleInputChange}
                                                 onFocus={handleFocusChange}
                                                 onBlur={handleFocusChange}
                                          /></div>
                                          : (authorized && !isCodeVerified)
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
                                                 </div> :
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
                                                 />}
                                   {errorMessage && !isCodeVerified && <p className={css.errorMsg}>{errorMessage}</p>}
                            </div>
                            {((!errorMessage && !authorized) || (authorized && isCodeVerified && !errorConfirmPasswordMessage)) &&
                                   <CheckboxBlock
                                          rememberLogin={rememberLogin}
                                          handleRememberLoginChange={handleRememberLoginChange}
                                          authorized={authorized}
                                          rememberTheLogin={rememberTheLogin}
                                          rememberThePassword={rememberThePassword}
                                   />
                            }
                            {authorized && !isCodeVerified && <p className={css.resendVerificate}>Resend  Verification code</p>}
                            <Button
                                   className={
                                          !isFocused && value.length === 0
                                                 ? css.btnContinue
                                                 : (validator.isEmail(value) || validator.isMobilePhone(value))
                                                        ? css.btnFocusedValid
                                                        : css.btnFocused
                                   }
                                   disabled={value.length === 0}
                            >
                                   {!authorized ? buttonContinueText : authorized && isCodeVerified ? buttonPasswordText : confirmText }
                            </Button>
                     </form>
                     {!isCodeVerified && <SocialAuth />}
                     <Link to="/auth" >
                            <p className={!isCodeVerified ? css.linkToAuth : css.linkToAuthWithMoreMargin}>Do You Have an Account? Sign In  </p>
                     </Link>
              </div>
       );
};

