import { Footer } from "./Footer"
import { Header } from "./Header"
import { DifficultySelector } from "./DifficultySelector"
import type { Difficulty } from "./App"

type HomePageProps = {
  onStartGame: (difficulty: Difficulty) => void
}

export const Homepage = ({ onStartGame }: HomePageProps) => (
  <main>
    <Header />
    <DifficultySelector
      onStartGame={onStartGame}
    />
    <Footer />
  </main>
)
