import { createContext } from "react";
import { useState } from "react";

export const EternityContext = createContext();

function EternityContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState({
    keyword: "",
    tag: "",
    location: "",
  });
  

  return (
    <EternityContext.Provider value={{ currentUser, setCurrentUser,searchKeyword,setSearchKeyword }}>
      {children}
    </EternityContext.Provider>
  );
}

export default EternityContextProvider;
