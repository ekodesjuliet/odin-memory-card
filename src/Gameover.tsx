type GameoverProps = {
  restartGame: () => void
}

export const Gameover = ({ restartGame }: GameoverProps) => (
  <div className="overlay">
    <dialog open>
      <p>Meh! Poor memory!</p>
      <button
        onClick={restartGame}
      >
        Try Again
      </button>
    </dialog>
  </div>
)
