import { FC, useId } from 'react';
import './style.css';

export const Input: FC<InputProps> = ({
  error,
  label,
  description,
  variant,
  radius,
  size,
  withAsterisk,
  icon,
  ...props
}) => {
  const inputId = useId();

  return (
    <div className='input-wrap' >
      <input className="input" id={inputId} {...props} />
      {icon && <div className="icon">{icon}</div>}
      {description && <div>{description}</div>}
      {label && <label className="label" htmlFor={inputId}>{label}</label>}
      {error && <p className="">{error}</p>}
    </div>
  );
};
