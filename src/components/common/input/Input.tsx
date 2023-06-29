import type { FC, ChangeEvent, FocusEvent, KeyboardEvent, MutableRefObject } from "react"

interface InputProps {
       id?: string;
       value?: string;
       className: string;
       type: string;
       autoComplete?: string;
       name?: string;
       placeholder?: string;
       accept?: string;
       min?: string;
       max?: string;
       inputRef?: MutableRefObject<HTMLInputElement | null>;
       onChange: (e: ChangeEvent<HTMLInputElement>) => void;
       onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
       onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;


}

export const Input: FC<InputProps> = ({ id, value, onChange, className, type, autoComplete, name, placeholder, onFocus, onBlur, inputRef, accept, min, max }) =>
       <input
              id={id}
              className={className}
              value={value}
              onChange={onChange}
              type={type}
              autoComplete={autoComplete}
              name={name}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
              ref={inputRef}
              accept={accept}
              min={min}
              max={max}
       />