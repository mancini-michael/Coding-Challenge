import React from "react";
import { Helmet } from "react-helmet-async";
import { ITitle } from "../../interfaces/head";

export const TitleTag: React.FC<ITitle> = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};
