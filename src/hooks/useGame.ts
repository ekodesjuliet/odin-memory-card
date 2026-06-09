import { useState } from 'react'
import type { Difficulty } from '../types/difficulty'
import type { Character } from '../types/character'
import { DIFFICULTY_CONFIG } from '../types/difficulty'
import { fetchCharacters } from '../services/characterService'
import { shuffleCharacters } from '../utils/shuffleCharacters'

type GameState = 'idle' | 'active' | 'ended' | 'loading'

export const useGame = () => {
    const [gameState, setGameState] = useState<GameState>('idle')
    const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
    const [characters, setCharacters] = useState<Character[]>([])
    const [clickedCards, setClickedCards] = useState<Set<number>>(new Set())
    const [highScore, setHighScore] = useState<number>(0)
    const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false)

    const currentScore = clickedCards.size
    const maxScore =
        DIFFICULTY_CONFIG.find((config) => config.difficulty === difficulty)
            ?.cardCount ?? 0
    const isGameScreen = gameState !== 'idle'

    const handleStartGame = async (difficulty: Difficulty) => {
        setGameState('loading')
        setDifficulty(difficulty)

        await loadCharacters(difficulty)
        setGameState('active')
    }

    const handleBackToHome = () => {
        setGameState('idle')
        setClickedCards(new Set())
        setCharacters([])
        setDifficulty(null)
    }

    const handleTryAgain = () => {
        if (difficulty === null) return

        setClickedCards(new Set())
        handleStartGame(difficulty)
    }

    const handleCardClick = (id: number) => {
        if (gameState === 'ended') return

        if (clickedCards.has(id)) {
            setGameState('ended')
            return
        }

        const nextSet = new Set(clickedCards)
        nextSet.add(id)

        setClickedCards(nextSet)

        setHighScore((prev) => Math.max(prev, nextSet.size))

        setCharacters((prev) => shuffleCharacters(prev))
    }

    const loadCharacters = async (difficulty: Difficulty) => {
        const config = DIFFICULTY_CONFIG.find(
            (config) => config.difficulty === difficulty
        )
        if (!config) return

        const data = await fetchCharacters()
        const selected = data.slice(0, config.cardCount)
        await preloadImages(characters)
        setCharacters(selected)
    }

    const preloadImages = async (characters: Character[]) => {
        return Promise.all(
            characters.map((character) => {
                return new Promise<void>((resolve) => {
                    const img = new Image()
                    img.src = character.image
                    img.onload = () => resolve()
                    img.onerror = () => resolve()
                })
            })
        )
    }

    const handleToggleHelp = () => {
        setIsHelpOpen((prev) => !prev)
    }

    return {
        state: {
            gameState,
            difficulty,
            characters,
            clickedCards,
            highScore,
            currentScore,
            isGameScreen,
            isHelpOpen,
            maxScore,
        },
        actions: {
            handleStartGame,
            handleTryAgain,
            handleBackToHome,
            handleCardClick,
            handleToggleHelp,
        },
    }
}
