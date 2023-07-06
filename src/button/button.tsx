import { FC } from 'react';
import './style.css';

type ButtonType = JSX.IntrinsicElements['button'];

export const Button: FC<ButtonType> = ({
  children,
  ...props
}) => {
  return (
    <button className="button" {...props}>
      <span className="button__text">{children}</span>
    </button>
  );
};
