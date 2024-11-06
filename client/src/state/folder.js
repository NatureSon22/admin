import { create } from "zustand";

const useFolderStore = create((set) => ({
  folder: {},
  setFolder: (folder) => set({ folder }),
  resetFolder: () => set({ folder: {} }),
}));

export default useFolderStore;
