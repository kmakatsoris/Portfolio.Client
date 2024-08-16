import React, { createContext, useState } from "react";

export const GeneralDataContext = createContext();

export const GeneralDataProvider = ({ children }) => {
  const [currentPathname, setCurrentPathname] = useState("");
  const [pageTheme, setPageTheme] = useState({});
  const [glassModalInstance, setGlassModalInstance] = useState({});
  const [prevGlassModalInstance, setPrevGlassModalInstance] = useState({});
  const [renderingPagesMode, setRenderingPagesMode] = useState(1);
  const [metaDataContentKey, setMetaDataContentKey] = useState("");

  return (
    <GeneralDataContext.Provider
      value={{
        currentPathname, setCurrentPathname,
        pageTheme, setPageTheme,
        glassModalInstance, setGlassModalInstance,
        prevGlassModalInstance, setPrevGlassModalInstance,
        renderingPagesMode,  setRenderingPagesMode,
        metaDataContentKey, setMetaDataContentKey,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};
