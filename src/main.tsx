import * as bootstrap from "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Registration } from "./pages/Registration";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
