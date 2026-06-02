import { useState, useRef } from "react"
import bgMusic from "./assets/music/background.mp3"

export const useAudio = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleToggleMute = () => {
    setIsMuted(prev => !prev)

    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
  }

  return {
    state: {
      audioRef,
      isMuted,
      bgMusic
    },
    actions: {
      handleToggleMute
    }
  }
}
