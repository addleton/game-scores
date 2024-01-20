import { createContext, useState } from "react";

export const UserContext = createContext(undefined);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const contextValue = { user, setUser };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
