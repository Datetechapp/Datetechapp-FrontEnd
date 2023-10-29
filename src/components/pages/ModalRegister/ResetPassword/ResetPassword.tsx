import { LeftHalfAuth } from 'components/ModalAuth/LeftHalfAuth';
import { EmailOrPhoneInput } from 'components/ModalAuth';
import { useState } from 'react';
import validator from 'validator';
import css from './resetPassword.module.css';
import { Button } from '../../../common/button';
import { ModalCheckEmail } from './ModalCheckEmail';

export function ResetPassword() {
  const [emailOrPhoneValue, setEmailOrPhoneValue] = useState('');
  const [type, setType] = useState<'email' | 'phone'>('email');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isOpenModalCheckEmail, setIsOpenModalCheckEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);

  console.log(isValidEmail, isValidPhone, !isValidEmail && !isValidPhone);

  const handleFocusChange = () => {
    setIsFocusedEmail(!isFocusedEmail);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setEmailOrPhoneValue(newValue);

    if (validator.isEmail(newValue)) {
      setType('email');
      setIsValidEmail(true);
    } else if (validator.isMobilePhone(newValue, 'any')) {
      setType('phone');
      setIsValidPhone(true);
    } else {
      setIsValidEmail(false);
      setIsValidPhone(false);
    }
    setEmailOrPhoneValue(newValue);
  };

  const handleForGettingPassword = () => {
    document.body.style.overflow = 'hidden';
    setIsOpenModalCheckEmail(true);
  };

  return (
    <div className={css.modalReset}>
      <div className={css.leftHalfReset}>
        <LeftHalfAuth />
      </div>
      <div className={css.rightHalfReset}>
        <div className={css.resetPasswordWrapper}>
          <h2 className={css.resetTitle}>Reset password</h2>
          <p className={css.resetSubtitle}>
            Enter the email address or phone number you used to register and
            we’ll send you instructions on how to reset your password.
          </p>
          <div className={css.emailOrPhoneInputWrapper}>
            <EmailOrPhoneInput
              className={
                !isFocusedEmail ? css.inputForEmail : css.inputForFocusedEmail
              }
              value={emailOrPhoneValue}
              onChange={handleEmailChange}
              type={type}
              onFocus={handleFocusChange}
              onBlur={handleFocusChange}
            />
          </div>
          <Button
            className={
              !isValidEmail && !isValidPhone
                ? css.resetPasswordBtn
                : css.resetPasswordBtnPink
            }
            disabled={!isValidEmail && !isValidPhone}
            onClick={handleForGettingPassword}
          >
            Continue
          </Button>
        </div>
      </div>
      {isOpenModalCheckEmail && (
        <ModalCheckEmail
          isOpenModalCheckEmail={isOpenModalCheckEmail}
          onChange={setIsOpenModalCheckEmail}
        />
      )}
    </div>
  );
}
