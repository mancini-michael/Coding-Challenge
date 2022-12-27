import { IError, IUser } from "../interfaces/registration";

export const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

/**
 * initial error state
 * */
export const errorInitialState: IError = {
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
} satisfies IError;

/**
 * initial user state
 * */
export const userInitialState: IUser = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndConditions: false,
} satisfies IUser;
