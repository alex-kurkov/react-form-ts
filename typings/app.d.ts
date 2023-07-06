declare global {
  export type InputProps = {
    name: string;
    variant?: 'plain' | 'bordered' | 'filled';
    radius?: 'xs' | 's' | 'm' | 'l';
    size?: 's' | 'm' | 'l';
    error?: string | boolean;
    label?: string;
    description?: string;
    withAsterisk?: boolean;
    icon?: JSX.Element;
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
