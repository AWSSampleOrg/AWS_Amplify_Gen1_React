import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
// import { Amplify } from "aws-amplify";
// import amplifyconfig from "./amplifyconfiguration.json";

// Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
