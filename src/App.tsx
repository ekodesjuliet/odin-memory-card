import { useState } from "react"
import { Homepage } from "./Homepage"

type GameState = "idle" | "active" | "ended"

export const App = () => {
  const [gameState, setGameState] = useState<GameState>("idle")

  return (
    <>
      {gameState === "idle" && <Homepage />}
    </>
  )
}
