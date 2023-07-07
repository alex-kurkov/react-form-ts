import React, { FC, useState } from 'react';
import { TextInput, RadioInput } from '../input';
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
        <legend>Зарегистрироваться</legend>
        <TextInput
          onChange={handleChange}
          placeholder="John Doe"
          name="name"
          type="text"
          variant="plain"
          inputSize="s"
          description="введите свое имя"
          label="Имя"
          value={values.name}
          error="не менее 3 символов"
        />
        <TextInput
          onChange={handleChange}
          placeholder="doewee"
          name="nick"
          type="text"
          label="Ник"
          inputSize="l"
          value={values.nick}
          description="введите свой ник"
          icon={<AtIcon color="#111" size="s" />}
        />
        <TextInput
          onChange={handleChange}
          placeholder="doe@google.com"
          name="email"
          type="email"
          variant="plain"
          label="Email"
          value={values.email}
        />
        <RadioInput
          onChange={handleChange}
          type="radio"
          value="male"
          inputSize="l"
          label="Male"
          name="gender"
          checked={values.gender === 'male'}
        />
        <RadioInput
          onChange={handleChange}
          type="radio"
          value="female"
          label="Female"
          name="gender"
          radius='l'
          checked={values.gender === 'female'}
        />
        <TextInput
          onChange={handleChange}
          name="password"
          placeholder="topsecret"
          type="password"
          label="Password"
          variant="bordered"
          value={values.password}
        />
        <TextInput
          onChange={handleChange}
          name="passwordRepeat"
          label="Password repeat"
          type="password"
          value={values.passwordRepeat}
          variant="filled"
        />
        <Button type="submit"> {submitButtonText} </Button>
      </fieldset>
    </form>
  );
};
