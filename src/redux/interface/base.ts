export interface IBaseState {
  isLoading: boolean;
  error: string;
}

export interface INoTyppedValue<T = any> {
    [key: string]: T;
}

export interface ILabelValue<T = string> {
  label: string;
  value: T;
}
