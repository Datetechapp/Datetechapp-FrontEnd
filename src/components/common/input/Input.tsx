import type { FC, ChangeEvent, FocusEvent } from "react"

interface InputProps {
       value: string;
       className?: string;
       type?: string;
       autoComplete?: string;
       name?: string;
       placeholder?: string;
       onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
       onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
       onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;

}

export const Input: FC<InputProps> = ({ value, onChange, className, type, autoComplete, name, placeholder, onFocus, onBlur }) =>
       <input
              className={className}
              value={value}
              onChange={onChange}
              type={type}
              autoComplete={autoComplete}
              name={name}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
       />