import { Footer } from "./Footer"
import { GameTitle } from "./GameTitle"
import { DifficultySelector } from "./DifficultySelector"
import type { Difficulty } from "./App"

type HomePageProps = {
  onStartGame: (difficulty: Difficulty) => void
}

export const Homepage = ({ onStartGame }: HomePageProps) => (
  <main>
    <header>
      <GameTitle />
    </header>

    <DifficultySelector
      onStartGame={onStartGame}
    />

    <Footer />
  </main>
)
