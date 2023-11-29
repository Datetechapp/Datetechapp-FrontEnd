import React, { FC } from 'react';
import { ReactComponent as OpenEye } from '../../../assets/ModalAuth/openEye.svg';
import { ReactComponent as CloseEye } from '../../../assets/ModalAuth/closeEye.svg';
import css from './eye.module.css';

interface EyeProps {
  showPassword: boolean;
  onVisiblePassword: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  isFocused: boolean;
  isValid?: boolean;
  value: string;
  isLogin?: boolean;
}

export const Eye: FC<EyeProps> = ({
  showPassword,
  onVisiblePassword,
  isFocused,
  isValid,
  value,
  isLogin,
}) => {
  return (
    <span className={css.passwordToggle} onMouseDown={onVisiblePassword}>
      {!showPassword ? (
        <OpenEye
          className={
            isLogin
              ? isFocused
                ? css.openEyeFocused
                : css.openEye
              : !isFocused && value.length === 0
              ? css.openEye
              : isFocused
              ? css.openEyeFocused
              : isValid && !isFocused
              ? css.openEyeValid
              : css.openEyeError
          }
        />
      ) : (
        <CloseEye
          className={
            isLogin
              ? isFocused
                ? css.openEyeFocused
                : css.openEye
              : !isFocused && value.length === 0
              ? css.openEye
              : isFocused
              ? css.openEyeFocused
              : isValid && !isFocused
              ? css.openEyeValid
              : css.openEyeError
          }
        />
      )}
    </span>
  );
};
