import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwicm9sZSI6IlVzZXIiLCJuYmYiOjE3MjEwNzUwMTcsImV4cCI6MTcyMTA3ODYxNywiaWF0IjoxNzIxMDc1MDE3LCJpc3MiOiJrbWFrYXRzb3JpcyIsImF1ZCI6Imh0dHBzOi8va21ha2F0c29yaXMuY29tIn0.-lisJmtgjNYMoKH2brEnXiGQ51_jpShee-0wVSrznSU"
  );

  return (
    <UserDataContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
