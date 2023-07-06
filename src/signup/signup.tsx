import React, { FC, useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { AtIcon } from '../icon';

type Props = {
  submitButtonText: string;
  onFormSubmit: OnFormSubmit;
} & JSX.IntrinsicElements['form'];

const initialState: SignUpFormValues = {
  name: '',
  nick: '',
  email: '',
  gender: 'male',
  password: '',
  passwordRepeat: ''
};


export const SignUp: FC<Props> = ({ submitButtonText, onFormSubmit, ...props }) => {
  const [values, setValues] = useState<SignUpFormValues>(initialState);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    onFormSubmit(values);
    setValues(() => initialState);
  };

  return (
    <form {...props} onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Sign Up</legend>
        <Input
          onChange={handleChange}
          placeholder="John Doe"
          name="name"
          type="text"
          variant="plain"
          label="Email"
          value={values.email}
        />
        <Input
          onChange={handleChange}
          placeholder="doewee"
          name="nick"
          type="text"
          variant="plain"
          label="Nick"
          value={values.email}
          description='введите свой ник'
          icon={<AtIcon />}
        />
        <Input
          onChange={handleChange}
          placeholder="doe@google.com"
          name="email"
          type="email"
          variant="plain"
          label="Email"
          value={values.email}
        />
        <Input
          onChange={handleChange}
          type="radio"
          value="male"
          label="Male"
          name="gender"
          checked={values.gender === 'male'}
        />
        <Input
          onChange={handleChange}
          type="radio"
          value="female"
          label="Female"
          name="gender"
          checked={values.gender === 'female'}
        />
        <Input
          onChange={handleChange}
          name="password"
          placeholder="topsecret"
          type="password"
          label="Password"
          value={values.password}
        />
        <Input
          onChange={handleChange}
          name="password"
          label="Password repeat"
          placeholder="topsecret"
          type="password"
          value={values.passwordRepeat}
        />
      </fieldset>
      <Button type="submit"> {submitButtonText} </Button>
    </form>
  );
};
