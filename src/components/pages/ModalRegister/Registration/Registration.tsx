import React, { useState, useEffect, useRef, FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import css from "./registration.module.css";
import { Button } from "../../../common";
import validator from 'validator';

import { EmailOrPhoneInput } from "../../../ModalAuth/EmailOrPhoneInput";
import { NewPassword } from "../../../ModalAuth/NewPassword";
import { registration } from "../../../../api"
import { gendersAndPurposeFromBack } from "../../../../store/gendersAndPurpose/slice"
import { useAppDispatch } from "hooks/hooks"
import { hasUppercaseLetter, hasSpecialCharacters } from "components/ModalAuth/Login/Login";

const passwordMustBe = "Password must be at least 8 characters"
const enterVerificCode = "Enter your Verification code"

export const Registration: FC = () => {

       const [emailOrPhoneValue, setEmailOrPhoneValue] = useState('');
       const [passwordValue, setPasswordValue] = useState("")
       const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
       const [type, setType] = useState<'email' | 'phone'>('email');
       const [errorMessage, setErrorMessage] = useState('');
       const [isCodeVerified, setIsCodeVerified] = useState(false)

       const [isValidEmail, setIsValidEmail] = useState(false)

       const [passwordValid, setPasswordValid] = useState(false);
       const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
       const [isFocusedEmail, setIsFocusedEmail] = useState(false);

       const handleFocusChange = () => {
              setIsFocusedEmail(!isFocusedEmail);
       };



       const inputRef = useRef<HTMLInputElement>(null);
       const navigate = useNavigate()
       const dispatch = useAppDispatch();

       const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordValue(e.target.value);
              setPasswordValid(e.target.value.length >= 8 && hasUppercaseLetter(e.target.value) && hasSpecialCharacters(e.target.value));
       };

       const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPasswordValue(e.target.value);
              setConfirmPasswordValid(e.target.value === passwordValue && e.target.value.length > 0);
       };

       function isMobilePhone(value: string): boolean {
              const phoneNumber = value.replace(/[^\d]/g, '');
              return /^\+\d{11,}$/.test(phoneNumber);
       }


       const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              setErrorMessage("")

              if (validator.isEmail(newValue)) {
                     setType('email');
                     setIsValidEmail(true);
              } else if (isMobilePhone(newValue)) {
                     setType('phone');
                     setIsValidEmail(true);
              } else {
                     setIsValidEmail(false)
              }
              setEmailOrPhoneValue(newValue);
       };

       const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
              e.preventDefault();

              if (isCodeVerified) {
                     if (passwordValue.length < 8) {
                            setErrorMessage("Incorrect password. Password must be at least 8 characters")
                     } else if (passwordValue !== confirmPasswordValue) {
                            setErrorMessage("")
                     } else {
                            setErrorMessage("")

                            dispatch(gendersAndPurposeFromBack({ "password": passwordValue, "confirm_password": confirmPasswordValue }))
                            navigate("/create-profile")

                     }
              }

              else {
                     if (!validator.isEmail(emailOrPhoneValue) && !validator.isMobilePhone(emailOrPhoneValue, 'any')) {
                            setErrorMessage('Incorrect E-mail or Phone number. Check the character set and try again');
                     } else {
                            registration({ "username": emailOrPhoneValue, "password": passwordValue, "confirm_password": confirmPasswordValue }).then((response) => {
                                   if (response.ok) {
                                          setErrorMessage("")
                                   } else {
                                          throw new Error('Ошибка при выполнении запроса: ' + response.status);
                                   }
                            }).catch((error) => {
                                   console.error("Произошла ошибка при выполнении запроса:", error);
                                   setErrorMessage("Data has already been used in the system.")
                            });;
                     }
              }
       };


       useEffect(() => {
              if (inputRef.current) {
                     inputRef.current.focus();
              }
       }, []);


       return (
              <div>
                     <div className={css.blockToRegistration}>
                            <h2 className={css.messageSignUp}>Sign Up</h2>
                            <Link to="/login" className={css.messageHaveAnAccount}>Have an account? Sign in</Link>
                     </div>
                     <form className={css.formForEmail} onSubmit={handleSubmit} noValidate>
                            <div>
                                   <div className={css.inputBlock}>
                                          <EmailOrPhoneInput
                                                 className={!isFocusedEmail && emailOrPhoneValue.length === 0 ? css.inputForEmail
                                                        : isFocusedEmail ? css.inputForFocusedEmail
                                                               : (isValidEmail && !isFocusedEmail && !errorMessage)
                                                                      ? css.inputForEmailValid
                                                                      : css.inputForEmailError}
                                                 value={emailOrPhoneValue}
                                                 type={type}
                                                 onChange={handleEmailChange}
                                                 onFocus={handleFocusChange}
                                                 onBlur={handleFocusChange}
                                          />
                                          {errorMessage && <div className={css.errorMsg}>{errorMessage}</div>}
                                   </div>
                                   <NewPassword
                                          value={passwordValue}
                                          confirmPasswordValue={confirmPasswordValue}
                                          onChange={handlePasswordChange}
                                          onConfirmChange={handleConfirmPasswordChange}
                                   />
                            </div>
                            <Button
                                   className={(isValidEmail && passwordValid && confirmPasswordValid) ? css.btnContinuePink : css.btnContinue}
                                   disabled={(!isValidEmail || !passwordValid || !confirmPasswordValid)}>Continue</Button>
                     </form>
                     <p className={css.privacyPolicyText}>By continuing, you agree to our Terms and Conditions.<br />
                            Learn how we use your data in our <span className={css.privacyPolicyLink}>Privacy Policy</span>.</p>
              </div>
       );
};

