import { FC, useId } from 'react';
import cn from 'classnames';
import './style.css';

export const TextInput: FC<TextInputProps> = ({
  error,
  label,
  description,
  variant = 'plain',
  radius = 'l',
  withAsterisk = false,
  icon,
  inputSize = 's',
  ...props
}) => {
  const inputId = useId();

  const inputClass = cn(
    'input',
    `input_size_${inputSize}`,
    `input_variant_${variant}`,
    `input_radius_${radius}`,
    {
      input_icon: icon,
      input_error: error,
    }
  );
  const labelClass = cn('label', `label_size_${inputSize}`);
  const descriptionClass = cn('description', `description_size_${inputSize}`);

  return (
    <div className="input-wrap">
      {label && (
        <>
          <label className={labelClass} htmlFor={inputId}>
            {withAsterisk && <span className="asterisk">*</span>}
            {label}
          </label>
        </>
      )}
      {description && <div className={descriptionClass}>{description}</div>}
      <div className="input-icon-wrap">
        <input className={inputClass} id={inputId} {...props} />
        {icon && <div className="icon_pos_absolute">{icon}</div>}
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};
