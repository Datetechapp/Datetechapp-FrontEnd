import { HeaderSecondary } from 'components/pages/Questionnaire/HeaderSecondary';
import { NewPassword } from 'components/ModalAuth';
import React, { useState } from 'react';
import { Button } from 'components/common';
import {
  hasUppercaseLetter,
  hasSpecialCharacters,
} from 'components/ModalAuth/Login/Login';
import css from './changePassword.module.css';
import { ModalCommon } from 'components/common';

export const ChangePassword = () => {
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [isOpenModalChangedPassword, setIsOpenModalChangedPassword] =
    useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    setPasswordValid(
      e.target.value.length >= 8 &&
        hasUppercaseLetter(e.target.value) &&
        hasSpecialCharacters(e.target.value),
    );
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleShowModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpenModalChangedPassword(true);
  };

  return (
    <>
      {!isOpenModalChangedPassword ? (
        <div className={css.changePasswordWrapper}>
          <HeaderSecondary text="Log out" />
          <div className={css.main}>
            <div className={css.formBlock}>
              <h2 className={css.title}>Create a new password</h2>
              <NewPassword
                value={passwordValue}
                confirmPasswordValue={confirmPasswordValue}
                onChange={handlePasswordChange}
                onConfirmChange={handleConfirmPasswordChange}
              />
              <Button
                className={
                  !passwordValid || passwordValue !== confirmPasswordValue
                    ? css.continueBtn
                    : css.continueBtnValid
                }
                disabled={
                  !passwordValid || passwordValue !== confirmPasswordValue
                }
                onClick={handleShowModal}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={css.blockForModal}>
          <ModalCommon
            isOpen={isOpenModalChangedPassword}
            onChange={setIsOpenModalChangedPassword}
            textTitle="Password changed"
            textSubtitle="Your password has been successfully changed"
            buttonText="OK"
            isThereACancel={true}
          />
        </div>
      )}
    </>
  );
};
