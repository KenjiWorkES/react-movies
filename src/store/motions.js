import { create } from 'zustand';

const useMotionsStore = create((set) => ({
  motions: [],
}));

export default useMotionsStore;
