import type { FC, PropsWithChildren } from 'react';
import css from './styles.module.css';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  form?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  disabled,
  className,
  form,
}) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
    form={form}
  >
    {children}
  </button>
);
