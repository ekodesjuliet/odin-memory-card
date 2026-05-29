import { useState, useEffect } from "react"
import { Homepage } from "./Homepage"
import type { Character } from "./character"
import { fetchCharacters } from "./characterService"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { shuffleCharacters } from "./shuffleCharacters"
import type { Difficulty } from "./difficulty"
import { DIFFICULTY_CONFIG } from "./difficulty"

type GameState = "idle" | "active" | "ended"

export const App = () => {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [clickedCards, setClickedCards] = useState<Set<number>>(new Set())
  const [highScore, setHighScore] = useState<number>(0)

  const currentScore = clickedCards.size

  const handleStartGame = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
    setGameState("active")
  }

  const handleCardClick = (id: number) => {
    if (gameState === "ended") return

    if (clickedCards.has(id)) {
      setGameState("ended")
      return
    }

    const nextSet = new Set(clickedCards)
    nextSet.add(id)

    setClickedCards(nextSet)

    setHighScore(prev => Math.max(prev, nextSet.size))

    setCharacters(prev => shuffleCharacters(prev))
  }

  const restartGame = () => {
    if (difficulty === null) return

    setClickedCards(new Set())
    handleStartGame(difficulty)
  }

  const handleBackToHome = () => {
    setGameState("idle")
    setClickedCards(new Set())
    setCharacters([])
    setDifficulty(null)
  }

  useEffect(() => {
    if (gameState !== "active" || difficulty === null) return

    const config = DIFFICULTY_CONFIG.find(config => config.difficulty === difficulty)
    if (!config) return

    fetchCharacters()
      .then(data => {
        const selected = data.slice(0, config?.cardCount)
        setCharacters(selected)
      })
  }, [gameState, difficulty])

  return (
    <>
      <Background />

      {gameState === "idle" &&
        <Homepage
          onStartGame={handleStartGame}
        />
      }

      {(gameState === "active" || gameState === "ended") && difficulty !== null &&
        <>
          <header
            className="
            relative
            z-10
            mt-5
            w-full
            flex
            items-center
            justify-between
            px-6
            gap-4
            "
          >
            <button
              onClick={handleBackToHome}
              className="
              text-sm
              text-slate-200
              bg-slate-900/70
              px-3
              py-1.5
              rounded-md
              border
              border-slate-800
              hover:bg-slate-700/60
              transition-colors
              cursor-pointer
              "
            >
              Back
            </button>
            <Score
              currentScore={currentScore}
              highScore={highScore}
            />
          </header>
          <main
            className="flex flex-col"
          >
            <Gameboard
              characters={characters}
              onCardClick={handleCardClick}
            />
          </main>
        </>
      }

      {gameState === "ended" &&
        <Gameover
          restartGame={restartGame}
        />
      }
    </>
  )
}
