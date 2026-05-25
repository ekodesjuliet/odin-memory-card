import { useState, useEffect } from "react"
import { Homepage } from "./Homepage"
import type { Character } from "./character"
import { fetchCharacters } from "./characterService"
import { Gameboard } from "./Gameboard"
import { Score } from "./Score";
import { Gameover } from "./Gameover"
import { Background } from "./Background"

type GameState = "idle" | "active" | "ended"
export type Difficulty = "easy" | "medium" | "hard"

const DIFFICULTY_CONFIG = {
  easy: 8,
  medium: 12,
  hard: 20,
}

const shuffleCharacters = (characters: Character[]) => {
  const shuffled = [...characters]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled
}

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
    fetchCharacters()
      .then(data => {
        const selected = data.slice(0, DIFFICULTY_CONFIG[difficulty])
        setCharacters(selected)
      })
  }, [gameState])

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
          <header>
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

            <button
              className="
              z-10
              mb-4
              text-amber-100
            "
              onClick={onBackButton}
            >
              Back
            </button>
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
