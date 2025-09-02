import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import { NavProvider } from "./context/NavContext.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
    <NavProvider>
       <Stairs/> {/*this is my animation page load the  site */}
      <App />
    </NavProvider>
    
    </BrowserRouter>
  </StrictMode>
);
