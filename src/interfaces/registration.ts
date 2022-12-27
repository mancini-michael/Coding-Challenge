export interface IError {
  username: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
}
