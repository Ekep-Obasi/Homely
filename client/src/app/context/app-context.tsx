"use client";

import * as React from "react";

const initialState = {};

export const AppContext = React.createContext(initialState);

export default function AppProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [toggleShowMap, setToggleShowMap] = React.useState(false);
  return (
    <AppContext.Provider
      value={{
        toggleShowMap,
        setToggleShowMap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
