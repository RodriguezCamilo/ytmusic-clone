import { useEffect, useRef, useState } from "react"
import { userPlayerStore } from "../store/playerStore"

export const PlayIcon = () => (
    <svg viewBox="0 0 24 24"
        fill="white"
        focusable="false"
    ><path d="M6,4l12,8L6,20V4z"></path></svg>
)

export const PauseIcon = () => (
    <svg viewBox="0 0 24 24"
        fill="white"
        focusable="false"
    ><path d="M9,19H7V5H9ZM17,5H15V19h2Z"></path></svg>

)

const CurrentSong = ({image, title}) => {
    return (
        
    )
}

export function Player() {

    const {currentMusic, isPlaying, setIsPlaying} = userPlayerStore(state => state)
    const audioRef = useRef()


    useEffect(()=>{
        isPlaying
            ? audioRef.current.play()
            : audioRef.current.pause()
    },[isPlaying])

    useEffect(()=>{
        const {song, playlist, songs} = currentMusic
        if (song){
            const src = `/music/${playlist.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }

    },[currentMusic])

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }


    return (
        <div className="flex flex-row h-full px-4 z-50 justify-between items-center bg-zinc-800">
            <div className="grid place-content-center gap-4 ">
                <div className="w-[40px] h-[40px]">
                    <button className="w-full h-full" onClick={handleClick}>
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                </div>
            </div>
            <div>
                Cancion
            </div>
            <div>
                Volumen
            </div>
            <audio ref={audioRef}/>
        </div>
    )
}