import { userPlayerStore } from "../store/playerStore.js"

const NextIcon = () => (
    <svg viewBox="0 0 24 24" fill='white' preserveAspectRatio="xMidYMid meet" >
        <path d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z"></path>
    </svg>
)

const PrevIcon = () => (
    <svg viewBox="0 0 24 24" fill="white" preserveAspectRatio="xMidYMid meet"><path d="M19,6L9,12l10,6V6L19,6z M7,6H5v12h2V6z"></path></svg>
)

export function SongNextButton() {
    const { currentMusic, setIsPlaying, setCurrentMusic } = userPlayerStore(state => state)

    const handleClick = () => {
        const playlistId = currentMusic?.song?.albumId

        if (playlistId) {
            fetch(`/api/get-info-playlist.json?id=${playlistId}`)
                .then(res => res.json())
                .then(data => {
                    const { songs } = data
                    const currentSongIndex = songs.findIndex(song => song.id === currentMusic.song.id)

                    const nextSongIndex = (currentSongIndex + 1) % songs.length

                    const nextSong = songs[nextSongIndex]

                    setIsPlaying(true)
                    setCurrentMusic({ ...currentMusic, song: nextSong })
                });
        }
    }

    return (
        <button onClick={handleClick} className="size-full flex items-center">
            <NextIcon />
        </button>
    )
}

export function SongPrevButton() {
    const { currentMusic, setIsPlaying, setCurrentMusic } = userPlayerStore(state => state)

    const handleClick = () => {
        const playlistId = currentMusic?.song?.albumId

        if (playlistId) {
            fetch(`/api/get-info-playlist.json?id=${playlistId}`)
                .then(res => res.json())
                .then(data => {
                    const { songs } = data
                    const currentSongIndex = songs.findIndex(song => song.id === currentMusic.song.id)

                    const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length

                    const nextSong = songs[prevSongIndex]

                    setIsPlaying(true)
                    setCurrentMusic({ ...currentMusic, song: nextSong })
                });
        }
    }

    return (
        <button onClick={handleClick} className="size-full flex items-center">
            <PrevIcon />
        </button>
    )
}