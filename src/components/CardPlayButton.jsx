import { PlayIcon, PauseIcon } from "./Player.jsx"
import { userPlayerStore } from "../store/playerStore.js"
import { playlists, songs } from "../lib/data"

export function CardPlayButton({ id }) {
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
    <button onClick={handleClick} className="h-6 w-6 flex items-center">
        {isPlayingPlaylist ? <PauseIcon/> : <PlayIcon/>}
    </button>
    )
}