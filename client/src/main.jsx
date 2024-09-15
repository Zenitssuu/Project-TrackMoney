import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import axios from "axios";
import { GlobalProvider } from "./context/GlobalContext.jsx";

axios.defaults.baseURL = `${import.meta.env.VITE_AXIOS_BASE_URL}`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
