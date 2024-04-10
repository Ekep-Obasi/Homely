'use client'

import { useState, createContext, useContext, ReactNode, useEffect } from 'react'
import { Location } from '../types/index'
import { User } from '../types/user'

interface Props {
  children: ReactNode
}

type AppStore = {
  user: User | null
  setUser: (k: User | null) => void
  loading: boolean
  setLoading: (k: boolean) => void
  toggleShowMap: boolean
  setToggleShowMap: (k: boolean) => void
  cameraShow: boolean
  setCameraShow: (k: boolean) => void
  location: Location | null
  setLocation: (k: Location | null) => void
}

const defaultAppStore: AppStore = {
  user: null,
  setUser: (k: User | null) => null,
  loading: false,
  setLoading: (k: boolean) => null,
  toggleShowMap: false,
  setToggleShowMap: (k: boolean) => null,
  cameraShow: false,
  setCameraShow: (k: boolean) => null,
  location: null,
  setLocation: (k: Location | null) => null,
}

export const AppContext = createContext<AppStore>(defaultAppStore)

export function useApp(): AppStore {
  return useContext<AppStore>(AppContext)
}

export default function AppProvider({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [toggleShowMap, setToggleShowMap] = useState<boolean>(false)
  const [cameraShow, setCameraShow] = useState<boolean>(false)
  const [location, setLocation] = useState<Location | null>(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setLocation({
          latitude,
          longitude,
        })
      })
    }
  }, [])

  const value: AppStore = {
    user,
    setUser,
    loading,
    setLoading,
    toggleShowMap,
    setToggleShowMap,
    cameraShow,
    setCameraShow,
    location,
    setLocation,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
