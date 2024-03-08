import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useFavs = create(
  persist(
    (set, get) => ({
      favs: [],
      add: id => set({ favs: [...get().favs, id] }),
      remove: id => set({ favs: get().favs.filter(f => f !== id) }),
    }),
    { name: 'favs', storage: createJSONStorage(() => localStorage) },
  ),
)

export default useFavs
