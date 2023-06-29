import type { FC } from "react";

interface CheckboxProps {
       checked?: boolean;
       onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
       className?: string;
       name?: string
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, className, name }) =>
       <input
              className={className}
              type="checkbox"
              onChange={onChange}
              checked={checked}
              name={name}
       />