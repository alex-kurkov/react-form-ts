import React, { FC, useState } from 'react';
import { TextInput } from '../text-input';
import { Button } from '../button';

type Props = {
  submitButtonText: string;
  onFormSubmit: OnFormSubmit;
} & JSX.IntrinsicElements['form'];

const initialState: SignInFormValues = {
  email: '',
  password: '',
};

export const SignIn: FC<Props> = ({
  submitButtonText,
  onFormSubmit,
  ...props
}) => {
  const [values, setValues] = useState<SignInFormValues>(initialState);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    onFormSubmit(values);
    setValues(() => initialState);
  };

  return (
    <form {...props} onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Sign In</legend>
        <TextInput
          onChange={handleChange}
          placeholder="Email"
          name="email"
          type="email"
          variant="plain"
          label="EMAIL"
          value={values.email}
        />
        <TextInput
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
          value={values.password}
        />
        <Button type="submit">{submitButtonText}</Button>
      </fieldset>
    </form>
  );
};
