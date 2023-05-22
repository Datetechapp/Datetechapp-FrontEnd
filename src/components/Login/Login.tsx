import React, { useState } from "react";
import css from "./login.module.css"
import questionSign from "../../assets/ModalAuth/questionSign.svg"
import { Button, Input, Checkbox } from "../common"



export const Login = () => {
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [rememberPassword, setRememberPassword] = useState(false);
       const [errorMessage, setErrorMessage] = useState("");
       const [isFocused, setIsFocused] = useState(false);

       const handleFocus = () => {
              setIsFocused(true);
       };

       const handleBlur = () => {
              setIsFocused(false);
       };

       const validateEmail = (email: string) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(email);
       };

       const validatePhone = (phone: string) => {
              const phoneRegex = /^\+?[1-9]\d{1,14}$/;
              return phoneRegex.test(phone);
       };

       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const { name, value } = e.target;

              if (name === "email") {
                     setEmail(value);
              } else {
                     setPhone(value);
              }
       };

       const isValid = (value: string) => {
              return validateEmail(value) || validatePhone(value);
       };

       const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();

              if (isValid(email)) {
                     // логика авторизации с использованием email
              } else if (isValid(phone)) {
                     // логика авторизации с использованием номера телефона
              } else {
                     // вывод соответствующего сообщения об ошибке
                     if (!email) {
                            setErrorMessage("Попробуйте войти с помощью телефона");
                     } else if (!phone) {
                            setErrorMessage("Попробуйте войти с помощью email");
                     }
              }
       };

       const handleRememberPasswordChange = () => {
              setRememberPassword(!rememberPassword);
       };

       return (
              <div>
                     <form className={css.formForEmail} onSubmit={handleSubmit}>
                            <div className={css.inputBlock}>
                                   <Input
                                          className={css.inputForEmail}
                                          type="text"
                                          autoComplete="off"
                                          name="email"
                                          value={email ? email : phone}
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
                                                 checked={rememberPassword}
                                                 onChange={handleRememberPasswordChange}
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
                                                 <p className={css.saveLoginText}>Select to save your account details for quick login on this device</p>
                                          </div>
                                   </div>
                            </div>
                            <Button
                                   className={!isFocused ? css.btnContinue : isFocused && (isValid(email) || isValid(phone)) ? css.btnFocusedValid : css.btnFocused}
                                   disabled={!isValid(email) && !isValid(phone)}
                            >
                                   Continue
                            </Button>

                            {errorMessage && <div>{errorMessage}</div>}
                     </form>
              </div>
       );
};