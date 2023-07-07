declare global {
  export type Sizes = 's' | 'm' | 'l';

  export type TextInputProps = {
    name: string;
    variant?: 'plain' | 'bordered' | 'filled';
    radius?: Sizes;
    inputSize?: Sizes;
    error?: string | boolean;
    label?: string;
    description?: string;
    withAsterisk?: boolean;
    icon?: JSX.Element;
    type: 'text' | 'password' | 'email';
  } & JSX.IntrinsicElements['input'];

  export type RadioInputProps = {
    name: string;
    inputSize?: Sizes;
    label: string;
    radius?: Sizes;
    type: 'radio';
  } & JSX.IntrinsicElements['input'];

  export type SignInFormValues = {
    email: string;
    password: string;
  };

  export type SignUpFormValues = {
    name: string;
    nick: string;
    email: string;
    gender: 'male' | 'female';
    password: string;
    passwordRepeat: string;
  };

  export type OnFormSubmit = (
    values: SignInFormValues | SignUpFormValues
  ) => void;
}

export {};
