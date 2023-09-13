"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { User } from "../types";

interface Props {
  children: ReactNode;
}

// because the initial state is not fully know at this moment
export const AppContext = createContext<(User & any) | undefined>(undefined);

export function useApp() {
  return useContext<User & any>(AppContext);
}

export default function AppProvider({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [toggleShowMap, setToggleShowMap] = useState<boolean>(true);
  const [cameraShow, setCameraShow] = useState<boolean>(false);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    toggleShowMap,
    setToggleShowMap,
    cameraShow,
    setCameraShow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
