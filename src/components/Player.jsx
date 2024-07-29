import { useEffect, useRef, useState } from "react"
import { userPlayerStore } from "../store/playerStore"
import { Slider } from "./Slider"
import { SongNextButton, SongPrevButton } from "./PrevNextSong"

export const PlayIcon = ({ fill }) => (
    <svg viewBox="0 0 24 24"
        fill={fill}
        focusable="false"
    ><path d="M6,4l12,8L6,20V4z"></path></svg>
)

export const PauseIcon = ({ fill }) => (
    <svg viewBox="0 0 24 24"
        fill={fill}
        focusable="false"
    ><path d="M9,19H7V5H9ZM17,5H15V19h2Z"></path></svg>

)

export const LikeIcon = () => (
    <svg viewBox="0 0 24 24" fill="white" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" ></path></svg>
)

export const DislikeIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" fill="white"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></svg>
)

export const VolumeIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z" ></path></svg>
)

export const NoVolumeIcon = () => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z" ></path></svg>
)



const CurrentSong = ({ image, title, artists }) => {
    return (
        <div className={`flex gap-4 items-center relative overflow-hidden`}>
            <picture className="w-10 h-10 rounded-sm overflow-hidden">
                <img src={image} alt={title} />
            </picture>
            <div className="flex flex-col">
                <h3 className="block font-semibold text-sm">
                    {title}
                </h3>
                <span className="block text-zinc-400 text-sm">
                    {artists?.join(', ')}
                </span>
            </div>
            <div className="flex-row h-6 gap-4 hidden md:flex">
                {
                    title && <> <DislikeIcon />
                        <LikeIcon /></>
                }

            </div>
        </div>
    )
}

const SongControl = ({ audio }) => {
    const currentTime = userPlayerStore(state => state.currentTime)
    const setCurrentTime = userPlayerStore(state => state.setCurrentTime)

    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate)
        return () => {
            audio.current.addEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime)
    }

    return (
        <Slider
            defaultValue={[0]}
            max={audio?.current?.duration ?? 0}
            min={0}
            value={[currentTime]}
            trackClassName="bg-white/15"
            rangeClassName="bg-[#f00000]"
            thumbClassName="bg-[#f00000] border-[#f00000]/20"
            heightClassName="h-[2px] group:hover:h-1 hover:h-1"
            className="w-full h-1"
            onValueChange={(value) => {
                audio.current.currentTime = value
            }}
        />
    )
}


const VolumeControl = () => {
    const volume = userPlayerStore(state => state.volume)
    const setVolume = userPlayerStore(state => state.setVolume)
    const previousVolumeRef = useRef(volume)

    const handleClickVolumen = () => {
        if (volume == 0) {
            setVolume(previousVolumeRef.current)
        } else {
            previousVolumeRef.current = volume
            setVolume(0)
        }
    }


    return (
        <div className="flex justify-center w-24 h-full gap-x-2 group">

            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                value={[volume * 100]}
                trackClassName="bg-white/30"
                rangeClassName="bg-white"
                thumbClassName="bg-white border-white/20"
                heightClassName="h-[2px]"
                className="w-[70px] transition-all duration-100 opacity-100 md:opacity-0 group-hover:opacity-100"
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
            />
            <button onClick={handleClickVolumen} className="size-10 fill-zinc-400">
                {volume > 0.01 ? <VolumeIcon /> : <NoVolumeIcon />}
            </button>

        </div>)
}

export function Player() {

    const { currentMusic, isPlaying, setIsPlaying, volume } = userPlayerStore(state => state)
    const audioRef = useRef()
    const currentTime = userPlayerStore(state => state.currentTime)
    const duration = audioRef?.current?.duration ?? 0

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    useEffect(() => {
        isPlaying
            ? audioRef.current.play()
            : audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        const { song, playlist, songs } = currentMusic
        if (song) {
            const src = `/music/${playlist.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
    }, [currentMusic])

    const handleClickPlay = () => {
        if(currentMusic?.song != null) {
            setIsPlaying(!isPlaying)
        }
        
    }


    const formatTime = time => {
        if (time == null) return `0:00`
        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="bg-zinc-800 h-full">
            <SongControl audio={audioRef} />
            <div className="flex flex-row-reverse md:flex-row  px-4 z-50 h-full justify-between items-center bg-neutral-800">
                <div className="flex items-center place-content-center gap-4 ">

                    <div className="size-5 hidden md:block">
                        <SongPrevButton />
                    </div>
                    <div className="size-10">
                        <button className="w-full h-full" onClick={handleClickPlay}>
                            {isPlaying ? <PauseIcon fill={'white'} /> : <PlayIcon fill={'white'} />}
                        </button>
                    </div>
                    <div className="size-5">
                        <SongNextButton />
                    </div>

                    <span className="text-zinc-400 text-xs hidden md:block">{formatTime(currentTime)} / {duration ? formatTime(duration) : '0:00'}</span>
                </div>
                <div>
                    <CurrentSong {...currentMusic.song} />
                </div>
                <div className="md:grid h-full w-24 place-content-center hidden">
                    <VolumeControl />
                </div>
                <audio ref={audioRef} />
            </div>
        </div>
    )
}