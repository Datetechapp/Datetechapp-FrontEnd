import { FC, useState } from 'react';
import css from './passwordInput.module.css';
import { Input } from '../../common';
import { Eye } from '..';

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  passwordIsValid?: boolean;
  className: string;
  isLogin?: boolean;
};

export const PasswordInput: FC<PasswordInputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  className,
  isFocused,
  passwordIsValid,
  isLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isVisiblePassword = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.blockInputPassword}>
      <Input
        className={className}
        type={showPassword ? 'text' : 'password'}
        autoComplete="off"
        name="password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Eye
        showPassword={showPassword}
        onVisiblePassword={isVisiblePassword}
        isFocused={isFocused}
        isValid={passwordIsValid}
        value={value}
        isLogin={isLogin}
      />
    </div>
  );
};
