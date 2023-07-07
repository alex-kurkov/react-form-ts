import { FC, useId } from 'react';
import cn from 'classnames';
import './style.css';

export const RadioInput: FC<RadioInputProps> = ({
  label,
  inputSize = 's',
  radius = 's',
  ...props
}) => {
  const inputId = useId();

  const inputClass = cn(
    'input',
    `input_size_${inputSize}`,
  );
  const labelClass = cn('label', `label_size_${inputSize}`, `label_radius_${radius}`);

  return (
    <div className="input-wrap">
      <input className={inputClass} id={inputId} {...props} />
      {label && (
        <label className={labelClass} htmlFor={inputId}>
          {label}
        </label>
      )}
    </div>
  );
};
