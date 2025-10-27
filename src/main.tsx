import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import './App.scss';
import './index.scss';

// NOTE: All styling (Tailwind / CSS) has been removed per request.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);