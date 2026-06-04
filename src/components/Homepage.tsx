import { Footer } from './Footer'
import { GameTitle } from './GameTitle'
import { DifficultySelector } from './DifficultySelector'
import type { Difficulty } from '../types/difficulty'

type HomePageProps = {
    onStartGame: (difficulty: Difficulty) => void
}

export const Homepage = ({ onStartGame }: HomePageProps) => (
    <main className="flex flex-col items-center justify-center gap-6">
        <header className="pt-20">
            <GameTitle />
        </header>

        <DifficultySelector onDifficultySelect={onStartGame} />

        <Footer />
    </main>
)
