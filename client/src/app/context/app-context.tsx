"use client";

import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Location } from "../types/index";
import { User } from "../types/user";

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
  const [toggleShowMap, setToggleShowMap] = useState<boolean>(false);
  const [cameraShow, setCameraShow] = useState<boolean>(false);
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setLocation({
            latitude,
            longitude,
          });
        }
      );
    }
  }, []);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    toggleShowMap,
    setToggleShowMap,
    cameraShow,
    setCameraShow,
    location, 
    setLocation
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
