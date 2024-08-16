import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GeneralDataProvider } from "./services/DataProviders/GeneralDataProvider";
import { UserDataProvider } from "./services/DataProviders/UserDataProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GeneralDataProvider>
      <UserDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserDataProvider>
    </GeneralDataProvider>
  </React.StrictMode>
);
