import React, { FC, useState } from 'react';
import css from './newPassword.module.css';
import { PasswordInput } from '../PasswordInput';
import { IsValidPasswordBlock } from '../../pages/ModalRegister/Registration/IsValidPasswordBlock/IsValidPasswordBlock';
import { ReactComponent as IconIsNotValid } from '../../../assets/ModalAuth/iconIsNotValidPassword.svg';
import { ReactComponent as IconIsValid } from '../../../assets/ModalAuth/iconIsValidPassword.svg';
import { hasUppercaseLetter, hasSpecialCharacters } from '../Login/Login';

type NewPasswordInputProps = {
  value: string;
  confirmPasswordValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NewPassword: FC<NewPasswordInputProps> = ({
  value,
  confirmPasswordValue,
  onChange,
  onConfirmChange,
}) => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  const handleFocusPasswordChange = () => {
    setIsPasswordFocused(!isPasswordFocused);
  };

  const handleFocusConfirmPasswordChange = () => {
    setIsConfirmPasswordFocused(!isConfirmPasswordFocused);
  };

  const passwordIsValid =
    value.length >= 8 &&
    hasUppercaseLetter(value) &&
    hasSpecialCharacters(value);
  const confirmPasswordIsValid = value === confirmPasswordValue;

  return (
    <div className={css.blockInputNewPassword}>
      <div className={css.passwordInput}>
        <PasswordInput
          className={
            !isPasswordFocused && value.length === 0
              ? css.inputForPassword
              : isPasswordFocused
              ? css.inputForFocusedPassword
              : passwordIsValid && !isPasswordFocused
              ? css.inputForPasswordValid
              : css.inputForPasswordError
          }
          value={value}
          onChange={onChange}
          isFocused={isPasswordFocused}
          onFocus={handleFocusPasswordChange}
          onBlur={handleFocusPasswordChange}
          placeholder="Create Password"
          passwordIsValid={passwordIsValid}
        />

        {isPasswordFocused && (
          <IsValidPasswordBlock
            title="Password must contain:"
            firstIcon={value.length < 8 ? <IconIsNotValid /> : <IconIsValid />}
            firstCondition="a minimum 8 characters"
            secondIcon={
              hasUppercaseLetter(value) ? <IconIsValid /> : <IconIsNotValid />
            }
            secondCondition="an upper case character"
            thirdIcon={
              hasSpecialCharacters(value) ? <IconIsValid /> : <IconIsNotValid />
            }
            thirdCondition="a special character"
            isPasswordFocused={isPasswordFocused}
          />
        )}
      </div>
      <div className={css.confirmPasswordInput}>
        <PasswordInput
          className={
            !isConfirmPasswordFocused && confirmPasswordValue.length === 0
              ? css.inputForPassword
              : isConfirmPasswordFocused
              ? css.inputForFocusedPassword
              : confirmPasswordIsValid && !isConfirmPasswordFocused
              ? css.inputForPasswordValid
              : css.inputForPasswordError
          }
          value={confirmPasswordValue}
          onChange={onConfirmChange}
          isFocused={isConfirmPasswordFocused}
          onFocus={handleFocusConfirmPasswordChange}
          onBlur={handleFocusConfirmPasswordChange}
          placeholder="Confirm Password"
          passwordIsValid={confirmPasswordIsValid}
        />

        {isConfirmPasswordFocused && (
          <IsValidPasswordBlock
            title="Confirm password:"
            firstIcon={
              value !== confirmPasswordValue ? (
                <IconIsNotValid />
              ) : (
                <IconIsValid />
              )
            }
            firstCondition="passwords must be the same"
            isPasswordFocused={isPasswordFocused}
          />
        )}
      </div>
    </div>
  );
};
