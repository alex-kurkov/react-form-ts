declare global {
  export type TextInputProps = {
    name: string;
    variant?: 'plain' | 'bordered' | 'filled';
    radius?: 'xs' | 's' | 'm' | 'l';
    size?: 's' | 'm' | 'l';
    error?: string | boolean;
    label?: string;
    description?: string;
    withAsterisk?: boolean;
    icon?: JSX.Element;
    type: 'text' | 'password' | 'email';
  } & JSX.IntrinsicElements['input'];

  export type RadioInputProps = {
    name: string;
    variant?: 'plain' | 'bordered' | 'filled';
    size?: 's' | 'm' | 'l';
    label?: string;
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
