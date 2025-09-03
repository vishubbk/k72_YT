import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stairs from "./components/common/Stairs.jsx";
import { NavProvider } from "./context/NavContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <NavProvider>
        <Stairs /> {/* this is my animation page load the site */}
        <App />
      </NavProvider>
    </HashRouter>
  </StrictMode>
);
