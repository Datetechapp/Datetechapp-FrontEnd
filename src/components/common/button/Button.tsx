import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  form?: string;
}

export const Button = ({ children, onClick, disabled, className, form }: PropsWithChildren<ButtonProps>) => (
  <button className={className} onClick={onClick} disabled={disabled} form={form}>
    {children}
  </button>
);
