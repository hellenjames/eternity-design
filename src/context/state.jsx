import { createContext } from "react";
import { useState } from "react";

export const EternityContext = createContext();

function EternityContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <EternityContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </EternityContext.Provider>
  );
}

export default EternityContextProvider;
