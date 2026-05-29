import { useState, useEffect } from "react"
import { Homepage } from "./Homepage"
import type { Character } from "./character"
import { fetchCharacters } from "./characterService"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { Gameover } from "./Gameover"
import { Background } from "./Background"
import { shuffleCharacters } from "./shuffleCharacters"

type GameState = "idle" | "active" | "ended"
export type Difficulty = typeof DIFFICULTY_CONFIG[number]["difficulty"]

export const DIFFICULTY_CONFIG = [
  {
    difficulty: "easy",
    cardCount: 8,
    displayName: "Morty"
  },
  {
    difficulty: "medium",
    cardCount: 12,
    displayName: "Summer"
  },
  {
    difficulty: "hard",
    cardCount: 20,
    displayName: "Rick"
  }
] as const

export const App = () => {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [clickedCards, setClickedCards] = useState<Set<number>>(new Set())
  const [currentScore, setCurrentScore] = useState<number>(0)
  const [highScore, setHighScore] = useState<number>(0)

  const startGame = (difficulty: Difficulty) => {
    setDifficulty(difficulty)
    setGameState("active")
  }

  const onCardClick = (id: number) => {
    if (gameState === "ended") return

    if (clickedCards.has(id)) {
      setGameState("ended")
      return
    }

    setClickedCards(prevSet => {
      const nextSet = new Set(prevSet)
      nextSet.add(id)

      return nextSet
    })

    const nextScore = currentScore + 1

    setCharacters(prev => shuffleCharacters(prev))
    setCurrentScore(nextScore)
    setHighScore(prev => Math.max(prev, nextScore))
  }

  const restartGame = () => {
    if (difficulty === null) return

    setCurrentScore(0)
    setClickedCards(new Set())
    startGame(difficulty)
  }

  const onBackButton = () => {
    setGameState("idle")
    setCurrentScore(0)
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
          onStartGame={startGame}
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
              onClick={onBackButton}
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
              onCardClick={onCardClick}
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
