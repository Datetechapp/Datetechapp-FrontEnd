import css from './verificationPage.module.css';
import { HeaderSecondary } from 'components/HeaderSecondary';
import { Input } from 'components/common';
import { useState, useEffect } from 'react';
import { Button } from 'components/common';

export const VerificationPage = () => {
       const [values, setValues] = useState(['', '', '', '', '', '']);
       const [timer, setTimer] = useState(30);
       const [resendText, setResendText] = useState(
              `Resend code after 0:${String(timer).padStart(2, '0')}`
       );

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
              }
            };

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];

    newValues[index] = value;
    setValues(newValues);
  };

       const isDisabled = values.some((value) => value === '');
       console.log(timer);
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
                                                        className={css.inputForVerify}
                                                        value={value}
                                                        type="text"
                                                        onChange={(e) => handleChange(index, e.target.value)}
                                                 />
                                          ))}
                                   </div>
                                   <Button className={isDisabled ? css.continueBtn : css.continueBtnValid} disabled={isDisabled}>
                                          Continue
                                   </Button>
                                   <p className={css.resendCode}>Resend code</p>
                                   <span>{resendText}</span>
                                   <br />
                                   <button onClick={handleResendClick} disabled={timer !== 0}>
                                          {resendText}
                                   </button>
                            </div>
                     </div>
              </div>
       );
};