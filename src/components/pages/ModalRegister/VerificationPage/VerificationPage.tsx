import css from './verificationPage.module.css';
import { HeaderSecondary } from 'components/HeaderSecondary';
import { Input } from 'components/common';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'components/common';
import { resendCode, checkVerificationCode } from 'api';
import { useNavigate } from 'react-router-dom';

export const VerificationPage = () => {
       const [values, setValues] = useState(['', '', '', '', '', '']);
       const [timer, setTimer] = useState(30);
       const [resendText, setResendText] = useState(
              `Resend code after 0:${String(timer).padStart(2, '0')}`
       );
       const [errorMessage, setErrorMessage] = useState('');
       const navigate = useNavigate();
       const inputRefs = values.map(() => useRef<HTMLInputElement | null>(null));

       useEffect(() => {
              const countdownInterval = setInterval(() => {

                     setTimer((prevTimer) => prevTimer - 1);
              }, 1000);

              return () => {
                     clearInterval(countdownInterval);
              };
       }, []); // Пустой массив зависимостей, чтобы запустить таймер только один раз

       useEffect(() => {
              if (timer > 0) {
                     setResendText(`Resend code after 0:${String(timer).padStart(2, '0')}`);
              } else {
                     setResendText('Resend code');
              }
       }, [timer]);

       const handleResendClick = () => {
              if (timer <= 0) {
                     setTimer(30);
                     setResendText(`Resend code after 0:${String(30).padStart(2, '0')}`);
                     resendCode();
                     setErrorMessage('');
                     setValues(['', '', '', '', '', '']);
              }
       };

       const handleChange = (index: number, value: string) => {
              const newValues = [...values];
              const currentInputRef = inputRefs[index]?.current;

              newValues[index] = value;

              if (value.length > 1) {
                     newValues[index] = value.slice(0, 1);
              }

              setValues(newValues);

              if (value === '') {
                     if (index > 0 && inputRefs[index - 1]?.current) {
                            const prevInputRef = inputRefs[index - 1]?.current;

                            prevInputRef?.focus();

                            if (prevInputRef && prevInputRef.setSelectionRange) {
                                   prevInputRef.setSelectionRange(prevInputRef.value.length, prevInputRef.value.length);
                            }
                     }
              } else if (currentInputRef) {
                     if (index < values.length - 1 && value.length >= currentInputRef.maxLength) {
                            if (inputRefs[index + 1]?.current) {
                                   const nextInputRef = inputRefs[index + 1]?.current;

                                   nextInputRef?.focus();
                            }
                     }
              }
       };

       const isDisabled = values.some((value) => value === '');

       const handleVerification = () => {
              checkVerificationCode({ passcode: values.join('') })
                     .then(() => {
                            navigate('/create-profile');
                     })
                     .catch((error) => {
                            setErrorMessage('Incorrect code. Check and try again');
                     });
       };

       return (
              <div className={css.verificationPageWrapper}>
                     <HeaderSecondary text="Log out" />
                     <div className={css.main}>
                            <div className={css.formBlock}>
                                   <h2 className={css.title}>Verify your account</h2>
                                   <p className={css.subtitle}>Enter the 6-digit code we sent you to </p>
                                   <p className={css.email}>sgulyako@mail.ru</p>
                                   <div className={css.inputsBlock}>

                                          {values.map((value, index) => (
                                                 <Input
                                                        key={index}
                                                        className={!errorMessage ? css.inputForVerify : css.inputWithError}
                                                        value={value}
                                                        type="text"
                                                        onChange={(e) => handleChange(index, e.target.value)}
                                                        inputRef={inputRefs[index]}
                                                 />
                                          ))}

                                   </div>
                                   {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
                                   <Button
                                          className={isDisabled ? css.continueBtn : css.continueBtnValid}
                                          disabled={isDisabled}
                                          onClick={handleVerification}
                                   >
                                          Continue
                                   </Button>
                                   <p className={resendText === 'Resend code' ? css.activeLink : css.passiveLink} onClick={handleResendClick}>
                                          {resendText}
                                   </p>
                            </div>
                     </div>
              </div>
       );
};