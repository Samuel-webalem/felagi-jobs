import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/authContext.jsx";
import { JobProvider } from "./contexts/jobContext.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JobProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </JobProvider>
    </BrowserRouter>
  </React.StrictMode>
);
