import type { FC, PropsWithChildren } from "react";
import css from './styles.module.css';


interface ButtonProps {
       onClick?: () => void;
       disabled?: boolean;
       className?: string;
       
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick, disabled, className }) =>
       <button
              className={className}
              onClick={onClick}
              disabled={disabled}
       >
              {children}
       </button>