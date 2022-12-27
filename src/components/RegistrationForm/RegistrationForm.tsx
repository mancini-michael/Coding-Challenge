import React, { useEffect, useState } from "react";
import * as formUtils from "../../utils/form";
import { IError, IUser } from "../../interfaces/registration";
import "./index.scss";

export const RegistrationForm = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<IError>(formUtils.errorInitialState);
  const [user, setUser] = useState<IUser>(formUtils.userInitialState);

  useEffect(() => {
    const { username, email, password, confirmPassword } = user;

    /**
     * username must have length of three
     * email and password must pass with success their validators
     * password and confirmPassword must be the same
     * */
    setError({
      username: username !== "" && username.length < 3,
      email: email !== "" && !formUtils.emailRegExp.test(email),
      password: password !== "" && !formUtils.passwordRegExp.test(password),
      confirmPassword: confirmPassword !== "" && password !== confirmPassword,
    });
  }, [user]);

  useEffect(() => {
    const { username, email, password, confirmPassword } = error;

    setDisabled(
      username ||
        email ||
        password ||
        confirmPassword ||
        user.username === "" ||
        user.email === "" ||
        user.password === "" ||
        user.confirmPassword === "" ||
        !user.termsAndConditions
    );
  }, [error]);

  /**
   * update user state from form input
   * */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name, value } = e.target;
    const temp = name === "termsAndConditions" ? checked : value;
    setUser({ ...user, [name]: temp });
  };

  /**
   * submit user data, reset states and clean form
   * */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(user);
    setError(formUtils.errorInitialState);
    setUser(formUtils.userInitialState);
  };

  return (
    <form
      className="text-secondary bg-light border border-4 border-secondary p-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <>
        <h3 className="text-center border-bottom border-secondary pb-2 mb-3">
          Registration
        </h3>
        <div className={`mb-3 ${error.username ? "error" : ""}`}>
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={`${user.username}`}
            onChange={(e) => handleChange(e)}
          />
          {error.username && <span>non valido</span>}
        </div>
        <div className={`mb-3 ${error.email ? "error" : ""}`}>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={`${user.email}`}
            onChange={(e) => handleChange(e)}
          />
          {error.email && <span>non valido</span>}
        </div>
        <div className={`mb-3 ${error.password ? "error" : ""}`}>
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={`${user.password}`}
            onChange={(e) => handleChange(e)}
          />
          {error.password && <span>non valido</span>}
        </div>
        <div className={`mb-3 ${error.confirmPassword ? "error" : ""}`}>
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="form-control"
            value={`${user.confirmPassword}`}
            onChange={(e) => handleChange(e)}
          />
          {error.confirmPassword && <span>non valido</span>}
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            className="form-check-input"
            checked={user.termsAndConditions}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="termsAndConditions" className="form-check-label">
            I agree with terms and conditions.
          </label>
        </div>
        <button
          className={`btn btn-primary w-100 ${disabled ? "disabled" : ""}`}
        >
          Register
        </button>
      </>
    </form>
  );
};
