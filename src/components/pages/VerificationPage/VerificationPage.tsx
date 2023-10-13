import css from "./verificationPage.module.css"
import { HeaderSecondary } from "components/HeaderSecondary"
import { Input } from "components/common"
import { useState } from "react"
import { Button } from "components/common"


export const VerificationPage = () => {

       const [values, setValues] = useState(['', '', '', '', '', '']);

       const handleChange = (index: number, value: string) => {
              const newValues = [...values];
              newValues[index] = value;
              setValues(newValues);
       };

       const isDisabled = values.some(value => value === '');


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
                                   <Button
                                          className={isDisabled ? css.continueBtn : css.continueBtnValid}
                                          disabled={isDisabled}>
                                          Continue
                                   </Button>
                                   <p className={css.resendCode}>Resend code</p>
                            </div>
                     </div >
              </div>
       )
}