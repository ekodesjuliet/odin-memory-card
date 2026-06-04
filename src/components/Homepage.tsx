import { Footer } from './Footer'
import { GameTitle } from './GameTitle'
import { DifficultySelector } from './DifficultySelector'
import type { Difficulty } from './difficulty'

type HomePageProps = {
    onStartGame: (difficulty: Difficulty) => void
}

export const Homepage = ({ onStartGame }: HomePageProps) => (
    <main
        className="
    flex
    flex-col
    justify-center
    items-center
    gap-6
    "
    >
        <header className="pt-20">
            <GameTitle />
        </header>

        <DifficultySelector onDifficultySelect={onStartGame} />

        <Footer />
    </main>
)
