export interface InputBasicInterface {
  className?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
  form?: string;
  tabIndex?: number;
  onChange?(event: any): void;
}

export interface InputEditableInterface {
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
}

export interface ButtonBaseInterface {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  form?: string;
  onClick(event: any): void;
}

export interface IconInterface {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}
