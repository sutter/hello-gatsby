export interface InputBasic {
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

export interface InputEditable {
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
}
