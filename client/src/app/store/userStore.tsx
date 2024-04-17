import { create } from 'zustand'
import { User } from '../types/user'

interface DataStore {
  user: User | null
  setUser: (_: User) => void
}

type setterTypes = 'setUser'

const defaultUserStore: Omit<DataStore, setterTypes> = {
  user: null,
}

export const useUserStore = create<DataStore>((set) => ({
  ...defaultUserStore,
  setUser: (user) => set({ user }),
}))
