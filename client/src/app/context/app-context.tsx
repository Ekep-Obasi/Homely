"use client";

import * as React from "react";
import { CustomErrorTypes, LocationTypes } from "../../../types";
import getLocation from "../utils/locations";

interface Props {
  children: React.ReactNode;
  props: unknown;
}

const initialState = {};

export const AppContext = React.createContext(initialState);

export function useApp() {
  return React.useContext<any>(AppContext);
}

export default function AppProvider({ children, ...props }: Props) {
  const [error, setError] = React.useState<CustomErrorTypes | null>({
    showError: false,
    errorMessage: null,
  });
  const [toggleShowMap, setToggleShowMap] = React.useState(true);
  const [cameraShow, setCameraShow] = React.useState(false);
  const [location, setLocation] = React.useState<LocationTypes | null>(null);

  React.useLayoutEffect(() => {
    getLocation().then(({ lat, lng }) =>
      setLocation({
        latitude: lat,
        longitude: lng,
        address: "",
      })
    );
  }, []);

  const value = {
    toggleShowMap,
    setToggleShowMap,
    location,
    setLocation,
    cameraShow,
    setCameraShow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}