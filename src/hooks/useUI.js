import { create } from 'zustand'

const useUI = create((set, get) => ({
  favsFilter: false,
  toggleFavsFilter: () => set({ favsFilter: !get().favsFilter }),
}))

export default useUI
