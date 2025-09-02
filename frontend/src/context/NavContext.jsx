import { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [fullScreenNav, setFullScreenNav] = useState(false);

  return (
    <NavContext.Provider value={{ fullScreenNav, setFullScreenNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
