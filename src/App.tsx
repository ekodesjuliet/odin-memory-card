import { useState, useEffect } from "react"
import { Homepage } from "./Homepage"
import type { Character } from "./character"
import { fetchCharacters } from "./characterService"

type GameState = "idle" | "active" | "ended"
export type Difficulty = "easy" | "medium" | "hard"

export const App = () => {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])

  const startGame = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
    setGameState("active")
  }

  useEffect(() => {
    if (gameState === "active") {
      fetchCharacters()
        .then(data => setCharacters(data))
    }
  }, [gameState])

  return (
    <>
      {gameState === "idle" &&
        <Homepage
          onStartGame={startGame}
        />
      }

    </>
  )
}
