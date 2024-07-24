import { create } from "zustand";

export const userPlayerStore = create((set)=>({
    isPlaying: false,
    currentMusic: {playlist: null, song: null, songs: []},
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic})
}))