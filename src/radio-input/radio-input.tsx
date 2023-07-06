import { FC, useId } from 'react';
import './style.css';

export const RadioInput: FC<RadioInputProps> = ({
  label,
  variant,
  size,
  ...props
}) => {
  const inputId = useId();

  let cn = '';

  return (
    <div className="input-wrap">
      <input className={`input ${cn}`} id={inputId} {...props} />
      {label && (
        <label className="label" htmlFor={inputId}>
          {label}
        </label>
      )}
    </div>
  );
};
