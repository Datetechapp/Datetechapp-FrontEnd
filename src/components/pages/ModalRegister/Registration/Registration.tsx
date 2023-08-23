import React, { useState, useEffect, useRef, FC } from "react";
import { useNavigate } from "react-router-dom";
import css from "./registration.module.css";
import { Button } from "../../../common";
import validator from 'validator';
import { EmailOrPhoneInput } from "../../../ModalAuth/EmailOrPhoneInput";
import { PasswordInput } from "../../../ModalAuth/PasswordInput";
import { CheckboxBlock } from "../../../ModalAuth/CheckboxBlock";
import { NewPassword } from "../../../ModalAuth/NewPassword";
import { SocialAuth } from "components/ModalAuth/SocialAuth";
import { Link } from "react-router-dom";
import { registration, checkVerificationCode } from "../../../../api"
import { gendersAndPurposeFromBack, LOAD_STATUSES_TYPES } from "../../../../store/gendersAndPurpose/slice"
import { useAppDispatch, useAppSelector } from "hooks/hooks"
import { getLoadStatus } from "store/gendersAndPurpose/selectors";


const loginText = "Sign up to your account with E-mail or Phone number"
const buttonContinueText = "Continue"
const buttonPasswordText = "Sign Up"
const rememberTheLogin = "Remember the Login"
const rememberThePassword = "Remember the Password"
const verifyYourAccount = "Verify your Account"
const confirmText = "Confirm"
const createPasswordText = "Create a Password"
const passwordMustBe = "Password must be at least 8 characters"
const enterVerificCode = "Enter your Verification code"

export const Registration: FC = () => {

       const [emailOrPhoneValue, setEmailOrPhoneValue] = useState('');
       const [verificCodeValue, setVerificCodeValue] = useState("");
       const [passwordValue, setPasswordValue] = useState("")
       const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [rememberLogin, setRememberLogin] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage] = useState("")
       const [isFocused, setIsFocused] = useState(false);
       const [isCodeVerified, setIsCodeVerified] = useState(false)
       const [authorized, setAuthorized] = useState(false);

       const inputRef = useRef<HTMLInputElement>(null);
       const navigate = useNavigate()
       const dispatch = useAppDispatch();
       const loadStatus = useAppSelector(getLoadStatus)


       const handleFocusChange = () => {
              setIsFocused(prevIsFocused => !prevIsFocused);
       };

       const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPasswordValue(e.target.value);
       };

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;

              if (!authorized) {
                     if (validator.isEmail(newValue)) {
                            setType('email');
                     } else if (validator.isMobilePhone(newValue, 'any')) {
                            setType('phone');
                     }
                     setEmailOrPhoneValue(newValue);
              } else if (authorized && !isCodeVerified) {
                     setVerificCodeValue(newValue)
              } else {
                     setPasswordValue(newValue)
              }
       };


       const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
              e.preventDefault();

              if (authorized && !isCodeVerified) {
                     checkVerificationCode({ "passcode": verificCodeValue }).then((response) => {
                            if (response.ok) {
                                   setIsCodeVerified(true)
                                   setErrorMessage("");
                            } else {
                                   throw new Error('Ошибка при выполнении запроса: ' + response.status);
                            }
                     }).catch((error) => {
                            console.error("Неверный верификационный код", error);
                            setErrorMessage("Invalid verification code. Please try again.");

                     });;;
              } else if (isCodeVerified) {
                     if (passwordValue.length < 8) {
                            setErrorMessage("Incorrect password. Password must be at least 8 characters")
                            setErrorConfirmPasswordMessage("")
                     } else if (passwordValue !== confirmPasswordValue) {
                            setErrorMessage("")
                            setErrorConfirmPasswordMessage("The Passwords doesn't match. Check the character set");
                     } else {
                            setErrorMessage("")
                            setErrorConfirmPasswordMessage("")

                            dispatch(gendersAndPurposeFromBack({ "password": passwordValue, "confirm_password": confirmPasswordValue }))   
                                   navigate("/create-profile")
                            
                     }
              }

              else {
                     if (!validator.isEmail(emailOrPhoneValue) && !validator.isMobilePhone(emailOrPhoneValue, 'any')) {
                            setErrorMessage('Incorrect E-mail or Phone number. Check the character set and try again');
                     } else {
                            registration({ "username": emailOrPhoneValue }).then((response) => {
                                   if (response.ok) {
                                          setAuthorized(true);
                                          setErrorMessage("")
                                   } else {
                                          throw new Error('Ошибка при выполнении запроса: ' + response.status);
                                   }


                            }).catch((error) => {
                                   console.error("Произошла ошибка при выполнении запроса:", error);
                                   setErrorMessage("Such user is already registered.")
                            });;
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
                            {!authorized ? loginText : (authorized && !isCodeVerified) ? verifyYourAccount : createPasswordText}
                     </h2>
                     {authorized && <p className={!isCodeVerified ? css.signUpSubtitle : css.createPswdSub}>{authorized && !isCodeVerified ? enterVerificCode : passwordMustBe}</p>}
                     <form className={css.formForEmail} onSubmit={handleSubmit} noValidate>
                            <div>
                                   {!authorized ? <div className={css.inputBlock}>
                                          <EmailOrPhoneInput
                                                 errorMessage={errorMessage}
                                                 value={emailOrPhoneValue}
                                                 type={type}
                                                 onChange={handleInputChange}
                                                 onFocus={handleFocusChange}
                                                 onBlur={handleFocusChange}
                                          /></div>
                                          : (authorized && !isCodeVerified)
                                                 ? <div className={css.blockInputVerificate}>
                                                        <PasswordInput
                                                               value={verificCodeValue}
                                                               onChange={handleInputChange}
                                                               errorMessage={errorMessage}
                                                               isFocused={isFocused}
                                                               onFocus={handleFocusChange}
                                                               onBlur={handleFocusChange}
                                                               placeholder="Verification code"
                                                        />
                                                 </div> :
                                                 <NewPassword
                                                        value={passwordValue}
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
                            {authorized && !isCodeVerified && <p className={css.resendVerificate} onClick={() => registration({username: emailOrPhoneValue})}>Resend  Verification code</p>}
                            <Button
                                   className={
                                          !isFocused && emailOrPhoneValue.length === 0
                                                 ? css.btnContinue
                                                 : (validator.isEmail(emailOrPhoneValue) || validator.isMobilePhone(emailOrPhoneValue))
                                                        ? css.btnFocusedValid
                                                        : css.btnFocused
                                   }
                                   disabled={(emailOrPhoneValue.length === 0
                                          && verificCodeValue.length === 0
                                          && passwordValue.length === 0
                                          && confirmPasswordValue.length === 0
                                   )}
                            >
                                   {!authorized ? buttonContinueText : authorized && isCodeVerified ? buttonPasswordText : confirmText}
                            </Button>
                     </form>
                     {!isCodeVerified && <SocialAuth />}
                     <Link to="/auth" >
                            <p className={!isCodeVerified ? css.linkToAuth : css.linkToAuthWithMoreMargin}>Do You Have an Account? Sign In  </p>
                     </Link>
              </div>
       );
};

