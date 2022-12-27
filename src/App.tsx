import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route path="registration" element={<Registration />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
};
