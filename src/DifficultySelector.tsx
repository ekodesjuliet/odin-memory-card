import type { Difficulty } from "./App"

type DifficultySelectorProps = {
  onStartGame: (difficulty: Difficulty) => void
}

export const DifficultySelector = ({ onStartGame }: DifficultySelectorProps) => (
  <section>

    <button
      type="button"
      onClick={() => onStartGame("easy")}
    >
      Brainrot
    </button>

    <button
      type="button"
      onClick={() => onStartGame("medium")}
    >
      Mid
    </button>

    <button
      type="button"
      onClick={() => onStartGame("hard")}
    >
      Tryhard
    </button>

  </section >
)
