import type { ComponentProps, RefObject } from 'react';

type InputProps = ComponentProps<'input'> & {
  inputRef?: RefObject<HTMLInputElement>;
};

export const Input = ({
  id,
  value,
  onChange,
  className,
  type,
  autoComplete,
  name,
  placeholder,
  onFocus,
  onBlur,
  inputRef,
  accept,
  min,
  max,
  readOnly,
  defaultChecked,
  disabled,
  multiple,
}: InputProps) => (
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
    readOnly={readOnly}
    defaultChecked={defaultChecked}
    disabled={disabled}
    multiple={multiple}
  />
);
