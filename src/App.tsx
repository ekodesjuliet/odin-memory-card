import { useState } from "react"
import { Homepage } from "./Homepage"

type GameState = "idle" | "active" | "ended"
export type Difficulty = "easy" | "medium" | "hard"

export const App = () => {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)

  const startGame = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
    setGameState("active")
  }

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
