import React from "react";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import { TitleTag } from "../components/TitleTag/TitleTag";

export const Registration = () => {
  return (
    <>
      <TitleTag title="Registration" />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <RegistrationForm />
      </div>
    </>
  );
};
