import React from "react";
import ReactDOM from "react-dom/client";
import { SirokoProvider } from "./context/SirokoProvider";
import { SirokoApp } from "./SirokoApp";
import "./styles.css";
import { AppTheme } from "./theme/AppTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppTheme>
      <SirokoProvider>
        <SirokoApp />
      </SirokoProvider>
    </AppTheme>
  </React.StrictMode>
);
