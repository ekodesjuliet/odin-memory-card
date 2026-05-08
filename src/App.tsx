import { useState, useEffect } from "react"
import { Homepage } from "./Homepage"
import type { Character } from "./character"
import { fetchCharacters } from "./characterService"
import { Gameboard } from "./Gameboard"

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

    setCharacters(prev => shuffleCharacters(prev))
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
      {gameState === "idle" &&
        <Homepage
          onStartGame={startGame}
        />
      }

      {gameState === "active" && difficulty !== null &&
        <Gameboard
          characters={characters}
          onCardClick={onCardClick}
        />
      }

    </>
  )
}
