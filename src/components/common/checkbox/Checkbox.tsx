import type { FC } from "react";

interface CheckboxProps {
       checked?: boolean;
       onChange?: () => void;
       className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, className }) =>
       <input
              className={className}
              type="checkbox"
              onChange={onChange}
              checked={checked}
       />