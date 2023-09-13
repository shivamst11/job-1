import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isCorporateView, setIsCorporateView] = useState(false);

  return (
    <GlobalContext.Provider value={{ isCorporateView, setIsCorporateView }}>
      {children}
    </GlobalContext.Provider>
  );
};
