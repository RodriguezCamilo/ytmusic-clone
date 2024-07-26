import { PlayIcon, PauseIcon } from "./Player.jsx"
import { userPlayerStore } from "../store/playerStore.js"
import { playlists, songs } from "../lib/data"

export function CardPlayButton({ id, fill }) {
    const {currentMusic, isPlaying, setIsPlaying, setCurrentMusic} = userPlayerStore(state => state)
    
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id == id
    
    const handleClick = () => {

        if (isPlayingPlaylist){
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res=>res.json())
            .then(data=>{
                const {songs, playlist} = data
                setIsPlaying(true)
                setCurrentMusic({songs, playlist, song: songs[0]})
            })
            console.log({songs, playlists})
    }

 

    return (
    <button onClick={handleClick} className="size-full flex items-center">
        {isPlayingPlaylist ? <PauseIcon fill={fill}/> : <PlayIcon fill={fill}/>}
    </button>
    )
}