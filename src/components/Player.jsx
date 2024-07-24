import { useEffect, useRef, useState } from "react"

export const PlayIcon = ({ className }) => (
    <svg viewBox="0 0 24 24"
        fill="white"
        focusable="false"
    ><path d="M6,4l12,8L6,20V4z"></path></svg>
)

export const PauseIcon = ({ className }) => (
    <svg viewBox="0 0 24 24"
        fill="white"
        focusable="false"
    ><path d="M9,19H7V5H9ZM17,5H15V19h2Z"></path></svg>

)

export function Player() {

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef()

    useEffect(()=>{
        audioRef.current.src = `music/1/01.mp3`
    },[])

    const handleClick = () => {
        if(isPlaying){
            audioRef.current.pause()
        }
        else {
            audioRef.current.play()
            audioRef.current.volume = 0.1
        }
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