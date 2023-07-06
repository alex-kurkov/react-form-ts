import { FC, useId } from 'react';
import './style.css';

export const TextInput: FC<TextInputProps> = ({
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

  let cn = ''

  if (icon) cn += 'icon'


  return (
    <div className="input-wrap">
      {icon ? (
        <div className="input-icon-wrap">
          <input className={`input ${cn}`} id={inputId} {...props} />
          <div className="icon">{icon}</div>
        </div>
      ) : (
        <input className={`input ${cn}`} id={inputId} {...props} />
      )}
      {description && <div>{description}</div>}
      {label && (
        <label className="label" htmlFor={inputId}>
          {label}
        </label>
      )}
      {error && <p className="">{error}</p>}
    </div>
  );
};
