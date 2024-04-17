import { Location } from '../types/index'
import { create } from 'zustand'

interface AppStore {
  loading: boolean
  location: Location | null
  toggleShowMap: boolean
  setLoading: (loading: boolean) => void
  setToggleShowMap: (toggleShowMap: boolean) => void
  setLocation: (location: Location | null) => void
}

type settterTypes = 'setLoading' | 'setToggleShowMap' | 'setLocation'

const defaultAppStore: Omit<AppStore, settterTypes> = {
  loading: false,
  toggleShowMap: false,
  location: null,
}

export const useAppStore = create<AppStore>((set) => ({
  ...defaultAppStore,
  setLoading: (loading) => set({ loading }),
  setToggleShowMap: (toggleShowMap) => {
    set({ toggleShowMap })
  },
  setLocation: (location) => {
    if (typeof window !== 'undefined') {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        set({ location: { latitude, longitude } })
      })
    }
  },
}))
