import { create } from "zustand";

export const userPlayerStore = create((set)=>({
    isPlaying: false,
    currentMusic: {playlist: null, song: null, songs: []},
    volume: 1,
    currentTime: 0,
    setCurrentTime: (currentTime) => set({currentTime}),
    setVolume: (volume) => set({volume}),
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({currentMusic})
}))