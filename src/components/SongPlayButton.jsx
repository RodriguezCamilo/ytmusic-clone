import { PlayIcon, PauseIcon } from "./Player.jsx"
import { userPlayerStore } from "../store/playerStore.js"

export function SongPlayButton({ playlistid ,id, fill }) {
    const {currentMusic, isPlaying, setIsPlaying, setCurrentMusic} = userPlayerStore(state => state)
    
    const isPlayingSong = isPlaying && currentMusic?.song.id == id
    
    const handleClick = () => {

        if (isPlayingSong){
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${playlistid}`)
            .then(res=>res.json())
            .then(data=>{
                const {songs, playlist} = data
                setIsPlaying(true)
                setCurrentMusic({songs, playlist, song: songs[id - 1]})
            })
    }

 

    return (
    <button onClick={handleClick} className="size-full flex items-center">
        {isPlayingSong ? <PauseIcon fill={fill}/> : <PlayIcon fill={fill}/>}
    </button>
    )
}