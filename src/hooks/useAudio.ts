import { useState, useRef, useEffect } from 'react'
import bgMusic from '../assets/music/bg-music.mp3'

export const useAudio = () => {
    const [isMuted, setIsMuted] = useState<boolean>(true)

    const audioRef = useRef<HTMLAudioElement>(
        typeof Audio !== 'undefined' ? new Audio(bgMusic) : null
    )

    const lastTimeRef = useRef(0)

    const handleToggleMute = () => {
        setIsMuted((prev) => !prev)
    }

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.loop = true

        if (isMuted) {
            lastTimeRef.current = audio.currentTime
            audio.pause()
        } else {
            audio.currentTime = lastTimeRef.current || 0
            audio.play().catch(() => {})
        }
    }, [isMuted])

    return {
        isMuted,
        handleToggleMute,
    }
}
